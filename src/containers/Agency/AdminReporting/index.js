import React from 'react'
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import FeatureBlock from 'common/components/FeatureBlock'
import Container from 'common/components/UI/Container'
import AdminReportingWrapper from './adminReporting.style'

const AdminReporting = ({
  row,
  col,
  title,
  featureCol,
  description,
  textArea,
  featureTitle,
  featureDescription,
  iconStyle,
}) => {
  const adminReportings = [
    {
      title: 'Intuitives Webportal:',
      description: 'Zentrale Verwaltung aller Kommunikationseinstellungen.',
    },
    {
      title: 'Anrufmanagement:',
      description:
        'Steuern Sie Telefonie-Einstellungen zentral über eine Benutzeroberfläche.',
    },
    {
      title: 'Anrufstatistiken und umfangreiche Analysen:',
      description: 'Bieten Einblicke und Optimierungsmöglichkeiten für Anrufe.',
    },
  ]

  const featureBox = {
    background: '#fff',
    opacity: '0.9',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
  }
  return (
    <AdminReportingWrapper id="qualitySection">
      <Container>
        <Box className="row" {...col} {...textArea} style={{ gap: '20px' }}>
          <h3>Admin & Reportings:</h3>

          {adminReportings.map((item, index) => (
            <Fade right delay={90 + index * 90} key={item.title}>
              <Box className="col" {...featureCol} style={featureBox}>
                <FeatureBlock
                  // icon={<i className={feature.icon} />}
                  iconPosition="left"
                  iconStyle={iconStyle}
                  title={<Heading content={item.title} {...featureTitle} />}
                  description={
                    <Text content={item.description} {...featureDescription} />
                  }
                />
              </Box>{' '}
            </Fade>
          ))}
        </Box>
      </Container>
    </AdminReportingWrapper>
  )
}

AdminReporting.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureCol: PropTypes.object,
  featureBox: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
}

AdminReporting.defaultProps = {
  // Quality section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Quality section col default style
  col: {
    pr: '15px',
    pl: '15px',
  },
  // Quality feature col default style
  featureCol: {
    width: [1, 1, 1 / 2],
    pr: '15px',
    pl: '15px',
  },
  featureCol: {
    width: [1, 1, 1 / 2],
    background: '#fff',
    padding: '10px',
    pr: '15px',
    pl: '15px',
  },
  // Quality section text area default style
  textArea: {
    width: [1, '100%', '100%', '70%', '64%'],
  },
  // Quality section title default style
  title: {
    fontSize: ['26px', '26px', '32px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  // Quality section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
  },
  // feature icon default style
  iconStyle: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#ffffff',
    overflow: 'hidden',
    mt: '6px',
    mr: '22px',
    flexShrink: 0,
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
  },
}

export default AdminReporting
