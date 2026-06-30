import logo from '../assets/logo.png'
import './Footer.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Zone', href: '#zone' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Petit coup de pouce 05" className="footer__logo" />
          <p className="footer__tagline">
            Votre artisan multi-services dans les Hautes-Alpes.
          </p>
        </div>

        <nav className="footer__nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href="tel:+33687234702" className="footer__phone">
            📞 06 87 23 47 02
          </a>
          <a href="mailto:petitcoupdepouce05@gmail.com" className="footer__email">
            petitcoupdepouce05@gmail.com
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} Benoît Sappe – Petit coup de pouce 05. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
