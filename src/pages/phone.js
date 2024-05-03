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
import CloudTelephony from 'containers/Agency/CloudTelephony'
import TestimonialSection from 'containers/Agency/TestimonialSection'
import NewsletterSection from 'containers/Agency/NewsletterSection'
import MessagingMeeting from 'containers/Agency/MessagingMeeting'
import CallCenter from 'containers/Agency/CallCenter'
import Integration from 'containers/Agency/Integration'
import AdminReporting from 'containers/Agency/AdminReporting'
import ClientsEndgeraete from 'containers/Agency/ClientsEndgeraete'
import Box from 'common/components/Box'
import Heading from 'common/components/Heading'
import FeatureBlock from 'common/components/FeatureBlock'

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
          <Box style={{ with: '100%', marginTop: '200px', display: 'flex', justifyContent: 'centers' }} >
            <Box  >
              <h2>Digitale Telefonanlage</h2>
              <p>Die Cloud-Telefonanlage bietet über 150 Funktionen, die über eine intuitive Benutzeroberfläche einfach zu verwalten sind. Dies hilft dabei, keinen Anruf mehr zu verpassen und die Kommunikation effizient zu gestalten.
              </p>
              <Heading
                content="Digitale Telefonanlage"

              />
              {/* <FeatureBlock
                title={
                  <Heading
                    content="Digitale Telefonanlage"

                  />
                }
                description={
                  <Text
                    content="Die Cloud-Telefonanlage bietet über 150 Funktionen, die über eine intuitive Benutzeroberfläche einfach zu verwalten sind. Dies hilft dabei, keinen Anruf mehr zu verpassen und die Kommunikation effizient zu gestalten."

                  />
                }
              /> */}

            </Box>
          </Box>
          <CloudTelephony />
          <MessagingMeeting />
          <CallCenter />
          <Integration />
          <AdminReporting />
          <ClientsEndgeraete />
          {/* <TestimonialSection />
          <NewsletterSection /> */}
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  )
}
export default Agency
