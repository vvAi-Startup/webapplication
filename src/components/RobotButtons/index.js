export default function RobotButtons() {
    return (
      <div className="w-full flex justify-around gap-4 py-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200">
          Rodar
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200">
          Atualizar dados
        </button>
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200">
          Botão 3
        </button>
      </div>
    );
  }
  