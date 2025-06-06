import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import styles from './NavBar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image src="/logo-no-words.png" alt="Studio Gloom logo" width={40} height={40} />
          <span className={styles.siteTitle}>StudioGloom</span>
        </Link>

        {/* Hamburger (only visible ≤768px) */}
        {!isMenuOpen && (
          <button
            className={styles.mobileMenuButton}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            {/* your SVG for ☰ */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        )}

        {/* Nav links (inline on desktop; slide-in on mobile) */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          {/* Close button (only visible when open) */}
          {isMenuOpen && (
            <li className={styles.closeMenuItem}>
              <button
                className={styles.closeMenuButton}
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>
            </li>
          )}

          {/* Your links */}
          {['shop','services','wholesale','contact'].map((path) => (
            <li key={path} onClick={() => setIsMenuOpen(false)}>
              <Link href={`/${path}`} className={styles.navLink}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </li>
          ))}

          {/* Subscribe form */}
          <li className={styles.navForm}>
            <form className={styles.form}>
              <input type="email" placeholder="Your email" className={styles.input} />
              <button type="submit" className={styles.button}>Subscribe</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  )
}
