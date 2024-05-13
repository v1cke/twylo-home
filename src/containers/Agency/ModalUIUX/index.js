import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import 'rc-tabs/assets/index.css'
import LogoImage from '../../../../public/logo.png'
import SeoImage from '../../../../public/images/uiux.jpg'
import ModalFeatureStyle from '../modalFeatureStyle'

const ModalUiUx = ({
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

            <Heading content="Design" {...titleStyle} />
            <Text content="Entdecken Sie,  warum gutes Design mehr als nur hübsch aussieht!" />
            <Text
              content="Ein herausragendes UI/UX Design ist wie der beste Barkeeper der Stadt: Es weiß genau, was die User wollen, bevor sie es selbst tun! Unser Ansatz fokussiert darauf, intuitive und ansprechende Designs zu schaffen, die nicht nur gut aussehen, sondern auch funktionieren.
              Wir nehmen uns die Zeit, deine Zielgruppe und deren Bedürfnisse zu verstehen, damit wir Interfaces designen können, die auf den ersten Klick überzeugen. Ob App, Webseite oder Software – unsere Designs sorgen dafür, dass Ihre Kunden gerne bleiben und noch lieber wiederkommen!"
              {...descriptionStyle}
            />
          </Box>
        </Box>
      </Box>
    </ModalFeatureStyle >
  )
}

ModalUiUx.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
}

// default style
ModalUiUx.defaultProps = {
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

export default ModalUiUx
