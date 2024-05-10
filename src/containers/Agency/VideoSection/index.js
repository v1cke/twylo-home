import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Container from 'common/components/UI/Container'
import VideoSectionWrapper from './videoSection.style'
import { useMediaQuery } from '@material-ui/core'

const VideoSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
}) => {
  const matches = useMediaQuery('(min-width:850px)')


  return (
    <VideoSectionWrapper
      style={{
        background: 'linear-gradient(to right, transparent, #e0e0e0)',
      }}
      id="videoSection"
    >
      <Container>
        <Box {...sectionHeader}>
          <Text
            style={{
              color: 'rgba(0, 146, 202, 1)',
            }}
            content="WIE WIR ARBEITEN"
            {...sectionSubTitle}
          />
          <Heading
            content="Ein typischer Tag im twylo office..."
            {...sectionTitle}
          />
        </Box>
        <Box
          className="figure"
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '400px',
            //  boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px'
          }}
        >

          <iframe
            src="https://www.youtube.com/embed/iz2R3HGMWHE?si=leCyAn3hytE6G1JK"
            // className="react-player"
            // playing
            width={matches ? '800px' : '100%'}
            height="100%"
          // controls
          />
        </Box>

      </Container>
    </VideoSectionWrapper>
  )
}

// VideoSection style props
VideoSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
}

// VideoSection default style
VideoSection.defaultProps = {
  // section header default style
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
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
}

export default VideoSection
