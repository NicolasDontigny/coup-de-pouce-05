import logo from '../assets/logo.png'
import './Footer.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Petit coup de pouce 05" className="footer__logo" />
          <span className="footer__tagline">Multi-services · Hautes-Alpes</span>
        </div>

        <nav className="footer__nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">© {year} Petit coup de pouce 05</p>
      </div>
    </footer>
  )
}
