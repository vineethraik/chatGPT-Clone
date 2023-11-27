import { Inter } from "next/font/google";
import "./globals.css";
// import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT",
  description: "Clone of chat gpt application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          key="apple-touch-icon"
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png"
        />
        <link
          key="icon"
          rel="icon" 
          type="image/png"
          sizes="32x32"
          href="https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png"
        />
        <link
          key="icon"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.oaistatic.com/_next/static/media/favicon-16x16.9b8dbb69.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
