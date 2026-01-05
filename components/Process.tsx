'use client'

import { useEffect, useState } from 'react'

interface StepProps {
  number: number
  title: string
  description: string
  delay?: number
}

function Step({ number, title, description, delay = 0 }: StepProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative bg-dark-light border border-dark-gray rounded-2xl p-8 hover:border-primary-500/50 hover:shadow-xl transition-all duration-300">
        {/* Number Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
          {number}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 mt-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Descoberta',
      description: 'Realizamos uma auditoria completa do seu email marketing atual e mapeamos toda a jornada do cliente. Identificamos oportunidades de otimização e pontos de melhoria estratégicos.',
      delay: 0,
    },
    {
      number: 2,
      title: 'Implementação',
      description: 'Construímos funis de automação personalizados e campanhas estratégicas alinhadas aos seus objetivos de negócio. Cada etapa é cuidadosamente planejada e executada.',
      delay: 200,
    },
    {
      number: 3,
      title: 'Escala',
      description: 'Otimização contínua baseada em dados e relatórios de performance detalhados. Ajustamos estratégias em tempo real para maximizar resultados e escalar seu crescimento.',
      delay: 400,
    },
  ]

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-400">
            Um processo estruturado para transformar seu email marketing
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-500/30 via-primary-400/50 to-primary-500/30 -z-0"></div>
            
            {steps.map((step) => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={step.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
