import './Realisations.css'

const photos = [
  { src: '/images/real-1.jpg', alt: 'Réalisation cuisine rénovée' },
  { src: '/images/real-2.jpg', alt: 'Réalisation travaux bois' },
  { src: '/images/real-3.jpg', alt: 'Réalisation aménagement intérieur' },
  { src: '/images/real-4.jpg', alt: 'Réalisation peinture' },
  { src: '/images/real-5.jpg', alt: 'Réalisation rénovation' },
  { src: '/images/real-6.jpg', alt: 'Réalisation finitions' },
]

export default function Realisations() {
  return (
    <section id="realisations" className="realisations">
      <div className="container">
        <p className="section-label">Galerie</p>
        <h2 className="realisations__title">Mes réalisations</h2>
        <p className="realisations__subtitle">
          Quelques chantiers réalisés dans les Hautes-Alpes.
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
