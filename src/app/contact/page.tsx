import { ContactForm } from '@/components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato para discutir projetos, oportunidades ou apenas para dizer olá.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl py-12 mx-auto min-h-[80vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Entre em Contato</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tem uma pergunta, uma proposta de projeto ou apenas quer dizer oi?
          Ficarei feliz em ouvir de você. Preencha o formulário abaixo ou me
          encontre nas redes sociais.
        </p>
      </div>
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  )
}
