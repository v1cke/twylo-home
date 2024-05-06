import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Button from 'common/components/Button'
import FeatureBlock from 'common/components/FeatureBlock'
import Container from 'common/components/UI/Container'
import BannerWrapper from './bannerSection.style'
import Fade from 'react-reveal/Fade'
import Clock from '../Clock'

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
  const [isFadingOut, setIsFadingOut] = useState(false)

  const headings = [
    'innovativ.',
    // 'Kundenorientiert.',
    'agil.',
    // 'Technisch versiert.',
    'transparent.',
    // 'Teamorientiert.',
    // 'qualitätsbewusst.',
    'lernbereit.',
    'anpassungsfähig.',
    'kreativ.',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadingOut(true)
      setTimeout(() => {
        setActiveHeading(
          (currentHeading) => (currentHeading + 1) % headings.length,
        )
        setIsFadingOut(false)
      }, 3000) // 500ms für das Ausblenden bevor der Text wechselt
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  return (
    <BannerWrapper style={{ position: 'relative' }}>
      {/* <Rain /> */}
      {/* <Clock /> */}
      <Container>
        <Box className="row" {...row} style={{ marginTop: '100px' }}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                  <Heading content="Wir sind&nbsp;" {...title} />
                  {!isFadingOut ? (
                    <Fade bottom collapse when={isFadingOut}>
                      <Heading
                        content={
                          headings[
                          (activeHeading + headings.length - 1) %
                          headings.length
                          ]
                        }
                        className="logoFont"
                        style={{ fontWeight: '500', color: '#0092CA' }}
                        {...title}
                      />
                    </Fade>
                  ) : (
                    <Fade top collapse when={isFadingOut}>
                      <Heading
                        className="logoFont"
                        style={{ fontWeight: '500', color: '#0092CA' }}
                        content={headings[activeHeading]}
                        {...title}
                      />
                    </Fade>
                  )}
                </div>
              }
              description={
                <Text
                  content="Mit künstlicher Intelligenz vorausdenken, mit Sicherheit führen."
                  {...description}
                />
              }
              button={
                <Fragment>
                  <a href="#AboutUsSection">
                    <Button title="MEHR VON UNS" {...btnStyle}></Button>
                  </a>
                  <a href="#blogSection">
                    <Button
                      title="PROJEKTE ANSEHEN"
                      variant="textButton"
                      icon={<i className="flaticon-next" />}
                      {...outlineBtnStyle}
                    />
                  </a>
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
