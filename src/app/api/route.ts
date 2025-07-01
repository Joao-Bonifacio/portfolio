import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 },
      )
    }

    // AQUI VOCÊ INTEGRA UM SERVIÇO DE E-MAIL
    // Exemplo: Usando Resend, Nodemailer, SendGrid, etc.

    // Simulação de sucesso
    // await sendEmail({ name, email, message });

    return NextResponse.json(
      { message: 'Mensagem recebida com sucesso!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro na API de contato:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 },
    )
  }
}
