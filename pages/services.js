// app/services/page.js
import Link from 'next/link'
import styles from './Services.module.css'

export const metadata = {
  title: 'Services – Studio Gloom',
}

export default function ServicesPage() {
  const services = ['code', 'design', 'illustration']

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Work</h1>

      <nav className={styles.nav}>
        {services.map((svc) => (
          <a
            key={svc}
            href={`#${svc}`}
            className={styles.navItem}
          >
            {svc[0].toUpperCase() + svc.slice(1)}
          </a>
        ))}
      </nav>

      {/* Code Section */}
      <section id="code" className={styles.section}>
        <h2 className={styles.sectionTitle}>Code</h2>
        <p className={styles.sectionDesc}>
          From modern React/Next.js front-ends to Rails APIs, I build performant, maintainable web
          applications tailored to your needs.
        </p>
        <div className={styles.worksGrid}>
          <div className={styles.card}>Project A (React)</div>
          <div className={styles.card}>Project B (Rails)</div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className={styles.section}>
        <h2 className={styles.sectionTitle}>Design</h2>
        <p className={styles.sectionDesc}>
          I craft user-centered interfaces and brand identities that stand out — from wireframes to
          pixel-perfect mockups.
        </p>
        <div className={styles.worksGrid}>
          <div className={styles.card}>Brand Refresh for XYZ</div>
          <div className={styles.card}>UI/UX for Mobile App</div>
        </div>
      </section>

      {/* Illustration Section */}
      <section id="illustration" className={styles.section}>
        <h2 className={styles.sectionTitle}>Illustration</h2>
        <p className={styles.sectionDesc}>
          Playful, custom illustrations for web, print, and social media campaigns that bring
          personality to any project.
        </p>
        <div className={styles.worksGrid}>
          <div className={styles.card}>Editorial Illustration</div>
          <div className={styles.card}>Sticker Pack Designs</div>
        </div>
      </section>

      <div className={styles.ctaWrapper}>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </div>
    </main>
  )
}
