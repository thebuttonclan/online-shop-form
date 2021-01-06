import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { mediaStyle } from 'layouts/DefaultLayout';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>JEDC Online shop grant program</title>
          <link rel="apple-touch-icon" href="/static/icons/bcid-apple-touch-icon.png" sizes="180x180" />
          <link rel="icon" href="/static/icons/bcid-favicon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/static/icons/bcid-favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="mask-icon" href="/static/icons/bcid-apple-icon.svg" color="#036" />
          <link rel="icon" href="/static/icons/bcid-favicon-32x32.png" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyle }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
