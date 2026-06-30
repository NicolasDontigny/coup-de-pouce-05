import { StarIcon } from '@phosphor-icons/react'
import './Avis.css'

const avis = [
  {
    id: 1,
    nom: 'Maryline Catrin',
    note: 5,
    date: 'Il y a 3 semaines',
    texte: "Enfin, quelqu'un de confiance. Organisé, rapide, si il ne sait pas où ne peut pas, il le dit. Pour tout le reste il est parfait en plus d'être aimable et gentil. Je recommande vivement.",
  },
  {
    id: 2,
    nom: 'Monique Porpora',
    note: 5,
    date: 'Il y a 2 mois',
    texte: "Travail de qualité, efficace, bons conseils, serviable et sympathique, et des prix corrects.",
  },
]

function Etoiles({ note }) {
  return (
    <div className="avis-card__etoiles">
      {Array.from({ length: note }).map((_, i) => (
        <StarIcon key={i} size={16} weight="fill" color="#F5A623" />
      ))}
    </div>
  )
}

export default function Avis() {
  return (
    <section id="avis" className="avis">
      <div className="container">
        <div className="avis__header">
          <div>
            <p className="section-label">Ce qu'ils disent</p>
            <h2 className="avis__title">Avis clients</h2>
          </div>
          <a
            href="https://share.google/lNtkDAw115HauZGUl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary--green avis__cta"
          >
            Laisser un avis
          </a>
        </div>

        <div className="avis__note-globale">
          <span className="avis__score">5,0</span>
          <div>
            <Etoiles note={5} />
            <span className="avis__count">Basé sur les avis Google</span>
          </div>
          <a
            href="https://share.google/lNtkDAw115HauZGUl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="avis__google-logo"
            />
          </a>
        </div>

        <div className="avis__grille">
          {avis.map(a => (
            <div key={a.id} className="avis-card">
              <div className="avis-card__top">
                <div className="avis-card__avatar">{a.nom.charAt(0)}</div>
                <div>
                  <p className="avis-card__nom">{a.nom}</p>
                  <p className="avis-card__date">{a.date}</p>
                </div>
              </div>
              <Etoiles note={a.note} />
              <p className="avis-card__texte">{a.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
