import { FormDog } from './FormDog';
import { Modal } from '../Modal/Modal.jsx';

export const RegisterNewDogs = ({ show, onHide }) => {
  return (
    <Modal title='Agregar mascota' show={show} onHide={onHide}>
      <FormDog onHide={onHide} />
    </Modal>
  );
};
