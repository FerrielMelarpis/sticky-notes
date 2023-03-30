import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta key="title" name="title" content="Default" />
        <meta key="author" name="author" content="yel" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
