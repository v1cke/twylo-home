import React from 'react'
import Box from 'common/components/Box'
import Heading from 'common/components/Heading'
import Container from 'common/components/UI/Container'
import PhoneHeaderWrapper from './phoneHeader.style'

const PhoneHeader = ({}) => {
  return (
    <PhoneHeaderWrapper id="newsletterSection">
      <Container>
        <Box
          style={{
            width: '100%',
            marginTop: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Heading
            style={{
              color: 'rgba(0, 146, 202, 1)',
            }}
            content="Digitale Telefonanlage"
          />
          <p
            style={{
              fontWeight: 500,
              maxWidth: '800px',
            }}
          >
            Die Cloud-Telefonanlage bietet über 150 Funktionen, die über eine
            intuitive Benutzeroberfläche einfach zu verwalten sind. Dies hilft
            dabei, keinen Anruf mehr zu verpassen und die Kommunikation
            effizient zu gestalten.
          </p>
        </Box>
      </Container>
    </PhoneHeaderWrapper>
  )
}

export default PhoneHeader
