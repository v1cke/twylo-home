import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import 'rc-tabs/assets/index.css'
import LogoImage from '../../../../public/logo.png'
import SeoImage from '../../../../public/images/seo.jpg'
import ModalFeatureStyle from '../modalFeatureStyle'

const ModalSeo = ({
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
          <Image className="patternImage" src={SeoImage?.src} alt="SEO Image" />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage?.src} {...logoStyle} alt="Logo" />

            <Heading content="SEO" {...titleStyle} />
            <Text content="Entdecken Sie, wie SEO Ihr Business mit Suchmaschinenoptimierung aufs nächste Level bringt!" />
            <Text
              content="Suchmaschinenoptimierung ist kein Hexenwerk, aber fast! Es geht darum, Ihre Website so zu optimieren, dass Google und Co. sie nicht nur lieben, sondern auch ganz oben in den Suchergebnissen platzieren. Wie? Indem wir die richtigen Keywords wählen, die perfekten Inhalte erstellen und Ihre Site technisch auf Vordermann bringen.
              Egal ob Sie mehr Traffic, höhere Conversion Rates oder einfach eine bessere Online-Präsenz wollen, wir haben die Skills und Tools, um Ihre Seite auf die Überholspur zu bringen. Und das Beste? Sie sehen jeden Schritt, den wir machen, durch transparente Analysen und Reports. Lassen Sie uns gemeinsam dafür sorgen, dass jeder nach Ihnen googelt!"
              {...descriptionStyle}
            />
          </Box>
        </Box>
      </Box>
    </ModalFeatureStyle>
  )
}

ModalSeo.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
}

// default style
ModalSeo.defaultProps = {
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

export default ModalSeo
