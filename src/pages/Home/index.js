import Head from "next/head";
import "./Home.module.css";
import ScrollButton from "@/components/ScrollButton";
import FooterBar from "@/components/Footer";
import CarouselRD from "@/components/RuidosCarousel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLoginClick = () => {
    if (isClient) {
      router.push("/Login");
    }
  };

  return (
    <>
      <Head>
        <title>Calm Wave</title>
        <meta name="description" content="Aplicação web do Calm Wave" />
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
              <a href="#why" className="hover:text-gray-300">
                Calm Wave
              </a>
            </li>
            {/* <li>
              <a href="#why" className="hover:text-gray-300">
                Por quê
              </a>
            </li> */}
            <li>
              <a href="#solutions" className="hover:text-gray-300">
                Soluções
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
            onClick={handleLoginClick}
            className="bg-transparent border border-white rounded-xl px-3 py-1 hover:bg-purple-600 hover:text-black"
          >
            Entrar
          </button>
        </nav>

        <div className="flex flex-col" id="main">
          {/* Hero */}
          <div
            className="relative flex flex-col bg-[#464646] pt-20 bg-cover justify-between h-auto"
            style={{
              backgroundImage: `url('/fundo.png') no-repeat center center fixed`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 overflow-hidden pr-4">
              <h1 className="h-full text-[25rem] font-bold font-shoulders opacity-10 whitespace-nowrap absolute -top-20 -left-45">
                lm Wa
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
                    <p> de Processamento Auditivo Central (TPAC) </p>
                    <p>no ambiente pedagógico</p>
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
              <div className="opacity-80 mt-20 h-[140px]">
                <section
                  id="calmwave"
                  className="p-1 h-[100%] bg-[#2C2C2C] mb-4"
                >
                  <div className="w-[65%] mx-auto text-center flex justify-between bg-[#ffffff44] rounded-xl opacity-80">
                    <div className="p-3 w-full">
                      <h3 className="text-xl text-left font-league-gothic font-bold text-teal-300 mb-0">
                        Calm Wave
                      </h3>
                      <p className="text-white w-[300px] font-league-gothic text-left text-md mt-0">
                        Promovendo a inclusão de forma
                        <br />
                        relaxante através da tecnologia.
                      </p>
                    </div>
                    <div>
                      <p className="text-white flex-wrap w-[450px] mt-4 font-league-gothic text-sm text-left">
                        Este projeto está sendo desenvolvido pela startup vvAi©️
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
          className="relative h-100 bg-[#111111] flex justify-center text-white z-10"
        >
          <div className="relative max-w-6xl mx-auto flex items-start mt-10 justify-between z-10 mb-20">
            {/* Coluna da Esquerda */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">
                Por que
                <span className="text-4xl font-bold text-teal-300">
                  {" "}
                  Calm Wave?
                </span>
              </h2>
              <div className="flex justify-center flex-col gap-y-5">
                <p className="text-lg">
                  O Transtorno de Processamento Auditivo Central (TPAC), também
                  conhecido como Distúrbio de Processamento Auditivo (DPA), é um
                  distúrbio no qual o cérebro tem dificuldades em processar as
                  informações auditivas, apesar da audição periférica estar
                  normal.
                </p>

                <p className="text-lg leading-relaxed">
                  Isso significa que, a pessoa pode ter uma audição normal, mas
                  apresenta dificuldades em compreender e interpretar os sons
                  que ouve, principalmente em ambientes ruidosos ou quando há
                  mais de uma fonte sonora.
                </p>
              </div>
            </div>

            {/* Coluna da Direita */}
            <div className="w-full md:w-1/2 text-3xl font-bold space-y-2 flex flex-col items-center">
              <div className="w-[80%] pt-4 text-right">
                <span className="text-lg">
                  CERCA DE 2 A 3% DAS CRIANÇAS EM IDADE ESCOLAR APRESENTAM O
                  TRANSTORNO
                </span>
              </div>
              <div className="border-t-2 border-gray-400 w-[80%] pt-4 text-right">
                <span className="text-lg">
                  MAIS DE 90% POSSUEM HIPERSENSIBILIDADE AUDITIVA
                </span>
              </div>
              <div className="border-t-2 border-b-2 border-gray-400 w-[80%] pt-4 text-right pb-1">
                <span className="px-4 py-3 rounded-md text-lg">
                  <span>PRINCIPAL BARREIRA NO</span>
                  <span className="text-teal-300"> APRENDIZADO</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="relative h-90 bg-[#111111] flex items-center justify-center text-center"
          style={{
            backgroundImage: `url('/icons/solucoes/fundo.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative max-w-5xl mx-auto z-10 mt-0 mb-10">
            <h2 className="text-2xl text-teal-300 font-league-gothic">
              SOLUÇÕES
            </h2>
            <p className="text-5xl mt-4 font-shoulders">RECURSOS PODEROSOS</p>
            <p className="text-5xl mt-4 font-shoulders">SÓ PARA VOCÊ</p>

            {/* Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div>
                <div
                  style={{
                    backgroundImage: "url('/fundo_card.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src="/icons/solucoes/iphone15.svg"
                    alt="Descrição do Card 1"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Aplicação Mobile</h3>
              </div>
              {/* Card 2 */}
              <div>
                <div
                  style={{
                    backgroundImage: "url('/fundo_card.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src="/icons/solucoes/soundwave.svg"
                    alt="Descrição do Card 2"
                    className="w-full h-40 object-contain rounded-t-lg"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">
                  Cancelamento de Ruído
                </h3>
              </div>

              {/* Card 3 */}
              <div>
                <div
                  style={{
                    backgroundImage: "url('/fundo_card.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src="/icons/solucoes/macstudio.svg"
                    alt="Descrição do Card 3"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">
                  Inteligência artificial
                </h3>
              </div>
            </div>
            {/* Descrição geral */}
            <p className="mt-10 text-lg font-montserrat">
              No final, se espera que nossa tecnologia melhore a qualidade de
              vida e o bem-estar emocional das crianças com TPAC, além de
              contribuir para a promoção da educação inclusiva, facilitando a
              participação e o sucesso acadêmico de todas as crianças,
              independentemente de suas necessidades sensoriais ou cognitivas.
            </p>
          </div>
        </section>

        {/* Frequências */}
        <section id="frequencies">
          <div
            className="bg-[#111111] h-full py-20 flex flex-col gap-10 relative"
            style={{
              backgroundImage: "url('/blur.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              className="text-[110px] w-full font-gothic text-custom_cinza text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90"
              style={{ textShadow: "2px 2px 15px rgba(0, 128, 128, 0.7)" }}
            >
              RUÍDOS CALMANTES
            </h2>

            <CarouselRD />
          </div>
        </section>

        {/* Contato */}
        <FooterBar />
        <ScrollButton />
        {/* <LoginFormModal isOpen={isModalOpen} onClose={closeModal} /> */}
      </div>
    </>
  );
}
