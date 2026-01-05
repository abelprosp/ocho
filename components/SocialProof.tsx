'use client'

export default function SocialProof() {
  return (
    <section className="py-16 bg-dark border-y border-dark-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white text-lg font-semibold mb-12">
          Confiado por equipes em todo o mundo.
        </h2>
        
        {/* Client Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 w-32 bg-dark-light border border-dark-gray rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-500 text-sm font-medium">Cliente {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
