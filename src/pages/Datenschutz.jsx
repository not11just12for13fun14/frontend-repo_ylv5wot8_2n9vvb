import { Helmet } from 'react-helmet-async'

export default function Datenschutz(){
  return (
    <main className="min-h-screen bg-premium-bg text-premium-fg">
      <Helmet>
        <title>Datenschutz — SPIRIT WAVE</title>
      </Helmet>
      <div className="container mx-auto px-6 py-16 prose prose-invert max-w-3xl">
        <h1>Datenschutzerklärung</h1>
        <p>Verantwortlich: <strong>[DEIN_NAME]</strong>, [DEINE_ADRESSE], E-Mail: [DEINE_EMAIL]</p>
        <h2>Allgemeine Hinweise</h2>
        <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <h2>Cookies</h2>
        <p>Unsere Website verwendet Cookies. Details entnehmen Sie den Cookie-Einstellungen oder kontaktieren Sie uns unter der oben genannten Adresse.</p>
        <h2>Server-Log-Dateien</h2>
        <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt.</p>
        <h2>Ihre Rechte</h2>
        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>
      </div>
    </main>
  )
}
