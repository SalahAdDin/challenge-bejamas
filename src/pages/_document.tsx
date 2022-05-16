import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '@presentation/theme/theme';
import createEmotionCache from '@presentation/theme/createEmotionCache';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags?: JSX.Element[];
}

export default class MyDocument extends Document {
  render() {
    const { emotionStyleTags } = this.props as MyDocumentProps;

    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,700;1,600&display=swap"
            rel="stylesheet"
          />
          {emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const { renderPage } = ctx;

  const cache = createEmotionCache();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    renderPage({
      enhanceApp: (App: any) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        // eslint-disable-next-line react/function-component-definition
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });
  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
