import { WrenchIcon, ScissorsIcon, TreeIcon, PaintBrushIcon, HouseIcon, LightningIcon, ChatsIcon } from '@phosphor-icons/react'
import imgCabanon from '../assets/Cabanon.jpg'
import imgCoupe from '../assets/coupe.webp'
import imgHache from '../assets/hache.jpg'
import imgPeinture from '../assets/Peinture_2.jpg'
import imgBibliotheque from '../assets/bibliotheque.webp'
import './Services.css'

const services = [
  {
    id: 'petits-travaux',
    title: 'Petits travaux',
    desc: "Intérieur et extérieur — bricolage, fixations, petites réparations du quotidien.",
    img: imgCabanon,
    Icon: WrenchIcon,
  },
  {
    id: 'tonte',
    title: 'Tonte & débroussaillage',
    desc: "Entretien de vos extérieurs, pelouses, talus et espaces verts. Matériel professionnel sur batterie — silencieux et propre.",
    img: imgCoupe,
    Icon: ScissorsIcon,
  },
  {
    id: 'coupe-bois',
    title: 'Coupe & bois',
    desc: "Coupe, fendage et rangement de bois de chauffage.",
    img: imgHache,
    Icon: TreeIcon,
  },
  {
    id: 'peinture',
    title: 'Peinture',
    desc: "Peinture intérieure et extérieure, finitions soignées.",
    img: imgPeinture,
    Icon: PaintBrushIcon,
  },
  {
    id: 'amenagement',
    title: 'Aménagement intérieur',
    desc: "Construction de rangements, montage, petites rénovations.",
    img: imgBibliotheque,
    Icon: HouseIcon,
  },
  {
    id: 'depannage',
    title: 'Dépannage',
    desc: "Intervention rapide pour toute panne ou urgence.",
    img: '/images/service-depannage.jpg',
    Icon: LightningIcon,
  },
  {
    id: 'conseils',
    title: 'Conseils',
    desc: "Accompagnement pour vos projets de travaux et d'aménagement.",
    img: '/images/service-conseils.jpg',
    Icon: ChatsIcon,
  },
]

function ServiceCard({ service, isLast }) {
  const { Icon } = service
  return (
    <div className={`service-card${isLast ? ' service-card--last' : ''}`}>
      {/* Wrapper relatif pour que l'icône déborde sans être clippée */}
      <div className="service-card__img-wrap">
        <div className="service-card__img">
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            decoding="async"
            onError={e => {
              e.target.parentElement.classList.add('service-card__img--placeholder')
              e.target.style.display = 'none'
            }}
          />
        </div>
        <span className="service-card__icon">
          <Icon size={20} weight="fill" color="white" />
        </span>
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
          <a href="#contact" className="btn-primary btn-primary--green services__cta">
            Demander un devis
          </a>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} isLast={i === services.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
