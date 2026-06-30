import './Services.css'

const services = [
  {
    id: 'petits-travaux',
    title: 'Petits travaux',
    desc: "Bricolage, fixations, petites réparations du quotidien.",
    img: '/images/service-petits-travaux.jpg',
    icon: '🔧',
  },
  {
    id: 'tonte',
    title: 'Tonte & débroussaillage',
    desc: "Entretien de vos extérieurs, pelouses, haies et espaces verts.",
    img: '/images/service-tonte.jpg',
    icon: '🌿',
  },
  {
    id: 'coupe-bois',
    title: 'Coupe & bois',
    desc: "Coupe de bois, sciage et rangement de votre stock de bûches.",
    img: '/images/service-bois.jpg',
    icon: '🪵',
  },
  {
    id: 'peinture',
    title: 'Peinture',
    desc: "Peinture intérieure et extérieure, finitions soignées.",
    img: '/images/service-peinture.jpg',
    icon: '🖌️',
  },
  {
    id: 'amenagement',
    title: 'Aménagement intérieur',
    desc: "Construction de rangements, montage, petites rénovations.",
    img: '/images/service-amenagement.jpg',
    icon: '🏠',
  },
  {
    id: 'depannage',
    title: 'Dépannage',
    desc: "Intervention rapide pour toute panne ou urgence, organisée et rapide.",
    img: '/images/service-depannage.jpg',
    icon: '⚡',
  },
  {
    id: 'conseils',
    title: 'Conseils',
    desc: "Accompagnement pour vos projets de travaux et d'aménagement.",
    img: '/images/service-conseils.jpg',
    icon: '💡',
  },
]

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-card__img">
        <img
          src={service.img}
          alt={service.title}
          onError={e => {
            e.target.parentElement.classList.add('service-card__img--placeholder')
            e.target.style.display = 'none'
          }}
        />
        <span className="service-card__icon">{service.icon}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <div>
            <p className="section-label">Ce que je fais</p>
            <h2 className="services__title">Mes services</h2>
            <p className="services__subtitle">
              Du petit bricolage à la rénovation complète, j'interviens pour tous vos besoins.
            </p>
          </div>
          <a href="#contact" className="btn-primary services__cta">
            Demander un devis
          </a>
        </div>

        <div className="services__grid">
          {services.map(s => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
