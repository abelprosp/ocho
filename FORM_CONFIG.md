# Configuração do Formulário de Contato

O formulário de contato está configurado para enviar dados para a API route `/api/submit-lead`. Existem várias opções para configurar o recebimento dos leads:

## Opção 1: Formspree (Recomendado para início rápido)

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário e copie o ID do formulário
3. Modifique `app/api/submit-lead/route.ts`:

```typescript
const formspreeResponse = await fetch(`https://formspree.io/f/YOUR_FORM_ID`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

if (!formspreeResponse.ok) {
  throw new Error('Erro ao enviar para Formspree')
}
```

## Opção 2: Netlify Forms

1. Adicione `data-netlify="true"` ao form em `components/CTAForm.tsx`
2. Faça deploy no Netlify
3. Os dados serão coletados automaticamente

## Opção 3: Integração com CRM (HubSpot, Salesforce, etc)

Modifique `app/api/submit-lead/route.ts` para fazer chamadas à API do seu CRM:

```typescript
// Exemplo com HubSpot
const hubspotResponse = await fetch('https://api.hubapi.com/contacts/v1/contact', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    properties: [
      { property: 'firstname', value: body.name },
      { property: 'email', value: body.email },
      { property: 'company', value: body.company },
    ],
  }),
})
```

## Opção 4: Serviço de Email (Resend, SendGrid, etc)

Envie um email quando um lead for submetido:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contato@ochomail.com',
  to: 'leads@ochomail.com',
  subject: 'Novo Lead - Landing Page',
  html: `
    <h2>Novo Lead Recebido</h2>
    <p><strong>Nome:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Empresa:</strong> ${body.company}</p>
    <p><strong>Faturamento:</strong> ${body.revenue || 'Não informado'}</p>
  `,
})
```

## Opção 5: Banco de Dados (PostgreSQL, MongoDB, etc)

Armazene os leads diretamente no banco de dados:

```typescript
import { db } from '@/lib/db'

await db.leads.create({
  data: {
    name: body.name,
    email: body.email,
    company: body.company,
    revenue: body.revenue,
    createdAt: new Date(),
  },
})
```

## Variáveis de Ambiente

Para APIs externas, crie um arquivo `.env.local`:

```env
HUBSPOT_API_KEY=your_api_key_here
RESEND_API_KEY=your_api_key_here
DATABASE_URL=your_database_url_here
```

