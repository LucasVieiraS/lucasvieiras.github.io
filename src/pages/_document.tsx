import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-US, pt-BR">
      <Head />
      <body className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-no-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
