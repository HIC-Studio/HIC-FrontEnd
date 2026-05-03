import { Children } from "react";
import { NavLink } from "react-router";
import { Input, InputStyled } from "./inputs";

function Header({ children }) {
  const linkClass = ({ isActive }) =>
    `hover:text-[var(--purple)] ${isActive ? "text-white" : "text-gray-400"}`;

  return (
    <>
      <div className="fixed top-0 z-100 h-16 w-full flex items-center justify-between px-10">
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-bold">HIC</h1>
          <h1 className="text-xl text-[var(--purple)]">Studio</h1>
        </div>

        <ul className="flex gap-x-5 font-medium">
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
      {children}
    </>
  );
}

export default Header;
