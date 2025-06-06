// components/CartIcon.js
import { useCart } from '../lib/cart-context'
import Link from 'next/link'

export default function CartIcon() {
  const { items } = useCart()
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <Link href="/cart" className="cart-icon">
      🛒
      {count > 0 && <span className="badge">{count}</span>}
    </Link>
  )
}
