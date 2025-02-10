import React, { useEffect, useMemo, useState } from "react"
import { FaRocket, FaChartLine, FaNetworkWired } from "react-icons/fa"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 200,
          },
          repulse: {
            distance: 300,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },

        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 500,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="relative bg-gradient-to-br from-black to-[#3c0064] text-white overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 0,100 100,0" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Potencia tu red con nuestra experiencia
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Somos líderes en consultoría de telecomunicaciones, dedicados a impulsar la transformación digital y la
              excelencia operativa de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                Solicitar consulta
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-700 transition duration-300 cursor-pointer">
                Más información
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
              {init && (
                <Particles
                  id="tsparticles"
                  options={options}
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

