import Link from 'next/link'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Social Media Icons */}
        <div className={styles.connection}>

        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/studiogloom" target="_blank" referrerPolicy="no-referrer">
          <FaInstagram />
          </a>
          <a href="https://bsky.app/studiogloom" target="_blank" referrerPolicy="noreferrer" className={styles.socialIcon}>
          </a>
          <a href="https://www.twitter.com/studiogloom" target="_blank" referrerPolicy="noreferrer" className={styles.socialIcon}>
            <FaTwitter />
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletter}>
          <h4>stay updated</h4>
          <form className={styles.form}>
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
        </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h5>Quick Links</h5>
          <ul>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Text Links */}
        <div className={styles.social}>
          <h5>Follow</h5>
          <ul className={styles.socialList}>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://bsky.app/studiogloom" target="_blank" rel="noopener">
                Bluesky
              </a>
            </li>
            <li>
              <a href="https://twitter.com/studiogloom" target="_blank" rel="noopener">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className={styles.legal}>
          <h5>Legal</h5>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <p className={styles.credit}>
        © {new Date().getFullYear()} Studio Gloom. All rights reserved.
      </p>
    </footer>
  )
}
