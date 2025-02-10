import React from "react"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const testimonios = [
  {
    nombre: "María González",
    cargo: "CTO, TechCorp",
    texto:
      "La consultoría que recibimos transformó completamente nuestra infraestructura de red. Ahora operamos con mayor eficiencia y seguridad.",
    estrellas: 5,
  },
  {
    nombre: "Carlos Rodríguez",
    cargo: "Director de IT, DataFlow",
    texto:
      "Su análisis de datos nos proporcionó insights cruciales que nos ayudaron a tomar decisiones estratégicas importantes.",
    estrellas: 5,
  },
  {
    nombre: "Ana Martínez",
    cargo: "CEO, ConnectAll",
    texto:
      "La optimización de nuestros sistemas realizada por su equipo resultó en un aumento significativo en nuestra productividad.",
    estrellas: 4,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="text-4xl text-purple-800" />
              </div>
              <p className="text-gray-600 text-center mb-6 italic">"{testimonio.texto}"</p>
              <div className="flex justify-center mb-4">
                {[...Array(testimonio.estrellas)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

