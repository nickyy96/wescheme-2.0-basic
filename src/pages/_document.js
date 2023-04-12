import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;600&display=swap" rel="stylesheet"/>
      </Head>
      <body className='w-full min-h-screen bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}