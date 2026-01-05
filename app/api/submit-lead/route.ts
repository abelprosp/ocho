import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validação básica
    if (!body.email || !body.first_name || !body.last_name || !body.phone_number || !body.company) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Preparar dados para o webhook da Ochomail
    // Mapeando conforme os campos especificados
    const webhookData: Record<string, any> = {
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      source: body.source || 'Landing Page',
      phone_number: body.phone_number,
      company: body.company,
    }

    // Campos opcionais
    if (body.designation) {
      webhookData.designation = body.designation
    }

    // Enviar para o webhook da Ochomail
    const webhookUrl = 'https://app.ochomail.online/?mailmint=1&route=webhook&topic=contact&hash=ef00f314-7ad2-463a-ab35-1586c4f9b0b6'
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text()
      console.error('Erro ao enviar para webhook:', errorText)
      return NextResponse.json(
        { error: 'Erro ao processar solicitação no servidor' },
        { status: 500 }
      )
    }

    const webhookResult = await webhookResponse.json()

    return NextResponse.json(
      { message: 'Lead enviado com sucesso', data: webhookResult },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar lead:', error)
    return NextResponse.json(
      { error: 'Erro ao processar solicitação' },
      { status: 500 }
    )
  }
}
