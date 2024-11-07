import { DadosContextProvider } from "@/context/DadosContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // <DadosContextProvider>
      <Component {...pageProps} />
    // </DadosContextProvider>
  );
}
