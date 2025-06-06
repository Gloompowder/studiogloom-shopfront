// app/contact/page.js
import Link from 'next/link';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact – Studio Gloom',
};

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left: Form */}
        <div className={styles.formColumn}>
          <h2 className={styles.subtitle}>Say Hello!</h2>
          <form className={styles.form}>
            {[
              { id: 'name',    label: 'Name',    type: 'text'  },
              { id: 'email',   label: 'Email',   type: 'email' },
              { id: 'subject', label: 'Subject', type: 'text'  },
              { id: 'phone',   label: 'Phone',   type: 'tel'   },
            ].map(field => (
              <div key={field.id} className={styles.field}>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.label}
                  className={styles.input}
                />
              </div>
            ))}
            <div className={styles.field}>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                className={styles.textarea}
              />
            </div>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className={styles.infoColumn}>
          <h2 className={styles.subtitle}>Studio Info</h2>
          <address className={styles.address}>
            123 Studio Lane<br/>
            Art City, AC 12345<br/>
            <a href="tel:+11234567890" className={styles.infoLink}>
              +1 (123) 456-7890
            </a><br/>
            <a href="mailto:thestudiogloom@gmail.com" className={styles.infoLink}>
              thestudiogloom@gmail.com
            </a>
          </address>
          <div className={styles.ctaContainer}>
            <Link href="/services" className={styles.ctaLink}>
              Explore Services
            </Link>
            <Link href="/shop" className={styles.ctaLink}>
              Visit Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}