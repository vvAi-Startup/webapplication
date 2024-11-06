import { useState } from "react";

export default function NavTool() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2 bg-[#010101] z-10">
        <div className="flex justify-center items-center">
          <img
            src="icons/logo_sem_nome.png"
            alt="Logo"
            className="w-14 h-auto"
          />
          <span className="text-white">CALM WAVE</span>
        </div>
      </nav>
    </>
  );
}
