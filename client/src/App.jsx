import { useEffect, useState } from "react";
import LayoutMain from "./components/layoutMain.jsx";
import Header from "./components/header.jsx";
import { InputStyled, Input } from "./components/inputs.jsx";
import AnimatedLogo from "./components/AnimatedLogo.jsx";

const words = [
  "Agentes de IA",
  "CRM",
  "Facturación",
  "Gestión de Proyectos",
  "Automatización de Tareas",
  "Análisis de Datos",
];

function App() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutMain>
      {/* DIV GENERAL */}
      <div className="flex flex-row px-15 w-full h-full w-full justify-center items-center">
        {/* DIV DE TEXTO */}
        <div className="flex flex-col w-full h-full justify-center items-start">
          <div>
            <h1 className="text-3xl font-bold">Integración de proyectos de</h1>
          </div>

          <div>
            <h1
              className={`text-3xl font-bold transition-all duration-300 text-[var(--purple)] ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {words[index]}
            </h1>
          </div>

          <h1 className="opacity-70 pt-4 text-justify w-[75%] text-md">
            Maximiza y optimiza tu empresa con integraciones de Inteligencia
            Artificial (AI) y proyectos CRM, somos HIC Studio...
          </h1>

          <div className="flex gap-x-5 pt-10">
            <InputStyled
              type="button"
              placeholder="Contactanos"
              value="Contactanos"
            />
            <Input
              type="button"
              placeholder="Precios y planes"
              value="Precios y planes"
            />
          </div>
        </div>

        {/* DIV DE IMAGEN */}
        <div className="flex h-[100%] w-full w-full justify-center items-center">
          <AnimatedLogo />
        </div>
      </div>
    </LayoutMain>
  );
}

export default App;
