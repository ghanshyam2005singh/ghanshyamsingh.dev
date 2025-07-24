import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="description" content="Ghanshyam Singh – Full Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}