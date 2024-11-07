
//Context para utilizar os dados em qualquer componente ou página, basta importar o context e a variável "dados"
//const [dados] = useContext(DadosContext)

import { api } from "@/services/api";
import React, { createContext, useState, useEffect } from "react";

const defaultValue = {
  dados: {},
  setDados: () => {},
};

export const DadosContext = createContext(defaultValue);

export const DadosContextProvider = ({ children }) => {
  const [dados, setDados] = useState(defaultValue.dados);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await api.get("/getdados");
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDados();
  }, []); 

  return (
    <DadosContext.Provider
      value={{
        dados,
        setDados,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
