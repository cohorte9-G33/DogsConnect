import React from 'react';

const LoginButton = ({ handleShow }) => {
  return (
    <>
      <button className='navbar-link' onClick={handleShow}>
        Iniciar Sesión
      </button>
    </>
  );
};

export default LoginButton;
