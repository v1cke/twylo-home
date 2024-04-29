import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Card from 'common/components/Card'
import NextImage from 'common/components/NextImage'
import Button from 'common/components/Button'
import FeatureBlock from 'common/components/FeatureBlock'
import AboutUsSectionWrapper from './aboutUsSection.style'
import data from 'common/data/Agency'
import HumanAI from '../../../../public/images/humanai2.png'
import SmartPhone from '../../../../public/images/smartphonedigital2.jpg'
import Codehacker from '../../../../public/images/codehacker.jpg'
import { paddingTop } from 'styled-system'

const AboutUsSection = ({
  row,
  col,
  title,
  description,
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
        className="row"
        {...row}
      >
        <Box className="col" {...col}>
          <Card className="group-gallery">
            <Box className="col1">
              <Fade top delay={30}>
                <NextImage
                  src={HumanAI}
                  alt="Human&AI"
                  style={{
                    borderBottomRightRadius: 25,
                    borderTopRightRadius: 25,
                  }}
                />
              </Fade>
              <Fade left delay={60}>
                <NextImage
                  src={SmartPhone}
                  alt="Digital World"
                  style={{
                    borderBottomRightRadius: 25,
                    borderTopRightRadius: 25,
                  }}
                />
              </Fade>
            </Box>
            <Box className="col2">
              <Fade bottom delay={90}>
                <NextImage
                  src={Codehacker}
                  alt="Code Hacker"
                  style={{ borderRadius: 25 }}
                />
              </Fade>
            </Box>
          </Card>
        </Box>
        <Box className="col" {...col}>
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Ein Auge für Design und moderne Anforderungen an KI und Cyber-Security"
                  {...title}
                />
              }
              description={
                <Text
                  content="9 to 5 war gestern! Wir bieten Support, wann immer er benötigt wird!"
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
            <Button title="INFORMATIONEN" {...btnStyle} />
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  )
}

AboutUsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
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
