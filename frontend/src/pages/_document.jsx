/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(
          materialSheets.collect(<App {...props} />),
        ),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt_BR">
        <Head />
        <link rel="shortcut icon" href="./favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
