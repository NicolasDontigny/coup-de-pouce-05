import { CheckCircle } from '@phosphor-icons/react'
import './APropos.css'

const qualities = [
  'Fiabilité',
  'Honnêteté',
  'Travail soigné',
  'Tarifs clairs',
]

export default function APropos() {
  return (
    <section id="apropos" className="apropos">
      <div className="container apropos__inner">
        <div className="apropos__photo-wrap">
          <div className="apropos__photo-circle">
            <img
              src="/images/benoit.jpg"
              alt="Benoît Sappe"
              onError={e => {
                e.target.parentElement.classList.add('apropos__photo-circle--placeholder')
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>

        <div className="apropos__content">
          <div className="apropos__badges">
            <span className="apropos__badge apropos__badge--gold">Artisan local</span>
          </div>

          <p className="section-label">À propos de moi</p>

          <h2 className="apropos__title">
            Benoît Sappe,<br />à votre service
          </h2>

          <p className="apropos__text">
            J'interviens dans les Hautes-Alpes depuis plusieurs années pour les particuliers
            et professionnels de la région. Disponible pour le travail manuel et les petits
            chantiers, j'apporte soin et sérieux à chaque chantier.
          </p>

          <p className="apropos__text">
            Vous avez un projet ? Je vous donne un coup de pouce, sans prise de tête, avec un
            résultat bien fait et un tarif honnête.
          </p>

          <div className="apropos__qualities">
            {qualities.map(q => (
              <div key={q} className="apropos__quality">
                <CheckCircle size={16} weight="fill" color="var(--green-dark)" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
