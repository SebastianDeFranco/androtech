import React from "react";
import logo from "../../images/androtech-logo.png";

function Footer() {
  return (
    <footer className="bg-[#3c0064] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <img src={logo} alt="AndroTech Logo" className="w-[100px]" />
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
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0 flex items-center justify-center md:justify-end">
            <p className="text-[#d5c9de]">&copy; 2025</p>
            <img src={logo} alt="AndroTech Logo" className="w-[100px] mr-2" />
            <p className="text-[#d5c9de]">Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
