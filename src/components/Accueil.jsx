import { Phone, CaretRight, MapPin } from '@phosphor-icons/react'
import './Accueil.css'

export default function Accueil() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            HAUTES-ALPES · SAINT-JEAN-SAINT-NICOLAS
          </div>

          <h1 className="hero__title">
            Votre artisan<br />
            <em>de confiance</em><br />
            dans les Alpes
          </h1>

          <p className="hero__desc">
            Petits travaux, peinture, entretien extérieur, dépannage…
            J'interviens rapidement pour tous vos besoins, avec soin et honnêteté.
          </p>

          <div className="hero__actions">
            <a href="tel:+33687234702" className="btn-primary">
              <Phone size={16} weight="fill" />
              Appeler maintenant
            </a>
            <a href="#services" className="btn-outline-white">
              Voir les services
              <CaretRight size={16} weight="fill" />
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">7+</span>
              <span className="hero__stat-label">Services</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">05</span>
              <span className="hero__stat-label">Hautes-Alpes</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">Rapide</span>
              <span className="hero__stat-label">Intervention</span>
            </div>
          </div>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image-circle">
            <img
              src="/images/hero.jpg"
              alt="Benoît Sappe, artisan dans les Hautes-Alpes"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          <div className="hero__location-badge">
            <span className="hero__location-icon">
              <MapPin size={18} weight="fill" color="white" />
            </span>
            <div>
              <div className="hero__location-name">Hautes-Alpes · 05</div>
              <div className="hero__location-sub">Disponible pour vos projets</div>
            </div>
          </div>
          <div className="hero__dot hero__dot--1" />
          <div className="hero__dot hero__dot--2" />
        </div>
      </div>
    </section>
  )
}
