import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          {/* Icon */}
          <link rel="icon" href="/icon.svg" />

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          {/* Description */}

          <meta
            name="description"
            content="Diego Cifuentes, full stack junior developer, website where i share and communicate projects and personal experience of my journey as a web developer using latest and greates technologies to give and provide the BEST user experience."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
