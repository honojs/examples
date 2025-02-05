# Hono static file example for Cloudflare Workers

This example demonstrates how to serve static files using Cloudflare Workers. Please learn more in the [Hono documentation](https://hono.dev/docs/getting-started/cloudflare-workers#serve-static-files) and [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/static-assets/binding/#directory).

Before you can start publishing your service to cloudflare worker, you must sign up for a Cloudflare Workers account first, you can check out this [document](https://developers.cloudflare.com/workers/get-started/guide)

You can update the information (`name`, `zone_id`, etc) in wrangler file, then you can test and deploy your service by simply doing,

```txt
npm install
npm run dev # Start a local server for developing your worker
npm run deploy # Publish your worker to the orange cloud
```
