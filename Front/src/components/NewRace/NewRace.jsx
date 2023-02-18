import { Modal } from '../Modal/Modal.jsx';
import { FormNewRace } from './FormNewRace.jsx';

export const NewRace = ({ show, onHide }) => {
  return (
    <Modal title='Cargar raza' size='sm' show={show} onHide={onHide}>
      <FormNewRace onHide={onHide} />
    </Modal>
  );
};
