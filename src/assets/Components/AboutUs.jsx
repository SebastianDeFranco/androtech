import React from "react"
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine, FaRocket } from "react-icons/fa"
import { FaBullseye } from "react-icons/fa6";
import aboutUs from '../../images/aboutus.svg';
import expertise from '../../images/expertise.svg';

const valores = [
  {
    icono: FaUsers,
    titulo: "Equipo Experto",
    descripcion: "Profesionales altamente calificados con años de experiencia en el sector.",
  },
  {
    icono: FaLightbulb,
    titulo: "Innovación Constante",
    descripcion: "Siempre a la vanguardia de las últimas tecnologías y tendencias.",
  },
  {
    icono: FaHandshake,
    titulo: "Compromiso con el Cliente",
    descripcion: "Nos enfocamos en entender y satisfacer las necesidades únicas de cada cliente.",
  },
  {
    icono: FaChartLine,
    titulo: "Resultados Medibles",
    descripcion: "Nos comprometemos a proporcionar soluciones que generen un impacto real y cuantificable.",
  },
]

const AboutUs = () => {
  return (
    <section className="py-20 overflow-hidden" id="nosotros">
      <div className="container mx-auto px-4 relative">

        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          </div>

          <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center text-center">
                <FaRocket className="text-purple-800 mr-2" /> Nuestro Espiritu
              </h3>
              <p className="text-gray-600">
                En AndroTech creemos en la importancia de la colaboracion y la innovacion. Trabajamos estrechamente con nuestros clientes, asegurandonos de entender sus desafios y objetivos, para ofrecer soluciones que no solo resuelven problemas inmediatos, sino que tambien fortalezcan el futuro de su infraestructura tecnologica
              </p>
            </div>
            <div>
              <img src={aboutUs} alt="" className="w-[500px]" />
            </div>
          </div>
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img src={expertise} alt="" className="w-[500px]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center text-center">
                <FaBullseye className="text-purple-800 mr-2" /> Nuestro Enfoque
              </h3>
              <p className="text-gray-600">
                Nos especializamos en consultoria estrategica, gestion de proyectos, e implementacion de dsitintos tipos de soluciones tecnologicas, que permitan a nuestros clientes estar a la vanguardia en un Sector dinamico y en constante evolucion. Nos enfocamos en brindar un servicio integral, cubriendo desde el diseño hasta la implementacion de las soluciones mas eficientes y adaptadas a las necesidades especificas de cada cliente
              </p>
            </div>
          </div>

          {/* <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl transform hover:scale-105 transition duration-300"
              >
                <valor.icono className="text-5xl text-blue-600 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{valor.titulo}</h4>
                <p className="text-gray-600 text-center">{valor.descripcion}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs

