import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal/Modal';
import './match.css';

const MatchButton = () => {
  const [show, setShow] = useState(false);

  const handleshow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div onClick={handleshow}>
        <i>
          <FontAwesomeIcon className='footIcon' icon={faPaw} />
        </i>
      </div>

      <div>
        <Modal
          title='Felicitaciónes por tu Match!'
          show={show}
          onHide={() => {
            handleClose();
          }}
          aria-labelledby='contained-modal-title-vcenter'
        >
          <form className='formularioModal container'>
            <div className='container contactInfo'>
              <h3>Contacta con el dueño!</h3>
              <ul className='datosContacto'>
                <li>
                  <strong>Nombre:</strong> Lucas
                </li>
                <li>
                  <strong>Email:</strong> lucas@gmail.com
                </li>
              </ul>
            </div>

            <div className='form__campo'>
              <p>También podes enviar un mensaje aquí!</p>
              <textarea className='w-100' name='message' id='' cols='30' rows='5' placeholder=' Mensaje'></textarea>
            </div>

            <div className='form__campo'>
              <button className='customBtn' onClick={handleSubmit}>
                Enviar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default MatchButton;
