import { useState } from 'react'
import { PhoneIcon, EnvelopeSimpleIcon, MapPinIcon, ClockIcon, CheckCircleIcon, PaperPlaneTiltIcon } from '@phosphor-icons/react'
import CopyableValue from './CopyableValue'
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
    icon: PhoneIcon,
    label: 'Téléphone',
    content: <CopyableValue href="tel:+33687234702" display="06 87 23 47 02" />,
  },
  {
    icon: EnvelopeSimpleIcon,
    label: 'Email',
    content: <CopyableValue href="mailto:petitcoupdepouce05@gmail.com" display="petitcoupdepouce05@gmail.com" />,
  },
  {
    icon: MapPinIcon,
    label: 'Adresse',
    content: <div className="contact__info-value">3850 Rte de Saint-Nicolas<br />05260 Saint-Jean-Saint-Nicolas</div>,
  },
  {
    icon: ClockIcon,
    label: 'Horaires',
    content: <div className="contact__info-value">Lun – Sam : 7h00 – 19h00</div>,
  },
]

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [form, setForm] = useState({
    nom: '', telephone: '', email: '', service: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Demande de devis – ${form.service || 'Site web'}`,
          from_name: form.nom,
          nom: form.nom,
          telephone: form.telephone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Me contacter</p>
        <h2 className="contact__title">Parlons de votre projet</h2>
        <p className="contact__subtitle">
          Un devis, une question, une urgence ? Je vous réponds sous 24h.
        </p>

        <div className="contact__inner">
          <div className="contact__info">
            {contactItems.map(({ icon: Icon, label, content }) => (
              <div key={label} className="contact__info-item">
                <div className="contact__info-icon">
                  <Icon size={18} weight="fill" color="white" />
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
              Décrivez votre projet, je vous réponds rapidement.
            </p>

            {sent ? (
              <div className="contact__success">
                <CheckCircleIcon size={20} weight="fill" />
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
                    <label htmlFor="telephone">Téléphone</label>
                    <input id="telephone" name="telephone" type="tel" placeholder="06 xx xx xx xx" value={form.telephone} onChange={handleChange} />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="vous@email.com" value={form.email} onChange={handleChange} required />
                </div>

                <div className="contact__field">
                  <label htmlFor="service">Service souhaité</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} required>
                    <option value="" disabled>Sélectionner...</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Votre projet</label>
                  <textarea id="message" name="message" rows={4} placeholder="Décrivez en quelques mots ce que vous souhaitez réaliser..." value={form.message} onChange={handleChange} required />
                </div>

                {error && <p className="contact__error">{error}</p>}
                <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                  <PaperPlaneTiltIcon size={16} weight="fill" />
                  {sending ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
