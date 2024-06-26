import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import FeatureBlock from 'common/components/FeatureBlock'
import data from 'common/data/Agency'
import Container from 'common/components/UI/Container'
import FeatureSectionWrapper from './featureSection.style'
import ModalUiUx from '../ModalUIUX'
import ModalFlexStack from '../ModalFlexStack'
import ModalKi from '../ModalKi'
import ModalSecurity from '../ModalSecurity'
import ModalSeo from '../ModalSeo'
import ModalTelefon from '../ModalTelefon'
import { Modal } from '@nextui-org/react'

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  const [openModal, setopenModal] = useState(false)
  const [selectedModal, setSelectedModal] = useState(0)

  return (
    <FeatureSectionWrapper
      id="featureSection"
      style={{ background: 'linear-gradient(to right, transparent, #e0e0e0)' }}
    >
      <Container>
        <Box
          style={{
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          <Box {...sectionHeader}>
            <Text
              style={{
                color: 'rgba(0, 146, 202, 1)',
              }}
              content="Leistungen"
              {...sectionSubTitle}
            />
            <Heading content="Unsere Spezialitäten" {...sectionTitle} />
          </Box>
          <Box
            style={{
              boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
            }}
            className="row"
            {...row}
          >
            {data.features.map((feature, index) => (
              <Box
                className="col"
                {...col}
                key={`feature-${index}`}
                style={{
                  background: 'white',
                  opacity: '0.9',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setSelectedModal(feature.id)
                  setopenModal(true)
                }}
              >
                <FeatureBlock
                  icon={<i className={feature.icon} />}
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                  description={
                    <Text
                      content={feature.description}
                      {...featureDescription}
                    />
                  }
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Modal
          blur
          width="1170px"
          closeButton
          aria-labelledby="User Panel"
          open={openModal}
          onClose={() => {
            setSelectedModal(0)
            setopenModal(false)
          }}
          justify="center"
          css={{ paddingTop: '0 !important', borderRadius: '0 !important' }}
        >
          {selectedModal === 1 && <ModalSeo />}
          {selectedModal === 2 && <ModalUiUx />}
          {selectedModal === 3 && <ModalSecurity />}
          {selectedModal === 4 && <ModalFlexStack />}
          {selectedModal === 5 && <ModalTelefon />}
          {selectedModal === 6 && <ModalKi />}
        </Modal>
      </Container>
    </FeatureSectionWrapper>
  )
}

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
}

// FeatureSection default style
FeatureSection.defaultProps = {
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
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: '1px solid #f1f4f6',
    borderBottom: '1px solid #f1f4f6',
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '30px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d48cc',
  },
}

export default FeatureSection
