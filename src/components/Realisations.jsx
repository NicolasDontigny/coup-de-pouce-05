import GrainOverlay from './GrainOverlay'
import imgCuisine from '../assets/cuisine.jpg'
import imgChambre from '../assets/chambre.jpg'
import imgParquet from '../assets/parquet.jpg'
import imgLasure from '../assets/lasure.jpg'
import imgPeinture from '../assets/peinture.jpg'
import imgCabanon from '../assets/cabanon.jpg'
import imgBibliotheque from '../assets/bibliotheque.webp'
import imgAbri from '../assets/abri.jpg'
import './Realisations.css'

const photos = [
  { src: imgLasure, alt: 'Réalisation lasure et finitions' },
  { src: imgCuisine, alt: 'Réalisation cuisine rénovée' },
  { src: imgParquet, alt: 'Réalisation parquet' },
  { src: imgChambre, alt: 'Réalisation aménagement intérieur' },
  { src: imgPeinture, alt: 'Réalisation peinture' },
  { src: imgCabanon, alt: 'Réalisation abri de jardin' },
  { src: imgBibliotheque, alt: 'Réalisation bibliothèque sur mesure' },
  { src: imgAbri, alt: 'Réalisation abri pour bois' },
]

export default function Realisations() {
  return (
    <section id="realisations" className="realisations">
      <GrainOverlay variant="realisations" />
      <div className="container">
        <p className="section-label">Galerie</p>
        <h2 className="realisations__title">Mes réalisations</h2>
        <p className="realisations__subtitle">
          Quelques chantiers que j'ai réalisés dans les Hautes-Alpes.
        </p>

        <div className="realisations__grid">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`realisations__item realisations__item--${i + 1}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                onError={e => {
                  e.target.parentElement.classList.add('realisations__item--placeholder')
                  e.target.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
