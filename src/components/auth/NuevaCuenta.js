import React, { useState } from "react";

import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  // state para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // extraer de usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario quiere iniciar sesión

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacíos

    // Password minimo 6 caracteres

    // Las dos passwords son iguales

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="password">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu nombre"
              onChange={onChange}
            ></input>
          </div>
          <div className="campo-form">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu email"
              onChange={onChange}
            ></input>
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu password"
              onChange={onChange}
            ></input>
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Repite tu password"
              onChange={onChange}
            ></input>
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarse"
            ></input>
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
