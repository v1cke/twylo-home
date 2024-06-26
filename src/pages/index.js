import React, { Fragment } from 'react'
import Head from 'next/head'
import Sticky from 'react-stickynode'
import { ThemeProvider } from 'styled-components'
import { agencyTheme } from 'common/theme/agency'
import ResetCSS from 'common/assets/css/style'
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style'
import Navbar from 'containers/Agency/Navbar'
import BannerSection from 'containers/Agency/BannerSection'
import FeatureSection from 'containers/Agency/FeatureSection'
import AboutUsSection from 'containers/Agency/AboutUsSection'
import WorkHistory from 'containers/Agency/WorkHistory'
import BlogSection from 'containers/Agency/BlogSection'
import TeamSection from 'containers/Agency/TeamSection'
import VideoSection from 'containers/Agency/VideoSection'
import Footer from 'containers/Agency/Footer'
import { DrawerProvider } from 'common/contexts/DrawerContext'
import FaqSection from 'containers/Agency/FaqSection'
import BackgroundParticles from 'containers/Agency/BackgroundParticles'
import { ChatBot } from 'common/components/Chatbot'

export const Agency = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>twylo | AI & Cyber-Security Partner</title>
          <meta
            name="Description"
            content="twylo - Digitaler Vorsprung durch KI und Cyber-Security"
          />
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
          {/* <Sticky top={0} innerZ={99999}>
            <ChatBot />
          </Sticky> */}
          <BackgroundParticles />
          <BannerSection />
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          {/* <QualitySection /> */}
          {/* <VideoSection /> */}
          {/* <TestimonialSection /> */}
          <TeamSection />
          <FaqSection />
          {/* <NewsletterSection /> */}
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  )
}
export default Agency
