import { CheckIcon } from '@phosphor-icons/react'
import benoitPhoto from '../assets/logo_2.jpg'
import './APropos.css'

const qualities = [
  'Réactivité',
  'Proximité',
  'Travail soigné',
  'Tarifs clairs',
  'Matériel professionnel sur batterie (silencieux)',
]

export default function APropos() {
  return (
    <section id="apropos" className="apropos">
      <div className="container apropos__inner">
        <div className="apropos__photo-wrap">
          <div className="apropos__photo-circle">
            <img
              src={benoitPhoto}
              alt="Benoît Sappe"
              onError={e => {
                e.target.parentElement.classList.add('apropos__photo-circle--placeholder')
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>

        <div className="apropos__badge-col">
          <div className="apropos__badge-float">
            Artisan local · 05
          </div>
        </div>

        <div className="apropos__content">
          <p className="section-label">Qui suis-je ?</p>

          <h2 className="apropos__title">
            Benoît Sappe,<br />à votre service
          </h2>

          <p className="apropos__text">
            Installé dans les Hautes-Alpes, j'interviens depuis plusieurs années pour les
            particuliers et professionnels de la région. Passionné par le travail manuel
            et le contact humain, j'apporte soin et rigueur à chaque chantier.
          </p>

          <p className="apropos__text">
            Mon objectif : vous offrir un vrai coup de pouce, sans prise de tête, avec
            un travail bien fait et un tarif honnête.
          </p>

          <div className="apropos__qualities">
            {qualities.map(q => (
              <div key={q} className="apropos__quality">
                <span className="apropos__quality-icon">
                  <CheckIcon size={13} weight="bold" color="var(--primary)" />
                </span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
