import Link from 'next/link'
import styles from './terms.module.css'

export const metadata = {
  title: 'Terms of Service – Studio Gloom',
}

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.updated}>Last updated: May 2, 2025</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.sectionContent}>
          By browsing or placing an order on Studio Gloom, you agree to these Terms. If you do not agree, please do not use this site.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Purchases &amp; Payment</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Products:</strong> Art prints, apparel, and other creative goods.
          </li>
          <li className={styles.listItem}>
            <strong>Order Confirmation:</strong> You’ll receive an email acknowledging your order.
          </li>
          <li className={styles.listItem}>
            <strong>Payment:</strong> Securely processed via third-party providers. We never store your card data.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Services &amp; Contracts</h2>
        <p className={styles.sectionContent}>
          All creative services (design, illustration, consulting, etc.) are provided under separate, written contracts between you and Studio Gloom. Each such contract will set out
          the scope, deliverables, timeline, fees, and payment terms and is legally binding once signed by both parties. In the event of any conflict between these Terms
          and a service contract, the terms of the service contract shall prevail for that engagement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Shipping &amp; Delivery</h2>
        <p className={styles.sectionContent}>
          Domestic orders ship in 5–7 business days; international in 10–21 days. Risk of loss transfers to you once the carrier picks up your package.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Returns &amp; Refunds</h2>
        <p className={styles.sectionContent}>
          <a href="mailto:thestudiogloom@gmail.com">thestudiogloom@gmail.com</a>. All sales are final, refunds and exchanges are at the discretion of Studio Gloom.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
        <p className={styles.sectionContent}>
          All site content—designs, images, text, code—is © Studio Gloom. You may download for personal, non-commercial use only.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
        <p className={styles.sectionContent}>
          Our liability for any claim related to a product or service is limited to the price paid for that product or the fees paid under the service contract.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Governing Law</h2>
        <p className={styles.sectionContent}>
          These Terms are governed by the laws of New York State. Any disputes will be resolved in the state or federal courts of New York County.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Contact</h2>
        <p className={styles.sectionContent}>
          Questions? Email us at <a href="mailto:thestudiogloom@gmail.com">thestudiogloom@gmail.com</a>.
        </p>
      </section>

      <hr className={styles.hr} />

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>← Home</Link>
        <Link href="/privacy" className={styles.navLink}>Privacy Policy →</Link>
      </nav>
    </main>
  )
}