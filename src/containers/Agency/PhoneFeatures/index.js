import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Button55 from 'common/components/Button55'
import CloudPhoneWrapper from './phoneFeature.style'
import 'rc-tabs/assets/index.css'
import Image from 'common/components/Image'
import FeatureBlock from 'common/components/FeatureBlock'
import styles from 'common/components/Button55/button55.module.css'
import { Fade, Rotate } from 'react-awesome-reveal'
import { useMediaQuery } from '@material-ui/core'

const phoneFeatures = [
  {
    tab: 'Cloud Phone',
    content: [
      {
        title: 'Zeitbasiertes Routing',
        description:
          'Stellen Sie sich vor, Sie könnten selbst entscheiden, wann und wo Sie Anrufe entgegennehmen – und das alles mit nur ein paar Klicks. Mit unserem zeitbasierten Routing haben Sie die Kontrolle!',
      },
      {
        title: 'Gruppenruf',
        description:
          'Teamwork auf die smarte Art: Richten Sie Anrufgruppen für Ihr Team und verschiedene Abteilungen ein. So optimieren Sie die Erreichbarkeit und jeder Anruf findet schnell den richtigen Ansprechpartner.',
      },
      {
        title: 'Sprachmenü (IVR)',
        description:
          'Geben Sie Ihren Kunden die Freiheit zu wählen, mit wem sie sprechen möchten. Unser interaktives Sprachmenü (IVR) macht es möglich und leitet Anrufer intuitiv zur gewünschten Abteilung.',
      },
      {
        title: 'Besetztlampenfeld',
        description:
          'Ein schneller Blick genügt: Unser Besetztlampenfeld zeigt Ihnen sofort, ob Kollegen verfügbar oder bereits in einem Gespräch sind – perfekt für Tischtelefone und Softphones.',
      },
      {
        title: 'Voicemail',
        description:
          'Nie wieder wichtige Nachrichten verpassen: Unsere Voicemail-Funktion informiert Sie per E-Mail über neue Nachrichten und spielt Ansagen zu speziellen Anlässen ab.',
      },
    ],
    image: 'images/cloudphoneIMG.png',
  },
  {
    tab: 'Messaging & Meetings',
    content: [
      {
        title: 'Online Meetings',
        description:
          'Starten Sie blitzschnell Meetings aus Ihrem persönlichen Raum – mit Platz für bis zu 1.000 Teilnehmer. Ein Klick und los gehts!',
      },
      {
        title: 'File-/Screensharing',
        description:
          'Drag&Drop leicht gemacht: Teilen Sie Dateien im Handumdrehen oder zeigen Sie anderen Ihren Bildschirm. So einfach, so effektiv.',
      },
      {
        title: 'Präsenzanzeige',
        description:
          'Mit unserer Präsenzanzeige wissen Sie immer, ob Ihre Kollegen gerade verfügbar sind. Ein schneller Blick, und Sie sind informiert.',
      },
      {
        title: 'Meetings aufzeichnen',
        description:
          'Kein Problem, wenn jemand nicht dabei sein kann: Senden Sie einfach die Aufzeichnung des Meetings hinterher und halten Sie alle auf dem Laufenden.',
      },
      {
        title: 'Virtuelles Whiteboard',
        description:
          'Unser virtuelles Whiteboard bietet unendlich viel Platz für Ihre Ideen. Zeichnen und schreiben Sie, wohin Sie wollen – die Möglichkeiten sind grenzenlos.',
      },
    ],
    image: 'images/meetingIMG2.png',
  },
  {
    tab: 'Call Center',
    content: [
      {
        title: 'Warteschleife',
        description:
          'Richten Sie smarte Warteschleifen ein, die Ihre Kunden automatisch mit dem nächsten freien Mitarbeiter verbinden. Schneller Service, zufriedene Kunden!',
      },
      {
        title: 'Skillbasiertes Routing',
        description:
          'Mit unserem skillbasierten Routing gelangen Anrufe immer zum richtigen Experten. So lösen Ihre Mitarbeiter Kundenanliegen effizient und kompetent.',
      },
      {
        title: 'Detailiertes Reporting',
        description:
          'Behalten Sie den Überblick: Unser detailliertes Call-Center-Reporting zeigt Ihnen alle Aktivitäten und hilft, verborgene Potenziale zu entdecken.',
      },
      {
        title: 'Agentenstatus',
        description:
          'Kein Problem, wenn jemand nicht dabei sein kann: Senden Sie einfach die Aufzeichnung des Meetings hinterher und halten Sie alle auf dem Laufenden.',
      },
      {
        title: 'IVR (Interactive Voice Response)',
        description:
          'Unser virtuelles Whiteboard bietet unendlich viel Platz für Ihre Ideen. Zeichnen und schreiben Sie, wohin Sie wollen – die Möglichkeiten sind grenzenlos.',
      },
    ],
    image: 'images/callcenterIMG.png',
  },
  {
    tab: 'Integration',
    content: [
      {
        title: 'MS Teams Intergration',
        description:
          'Verbinden Sie die Kraft von twylo-phone direkt mit Microsoft Teams. Bleiben Sie überall und jederzeit erreichbar – die Einrichtung? Ein Kinderspiel und in Minuten erledigt!',
      },
      {
        title: 'Datev Integration',
        description:
          'Machen Sie es sich leicht: Mit der nahtlosen Integration von Telefoniefunktionen in Ihre DATEV-Anwendung optimieren Sie Ihre Arbeitsabläufe für maximale Effizienz.',
      },
      {
        title: 'HubSpot Integration',
        description:
          'Telefonieren Sie direkt aus Ihrem HubSpot CRM, protokollieren Sie Anrufe automatisch und legen Sie bei Bedarf neue Aktivitäten an. So verbinden Sie Kommunikation und Kundenmanagement perfekt miteinander.',
      },
    ],
    image: 'images/integrationIMG.png',
  },
  {
    tab: 'Admin / Reportings',
    content: [
      {
        title: 'Intuitives Webportal',
        description:
          'Unser Webportal ist das Herzstück Ihrer Cloud-Telefonanlage und macht es Ihnen leicht, alle Einstellungen Ihrer Kommunikation jederzeit selbst zu verwalten – intuitiv und effizient.',
      },
      {
        title: 'Anrufmanagement',
        description:
          'Behalten Sie die Kontrolle: Verwalten Sie alle Telefonie-Einstellungen für Ihre Mitarbeiter und Endgeräte zentral über unsere benutzerfreundliche Oberfläche – jederzeit und von überall!',
      },
      {
        title: 'Anrufstatistiken',
        description:
          'Mit unseren detaillierten Anrufstatistiken – von durchschnittlicher Wartezeit bis zu verpassten Anrufen – behalten Sie stets den Überblick und erkennen leicht, wo Optimierungspotenzial besteht.',
      },
    ],
    image: 'images/adminIMG.png',
  },
  {
    tab: 'Clients / Endgeräte',
    content: [
      {
        title: 'Intuitives Webportal',
        description:
          'Nutzen Sie unsere kostenlosen Apps und Softphones, um mit Ihrem Smartphone, Laptop oder PC über twylo phone zu telefonieren, an Meetings teilzunehmen und Nachrichten zu versenden – mobil und flexibel.',
      },
      {
        title: 'Hardware mieten',
        description:
          'Sparen Sie sich hohe Anschaffungskosten: Mieten Sie einfach die passende Hardware zu Ihrer Cloud-Telefonanlage bei uns und profitieren Sie von unserer großen Auswahl und Flexibilität.',
      },
      {
        title: 'Autoprovisionierung',
        description:
          'Ein paar Klicks genügen: Geben Sie die MAC-Adresse Ihres Geräts ein, und wir kümmern uns um die automatische Konfiguration. Einfach, schnell und ohne zusätzlichen Aufwand.',
      },
    ],
    image: 'images/clientsIMG.avif',
  },
]

