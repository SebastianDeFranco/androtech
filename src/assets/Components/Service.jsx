import React from "react";
import { FaNetworkWired, FaChalkboardTeacher, FaRobot, FaHandshake, FaChartLine, FaMoneyCheckAlt, FaUserTie, FaShieldAlt, FaCode  } from "react-icons/fa";

const servicios = [
  {
    categoria: "Tecnológico",
    items: [
      {
        titulo: "Consultoría en Telecomunicaciones",
        descripcion: "Diseño e implementación de redes de telecomunicaciones, TIC’s y seguridad.",
        icono: FaNetworkWired,
      },
      {
        titulo: "Supervisión y Capacitación",
        descripcion: "Monitoreo de proyectos tecnológicos y programas de formación especializados.",
        icono: FaChalkboardTeacher,
      },
      {
        titulo: "Desarrollo de Software y Soluciones Digitales",
        descripcion: "Creación de plataformas web y aplicaciones móviles adaptadas a tus necesidades.",
        icono: FaCode,
      },
      {
        titulo: "Representación ante Proveedores",
        descripcion: "Gestión de relaciones comerciales y negociación de acuerdos estratégicos.",
        icono: FaHandshake,
      },
    ],
  },
  {
    categoria: "Económico / Estrategias",
    items: [
      {
        titulo: "Gestión de Proyectos",
        descripcion: "Planificación y estructuración para sectores públicos y privados.",
        icono: FaChartLine,
      },
      {
        titulo: "Análisis Económico y Financiero",
        descripcion: "Evaluación de viabilidad, rentabilidad y sostenibilidad de proyectos.",
        icono: FaMoneyCheckAlt,
      },
      {
        titulo: "Estrategias de Mercado",
        descripcion: "Análisis de tendencias, segmentación de mercado y evaluación competitiva.",
        icono: FaUserTie,
      },
      {
        titulo: "Alianzas Estratégicas",
        descripcion: "Identificación de socios clave y negociación de acuerdos de colaboración.",
        icono: FaShieldAlt,
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
        {servicios.map((categoria, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold text-purple-900 mb-6 text-center">{categoria.categoria}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categoria.items.map((servicio, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-purple-800 mb-4 flex justify-center">
                    <servicio.icono className="text-5xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{servicio.titulo}</h4>
                  <p className="text-gray-600 text-center">{servicio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
