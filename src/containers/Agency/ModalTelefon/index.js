import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import 'rc-tabs/assets/index.css'
import LogoImage from '../../../../public/logo.png'
import TelefonieImage from '../../../../public/images/telefonie.png'
import ModalFeatureStyle from '../modalFeatureStyle'

const ModalTelefon = ({
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
            src={TelefonieImage?.src}
            alt="Telefonie Image"
          />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage?.src} {...logoStyle} alt="Logo" />

            <Heading content="Digitale Telefonie" {...titleStyle} />
            <Text content="Telefonie, neu gedacht, gib deiner Kommunikation ein Upgrade!" />
            <Text
              content="Moderne Geschäftswelt erfordert moderne Kommunikationslösungen. Unsere Cloud-Telefonanlage twylo phone macht es möglich, dass Sie und Ihr Team von überall aus arbeiten können – ohne an Qualität einzubüßen. Funktionen wie Anrufweiterleitung, Konferenzschaltungen, KI-gesteuerte Anrufbeantwortung, Messaging und Meetings, Call Center und Integration in vorhandene Unternehmenssysteme über eine intuitive Benutzeroberfläche, lassen keine Wünsche offen. Plus, twylo phone ist flexibel und wächst mit Ihrem Business mit. Verpassen Sie keinen Anruf mehr und bleiben immer erreichbar, mit einer Telefonlösung, die für die Zukunft gemacht ist."
              {...descriptionStyle}
            />
          </Box>
        </Box>
      </Box>
    </ModalFeatureStyle>
  )
}

ModalTelefon.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
}

// default style
ModalTelefon.defaultProps = {
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

export default ModalTelefon
