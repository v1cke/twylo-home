import React from 'react'
import PropTypes from 'prop-types'
import { Zoom, Reveal } from 'react-awesome-reveal'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Card from 'common/components/Card'
import NextImage from 'common/components/NextImage'
import FeatureBlock from 'common/components/FeatureBlock'
import AboutUsSectionWrapper from './aboutUsSection.style'
import data from 'common/data/Agency'
import HumanAI from '../../../../public/images/humanai2.png'
import SmartPhone from '../../../../public/images/smartphonedigital2.jpg'
import Codehacker from '../../../../public/images/codehacker.jpg'

const AboutUsSection = ({
  row,
  col,
  title,
  description,
  sectionHeader,
  sectionSubTitle,
  sectionTitle,
  textArea,
  featureTitle,
  btnStyle,
}) => {
  return (
    <AboutUsSectionWrapper id="AboutUsSection">
      <Box
        style={{
          background: 'linear-gradient(to right, #e0e0e0, transparent)',
          opacity: '0.9',
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <Box {...sectionHeader}>
          <Text
            style={{
              color: 'rgba(0, 146, 202, 1)',
            }}
            content="Über uns"
            {...sectionSubTitle}
          />
          <Heading content="Unser Know-How" {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {' '}
          <Box className="col" {...col}>
            <Card className="group-gallery">
              <Box className="col1">
                <Reveal top delay={30}>
                  <NextImage
                    src={HumanAI}
                    alt="Human&AI"
                    style={{
                      borderBottomRightRadius: 25,
                      borderTopRightRadius: 25,
                      boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
                    }}
                  />
                </Reveal>
                <Reveal left delay={60}>
                  <NextImage
                    src={SmartPhone}
                    alt="Digital World"
                    style={{
                      borderBottomRightRadius: 25,
                      borderTopRightRadius: 25,
                      boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
                    }}
                  />
                </Reveal>
              </Box>
              <Box className="col2">
                <Zoom bottom delay={90}>
                  <NextImage
                    src={Codehacker}
                    alt="Code Hacker"
                    style={{
                      borderRadius: 25,
                      boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
                    }}
                  />
                </Zoom>
              </Box>
            </Card>
          </Box>
          <Box className="col" {...col}>
            <Box {...textArea}>
              <FeatureBlock
                title={
                  <Heading
                    content="Modernes Design, Cyber-Security und Künstliche Intelligenz"
                    {...title}
                  />
                }
                description={
                  <Text
                    content="9 to 5 war gestern! Support bieten, wann immer er benötigt wird."
                    {...description}
                  />
                }
              />
            </Box>
            <Box {...textArea}>
              {data.aboutus.map((feature, index) => (
                <FeatureBlock
                  key={`feature_point-${index}`}
                  icon={<i className={feature.icon} />}
                  iconPosition="left"
                  title={<Heading content={feature.title} {...featureTitle} />}
                />
              ))}
              {/* <Button title="INFORMATIONEN" {...btnStyle} /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  )
}

AboutUsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  sectionHeader: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  textArea: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
}

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // About us section col default style
  col: {
    width: [1, '100%', '50%'],
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    pl: '40px',
  },
  // About us section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // About us section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },

  // feature title default style
  featureTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
}

export default AboutUsSection
