// components/MiniCart.js
import { useCart } from '../lib/cart-context'
import Link from 'next/link'

export default function MiniCart({ isOpen, onClose }) {
  const { items, subtotal } = useCart()

  if (!isOpen) return null
  return (
    <aside className="mini-cart">
      <button onClick={onClose} aria-label="Close">×</button>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            <img src={i.image} width={40} height={40} alt={i.name} />
            <div>
              <p>{i.name}</p>
              <p>{i.quantity} × ${i.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
      <Link href="/cart" className="button full-cart-btn">View Cart & Checkout</Link>
    </aside>
  )
}
