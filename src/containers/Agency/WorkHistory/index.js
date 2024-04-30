import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useMediaQuery } from '@material-ui/core'
import Box from 'common/components/Box'
import Card from 'common/components/Card'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Button from 'common/components/Button'
import FeatureBlock from 'common/components/FeatureBlock'
import Container from 'common/components/UI/Container'
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style'
import GlassCards from '../GlassCards'

const WorkHistory = ({ row, col, cardStyle, title, description, btnStyle }) => {
  const matches = useMediaQuery('(min-width:990px)')
  console.log('matches', matches)

  return (
    <WorkHistoryWrapper
      id="workHistorySection"
      style={{ background: 'linear-gradient(to right, transparent, #e0e0e0)' }}
    >
      <Container>
        {matches ? (
          <>
            <GlassCards />
            <FeatureBlock
              title={<Heading content="Work smart, not hard !" {...title} />}
              description={
                <Text
                  content="...dieser Leitsatz prägt unsere Philosophie und eint uns. Wir sind stets bestrebt, uns weiterzuentwickeln, indem wir kontinuierlich unser Know-how durch Weiterbildung ausbauen. Wir nutzen die neuesten Entwicklungen und Errungenschaften der IT-Welt, um unsere Effektivität stetig zu steigern. Künstliche Intelligenz betrachten wir nicht als Bedrohung unserer Arbeitsplätze, sondern als integralen Bestandteil der Cyber-Evolution – eine Chance, unsere Arbeit auf das nächste Level zu heben. Indem wir AI-Technologien gezielt einsetzen, verwandeln wir Herausforderungen in Möglichkeiten und gestalten die Zukunft der Technologie aktiv mit."
                  {...description}
                />
              }
            />
          </>
        ) : (
          <Box className="row" {...row}>
            <Box className="col" {...col}>
              <FeatureBlock
                title={<Heading content="Work smart, not hard !" {...title} />}
                description={
                  <Text
                    content="...dieser Leitsatz prägt unsere Philosophie und eint uns. Wir sind stets bestrebt, uns weiterzuentwickeln, indem wir kontinuierlich unser Know-how durch Weiterbildung ausbauen. Wir nutzen die neuesten Entwicklungen und Errungenschaften der IT-Welt, um unsere Effektivität stetig zu steigern. Künstliche Intelligenz betrachten wir nicht als Bedrohung unserer Arbeitsplätze, sondern als integralen Bestandteil der Cyber-Evolution – eine Chance, unsere Arbeit auf das nächste Level zu heben. Indem wir AI-Technologien gezielt einsetzen, verwandeln wir Herausforderungen in Möglichkeiten und gestalten die Zukunft der Technologie aktiv mit."
                    {...description}
                  />
                }
                // button={<Button title="PROJEKTE" {...btnStyle} />}
              />
            </Box>
            <Box className="col" {...col}>
              <CounterUpArea>
                <Card
                  className="card"
                  {...cardStyle}
                  style={{ background: 'white', opacity: '0.9' }}
                >
                  <h3>7</h3>
                  <Text content="Jahre Erfahrung" />
                </Card>
                <Card
                  className="card"
                  {...cardStyle}
                  style={{ background: 'white', opacity: '0.9' }}
                >
                  <h3>15</h3>
                  <Text content="Glückliche Kunden" />
                </Card>
                <Card
                  className="card"
                  {...cardStyle}
                  style={{ background: 'white', opacity: '0.9' }}
                >
                  <h3>30+</h3>
                  <Text content="fertiggestellte Projekt" />
                </Card>
                <Card
                  className="card"
                  {...cardStyle}
                  style={{ background: 'white', opacity: '0.9' }}
                >
                  <h3>&</h3>
                  <Text content="vieles mehr" />
                </Card>
              </CounterUpArea>
            </Box>
          </Box>
        )}
        {/* <Box className="row" {...row}>
          <Box  className="col" {...col}>
            <FeatureBlock
              title={<Heading content="Work smart, not hard !" {...title} />}
              description={
                <Text
                  content="...dieser Leitsatz prägt unsere Philosophie und eint uns. Wir sind stets bestrebt, uns weiterzuentwickeln, indem wir kontinuierlich unser Know-how durch Weiterbildung ausbauen. Wir nutzen die neuesten Entwicklungen und Errungenschaften der IT-Welt, um unsere Effektivität stetig zu steigern. Künstliche Intelligenz betrachten wir nicht als Bedrohung unserer Arbeitsplätze, sondern als integralen Bestandteil der Cyber-Evolution – eine Chance, unsere Arbeit auf das nächste Level zu heben. Indem wir AI-Technologien gezielt einsetzen, verwandeln wir Herausforderungen in Möglichkeiten und gestalten die Zukunft der Technologie aktiv mit."
                  {...description}
                />
              }
              // button={<Button title="PROJEKTE" {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card
                className="card"
                {...cardStyle}
                style={{ background: 'white', opacity: '0.9' }}
              >
                <h3>7</h3>
                <Text content="Jahre Erfahrung" />
              </Card>
              <Card
                className="card"
                {...cardStyle}
                style={{ background: 'white', opacity: '0.9' }}
              >
                <h3>15</h3>
                <Text content="Glückliche Kunden" />
              </Card>
              <Card
                className="card"
                {...cardStyle}
                style={{ background: 'white', opacity: '0.9' }}
              >
                <h3>30+</h3>
                <Text content="fertiggestellte Projekt" />
              </Card>
              <Card
                className="card"
                {...cardStyle}
                style={{ background: 'white', opacity: '0.9' }}
              >
                <h3>&</h3>
                <Text content="vieles mehr" />
              </Card>
            </CounterUpArea>
          </Box>
        </Box> */}
      </Container>
    </WorkHistoryWrapper>
  )
}

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
}

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  // WorkHistory section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  // WorkHistory section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
}

export default WorkHistory
