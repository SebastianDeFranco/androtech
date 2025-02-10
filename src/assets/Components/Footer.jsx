import React from "react"

function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">AndroTech</h3>
            <p className="mb-4 md:mb-0">Soluciones de telecomunicaciones para el futuro</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <ul className="inline-block text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-blue-200">
                  Política de Privacidad
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-200">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p>&copy; 2025 AndroTech. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer