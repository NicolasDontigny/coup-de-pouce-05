import { useState, useEffect } from 'react'
import { ListIcon, XIcon } from '@phosphor-icons/react'
import PhoneButton from './PhoneButton'
import logo from '../assets/logo.jpg'
import './Navbar.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Zone', href: '#zone' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          <img src={logo} alt="Petit coup de pouce 05" />
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <PhoneButton className="btn-primary navbar__cta" label="06 87 23 47 02" />

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <XIcon size={22} color="white" weight="bold" /> : <ListIcon size={22} color="white" weight="bold" />}
        </button>
      </div>
    </header>
  )
}
