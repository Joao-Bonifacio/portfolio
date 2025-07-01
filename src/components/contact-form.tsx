'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Enviando...')

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      setStatus('Mensagem enviada com sucesso!')
      ;(event.target as HTMLFormElement).reset()
    } else {
      setStatus('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" name="message" required rows={5} />
      </div>
      <Button type="submit">Enviar Mensagem</Button>
      {status && <p className="mt-4 text-sm text-muted-foreground">{status}</p>}
    </form>
  )
}
