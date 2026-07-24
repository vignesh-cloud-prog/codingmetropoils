import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://form.jotform.com' />
        <link rel='dns-prefetch' href='https://widget.trustpilot.com' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/brand/favicon-32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/brand/favicon-16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/brand/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#c05aff' />
        <meta name='msapplication-TileColor' content='#c05aff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
