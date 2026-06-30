import { useState } from 'react'
import { Phone, EnvelopeSimple, MapPin, Clock, CheckCircle } from '@phosphor-icons/react'
import './Contact.css'

const serviceOptions = [
  'Petits travaux',
  'Tonte & débroussaillage',
  'Coupe & bois',
  'Peinture',
  'Aménagement intérieur',
  'Dépannage',
  'Conseils',
  'Autre',
]

const contactItems = [
  {
    icon: Phone,
    label: 'Téléphone',
    content: <a href="tel:+33687234702" className="contact__info-value">06 87 23 47 02</a>,
  },
  {
    icon: EnvelopeSimple,
    label: 'Email',
    content: <a href="mailto:petitcoupdepouce05@gmail.com" className="contact__info-value">petitcoupdepouce05@gmail.com</a>,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    content: <div className="contact__info-value">3850 Rte de Saint-Nicolas<br />05260 Saint-Jean-Saint-Nicolas</div>,
  },
  {
    icon: Clock,
    label: 'Horaires',
    content: <div className="contact__info-value">Lun – Sam : 7h00 – 19h00</div>,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    nom: '', prenom: '', email: '', service: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = `Demande de devis – ${form.service || 'Site web'}`
    const body = `Nom : ${form.prenom} ${form.nom}%0AEmail : ${form.email}%0AService : ${form.service}%0A%0AMessage :%0A${form.message}`
    window.location.href = `mailto:petitcoupdepouce05@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Nos coordonnées</p>
        <h2 className="contact__title">Parlons de votre projet</h2>
        <p className="contact__subtitle">
          Une question, une urgence ? Contactez-moi directement.
        </p>

        <div className="contact__inner">
          <div className="contact__info">
            {contactItems.map(({ icon: Icon, label, content }) => (
              <div key={label} className="contact__info-item">
                <div className="contact__info-icon">
                  <Icon size={18} weight="fill" />
                </div>
                <div>
                  <div className="contact__info-label">{label}</div>
                  {content}
                </div>
              </div>
            ))}
          </div>

          <div className="contact__form-wrap">
            <h3 className="contact__form-title">Demande de devis</h3>
            <p className="contact__form-subtitle">
              Décrivez votre projet, je vous rappelle rapidement.
            </p>

            {sent ? (
              <div className="contact__success">
                <CheckCircle size={20} weight="fill" />
                Merci ! Votre messagerie va s'ouvrir. À très vite !
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="nom">Nom</label>
                    <input id="nom" name="nom" type="text" placeholder="Votre nom" value={form.nom} onChange={handleChange} required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="prenom">Prénom</label>
                    <input id="prenom" name="prenom" type="text" placeholder="Votre prénom" value={form.prenom} onChange={handleChange} required />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
                </div>

                <div className="contact__field">
                  <label htmlFor="service">Service souhaité</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} required>
                    <option value="" disabled>Sélectionnez...</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Décrivez votre projet</label>
                  <textarea id="message" name="message" rows={4} placeholder="Quelques mots sur les travaux que vous souhaitez faire..." value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
