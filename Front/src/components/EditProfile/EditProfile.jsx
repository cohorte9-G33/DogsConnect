import { Modal } from '../Modal/Modal.jsx';
import { FormProfile } from './FormProfile.jsx';

export const EditProfile = ({ show, onHide }) => {
  return (
    <Modal title='Editar Perfil' show={show} onHide={onHide}>
      <FormProfile onHide={onHide} />
    </Modal>
  );
};
