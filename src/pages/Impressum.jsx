import { Helmet } from 'react-helmet-async'

export default function Impressum(){
  return (
    <main className="min-h-screen bg-premium-bg text-premium-fg">
      <Helmet>
        <title>Impressum — SPIRIT WAVE</title>
      </Helmet>
      <div className="container mx-auto px-6 py-16 prose prose-invert max-w-3xl">
        <h1>Impressum</h1>
        <p><strong>[DEIN_NAME]</strong><br/>[STRAßE] [NR]<br/>[PLZ] [STADT]</p>
        <p><strong>Kontakt</strong><br/>Telefon: [DEINE_TELEFONNUMMER]<br/>E-Mail: [DEINE_EMAIL]</p>
        <p><strong>Umsatzsteuer-ID</strong><br/>USt-IdNr.: [DEINE_USTID]</p>
        <p><strong>Berufsbezeichnung</strong><br/>[TITEL] (verliehen in der Bundesrepublik Deutschland)</p>
        <p><strong>Berufsrechtliche Regelungen</strong><br/>Es gelten die einschlägigen berufsrechtlichen Regelungen. Zuständige Kammer: [ZUSTÄNDIGE_KAMMER].</p>
        <h2>Haftungsausschluss</h2>
        <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr.</p>
        <h2>Urheberrecht</h2>
        <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
      </div>
    </main>
  )
}
