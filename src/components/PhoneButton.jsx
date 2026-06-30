import { useState, useEffect, useRef } from 'react'
import { PhoneIcon, CopyIcon, CheckIcon } from '@phosphor-icons/react'
import './PhoneButton.css'

const PHONE_DISPLAY = '06 87 23 47 02'
const PHONE_TEL = 'tel:+33687234702'

export default function PhoneButton({ className = 'btn-primary', label = 'Appeler maintenant' }) {
  const [isTouch, setIsTouch] = useState(false)
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleCopy = () => {
    navigator.clipboard.writeText(PHONE_DISPLAY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isTouch) {
    return (
      <a href={PHONE_TEL} className={className}>
        <PhoneIcon size={16} weight="fill" />
        {label}
      </a>
    )
  }

  return (
    <div className="phone-btn-wrap" ref={ref}>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(o => !o)}
      >
        <PhoneIcon size={16} weight="fill" />
        {label}
      </button>

      {open && (
        <div className="phone-popover">
          <p className="phone-popover__label">Appelez Benoît</p>
          <p className="phone-popover__number">{PHONE_DISPLAY}</p>
          <button
            type="button"
            className="phone-popover__copy"
            onClick={handleCopy}
          >
            {copied
              ? <><CheckIcon size={14} weight="bold" /> Copié !</>
              : <><CopyIcon size={14} weight="bold" /> Copier le numéro</>
            }
          </button>
        </div>
      )}
    </div>
  )
}
