import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import ModalFeatureStyle from '../modalFeatureStyle'
import 'rc-tabs/assets/index.css'
import LogoImage from '../../../../public/logo.png'
import SeoImage from '../../../../public/images/uiux.jpg'

const ModalSecurity = ({
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

            <Heading content="IT-Security" {...titleStyle} />
            <Text content="Entdecken Sie, wie unser flexibler Tech-Stack Ihr Projekt optimieren kann!" />
            <Text
              content="Kein Unternehmen sollte sich im Netz unsicher fühlen. Mit unseren Cyber-Security-Lösungen rüsten wir dich gegen alle Arten von Cyber-Bedrohungen. Wir implementieren die neuesten Sicherheitstechniken, um deine Infrastruktur zu schützen, von proaktiven Monitoring-Systemen bis zu robusten Verschlüsselungspraktiken. Maßgeschneidert für deine speziellen Anforderungen, bieten wir eine Security, die mitdenkt und sich anpasst. Lass uns deine IT verteidigen, damit du dich auf dein Business konzentrieren kannst. Schlaf ruhig, wir halten die Wache!"
              {...descriptionStyle}
            />
          </Box>
        </Box>
      </Box>
    </ModalFeatureStyle>
  )
}

ModalSecurity.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
}

// default style
ModalSecurity.defaultProps = {
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

export default ModalSecurity
