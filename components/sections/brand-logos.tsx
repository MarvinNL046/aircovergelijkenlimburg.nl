"use client"

const brands = [
  { name: "Daikin", models: "Comfora, Emura, Stylish, Perfera, Ururu Sarara" },
  { name: "LG", models: "ArtCool, DualCool Premium" },
  { name: "Samsung", models: "WindFree series, Luzon" },
  { name: "Mitsubishi Heavy Industries", models: "SRK/SRC series" },
  { name: "Toshiba", models: "Haori, Daiseikai, Kazumi, Seiya" },
  { name: "Tosot", models: "Pular, Clivia, Cosmo" }
]

export function BrandLogosSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Wij Installeren Alle Topmerken
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Officieel dealer van de beste airconditioning merken
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="h-20 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-blue-600">
                  {brand.name}
                </div>
              </div>
              <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {brand.models}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ook mobiele airco's van LG en Tosot • Airco covers in wit en antraciet
          </p>
          <a 
            href="/merken" 
            className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center gap-2"
          >
            Bekijk alle merken en modellen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}