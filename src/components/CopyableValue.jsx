import { useState, useEffect, useRef } from 'react'
import { CopyIcon, CheckIcon } from '@phosphor-icons/react'
import './CopyableValue.css'

export default function CopyableValue({ href, display, className = 'contact__info-value' }) {
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
    navigator.clipboard.writeText(display)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isTouch) {
    return <a href={href} className={className}>{display}</a>
  }

  return (
    <div className="copyable-wrap" ref={ref}>
      <button
        type="button"
        className={`${className} copyable-trigger`}
        onClick={() => setOpen(o => !o)}
      >
        {display}
      </button>

      {open && (
        <div className="copyable-popover">
          <p className="copyable-popover__value">{display}</p>
          <button
            type="button"
            className="copyable-popover__copy"
            onClick={handleCopy}
          >
            {copied
              ? <><CheckIcon size={13} weight="bold" /> Copié !</>
              : <><CopyIcon size={13} weight="bold" /> Copier</>
            }
          </button>
        </div>
      )}
    </div>
  )
}
