import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ochomail - Transformamos sua Lista de E-mails em sua Máquina de Lucro',
  description: 'Estratégias de Email Marketing e Automação de Alto Nível para Aumentar o LTV e Reduzir o CAC. Solicite sua auditoria gratuita.',
  keywords: 'email marketing, automação de email, marketing digital, ROI, LTV, CAC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans bg-dark text-white">{children}</body>
    </html>
  )
}

