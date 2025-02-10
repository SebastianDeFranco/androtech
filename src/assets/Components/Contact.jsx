import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi"

export default function Contact () {
  return (
    <div className="max-w-2xl mx-auto mt-10 mb-3 p-8 bg-white rounded-xl shadow-2xl" id="contacto">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Contactanos</h2>
      <p className="text-center text-gray-600 mb-8">Si quieres tener asesoramiento mandanos un mensaje</p>

      <form className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiUser className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Nombre"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiMail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Email"
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FiMessageSquare className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="block w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Tu Mensaje..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out cursor-pointer"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <FiSend className="h-5 w-5 text-purple-500 group-hover:text-purple-400 transition ease-in-out duration-150" />
            </span>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

 

