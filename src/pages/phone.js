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
import QualitySection from 'containers/Agency/QualitySection'
import TestimonialSection from 'containers/Agency/TestimonialSection'
import NewsletterSection from 'containers/Agency/NewsletterSection'

export const Agency = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>twylo phone - cloud pbx Telefonanlage</title>
          <meta
            name="Description"
            content="twylo phone - cloud pbx Telefonanlage"
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
          <BackgroundParticles />
          {/* <BannerSection />
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection /> */}
          {/* <VideoSection />
          <TeamSection />
          <FaqSection /> */}
          <QualitySection />
          <TestimonialSection />
          <NewsletterSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  )
}
export default Agency
