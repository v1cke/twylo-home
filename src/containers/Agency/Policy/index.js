import Box from 'common/components/Box'
import PolicyWrapper from './policy.module'
import Container from 'common/components/UI/Container'

export const PolicyContent = ({ }) => (
  <PolicyWrapper>
    <Container>
      <Box className="col">
        <h2>
          Datenschutzerklärung von <strong>twylo.com</strong>
        </h2>
        <p>
          Um Informationen zu den personenbezogenen Daten, dem Zweck und den
          Parteien, welchen diese Daten mitgeteilt werden, zu erhalten,
          kontaktieren Sie den Eigentümer
        </p>

        <div className="contact-info">
          <h3>Anbieter und Verantwortlicher</h3>
          <p>
            <strong>twylo B.V.</strong>
          </p>
          <p>Kaldenkerkerweg 20, 5913 AE Venlo, Niederlande</p>
          <p>
            E-Mail-Adresse des Anbieters:{' '}
            <a href="mailto:mail@twylo.com">mail@twylo.net</a>
          </p>
        </div>

        <div className="data-types">
          <h3>Arten der erhobenen Daten</h3>
          <p>
            Der Eigentümer stellt keine Auflistung der erhobenen
            personenbezogenen Daten zur Verfügung.
          </p>
          <p>
            Vollständige Details zu jeder Art von verarbeiteten
            personenbezogenen Daten werden in den dafür vorgesehenen Abschnitten
            dieser Datenschutzerklärung oder punktuell durch Erklärungstexte
            bereitgestellt, die vor der Datenerhebung angezeigt werden.
            Personenbezogene Daten können vom Nutzer freiwillig angegeben oder,
            im Falle von Nutzungsdaten, automatisch erhoben werden, wenn diese
            Anwendung genutzt wird. Sofern nicht anders angegeben, ist die
            Angabe aller durch diese Anwendung angeforderten Daten
            obligatorisch. Weigert sich der Nutzer, die Daten anzugeben, kann
            dies dazu führen, dass diese Anwendung dem Nutzer ihre Dienste nicht
            zur Verfügung stellen kann. In Fällen, in denen diese Anwendung die
            Angabe personenbezogener Daten ausdrücklich als freiwillig
            bezeichnet, dürfen sich die Nutzer dafür entscheiden, diese Daten
            ohne jegliche Folgen für die Verfügbarkeit oder die
            Funktionsfähigkeit des Dienstes nicht anzugeben. Nutzer, die sich
            darüber im Unklaren sind, welche personenbezogenen Daten
            obligatorisch sind, können sich an den Anbieter wenden. Jegliche
            Verwendung von Cookies – oder anderer Tracking-Tools – durch diese
            Anwendung oder Anbieter von Drittdiensten, die durch diese Anwendung
            eingesetzt werden, dient dem Zweck, den vom Nutzer gewünschten
            Dienst zu erbringen, und allen anderen Zwecken, die im vorliegenden
            Dokument und in der Cookie-Richtlinie beschrieben sind.
          </p>
          <p>
            Die Nutzer sind für alle personenbezogenen Daten Dritter
            verantwortlich, die durch diese Anwendung beschafft, veröffentlicht
            oder weitergegeben werden.
          </p>
        </div>

        <div className="data-processing">
          <h3>Art und Ort der Datenverarbeitung</h3>
          <h4>Verarbeitungsmethoden</h4>
          <p>
            Der Anbieter verarbeitet die Nutzerdaten auf ordnungsgemäße Weise
            und ergreift angemessene Sicherheitsmaßnahmen, um den unbefugten
            Zugriff und die unbefugte Weiterleitung, Veränderung oder
            Vernichtung von Daten zu vermeiden. Die Datenverarbeitung wird
            mittels Computern oder IT-basierten Systemen nach organisatorischen
            Verfahren und Verfahrensweisen durchgeführt, die gezielt auf die
            angegebenen Zwecke abstellen. Zusätzlich zum Verantwortlichen
            könnten auch andere Personen intern (Personalverwaltung, Vertrieb,
            Marketing, Rechtsabteilung, Systemadministratoren) oder extern – und
            in dem Fall soweit erforderlich, vom Verantwortlichen als
            Auftragsverarbeiter benannt (wie Anbieter technischer
            Dienstleistungen, Zustellunternehmen, Hosting-Anbieter,
            IT-Unternehmen oder Kommunikationsagenturen) - diese Anwendung
            betreiben und damit Zugriff auf die Daten haben. Eine aktuelle Liste
            dieser Beteiligten kann jederzeit vom Anbieter verlangt werden.
          </p>

          <h4>Ort</h4>
          <p>
            Die Daten werden in der Niederlassung des Anbieters und an allen
            anderen Orten, an denen sich die an der Datenverarbeitung
            beteiligten Stellen befinden, verarbeitet. Je nach Standort der
            Nutzer können Datenübertragungen die Übertragung der Daten des
            Nutzers in ein anderes Land als das eigene beinhalten. Um mehr über
            den Ort der Verarbeitung der übermittelten Daten zu erfahren, können
            die Nutzer den Abschnitt mit den ausführlichen Angaben zur
            Verarbeitung der personenbezogenen Daten konsultieren.
          </p>

          <h4>Speicherdauer</h4>
          <p>
            Sofern in diesem Dokument nicht anderweitig festgelegt, werden
            personenbezogene Daten so lange verarbeitet und gespeichert, wie es
            der Zweck erfordert, zu dem sie erhoben wurden, und können ggf.
            aufgrund einer zu erfüllenden rechtlichen Verpflichtung oder
            basierend auf der Einwilligung des Nutzers auch länger aufbewahrt
            werden.
          </p>

          <h4>Cookie-Richtlinie</h4>
          <p>
            Diese Anwendung verwendet Tracker. Weitere Informationen ergeben
            sich aus der Cookie-Richtlinie.
          </p>
        </div>

        <div className="additional-info">
          <h3>Weitere Informationen für Nutzer</h3>
          <h4>Rechtsgrundlagen der Verarbeitung</h4>
          <p>
            Der Anbieter darf personenbezogene Daten von Nutzern nur dann
            verarbeiten, wenn einer der folgenden Punkte zutrifft:
          </p>
          <ul>
            <li>
              Die Nutzer haben ihre Einwilligung für einen oder mehrere
              bestimmte Zwecke erteilt.
            </li>
            <li>
              Die Datenerhebung ist für die Erfüllung eines Vertrages mit dem
              Nutzer und/oder für vorvertragliche Maßnahmen daraus erforderlich.
            </li>
            <li>
              Die Verarbeitung ist für die Erfüllung einer rechtlichen
              Verpflichtung, der der Anbieter unterliegt, erforderlich.
            </li>
            <li>
              Die Verarbeitung steht im Zusammenhang mit einer Aufgabe, die im
              öffentlichen Interesse oder in Ausübung hoheitlicher Befugnisse,
              die dem Anbieter übertragen wurden, durchgeführt wird.
            </li>
            <li>
              Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
              Anbieters oder eines Dritten erforderlich.
            </li>
          </ul>
          <p>
            In jedem Fall erteilt der Anbieter gerne Auskunft über die konkrete
            Rechtsgrundlage, auf der die Verarbeitung beruht, insbesondere
            darüber, ob die Angabe personenbezogener Daten eine gesetzliche oder
            vertragliche Verpflichtung oder eine Voraussetzung für den Abschluss
            eines Vertrages ist.
          </p>

          <h4>Weitere Informationen zur Speicherdauer</h4>
          <p>
            Sofern in diesem Dokument nicht anderweitig festgelegt, werden
            personenbezogene Daten so lange verarbeitet und gespeichert, wie es
            der Zweck erfordert, zu dem sie erhoben wurden, und können ggf.
            aufgrund einer zu erfüllenden rechtlichen Verpflichtung oder
            basierend auf der Einwilligung des Nutzers auch länger aufbewahrt
            werden.
          </p>
          <p>Daher gilt:</p>
          <ul>
            <li>
              Personenbezogene Daten, die zu Zwecken der Erfüllung eines
              zwischen dem Anbieter und dem Nutzer geschlossenen Vertrages
              erhoben werden, werden bis zur vollständigen Erfüllung dieses
              Vertrages gespeichert.
            </li>
            <li>
              Personenbezogene Daten, die zur Wahrung der berechtigten
              Interessen des Anbieters erhoben werden, werden so lange
              aufbewahrt, wie es zur Erfüllung dieser Zwecke erforderlich ist.
              Nutzer können nähere Informationen über die berechtigten
              Interessen des Anbieters in den entsprechenden Abschnitten dieses
              Dokuments oder durch Kontaktaufnahme zum Anbieter erhalten.
            </li>
          </ul>
          <p>
            Darüber hinaus ist es dem Anbieter gestattet, personenbezogene Daten
            für einen längeren Zeitraum zu speichern, wenn der Nutzer in eine
            solche Verarbeitung eingewilligt hat, solange die Einwilligung nicht
            widerrufen wird. Darüber hinaus kann der Anbieter verpflichtet sein,
            personenbezogene Daten für einen längeren Zeitraum aufzubewahren,
            wenn dies zur Erfüllung einer gesetzlichen Verpflichtung oder auf
            Anordnung einer Behörde erforderlich ist.
          </p>
          <p>
            Nach Ablauf der Aufbewahrungsfrist werden personenbezogene Daten
            gelöscht. Daher können das Auskunftsrecht, das Recht auf Löschung,
            das Recht auf Berichtigung und das Recht auf Datenübertragbarkeit
            nach Ablauf der Aufbewahrungsfrist nicht geltend gemacht werden.
          </p>
        </div>

        <div className="user-rights">
          <h3>
            Die Rechte der Nutzer nach der Datenschutz-Grundverordnung (DSGVO)
          </h3>
          <p>
            Die Nutzer können bestimmte Rechte in Bezug auf ihre vom Anbieter
            verarbeiteten Daten ausüben.
          </p>
          <p>
            Nutzer haben im gesetzlich zulässigen Umfang insbesondere das Recht,
            Folgendes zu tun:
          </p>
          <ul>
            <li>
              Die Einwilligungen jederzeit widerrufen. Hat der Nutzer zuvor in
              die Verarbeitung personenbezogener Daten eingewilligt, so kann er
              die eigene Einwilligung jederzeit widerrufen.
            </li>
            <li>
              Widerspruch gegen die Verarbeitung ihrer Daten einlegen. Der
              Nutzer hat das Recht, der Verarbeitung seiner Daten zu
              widersprechen, wenn die Verarbeitung auf einer anderen
              Rechtsgrundlage als der Einwilligung erfolgt. Auskunft bezüglich
              ihrer Daten erhalten. Der Nutzer hat das Recht zu erfahren, ob die
              Daten vom Anbieter verarbeitet werden, über einzelne Aspekte der
              Verarbeitung Auskunft zu erhalten und eine Kopie der Daten zu
              erhalten. Überprüfen und berichtigen lassen. Der Nutzer hat das
              Recht, die Richtigkeit seiner Daten zu überprüfen und deren
              Aktualisierung oder Berichtigung zu verlangen.
            </li>
            <li>
              Einschränkung der Verarbeitung ihrer Daten verlangen. Die Nutzer
              haben das Recht, die Verarbeitung ihrer Daten einzuschränken. In
              diesem Fall wird der Anbieter die Daten zu keinem anderen Zweck
              als der Speicherung verarbeiten. Löschung oder anderweitiges
              Entfernen der personenbezogenen Daten verlangen. Die Nutzer haben
              das Recht, vom Anbieter die Löschung ihrer Daten zu verlangen.
            </li>
            <li>
              Ihre Daten erhalten und an einen anderen Verantwortlichen
              übertragen lassen. Der Nutzer hat das Recht, seine Daten in einem
              strukturierten, gängigen und maschinenlesbaren Format zu erhalten
              und, sofern technisch möglich, ungehindert an einen anderen
              Verantwortlichen übermitteln zu lassen. Beschwerde einreichen. Die
              Nutzer haben das Recht, eine Beschwerde bei der zuständigen
              Aufsichtsbehörde einzureichen.
            </li>
          </ul>
          <p>
            Die Nutzer haben auch das Recht, sich über die Rechtsgrundlage der
            Datenübermittlung ins Ausland oder an eine internationale
            Organisation, die dem Völkerrecht unterliegt oder von zwei oder mehr
            Ländern gegründet wurde, wie beispielsweise die UNO, sowie sich über
            die vom Anbieter ergriffenen Sicherheitsmaßnahmen zum Schutz ihrer
            Daten aufklären zu lassen.
          </p>

          <h4>Details zum Widerspruchsrecht bezüglich der Verarbeitung</h4>
          <p>
            Werden personenbezogene Daten im öffentlichen Interesse, in Ausübung
            eines dem Anbieter übertragenen hoheitlichen Befugnisses oder zur
            Wahrung der berechtigten Interessen des Anbieters verarbeitet, kann
            der Nutzer dieser Verarbeitung widersprechen, indem er einen
            Rechtfertigungsgrund angibt, der sich auf seine besondere Situation
            bezieht. Nutzer werden darüber informiert, dass sie der Verarbeitung
            der personenbezogenen Daten für Direktwerbung jederzeit
            unentgeltlich ohne Angabe von Gründen widersprechen können.
            Widerspricht der Nutzer der Verarbeitung für Zwecke der
            Direktwerbung, so werden die personenbezogenen Daten nicht mehr für
            diese Zwecke verarbeitet. Ob der Anbieter personenbezogene Daten für
            Direktwerbungszwecke verarbeitet, können die Nutzer den
            entsprechenden Abschnitten dieses Dokuments entnehmen.
          </p>

          <h4>Wie die Rechte ausgeübt werden können</h4>
          <p>
            Alle Anfragen zur Ausübung der Nutzerrechte können über die in
            diesem Dokument angegebenen Kontaktdaten an den Anbieter gerichtet
            werden. Diese Anfragen können kostenlos gestellt werden und werden
            vom Anbieter so früh wie möglich, spätestens innerhalb eines Monats,
            beantwortet und den Nutzern die gesetzlich vorgeschriebenen
            Informationen zur Verfügung gestellt. Jede Berichtigung oder
            Löschung personenbezogener Daten oder die Einschränkung der
            Verarbeitung teilt der Anbieter allen Empfängern, denen
            personenbezogene Daten offengelegt wurden, mit, falls es welche
            gibt. Es sei denn, dies erweist sich als unmöglich oder ist mit
            einem unverhältnismäßigen Aufwand verbunden. Der Anbieter
            unterrichtet den Nutzer über diese Empfänger, wenn der Nutzer dies
            verlangt.
          </p>
        </div>

        <div className="additional-info">
          <h3>
            Weitere Informationen über die Erhebung und Verarbeitung von Daten
          </h3>
          <h4>Rechtliche Maßnahmen</h4>
          <p>
            Die personenbezogenen Daten des Nutzers können vom Anbieter zu
            Zwecken der Rechtsdurchsetzung innerhalb oder in Vorbereitung
            gerichtlicher Verfahren verarbeitet werden, die sich daraus ergeben,
            dass diese Anwendung oder die dazugehörigen Dienste nicht
            ordnungsgemäß genutzt wurden. Der Nutzer erklärt, sich dessen
            bewusst zu sein, dass der Anbieter von den Behörden zur Herausgabe
            von personenbezogenen Daten verpflichtet werden könnte.
          </p>

          <h4>
            Weitere Informationen über die personenbezogenen Daten des Nutzers
          </h4>
          <p>
            Zusätzlich zu den in dieser Datenschutzerklärung aufgeführten
            Informationen kann diese Anwendung dem Nutzer auf Anfrage weitere
            kontextbezogene Informationen zur Verfügung stellen, die sich auf
            bestimmte Dienste oder auf die Erhebung und Verarbeitung
            personenbezogener Daten beziehen.
          </p>

          <h4>Systemprotokolle und Wartung</h4>
          <p>
            Diese Anwendung und die Dienste von Dritten können zu Betriebs- und
            Wartungszwecken Dateien erfassen, die die über diese Anwendung
            stattfindende Interaktion aufzeichnen (Systemprotokolle), oder
            andere personenbezogene Daten (z. B. IP-Adresse) zu diesem Zweck
            verwenden.
          </p>

          <h4>Nicht in dieser Datenschutzerklärung enthaltene Informationen</h4>
          <p>
            Weitere Informationen über die Erhebung oder Verarbeitung
            personenbezogener Daten können jederzeit vom Anbieter über die
            aufgeführten Kontaktangaben angefordert werden.
          </p>

          <h4>Änderungen dieser Datenschutzerklärung</h4>
          <p>
            Der Anbieter behält sich vor, jederzeit Änderungen an dieser
            Datenschutzerklärung vorzunehmen, indem Nutzer auf dieser Seite und
            gegebenenfalls über diese Anwendung und/oder - soweit technisch und
            rechtlich möglich – durch das Versenden einer Mitteilung über dem
            Anbieter vorliegende Kontaktdaten der Nutzer informiert werden.
            Nutzern wird daher nahegelegt, diese Seite regelmäßig aufzurufen und
            insbesondere das am Seitenende angegebene Datum der letzten Änderung
            zu prüfen. Soweit Änderungen eine auf der Einwilligung des Nutzers
            basierte Datennutzung betreffen, so wird der Anbieter - soweit
            erforderlich - eine neue Einwilligung einholen.
          </p>

          <h4>Begriffsbestimmungen und rechtliche Hinweise</h4>
          <p>Letzte Aktualisierung: 29. April 2024</p>
          <p>
            iubenda hostet diese Inhalte und erhebt nur die personenbezogenen
            Daten, die unbedingt erforderlich sind, um sie zur Verfügung zu
            stellen.
          </p>
          <div className="footer-link">
            <a href="#">Vereinfachte Datenschutzerklärung anzeigen</a>
          </div>
        </div>
      </Box>
    </Container>
  </PolicyWrapper>
)
