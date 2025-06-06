// lib/cart-context.js
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  // load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cart') || '[]')
    setItems(saved)
  }, [])

  // sync to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = product => {
    setItems([...items, { ...product, quantity: 1 }])
  }
  const updateQty = (id, qty) => {
    setItems(items.map(i => i.id === id ? { ...i, quantity: qty } : i))
  }
  const removeItem = id => {
    setItems(items.filter(i => i.id !== id))
  }
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, subtotal, addItem, updateQty, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
