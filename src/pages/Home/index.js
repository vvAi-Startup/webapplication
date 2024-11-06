import CardHov from "@/components/CardHover";
import Head from "next/head";
import "./Home.module.css";
import { useState } from "react";
import LoginFormModal from "@/components/LoginForm";
import ScrollButton from "@/components/ScrollButton";
import FooterBar from "@/components/Footer";
import CarouselRD from "@/components/RuidosCarousel";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Head>
        <title>Calm Wave</title>
        <meta name="description" content="Aplicação web do CalmWave" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 py-2 bg-[#010101] z-10">
          <div className="flex justify-center items-center">
            <img
              src="icons/logo_sem_nome.png"
              alt="Logo"
              className="w-14 h-auto"
            />
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#calmwave" className="hover:text-gray-300">
                Calm Wave
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-gray-300">
                Por Que?
              </a>
            </li>
            <li>
              <a href="#frequencies" className="hover:text-gray-300">
                Frequências
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contato
              </a>
            </li>
          </ul>
          <button
            onClick={openModal}
            className="bg-transparent border border-white rounded-xl px-4 py-2 hover:bg-white hover:text-black"
          >
            Entrar
          </button>
        </nav>

        <div className="flex flex-col" id="main">
          {/* Hero */}
          <div
            className="relative flex flex-col bg-[#464646] pt-10 bg-cover justify-between h-auto"
            style={{
              backgroundImage: `url('/fundo.png') no-repeat center center fixed`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 overflow-hidden pr-4">
              <h1 className="h-full text-[35rem] font-bold text-white opacity-25 whitespace-nowrap absolute -top-40 -left-40">
                CALM WAVE
              </h1>
            </div>

            <div className="absolute inset-0 bg-[#2C2C2C] bg-opacity-70"></div>

            {/* Conteúdo principal: Texto à esquerda e imagem do fone */}
            <div className="relative flex flex-col max-h-screen z-10">
              <div className="relative flex flex-row justify-between">
                {/* Texto à esquerda */}
                <div className="w-full pl-[50px] text-left">
                  <h1 className="text-5xl font-shoulders text-white">
                    Easier life with <p>Calm Waves</p>
                  </h1>
                  <span className="mt-4 text-sm text-white">
                    O fone de ouvido com inteligência artificial
                    <p> voltado para as crianças dentro do Transtorno</p>
                    <p> do Espectro Autista (TEA) no ambiente pedagógico</p>
                  </span>
                  <a
                    href="#calmwave"
                    className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition"
                  >
                    Sobre nós
                  </a>
                </div>

                {/* Imagem do fone à direita */}
                <div className="absolute right-0 top-0 h-full">
                  <img
                    src="/icons/fone.png"
                    alt="Fone de ouvido"
                    className="h-auto w-[50%] ml-auto"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="opacity-80 mt-20 h-[160px]">
                <section
                  id="calmwave"
                  className="p-1 h-[100%] bg-[#2C2C2C] mb-4"
                >
                  <div className="w-[65%] mx-auto text-center flex justify-between bg-[#ffffff44] rounded-xl opacity-90">
                    <div className="p-1 w-full">
                      <h3 className="text-xl text-left font-bold text-[#9EBDC1] mb-0">
                        Calm Wave
                      </h3>
                      <p className="text-white w-[300px] text-left text-sm mt-0">
                        Promovendo a inclusão de forma
                        <br />
                        relaxante através da tecnologia.
                      </p>
                    </div>
                    <div>
                      <p className="text-white flex-wrap w-[450px] mt-1 text-sm text-left">
                        Este projeto está sendo desenvolvido pela startup vvai©️
                        <br /> criada por estudantes da graduação em
                        Desenvolvimento de Software e <br />
                        Multiplataforma da Fatec Registro.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Footer */}
              <footer className="bg-[#010101] py-6 z-10">
                <div className="w-fit flex justify-center overflow-hidden">
                  <div className="logos-container gap-10 flex items-center animate-scroll">
                    {[
                      "react",
                      "express",
                      "node",
                      "js",
                      "flask",
                      "machine",
                      "tensor",
                      "python",
                      "arduino",
                      "rasp",
                      "kotlin",
                      "spring",
                      "java",
                      "mongo",
                    ].map((tech, index) => (
                      <img
                        key={index}
                        src={`/icons/techs/${tech}.svg`}
                        alt={tech.charAt(0).toUpperCase() + tech.slice(1)}
                        className="h-8"
                      />
                    ))}
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* Por Que? */}
        <section
          id="why"
          className="relative h-100 bg-gray-800 flex justify-center text-white z-10"
        >
          <div className="relative max-w-6xl mx-auto flex items-start mt-10 justify-between z-10 mb-20">
            {/* Coluna da Esquerda */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-teal-300 mb-4">
                Por que Calm Wave?
              </h2>
              <span className="text-xl leading-relaxed">
                O Transtorno do Espectro Autista (TEA) é uma condição que
                influencia a forma como uma pessoa se comunica, interage
                socialmente e se comporta.
                <br />
                É caracterizado por diferenças no desenvolvimento cerebral que
                afetam a maneira como as conexões neurais são formadas e
                processadas.
                <br />A hipersensibilidade auditiva em crianças com TEA é
                caracterizada por uma sensibilidade aumentada aos sons, podendo
                causar desconforto ou ansiedade.
              </span>
            </div>

            {/* Coluna da Direita */}
            <div className="w-full md:w-1/2 text-3xl font-bold space-y-6 flex flex-col items-center">
              <div className="w-3/4 pt-4 text-right">
                <span className="text-teal-300">2 a cada 1000</span>{" "}
                <span>crianças diagnosticam o autismo</span>
              </div>
              <div className="border-t border-gray-400 w-3/4 pt-4 text-right">
                <span className="text-teal-300">Mais de 90%</span>{" "}
                <span>possuem hipersensibilidade auditiva</span>
              </div>
              <div className="border-t border-b border-gray-400 w-3/4 pt-4 text-right pb-4">
                <span className="px-4 py-3 rounded-md">
                  Principal barreira no aprendizado
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="relative h-90 bg-gray-800 flex items-center justify-center text-center"
          style={{
            backgroundImage: `url('/icons/solucoes/fundo.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative max-w-5xl mx-auto z-10 mt-0 mb-10">
            <h2 className="text-5xl font-gothic text-custom_cinza">Soluções</h2>
            <p className="text-5xl mt-4 font-shoulders">RECURSOS PODEROSOS</p>
            <p className="text-5xl mt-4 font-shoulders">SÓ PARA VOCÊ</p>

            {/* Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src="/icons/solucoes/iphone15.svg"
                  alt="Descrição do Card 1"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">Aplicação Mobile</h3>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src="/icons/solucoes/soundwave.svg"
                  alt="Descrição do Card 2"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  Cancelamento de Ruído
                </h3>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src="/icons/solucoes/macstudio.svg"
                  alt="Descrição do Card 3"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  Inteligência artificial
                </h3>
              </div>
            </div>
            {/* Descrição geral */}
            <p className="mt-10 text-lg font-montserrat">
              No final, se espera que nossa tecnologia melhore a qualidade de
              vida e o bem-estar emocional das crianças com TEA, além de
              contribuir para a promoção da educação inclusiva, facilitando a
              participação e o sucesso acadêmico de todas as crianças,
              independentemente de suas necessidades sensoriais ou cognitivas.
            </p>
          </div>
        </section>

        {/* Frequências */}
        <div
          className="bg-gray-800 h-full py-20 flex flex-col gap-10"
          style={{
            backgroundImage: "url('/blur.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-5xl font-gothic text-custom_cinza text-center">
            CONHEÇA OS RUÍDOS
          </h2>
          <CarouselRD />
        </div>

        {/* Contato */}
        <FooterBar />
        <ScrollButton />
        <LoginFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
