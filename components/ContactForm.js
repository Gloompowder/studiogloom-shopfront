// app/contact/ContactForm.js
'use client'

import { useState } from 'react'
import styles from '../pages/contact.module.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact_messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact_message: form }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className={styles.textarea}
          rows={6}
        />
      </label>
      <button type="submit" className={styles.button}>
        Send Message
      </button>
      {status === 'sending' && <p className={styles.status}>Sending…</p>}
      {status === 'success' && <p className={styles.status}>Thanks! I’ll reply soon.</p>}
      {status === 'error' && <p className={`${styles.status} ${styles.error}`}>Something went wrong.</p>}
    </form>
  )
}
