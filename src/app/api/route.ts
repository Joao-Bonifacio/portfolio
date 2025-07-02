import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 },
      )
    }

    const response = await resend.emails.send({
      from: 'noreply@tradelife.com.br',
      to: 'joaojunior.b22@gmail.com',
      subject: `📬 Nova mensagem de contato de ${name} - (PORTFOLIO)`,
      replyTo: email,
      html: `
        <h2>Mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    if (response.error) {
      console.error('Erro ao enviar email:', response.error)
      return NextResponse.json(
        { error: 'Erro ao enviar o email.' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro interno:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 },
    )
  }
}
