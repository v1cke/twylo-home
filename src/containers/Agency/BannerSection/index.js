import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Button from 'common/components/Button'
import FeatureBlock from 'common/components/FeatureBlock'
import Container from 'common/components/UI/Container'
// import Particles from '../../Agency/Particle'
import BannerWrapper, { DiscountLabel } from './bannerSection.style'
import ParticlesComponent from '../BackgroundCanvas'

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const [activeHeading, setActiveHeading] = useState(0)

  const headings = [
    'Innovativ.',
    'Kundenorientiert.',
    'Agil.',
    'Technisch versiert.',
    'Transparent.',
    'Teamorientiert.',
    'Qualitätsbewusst.',
    'Lernbereit.',
    'Anpassungsfähig.',
    'Nachhaltig.',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeading(
        (currentHeading) => (currentHeading + 1) % headings.length,
      )
    }, 5000)

    // Cleanup-Funktion, um den Timer bei unmounting zu löschen
    return () => clearInterval(timer)
  }, [])

  return (
    <BannerWrapper>
      {/* <Particles /> */}

      <Container>
        <ParticlesComponent />
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content="25% Aufpreis" {...discountAmount} />
              <Text content="auf Alles" {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                  <Heading content="Wir sind&nbsp;" {...title} />
                  <Heading content={headings[activeHeading]} {...title} />
                </div>
              }
              description={
                <Text
                  content="Firmen auf der ganzen Welt sind auf dem Weg zu Digitalisierung. Es ist also höchste Zeit. "
                  {...description}
                />
              }
              button={
                <Fragment>
                  <Button title="LEARN MORE" {...btnStyle} />
                  <Button
                    title="WATCH WORKS"
                    variant="textButton"
                    icon={<i className="flaticon-next" />}
                    {...outlineBtnStyle}
                  />
                </Fragment>
              }
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  )
}

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
}

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
}

export default BannerSection
