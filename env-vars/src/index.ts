import { Hono } from "hono";
import { Stripe } from "stripe";

type Variables = {
  stripe: Stripe; // Stripe Client
};

type Bindings = {
  LIVEMODE: boolean; // Stripe Livemode true | false
  STRIPE_RK: string; // Stripe Restricted API Key
  STRIPE_TK: string; // Stripe Test Key
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.use("*", async (c, next) => {
  // Determine if in a livemode or testmode context and set 
  //  the API Key accordingly
  const stripeKey: string = c.env.LIVEMODE ? c.env.STRIPE_RK : c.env.STRIPE_TK;

  // Instantiate the Stripe client object 
  const stripe = new Stripe(stripeKey, {
    maxNetworkRetries: 3,
    timeout: 30 * 1000,
  });

  // Set the Stripe client to the Variable context object
  c.set("stripe", stripe);

  await next();
});

app.get("/checkout", async (c) => {

  // Retrieve the Stripe client from the variable object 
  const stripe = c.var.stripe;

  // Example request of a Stripe Checkout session. 
  // 
  // API Docs: https://docs.stripe.com/api/checkout/sessions/create
  // Docs: https://docs.stripe.com/payments/checkout
  //
  const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    line_items: [
      {
        quantity: 1,
        price_data: {
          unit_amount: 1000,
          currency: "aud",
          product_data: {
            name: "Hono Starter Kit",
          },
        },
      },
    ],
    mode: "payment",
    success_url: "https://hono.dev",
  });

  // Redirect to the Checkout URL 
  return c.redirect(session.url as string);
});

export default app;