const CloudPhonePbx = ({
  row,
  col,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  const [selectedTab, setSetselectedTab] = useState('Cloud Phone')
  const currentContent = phoneFeatures.find((tab) => tab.tab === selectedTab)
  const matches = useMediaQuery('(min-width:750px)')
  return (
    <CloudPhoneWrapper>
      <Box
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '50px',
          gap: '20px',
          flexWrap: 'wrap',
        }}
        className="col"
      >
        {phoneFeatures.map((item) => {
          return (
            <Button55
              key={item.tab}
              onClick={() => {
                setSetselectedTab(item.tab)
              }}
              className={
                selectedTab === item.tab
                  ? `${styles.button55} ${styles.active}`
                  : styles.button55
              }
            >
              {item.tab}
            </Button55>
          )
        })}
      </Box>
      <Box
        style={{
          minHeight: '490px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {matches && (
          <Box
            style={{
              width: '40%',
            }}
            className="col"
          >
            <Rotate key={currentContent.image} delay={100}>
              <Image
                src={currentContent.image}
                alt={currentContent.tab}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  minWidth: '300px',
                  // boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
                }}
              />
            </Rotate>
          </Box>
        )}

        <Box
          style={{
            width: matches ? '60%' : '100%',
            boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
            margin: '50px',
          }}
          className="row"
          {...row}
        >
          {currentContent.content.map((text) => (
            <Box
              className="col"
              {...col}
              key={text.title}
              style={{
                background: 'white',
                opacity: '0.9',
                overflow: 'hidden',
                boxShadow: 'rgba(0, 146, 202, 1) 10px 20px 30px -10px',
              }}
            >
              <Fade bottom delay={100}>
                <FeatureBlock
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={text.title} {...featureTitle} />}
                  description={
                    <Text content={text.description} {...featureDescription} />
                  }
                />
              </Fade>
            </Box>
          ))}
        </Box>
      </Box>
    </CloudPhoneWrapper>
  )
}

// FeatureSection style props
CloudPhonePbx.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
}

// FeatureSection default style
CloudPhonePbx.defaultProps = {
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
    p: ['30px', '20px', '15px', '15px'],
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
    textAlign: 'left',
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '1',
    color: '#343d48cc',
  },
}

export default CloudPhonePbx
