import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { registerRequest } from '../actions';

import '../assets/styles/Register.scss';
import Header from '../components/Header';

const Register = ({ history, registerRequest }) => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInputChange = event => {
    const target = event.target;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    registerRequest(form);

    history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="name"
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Correo"
              name="email"
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleInputChange}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
