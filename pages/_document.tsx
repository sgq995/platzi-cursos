import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* stylesheets */}
          {/* script/js */}
        </Head>
        <body className="body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
