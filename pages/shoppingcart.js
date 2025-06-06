// app/cart/page.js
'use client'
import { useCart } from '../../lib/cart-context'

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem } = useCart()

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-grid">
        <ul className="item-list">
          {items.map(i => (
            <li key={i.id}>
              <img src={i.image} width={80} height={80} alt={i.name} />
              <div>
                <a href={`/shop/${i.id}`}><h2>{i.name}</h2></a>
                <p>${i.price.toFixed(2)}</p>
                <label>
                  Qty
                  <input
                    type="number"
                    min="1"
                    value={i.quantity}
                    onChange={e => updateQty(i.id, +e.target.value)}
                  />
                </label>
                <button onClick={() => removeItem(i.id)}>Remove</button>
              </div>
              <p className="line-total">${(i.quantity * i.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>

        <aside className="summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping: Calculated at checkout</p>
          <p><strong>Total: ${subtotal.toFixed(2)}</strong></p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </aside>
      </div>
      <a href="/shop" className="continue-shopping">← Continue Shopping</a>
    </main>
  )
}
