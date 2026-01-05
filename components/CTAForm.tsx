'use client'

import { useState, FormEvent } from 'react'

export default function CTAForm() {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    company: '',
    designation: '',
    source: 'Landing Page',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ 
          email: '', 
          first_name: '', 
          last_name: '', 
          phone_number: '', 
          company: '', 
          designation: '',
          source: 'Landing Page',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="cta" className="relative py-32 bg-dark overflow-hidden">
      {/* Background Stars/Planet Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Pronto para Transformar seu Email Marketing?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Solicite sua auditoria gratuita e descubra como podemos aumentar seu ROI e reduzir seu CAC através de estratégias comprovadas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#form"
              className="px-8 py-4 bg-primary-600 text-white font-semibold text-lg rounded-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/50"
            >
              Solicitar Auditoria Gratuita
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-dark-light border border-dark-gray text-white font-semibold text-lg rounded-lg hover:bg-dark-lighter transition-all duration-300"
            >
              Falar com Especialista
            </a>
          </div>

          {/* Form */}
          <div id="form" className="bg-dark-light border border-dark-gray rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  E-mail Corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-dark-gray rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="seu.email@empresa.com"
                />
              </div>

              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-semibold text-white mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-dark-gray rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-semibold text-white mb-2">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-dark-gray rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Seu sobrenome"
                  />
                </div>
              </div>

              {/* Phone Number (WhatsApp) */}
              <div>
                <label htmlFor="phone_number" className="block text-sm font-semibold text-white mb-2">
                  Número de WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-dark-gray rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="(51) 99999-9999"
                />
                <p className="text-xs text-gray-400 mt-1">Inclua o código do país (ex: 55 para Brasil)</p>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-dark-gray rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Nome da sua empresa"
                />
              </div>

              {/* Designation */}
              <div>
                <label htmlFor="designation" className="block text-sm font-semibold text-white mb-2">
                  Cargo (Opcional)
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-dark-gray rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Ex: CEO, CMO, Diretor de Marketing"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 text-white font-semibold text-lg rounded-lg hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/50"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Auditoria Gratuita'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  Obrigado! Entraremos em contato em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                  Ops! Algo deu errado. Tente novamente ou entre em contato diretamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
