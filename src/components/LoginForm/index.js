import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginFormModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Preencha todos os campos");
      return;
    }

    setError("");

    if (username === "admin" && password === "password") {
      console.log("Logando com ", username, password);

      setUsername("");
      setPassword("");

      onClose();

      router.push("/App");
    } else {
      setError("Usuário ou senha inválidos!");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#010101] bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#464646] p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-center text-3xl font-semibold text-white mb-6">
          Bem-vindo ao projeto <span className="text-[#9EBDC1]">CALM WAVE</span>
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-medium mb-2"
            >
              Usuário
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Insira seu usuário"
              className="w-full p-3 border border-[#9EBDC1] rounded-md text-white bg-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#9EBDC1]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha"
              className="w-full p-3 border border-[#9EBDC1] rounded-md text-white bg-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#9EBDC1]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#9EBDC1] text-[#010101] text-lg rounded-md hover:bg-[#7FB0A4] focus:outline-none"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;
