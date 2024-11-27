import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import ruidoBranco from "@/../public/ruidos/ruido_branco.png";
import ruidoMarrom from "@/../public/ruidos/ruido_marrom.png";
import ruidoRosa from "@/../public/ruidos/ruido_rosa.png";

// Configuração para o responsive
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1, // Um item por vez
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Um item por vez
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, // Um item por vez
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Um item por vez
  },
};

export default function CarouselRD() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      transitionDuration={1000}
    > 
      <div className="relative flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 lg:w-2/3 flex flex-row transition-transform duration-500 transform">
          <div className="bg-vertical-gradient w-1/2 p-1">
            <Image
              src={ruidoBranco}
              alt="Ruído Branco"
              style={{ height: "250px" }}
            />
          </div>
          <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
            <h1 className="text-4xl mb-2 text-center font-gothic">
              Ruído Branco
            </h1>
            <p className="font-montserrat text-lg mt-10">
              Contém todas as frequências audíveis em igual intensidade. É
              utilizado para mascarar sons indesejados, ajudar na concentração e
              melhorar o sono, criando um ambiente neutro.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 lg:w-2/3 flex flex-row transition-transform duration-500 transform">
          <div className="bg-vertical-gradient w-1/2 p-1">
            <Image
              src={ruidoRosa}
              alt="Ruído Rosa"
              style={{ height: "250px" }}
            />
          </div>
          <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
            <h1 className="text-4xl mb-2 text-center font-gothic">
              Ruído Rosa
            </h1>
            <p className="font-montserrat text-lg mt-10">
              Possui uma distribuição de frequências mais equilibrada,
              proporcionando um som relaxante, ideal para meditação e
              concentração.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 lg:w-2/3 flex flex-row transition-transform duration-500 transform">
          <div className="bg-vertical-gradient w-1/2 p-1">
            <Image
              src={ruidoMarrom}
              alt="Ruído Marrom"
              style={{ height: "250px" }}
            />
          </div>
          <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
            <h1 className="text-4xl mb-2 text-center font-gothic">
              Ruído Marrom
            </h1>
            <p className="font-montserrat text-lg mt-10">
              Um ruído mais profundo e suave, semelhante ao som de um trovão
              distante. Ideal para relaxar e dormir melhor.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
