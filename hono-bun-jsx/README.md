# Hono + Bun Basic Client Component Example
This is a simple project that demonstrates how to build a basic Hono app with Bun, including a client-side component rendered using `hono/jsx`.

## Getting Started
1. **Install Dependencies**  
   First, make sure you have Bun installed. Then, install the necessary dependencies:

    ```sh
    bun install
    ```

2. **Running the Project**  
   To start the development server and bundle the client-side code:

    ```sh
    bun run dev
    ```

   This will do two things:
    - Bundle the client-side code from `src/App.tsx` into `static/App.js`.
    - Start the Bun server with hot reloading using `src/index.tsx`.

3. **Open the App**  
   Once the server is running, open your browser and navigate to:  
   [http://localhost:3000](http://localhost:3000)

   You should see a basic app with a counter component that you can increment.

