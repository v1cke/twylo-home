import Box from 'common/components/Box'
import ImprintWrapper from './imprint.module'
import Container from 'common/components/UI/Container'

export const ImprintContent = ({}) => (
  <ImprintWrapper>
    <Container>
      <Box className="col">
        <h2>Impressum</h2>

        <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
        <p>
          Daniel Wulfing
          <br />
          Twylo B.V.
          <br />
          Kaldenkerkerweg 20,
          <br />
          5913 AE Venlo, Niederlande
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +49 (0) 171 9796775
          <br />
          E-Mail: mail@twylo.net
        </p>

        <h3>BTW-ID</h3>
        <p>94158185</p>

        <h3>Redaktionell verantwortlich</h3>
        <p>
          Viktor Grünwald
          <br />
          Kaldenkerkerweg 20,
          <br />
          5913 AE Venlo, Niederlande
        </p>

        <h3>EU-Streitschlichtung</h3>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h3>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle:{' '}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </Box>
    </Container>
  </ImprintWrapper>
)
