'use client'

import { useEffect, useState } from 'react'

interface PillarProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function Pillar({ icon, title, description, delay = 0 }: PillarProps) {
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
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default function ValueProposition() {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Estratégia de Automação',
      description: 'Funis complexos e segmentação avançada que convertem leads em clientes fiéis. Criamos jornadas personalizadas que nutrem cada contato no momento certo.',
      delay: 0,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Copywriting de Conversão',
      description: 'Textos que vendem e constroem marca. Cada email é estrategicamente escrito para maximizar abertura, clique e conversão, mantendo a voz única da sua empresa.',
      delay: 200,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análise e Otimização',
      description: 'Testes A/B contínuos e relatórios de ROI detalhados. Transformamos dados em decisões estratégicas que elevam constantemente o desempenho das suas campanhas.',
      delay: 400,
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Não é Apenas Enviar E-mail.{' '}
            <span className="text-primary-500">É Engenharia de Relacionamento.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Pillar
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              delay={pillar.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
