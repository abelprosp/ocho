'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Banner */}
              <div className="inline-flex items-center gap-2 bg-dark-light border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="text-white text-sm">Especializado em Clínicas de Estética e Odontologia</span>
                <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Email Marketing que{' '}
                <span className="text-primary-500">Preenche sua Agenda</span> com Pacientes
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                Dispare campanhas de email marketing estratégicas para sua clínica de estética ou odontologia. Conquiste mais pacientes, reative antigos clientes e aumente sua receita com automações inteligentes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#cta"
                  className="px-8 py-4 bg-primary-600 text-white font-semibold text-lg rounded-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/50 flex items-center gap-2"
                >
                  Agendar Consultoria Gratuita
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contato"
                  className="px-8 py-4 bg-dark-light border border-white/10 text-white font-semibold text-lg rounded-lg hover:bg-dark-lighter transition-all duration-300"
                >
                  Falar com Especialista
                </a>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-light border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-500 mb-1">+150%</div>
                  <div className="text-sm text-gray-400">Agendamentos em Média</div>
                </div>
                <div className="bg-dark-light border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-500 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Taxa de Entregabilidade</div>
                </div>
              </div>
            </div>

            {/* Right Column - Email Marketing UI Mockup */}
            <div className={`relative transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative">
                {/* Monitor Frame */}
                <div className="bg-dark-lighter rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-sm">
                  {/* Screen */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                    {/* Email UI Header */}
                    <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">O</span>
                        </div>
                        <span className="text-gray-900 font-semibold">Ochomail</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>

                    {/* Email List View (Gmail Style) */}
                    <div className="bg-white p-6">
                      {/* Stats Bar */}
                      <div className="grid grid-cols-4 gap-3 mb-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="text-xs text-green-600 font-medium mb-1">Abertos</div>
                          <div className="text-lg font-bold text-green-700">1,837</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="text-xs text-blue-600 font-medium mb-1">Respostas</div>
                          <div className="text-lg font-bold text-blue-700">256</div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                          <div className="text-xs text-purple-600 font-medium mb-1">Cliques</div>
                          <div className="text-lg font-bold text-purple-700">89</div>
                        </div>
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                          <div className="text-xs text-primary-600 font-medium mb-1">Taxa</div>
                          <div className="text-lg font-bold text-primary-700">67.8%</div>
                        </div>
                      </div>

                      {/* Email List */}
                      <div className="space-y-2">
                        {/* Email Item 1 */}
                        <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold text-sm">JD</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-gray-900 font-semibold text-sm">João da Silva</span>
                                <span className="text-gray-500 text-xs">14:30</span>
                              </div>
                              <div className="text-gray-900 font-medium text-sm mb-1 truncate">
                                Lembrete de Consulta - Confirmação de Agendamento
                              </div>
                              <div className="text-gray-500 text-sm line-clamp-1">
                                Olá Maria, confirmamos sua consulta de harmonização facial para...
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Aberto</span>
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">Respondeu</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Email Item 2 */}
                        <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold text-sm">MC</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-gray-900 font-semibold text-sm">Maria Costa</span>
                                <span className="text-gray-500 text-xs">13:15</span>
                              </div>
                              <div className="text-gray-900 font-medium text-sm mb-1 truncate">
                                Promoção Especial - Tratamento Facial
                              </div>
                              <div className="text-gray-500 text-sm line-clamp-1">
                                Aproveite 30% OFF em tratamentos faciais este mês. Agende já...
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Aberto</span>
                                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">Clicou</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Email Item 3 */}
                        <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold text-sm">PS</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-gray-900 font-semibold text-sm">Pedro Souza</span>
                                <span className="text-gray-500 text-xs">12:00</span>
                              </div>
                              <div className="text-gray-900 font-medium text-sm mb-1 truncate">
                                Reativação - Você está com saudade?
                              </div>
                              <div className="text-gray-500 text-sm line-clamp-1">
                                Faz tempo que não te vemos! Que tal agendar uma avaliação gratuita...
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Aberto</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Campanha: Reativação de Pacientes</span>
                          <span className="text-sm font-bold text-primary-600">67.8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '67.8%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-dark-light border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">+2.500</div>
                      <div className="text-xs text-gray-400">Agendamentos Gerados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
