'use client'

import { useEffect, useState } from 'react'

interface CaseStudyProps {
  company: string
  industry: string
  challenge: string
  solution: string
  results: Array<{ metric: string; value: string }>
  delay?: number
}

function CaseStudy({ company, industry, challenge, solution, results, delay = 0 }: CaseStudyProps) {
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
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{company}</h3>
          <span className="text-primary-500 text-sm font-medium">{industry}</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-white font-semibold mb-2">Desafio</h4>
          <p className="text-gray-400 text-sm">{challenge}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Solução</h4>
          <p className="text-gray-400 text-sm">{solution}</p>
        </div>
      </div>

      <div className="pt-6 border-t border-dark-gray">
        <h4 className="text-white font-semibold mb-4">Resultados</h4>
        <div className="grid grid-cols-2 gap-4">
          {results.map((result, index) => (
            <div key={index} className="bg-dark rounded-lg p-4 border border-dark-gray">
              <div className="text-2xl font-bold text-primary-500 mb-1">{result.value}</div>
              <div className="text-xs text-gray-400">{result.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const cases = [
    {
      company: 'E-commerce Fashion',
      industry: 'E-commerce',
      challenge: 'Taxa de abertura abaixo de 15% e baixa conversão em campanhas promocionais.',
      solution: 'Implementamos segmentação avançada, automações de abandonar carrinho e copywriting otimizado.',
      results: [
        { metric: 'Taxa de Abertura', value: '+185%' },
        { metric: 'Taxa de Conversão', value: '+320%' },
        { metric: 'ROI', value: '+450%' },
        { metric: 'Receita Mensal', value: '+R$ 2.5M' },
      ],
      delay: 0,
    },
    {
      company: 'SaaS B2B',
      industry: 'Tecnologia',
      challenge: 'Funil de conversão ineficiente e alto custo de aquisição de clientes.',
      solution: 'Criamos funis de nutrição complexos, automações de onboarding e campanhas de upsell.',
      results: [
        { metric: 'Taxa de Conversão', value: '+280%' },
        { metric: 'LTV', value: '+195%' },
        { metric: 'CAC', value: '-45%' },
        { metric: 'Churn Rate', value: '-38%' },
      ],
      delay: 200,
    },
    {
      company: 'Serviços Digitais',
      industry: 'Serviços',
      challenge: 'Falta de engajamento com clientes e campanhas sem personalização.',
      solution: 'Desenvolvemos estratégia de relacionamento, automações personalizadas e jornadas multicanal.',
      results: [
        { metric: 'Taxa de Engajamento', value: '+240%' },
        { metric: 'NPS', value: '+35 pts' },
        { metric: 'Receita Recorrente', value: '+180%' },
        { metric: 'ROI', value: '+380%' },
      ],
      delay: 400,
    },
  ]

  return (
    <section id="cases" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-gray-400">
            Resultados reais de empresas que transformaram seu email marketing conosco
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              company={caseStudy.company}
              industry={caseStudy.industry}
              challenge={caseStudy.challenge}
              solution={caseStudy.solution}
              results={caseStudy.results}
              delay={caseStudy.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

