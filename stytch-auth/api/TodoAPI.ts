import {Hono} from "hono";

import {Consumer} from "@hono/stytch-auth"
import {todoService} from "./TodoService";

export type TodoApp = typeof TodoAPI;

/**
 * The Hono app exposes the TODO Service via REST endpoints for consumption by the frontend
 */
export const TodoAPI = new Hono<{ Bindings: Env }>()

    // We want Reads to be fast, so we can authenticate the Stytch session JWT locally
    .get('/todos', Consumer.authenticateSessionLocal(), async (c) => {
        const {user_id} = Consumer.getStytchSession(c)
        const todos = await todoService(c.env, user_id).get()
        return c.json({todos})
    })

    // The Session JWT is a cached value and can be stale. For more dangerous operations like writes
    // we can check against the Stytch servers for the most up-to-date information
    .post('/todos', Consumer.authenticateSessionRemote(), async (c) => {
        const newTodo = await c.req.json<{ todoText: string }>();
        const {user_id} = Consumer.getStytchSession(c)
        const todos = await todoService(c.env, user_id).add(newTodo.todoText)
        return c.json({todos})
    })

    .post('/todos/:id/complete', Consumer.authenticateSessionRemote(), async (c) => {
        const {user_id} = Consumer.getStytchSession(c)
        const todos = await todoService(c.env, user_id).markCompleted(c.req.param().id)
        return c.json({todos})
    })

    .delete('/todos/:id', Consumer.authenticateSessionRemote(), async (c) => {
        const {user_id} = Consumer.getStytchSession(c)
        const todos = await todoService(c.env, user_id).delete(c.req.param().id)
        return c.json({todos})
    })
