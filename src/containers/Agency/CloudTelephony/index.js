import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import FeatureBlock from 'common/components/FeatureBlock'
import Container from 'common/components/UI/Container'
import CloudTelephonyWrapper from './cloudTelephony.style'


const CloudTelephony = ({
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
  const cloudTelephony = [
    {
      title: "Zeitbasiertes Routing:",
      description: "Legen Sie fest, wann und wo Sie erreichbar sind."
    },
    {
      title: "Gruppenruf:",
      description: "Optimieren Sie die Erreichbarkeit durch Anrufgruppen für Teams oder Abteilungen."
    },
    {
      title: "Sprachmenü (IVR):",
      description: "Kunden wählen per Sprachmenü die gewünschte Abteilung."
    },
    {
      title: "Besetztlampenfeld:",
      description: "Überblick, wer gerade telefoniert."
    },
    {
      title: "Voicemail:",
      description: "Nachrichten zu bestimmten Anlässen und Benachrichtigung via E-Mail."
    },
  ]

  const featureBox = { background: '#fff', opacity: '0.9', padding: '10px', borderRadius: '10px', marginBottom: '20px', boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px', }
  return (
    <CloudTelephonyWrapper id="qualitySection">
      <div style={{
        position: 'absolute',
        top: '2px',
        right: '50%',
        height: '100px',
        width: 'calc(50% - 200px)',
        borderRight: '2px solid rgba(202, 55, 0, 1)',
        borderBottom: '2px solid rgba(202, 55, 0, 1)',
        borderBottomRightRadius: '75px'
      }} />
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '100px',
        height: 'calc(100% - 200px)',
        width: 'calc(50% - 200px)',
        borderLeft: '2px solid rgba(202, 55, 0, 1)',
        borderTop: '2px solid rgba(202, 55, 0, 1)',
        borderBottom: '2px solid rgba(202, 55, 0, 1)',
        borderTopLeftRadius: '75px',
        borderBottomLeftRadius: '75px'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2px',
        right: '100px',
        height: '100px',
        width: 'calc(50% + 200px)',
        borderRight: '2px solid rgba(202, 55, 0, 1)',
        borderTop: '2px solid rgba(202, 55, 0, 1)',
        borderTopRightRadius: '75px'
      }} />
      <Container>

        {/* TODO: Header auslagern!!  */}
        {/* <Box className="row" {...row}>
          <Box className="col" {...col} {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Digitale Telefonanlage"
                  {...title}
                />
              }
              description={
                <Text
                  content="Die Cloud-Telefonanlage bietet über 150 Funktionen, die über eine intuitive Benutzeroberfläche einfach zu verwalten sind. Dies hilft dabei, keinen Anruf mehr zu verpassen und die Kommunikation effizient zu gestalten."
                  {...description}
                />
              }
            />
          </Box>
        </Box> */}

        <Box className="row" {...col} {...textArea} style={{ gap: '20px', paddingTop: '50px', paddingBottom: '100px' }}>
          <h3>Cloud-Telefonie:</h3>

          {cloudTelephony.map((item, index) =>
            <Fade right delay={90 + index * 90} key={item.title}>
              <Box
                className="col"
                {...featureCol}
                style={featureBox}

              >
                <FeatureBlock
                  // icon={<i className={feature.icon} />}
                  iconPosition="left"
                  iconStyle={iconStyle}
                  title={<Heading content={item.title} {...featureTitle} />}
                  description={
                    <Text content={item.description} {...featureDescription} />
                  }
                />
              </Box>  </Fade>
          )}


        </Box>
      </Container>

    </CloudTelephonyWrapper >
  )
}

CloudTelephony.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureCol: PropTypes.object,
  featureBox: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
}

CloudTelephony.defaultProps = {
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

export default CloudTelephony
