// pages/wholesale.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiBox, FiDollarSign, FiTruck, FiCheckCircle, 
  FiClipboard, FiArrowRight, FiChevronDown
} from 'react-icons/fi';
import styles from './wholesale.module.css';

export default function Wholesale() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);

  const tiers = [
    { name: 'Starter', min: 100, discount: '5%', features: ['25 unit minimum', 'Standard catalog access', 'Email support'] },
    { name: 'Partner', min: 600, discount: '15%', features: ['100 unit minimum', 'Custom designs', 'Dedicated account manager'] },
    { name: 'Enterprise', min: 2000, discount: '25%', features: ['Bespoke production', 'Co-branding', 'Priority manufacturing'] }
  ];

  const faqs = [
    { question: "Minimum order requirements?", answer: "Minimum orders start at 25 units per SKU." },
    { question: "Shipping & lead times?", answer: "Standard production lead time is 4-6 weeks." }
  ];

  return (
    <>
      <Head>
        <title>Studio Gloom | Wholesale Partnerships</title>
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.eyebrow}>Wholesale Program</h1>
            <h2 className={styles.heroHeading}>
              Scale Your Business with<br />
              <span className={styles.heroHighlight}>Premium Products</span>
            </h2>
            <p className={styles.heroSubhead}>
              Exclusive wholesale pricing for retailers and businesses
            </p>
          </div>
          <div className={styles.heroArt}>
            <FiBox className={styles.heroIcon} />
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <FiCheckCircle />
                <span>500+ Satisfied Partners</span>
              </div>
              <div className={styles.stat}>
                <FiTruck />
                <span>Global Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className={styles.valueProp}>
        <div className={styles.propGrid}>
          <div className={styles.propCard}>
            <FiDollarSign className={styles.propIcon} />
            <h3>Competitive Margins</h3>
            <p>Industry-leading wholesale discounts up to 60% off MSRP</p>
          </div>
          <div className={styles.propCard}>
            <FiClipboard className={styles.propIcon} />
            <h3>Flexible Terms</h3>
            <p>Net 30 payment terms available for qualified accounts</p>
          </div>
          <div className={styles.propCard}>
            <FiTruck className={styles.propIcon} />
            <h3>Logistics Support</h3>
            <p>Drop shipping and inventory management solutions</p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className={styles.pricing}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Wholesale Tiers</h2>
          <p className={styles.sectionSubtitle}>Scale your savings with volume pricing</p>
        </div>
        <div className={styles.tierGrid}>
          {tiers.map((tier, index) => (
            <div key={tier.name} className={`${styles.tierCard} ${index === 1 ? styles.featured : ''}`}>
              {index === 1 && <div className={styles.featuredBadge}>Most Popular</div>}
              <h3>{tier.name}</h3>
              <div className={styles.tierPrice}>
                <span className={styles.priceLabel}>From</span>
                <div className={styles.price}>${tier.min}+</div>
              </div>
              <ul className={styles.tierFeatures}>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className={styles.tierCta}>
                Get Started <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Simple Partnership Process</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Application</h3>
            <p>Complete our wholesale inquiry form</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Verification</h3>
            <p>Business license validation</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Onboarding</h3>
            <p>Access wholesale portal & ordering</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={styles.faqItem}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className={styles.faqQuestion}>
                {faq.question}
                <FiChevronDown className={`${styles.faqIcon} ${openFaq === index ? styles.open : ''}`} />
              </div>
              {openFaq === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className={styles.moreQuestions}>Still have questions?</div>
        <Link href="/contact"><button className= {styles.contactButton}>Contact me!</button></Link>
      </section>
    </>
  );
}