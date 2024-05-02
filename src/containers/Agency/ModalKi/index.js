import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import ModalFeatureStyle from '../modalFeatureStyle'
import 'rc-tabs/assets/index.css'
import LogoImage from '../../../../public/logo.png'
import KiImage from '../../../../public/images/Ki-software.png'

const ModalKi = ({
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
            src={KiImage?.src}
            alt="Ki Image"
          />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage?.src} {...logoStyle} alt="Logo" />

            <Heading content="KI-unterstützung" {...titleStyle} />
            <Text content="Mach mehr aus deinen Daten – Dein neuer digitaler Assistent wartet" />
            <Text
              content="KI ist nicht nur ein Buzzword, sondern ein Game Changer. Unsere KI-unterstützte Software hilft dir, aus Daten Gold zu machen. Egal, ob es um die Automatisierung mühsamer Aufgaben geht oder um das Aufspüren von Insights, die deinem Unternehmen einen Vorsprung verschaffen – unsere Algorithmen sind bereit, für dich zu arbeiten. Von smarten Chatbots, die deinen Kundenservice revolutionieren, bis hin zu Analysetools, die Marktrends vorhersagen – unsere KI-Lösungen sind wie ein Turbo für deine Produktivität, ausgerichtet auf maximale Effizienz und minimalen Aufwand."
              {...descriptionStyle}
            />
          </Box>
        </Box>
      </Box>
    </ModalFeatureStyle>
  )
}

ModalKi.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
}

// default style
ModalKi.defaultProps = {
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

export default ModalKi
