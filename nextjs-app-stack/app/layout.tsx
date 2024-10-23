import ReactQueryProvider from "@/components/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hono example",
  description: "Next.js app router with Hono zod validation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
