'use client'

import { useEffect, useState } from 'react'

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  delay?: number
}

function Service({ icon, title, description, features, delay = 0 }: ServiceProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`bg-dark-light border border-dark-gray rounded-2xl p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } hover:border-primary-500/50 hover:shadow-xl`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mb-6 text-primary-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Estratégia e Consultoria',
      description: 'Desenvolvemos estratégias personalizadas de email marketing alinhadas aos seus objetivos de negócio.',
      features: [
        'Auditoria completa do email marketing atual',
        'Definição de estratégia e roadmap',
        'Segmentação avançada de audiência',
        'Cronograma de implementação'
      ],
      delay: 0,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Automação e Funis',
      description: 'Criamos funis de automação complexos que nutrem leads e convertem clientes de forma escalável.',
      features: [
        'Desenvolvimento de funis personalizados',
        'Automações de onboarding e reengajamento',
        'Fluxos de segmentação dinâmica',
        'Integração com sua stack tecnológica'
      ],
      delay: 150,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Copywriting e Design',
      description: 'Textos que convertem e designs que engajam. Cada email é otimizado para máxima performance.',
      features: [
        'Copywriting focado em conversão',
        'Design de templates responsivos',
        'Testes A/B de assunto e conteúdo',
        'Otimização contínua de performance'
      ],
      delay: 300,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análise e Otimização',
      description: 'Monitoramos, analisamos e otimizamos continuamente suas campanhas para maximizar ROI.',
      features: [
        'Relatórios detalhados de performance',
        'Análise de ROI e métricas de negócio',
        'Recomendações estratégicas mensais',
        'Ajustes contínuos baseados em dados'
      ],
      delay: 450,
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-400">
            Soluções completas de email marketing para empresas que querem resultados reais
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

