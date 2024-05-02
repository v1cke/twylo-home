import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import 'rc-tabs/assets/index.css'
import LogoImage from '../../../../public/logo.png'
import SeoImage from '../../../../public/images/techstack.jpg'
import ModalFeatureStyle from '../modalFeatureStyle'

const ModalFlexStack = ({
  row,
  col,
  logoStyle,
  titleStyle,
  contentWrapper,
  descriptionStyle,
}) => {
  return (
    <ModalFeatureStyle>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image
            className="patternImage"
            src={SeoImage?.src}
            alt="UiUx Image"
          />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage?.src} {...logoStyle} alt="Logo" />

            <Heading content="Flexibler Stack" {...titleStyle} />
            <Text content="Entdecken Sie, wie unser flexibler Tech-Stack Ihr Projekt optimieren kann!" />
            <Text
              content="In der Welt der Softwareentwicklung ist Flexibilität der Schlüssel zum Erfolg. Unser breites Spektrum an Technologien und Plattformen ermöglicht es uns, genau die richtige Lösung für jedes Ihrer Probleme zu finden – maßgeschneidert und bereit zu skalieren.
              Egal, ob Sie mit Pascal experimentieren, eine robuste Java-Lösung benötigen oder die neuesten JavaScript-Frameworks ausprobieren wollen – wir haben die Expertise und die Technologie, um Ihre Vision umzusetzen. Lassen Sie uns gemeinsam die Grenzen dessen verschieben, was technisch möglich ist!"
              {...descriptionStyle}
            />
          </Box>
        </Box>
      </Box>
    </ModalFeatureStyle>
  )
}

ModalFlexStack.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
}

// default style
ModalFlexStack.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1 / 2],
  },
  logoStyle: {
    width: '90px',
    height: 'auto',
    ml: '15px',
  },
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px',
  },
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px',
  },
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px'],
  },
}

export default ModalFlexStack
