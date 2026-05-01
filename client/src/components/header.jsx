import React from "react";
import { NavLink } from "react-router";
import { Input, InputStyled } from "./inputs";

function Header() {
  const linkClass = ({ isActive }) =>
    `hover:text-blue-200 ${isActive ? "text-white" : "text-gray-400"}`;

  return (
    <div className="sticky top-0 h-16 w-full flex items-center justify-between px-10">
      <div className="text-xl font-bold">HIC Studio</div>
      <ul className="flex gap-x-5">
        <NavLink to="/" className={linkClass}>
          Inicio
        </NavLink>
        <NavLink to="/prices" className={linkClass}>
          Precios
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </ul>
      <div className="flex gap-x-5 font-bold">
        <Input type="button" value="Iniciar Sesión" />
        <InputStyled type="button" value="Registrarse" />
      </div>
    </div>
  );
}

export default Header;
