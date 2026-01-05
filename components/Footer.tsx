import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-light border-t border-dark-gray text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <div className="relative h-8 w-auto">
                  <Image
                    src="/logo.png"
                    alt="Ochomail"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando listas de e-mails em máquinas de lucro através de estratégias de alto nível.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#cases" className="hover:text-white transition-colors">
                    Cases
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/politica-privacidade" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/termos-servico" className="hover:text-white transition-colors">
                    Termos de Serviço
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="text-sm">
                <a href="mailto:contato@ochomail.com" className="hover:text-white transition-colors">
                  contato@ochomail.com
                </a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-dark-gray pt-8 text-center text-sm">
            <p>&copy; {currentYear} Ochomail. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
