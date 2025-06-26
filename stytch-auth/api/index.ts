import {cors} from "hono/cors";
import {Hono} from "hono";
import {TodoAPI} from "./TodoAPI";

export default new Hono<{}>()
    .use(cors())

    // Mount the TODO API underneath us
    .route('/api', TodoAPI)

    // Finally - serve static assets from Vite
    .mount('/', (req, env) => env.ASSETS.fetch(req))
