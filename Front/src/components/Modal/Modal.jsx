import { Modal as BootstrapModal } from 'react-bootstrap';
import modal from './modal.module.css';

export const Modal = ({ children, show, onHide, title, size }) => {
  return (
    <BootstrapModal
      show={show}
      onHide={onHide}
      size={size ? size : 'md'}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id='contained-modal-title-vcenter'>
          <h4 className={modal.title}>{title}</h4>
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
    </BootstrapModal>
  );
};
