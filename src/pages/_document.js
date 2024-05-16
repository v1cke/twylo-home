import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          {/* <link
            rel="icon"
            href="https://react-next-landing.redq.io/_next/static/images/favicon-ec2551afb2782a53fb493269d1ba4efe.png"
          /> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {
                "askConsentAtCookiePolicyUpdate":true,
                "enableFadp":true,
                "enableLgpd":true,
                "fadpApplies":true,
                "floatingPreferencesButtonDisplay":"bottom-right",
                "lang":"de",
                "perPurposeConsent":true,
                "whitelabel":false,
                "cookiePolicyId":47420556,
                "siteId":3614080,
                "banner":{
                  "acceptButtonCaptionColor":"#FFFFFF",
                  "acceptButtonColor":"#0073CE",
                  "acceptButtonDisplay":true,
                  "backgroundColor":"#FFFFFF",
                  "closeButtonDisplay":false,
                  "customizeButtonCaptionColor":"#4D4D4D",
                  "customizeButtonColor":"#DADADA",
                  "customizeButtonDisplay":true,
                  "explicitWithdrawal":true,
                  "listPurposes":true,
                  "position":"bottom",
                  "rejectButtonCaptionColor":"#FFFFFF",
                  "rejectButtonColor":"#0073CE",
                  "rejectButtonDisplay":true,
                  "showTitle":false,
                  "textColor":"#000000"
                }
              };
            `,
            }}
          />
          {/* <script
            src="https://cs.iubenda.com/autoblocking/3614080.js"
            type="text/javascript"
          ></script>
          <script
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            type="text/javascript"
            async
            charSet="UTF-8"
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
