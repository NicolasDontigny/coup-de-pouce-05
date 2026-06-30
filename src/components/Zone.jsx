import './Zone.css'

const communes = [
  'Saint-Jean-Saint-Nicolas',
  'Orcières & vallée du Champsaur',
  'Gap & agglomération',
  'Chorges, Savines-le-Lac',
  'Hautes-Alpes et zones à proximité',
]

export default function Zone() {
  return (
    <section id="zone" className="zone">
      <div className="container zone__inner">
        <div className="zone__content">
          <p className="section-label zone__label">Déplacements</p>
          <h2 className="zone__title">Zone d'intervention</h2>
          <p className="zone__text">
            J'interviens principalement dans les Hautes-Alpes (05) et les communes alentour.
          </p>

          <ul className="zone__list">
            {communes.map(c => (
              <li key={c} className="zone__list-item">
                <span className="zone__list-marker">📍</span>
                {c}
              </li>
            ))}
          </ul>

          <p className="zone__note">
            Une question sur ma zone de déplacement ?{' '}
            <a href="tel:+33687234702" className="zone__link">Appelez-moi directement.</a>
          </p>
        </div>

        <div className="zone__map">
          <iframe
            title="Zone d'intervention Saint-Jean-Saint-Nicolas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46083.75!2d6.0!3d44.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cb0e5f3e3b3f3f%3A0x1!2sSaint-Jean-Saint-Nicolas%2C%20Hautes-Alpes!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
