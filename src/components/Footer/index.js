import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useRouter } from "next/router";

export default function FooterBar() {
  const router = useRouter();
  return (
    <section id="contact" className="bg-[#2C2C2C] py-1 text-white pl-10">
      <div className="max-w-7xl mx-auto px-4 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-3xl font-bold font-gothic mb-4">Contato</h2>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <AiTwotoneMail className="text-xl" />
              <p className="text-lg">vvai2023ltda@gmail.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <AiFillPhone className="text-xl" />
              <p className="text-lg">(13) 78945-5658</p>
            </div>
          </div>

          {/* vvAi Startup */}
          <div
            className="flex justify-center items-center flex-col space-y-2"
            // onClick={router.push("/Home")}
          >
            <span className="text-xl text-white px-4 py-2 rounded font-gothic cursor-pointer transition duration-300">
              vvAi Startup
            </span>
            <p className="text-sm text-gray-400">
              Inovação e tecnologia ao seu alcance
            </p>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-gothic mb-4 text-center">
              Redes Sociais
            </h3>
            <div className="flex justify-center space-x-6">
              <a href="#" aria-label="Gmail">
                <img
                  src="icons/social/gmail.svg"
                  alt="Gmail"
                  className="h-8 w-8 transition transform hover:scale-110"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="icons/social/instagram.svg"
                  alt="Instagram"
                  className="h-8 w-8 transition transform hover:scale-110"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="icons/social/linkedin.svg"
                  alt="LinkedIn"
                  className="h-8 w-8 transition transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Reservados */}
        <div className="mt-1 text-center">
          <span className="text-sm text-gray-400">
            vv<span className="font-bold">Ai</span> Todos os direitos reservados
            © 2024
          </span>
        </div>
      </div>
    </section>
  );
}
