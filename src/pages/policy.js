import React, { Fragment } from 'react'
import Head from 'next/head'
import Sticky from 'react-stickynode'
import { ThemeProvider } from 'styled-components'
import { agencyTheme } from 'common/theme/agency'
import ResetCSS from 'common/assets/css/style'
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style'
import Navbar from 'containers/Agency/Navbar'
import Footer from 'containers/Agency/Footer'
import { DrawerProvider } from 'common/contexts/DrawerContext'
import BackgroundParticles from 'containers/Agency/BackgroundParticles'
import { PolicyContent } from 'containers/Agency/Policy'

export const Policy = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <Head>
          <title>twylo - Impressum</title>
          <meta name="Description" content="twylo Impressum" />
          <meta name="theme-color" content="#0092CA" />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BackgroundParticles />
          <PolicyContent />
          <Footer />
        </AgencyWrapper>
      </Fragment>
    </ThemeProvider>
  )
}
export default Policy
