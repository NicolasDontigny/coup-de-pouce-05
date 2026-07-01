import { CaretRightIcon, MapPinIcon } from '@phosphor-icons/react'
import GrainOverlay from './GrainOverlay'
import PhoneButton from './PhoneButton'
import imgBibliotheque from '../assets/bibliotheque.webp'
import './Accueil.css'

export default function Accueil() {
  return (
    <section id="accueil" className="accueil">
      <GrainOverlay variant="accueil" />
      <div className="container accueil__inner">
        <div className="accueil__content">
          <div className="accueil__tag">
            <span className="accueil__tag-dot" />
            HAUTES-ALPES · SAINT-JEAN-SAINT-NICOLAS
          </div>

          <h1 className="accueil__title">
            Votre artisan<br />
            <em>de confiance</em><br />
            dans les Alpes
          </h1>

          <p className="accueil__desc">
            Petits travaux, peinture, entretien extérieur, dépannage…
            J'interviens rapidement pour tous vos besoins, avec soin et honnêteté.
          </p>

          <div className="accueil__actions">
            <PhoneButton />
            <a href="#services" className="btn-outline-white">
              Voir les services
              <CaretRightIcon size={16} weight="fill" />
            </a>
          </div>

          <div className="accueil__stats">
            <div className="accueil__stat">
              <span className="accueil__stat-value">7+</span>
              <span className="accueil__stat-label">Services</span>
            </div>
            <div className="accueil__stat-divider" />
            <div className="accueil__stat">
              <span className="accueil__stat-value">05</span>
              <span className="accueil__stat-label">Hautes-Alpes</span>
            </div>
            <div className="accueil__stat-divider" />
            <div className="accueil__stat">
              <span className="accueil__stat-value">Rapide</span>
              <span className="accueil__stat-label">Intervention</span>
            </div>
          </div>
        </div>

        <div className="accueil__image-wrap">
          <div className="accueil__image-circle">
            <img
              src={imgBibliotheque}
              alt="Benoît Sappe, artisan dans les Hautes-Alpes"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          <div className="accueil__location-badge">
            <span className="accueil__location-icon">
              <MapPinIcon size={18} weight="fill" color="white" />
            </span>
            <div>
              <div className="accueil__location-name">Hautes-Alpes · 05</div>
              <div className="accueil__location-sub">Disponible pour vos projets</div>
            </div>
          </div>
          <div className="accueil__dot accueil__dot--1" />
          <div className="accueil__dot accueil__dot--2" />
        </div>
      </div>
    </section>
  )
}
