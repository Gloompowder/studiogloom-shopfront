// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight, FiInstagram, FiGithub } from 'react-icons/fi';
import styles from './index.module.css'
import logo from '../public/logo-no-words.png';
import { useMemo, useEffect, useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function generatePositions(count, minDistance = 20, maxTries = 500) {
    const positions = [];
    let tries = 0;
  
    while (positions.length < count && tries < maxTries) {
      tries++;
      const top = Math.floor(Math.random() * 80) + 10;   
      const left = Math.floor(Math.random() * 80) + 10;
  
      const tooClose = positions.some(pos => {
        const dx = pos.left - left;
        const dy = pos.top  - top;
        return Math.hypot(dx, dy) < minDistance;
      });
  
      if (!tooClose) {
        positions.push({ top, left });
      }
    }
  
    return positions;
  }
  const shapeCount = 10
  const types = ['circle','square','triangle','squiggle','loop']
  const positions = useMemo(
    () => generatePositions(shapeCount, 20, 500),
    [shapeCount]
  )


  return (
    <>
      <Head>
        <title>Studio Gloom | Strategic Digital Design, Illustration and Code</title>
        <meta name="description" content="Modern digital solutions with thoughtful design, illustration, and code" />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Image src={logo} alt='studiogloom-logo' className={styles.logoScale} width={150} height={150}/>
            <h1 className={styles.heroHeadline}>
              Effective Code, Art, & Design for
              <span className={styles.heroAccent}> Anyone & Everyone</span>
            </h1>
            <p className={styles.heroSubhead}>
              Experiences that balance creativity and business goals
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/shop" className={styles.ctaButton}>
                Shop
              </Link>
              <Link href="/services" className={styles.ctaButton}>
                Services
              </Link>
              <Link href="/wholesale" className={styles.ctaButton}>
                Wholesale
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.about}>
  <div className={styles.sectionHeader}>
    <h2 className={styles.aboutHeader}>About Studio Gloom</h2>
  </div>

  <div className={styles.aboutContent}>
    <p className={styles.aboutText}>
      At Studio Gloom, we mix thoughtful design, hand-drawn art, and effective code into digital experiences people actually love. Whether we’re sketching logos, building custom websites, or crafting animations, our all-in-one approach makes brands shine!
    </p>

    <div className={styles.aboutHighlights}>
      <div className={styles.highlightCard}>
        <div className={styles.highlightNumber}>01</div>
        <h3 className={styles.highlightTitle}>Big-Picture Strategy</h3>
        <p className={styles.highlightText}>
          We dig into your goals and strategize so every design choice works harder.
        </p>
      </div>

      <div className={styles.highlightCard}>
        <div className={styles.highlightNumber}>02</div>
        <h3 className={styles.highlightTitle}>Engineering Excellence</h3>
        <p className={styles.highlightText}>
          From React to Rails, we pick the right tools and write code that lasts.
        </p>
      </div>
    </div>

    <Link href="/about" className={styles.ctaButton}>
      Learn More →
    </Link>
  </div>
</section>


        {/* Shop Preview */}
        <section className={styles.shopPreview}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Products</h2>
          </div>
          <div className={styles.productGrid}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.productCard}>
                <div className={styles.productImage}>
                  <span className={styles.placeholderText}>Product Photo</span>
                </div>
                <div className={styles.productInfo}>
                  <h3>Product Name {item}</h3>
                  <p>$XX.XX</p>
                  <div className={styles.productActions}>
                    <button className={styles.cartButton}>Add to Cart</button>
                    <button className={styles.wholesaleButton}>Bulk Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.collaboration}>
  <div className={styles.splitSection}>
    <div className={styles.splitContent}>
    <div className={styles.collabTypes}>
                <div className={styles.collabCard}>
                  <h3>Brand Partnerships</h3>
                  <p>Co-branded products and limited editions</p>
                </div>
                <div className={styles.collabCard}>
                  <h3>Wholesale Inquiries</h3>
                  <p>Stock our products in your store</p>
                </div>
                <div className={styles.collabCard}>
                  <h3>Custom Orders</h3>
                  <p>Bespoke designs for your needs</p>
                </div>
              </div>
              <Link href="/wholesale" target="_self" rel='noreferrer' className={styles.ctaButton}>
                Collab →
              </Link>
    </div>
  </div>
</section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialHeader}>
            <h2 className ={styles.S}>Client Experiences</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.testimonialCard}>
                <div className={styles.quoteMark}>“</div>
                <p className={styles.testimonialText}>
                  Studio Gloom brought both strategic thinking and creative excellence to our 
                  rebranding project. Their attention to detail elevated our digital presence.
                </p>
                <div className={styles.clientInfo}>
                  <h4>Sarah Chen</h4>
                  <p>CMO, TechForward</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Updated CTA */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              Let's Create Something Amazing
              <span className={styles.ctaAccent}>Together</span>
            </h2>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.ctaButton}>
                Start Your Project →
              </Link>
              <Link href="/wholesale" className={styles.ctaButton}>
                Wholesale Inquiry →
              </Link>
              <Link href="/collaborate" className={styles.ctaButton}>
                Collaborate →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

