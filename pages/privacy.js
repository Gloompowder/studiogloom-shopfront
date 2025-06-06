import Link from 'next/link'
import styles from './privacy.module.css'

export const metadata = {
  title: 'Privacy Policy – Studio Gloom',
}

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: May 2, 2025</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Introduction</h2>
        <p className={styles.sectionContent}>
          Studio Gloom (“we,” “us,” “our”) respects your privacy. This Policy explains how we collect,
          use, and protect your information when you visit studiogloom.com.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Order & Contact Info:</strong> Name, email, shipping address you provide to place
            an order or contact us.
          </li>
          <li className={styles.listItem}>
            <strong>Communications:</strong> Messages you send via our contact form or subscribe to
            our newsletter.
          </li>
          <li className={styles.listItem}>
            <strong>Auto-Collected Data:</strong> Only necessary cookies will be used for shopping cart functionality.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Process and fulfill orders, send order updates.</li>
          <li className={styles.listItem}>Respond to inquiries and deliver newsletters.</li>
          <li className={styles.listItem}>Analyze site usage to improve our offerings.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Cookies &amp; Tracking</h2>
        <p className={styles.sectionContent}>
          We use cookies (including Google Analytics) to understand traffic and behavior. You can
          disable cookies via your browser settings; note this may affect site functionality.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Third-Party Services</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener"
            >
              Stripe
            </a> (payments)
          </li>
          <li className={styles.listItem}>
            <a
              href="https://www.paypal.com/privacy"
              target="_blank"
              rel="noopener"
            >
              PayPal
            </a> (payments)
          </li>
          <li className={styles.listItem}>
            <a
              href="https://mailchimp.com/legal/privacy"
              target="_blank"
              rel="noopener"
            >
              Mailchimp
            </a> (email)
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Data Retention &amp; Security</h2>
        <p className={styles.sectionContent}>
          We retain order and contact records for up to 3 years. We use SSL encryption and secure
          servers to protect your data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Your Rights</h2>
        <p className={styles.sectionContent}>
          You can request to access, correct, or delete your personal data at any time by emailing{' '}
          <a href="mailto:thestudiogloom@gmail.com">thestudiogloom@gmail.com</a>. You may also unsubscribe from Studio Gloom communications at any time.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Children’s Privacy</h2>
        <p className={styles.sectionContent}>
          Our site is not intended for children under 13. We do not knowingly collect data from
          anyone under 13. If you are under the age of 13, please use parental guidance when navigating.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Changes to This Policy</h2>
        <p className={styles.sectionContent}>
          We may update this Policy—changes will be posted here with a new “Last updated” date.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Contact Us</h2>
        <p className={styles.sectionContent}>
          For privacy questions, email us at{' '}
          <a href="mailto:thestudiogloom@gmail.com">thestudiogloom@gmail.com</a>.
        </p>
      </section>

      <hr className={styles.hr} />

      <nav className={styles.nav}>
        <Link href="/terms" className={styles.navLink}>← Terms of Service</Link>
        <Link href="/" className={styles.navLink}>Home →</Link>
      </nav>
    </main>
  )
}
