# Setting up an API Client via Hono middleware.

Author: [@dalanmiller](https://github.com/dalanmiller)

This example shows how to set up an API Client (Stripe) _prior_ to handling a
request.

Doing this in Typescript requires some specific configuration when instantiating
the Hono app. So this example shows how to modify the
[Hono app](https://hono.dev/api/hono) instantiation `Hono()` in Typescript to
work correctly with introduced
[environment variables](https://hono.dev/api/context#env) and
[session variables](https://hono.dev/api/context#var).

Per the Cloudflare docs on
[using Secrets with Workers](https://developers.cloudflare.com/workers/configuration/secrets/)
make sure you add a `.dev.vars` file which includes the following:

```
LIVEMODE=false 
STRIPE_TK=<YOUR_STRIPE_TESTMODE_KEY>
```
