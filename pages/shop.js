// app/shop/page.js
import Link from 'next/link'
import Image from 'next/image'
import styles from './shop.module.css'

export const metadata = {
  title: 'Shop – Studio Gloom (Placeholder)',
}

export default function ShopPage() {
  const products = [
    { id: 1, name: 'Forest Art Print',    price: 29.99, img: '/placeholder-1.png' },
    { id: 2, name: 'Moody Sticker Pack',   price: 9.99,  img: '/placeholder-2.png' },
    { id: 3, name: 'Dark T-Shirt Design',  price: 35.00, img: '/placeholder-3.png' },
    { id: 4, name: 'Illustration Poster',  price: 24.50, img: '/placeholder-4.png' },
  ]

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Shop Art &amp; Goods</h1>

      <div className={styles.grid}>
        {products.map((p) => (
          <Link key={p.id} href={`/shop/${p.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                className={styles.image}
                priority
              />
            </div>
            <h2 className={styles.cardTitle}>{p.name}</h2>
            <p className={styles.cardPrice}>${p.price.toFixed(2)}</p>
            <button>Add to Cart</button>
            <button>Learn More</button>
          </Link>
        ))}
      </div>
    </main>
  )
}
