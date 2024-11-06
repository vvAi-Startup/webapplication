import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import blurImage from '@/../public/blur.png';

const CardHover = () => {
  return (
    <section id="parallax-section" className="relative h-screen">
      <Parallax pages={3} className="w-full h-full">
        {/* Camada da Imagem de Fundo e Texto */}
        <ParallaxLayer offset={0} speed={0.1} sticky={{ start: 0, end: 3.0 }}>
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md z-0"
            style={{ backgroundImage: `url(${blurImage})` }}
          ></div>
          <div className="relative flex items-center justify-center h-screen z-10">
            <h2 className="text-6xl md:text-[150px] lg:text-[200px] font-shoulders text-white text-center whitespace-nowrap">
              Ruídos Calmantes
            </h2>
          </div>
        </ParallaxLayer>

        {/* Cartão 1 - Ruído Branco */}
        <ParallaxLayer speed={1.0} sticky={{ start: 1.0, end: 3.0 }}>
          <div className="relative flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 lg:w-2/3 flex flex-row transition-transform duration-500 transform">
              <div className="bg-vertical-gradient w-1/2 p-6"></div>
              <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
                <h1 className="text-4xl mb-2 text-center font-gothic">Ruído Branco</h1>
                <p className="font-montserrat text-lg mt-10">
                  Contém todas as frequências audíveis em igual intensidade. É utilizado para mascarar sons indesejados, ajudar na concentração e melhorar o sono, criando um ambiente neutro.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Cartão 2 - Ruído Rosa */}
        <ParallaxLayer speed={1.0} sticky={{ start: 1.8, end: 3.0 }}>
          <div className="relative flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 lg:w-2/3 flex flex-row transition-transform duration-500 transform">
              <div className="bg-vertical-gradient w-1/2 p-6"></div>
              <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
                <h1 className="text-4xl mb-2 text-center font-gothic">Ruído Rosa</h1>
                <p className="font-montserrat text-lg mt-10">
                  Possui uma distribuição de frequências mais equilibrada, proporcionando um som relaxante, ideal para meditação e concentração.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Cartão 3 - Ruído Marrom */}
        <ParallaxLayer speed={1.0} sticky={{ start: 2.6, end: 2.0 }}>
          <div className="relative flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 lg:w-2/3 flex flex-row transition-transform duration-500 transform">
              <div className="bg-vertical-gradient w-1/2 p-6"></div>
              <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
                <h1 className="text-4xl mb-2 text-center font-gothic">Ruído Marrom</h1>
                <p className="font-montserrat text-lg mt-10">
                  Um ruído mais profundo e suave, semelhante ao som de um trovão distante. Ideal para relaxar e dormir melhor.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default CardHover;
