import { bundleMDX } from "mdx-bundler";
import { readFile } from "node:fs/promises";
import { join } from "node:path";


async function getContent(...params: string[]) {
  const file_path = join(process.cwd(), "content", ...params.slice(0, -1), `${params.at(-1)}.mdx`);
  const [source] = await Promise.all([readFile(file_path, "utf-8")]);

  const post = await bundleMDX({
    source,
    cwd: process.cwd(),
    jsxConfig: {
      jsxLib: {
        varName: 'HonoJSX',
        package: 'hono/jsx',
      },
      jsxDom: {
        varName: 'HonoDOM',
        package: 'hono/jsx/dom',
      },
      jsxRuntime: {
        varName: '_jsx_runtime',
        package: 'hono/jsx/jsx-runtime',
      },
    }
  });

  return post;
}

export { getContent };
