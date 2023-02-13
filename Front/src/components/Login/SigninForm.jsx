import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import RegisterForm from '../Register/RegisterForm';
import axios from 'axios';
import './signinForm.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/userSlice';
import { useForm } from 'react-hook-form';
import { Modal } from '../Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import modal from '../Modal/modal.module.css';
import { Form } from 'react-bootstrap';

const SigninForm = ({ show, handleClose, showLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showRegister, setShowRegister] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const onSubmit = (data) => {
    axios.post(`https://dogs-connect-back.vercel.app/api/auth/login`, data).then(({ data }) => {
      if (data.success) {
        console.log(data);
        dispatch(login({ token: data.token, profile: data.user }));
        navigate('/card');
      } else {
        console.log(data.error);
      }
    });
    handleClose();
    reset();
  };

  return (
    <>
      <Modal
        title='Iniciar Sesión'
        show={show}
        onHide={() => {
          reset();
          handleClose();
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label className='mb-0'>Email</Form.Label>
            <Form.Control name='email' size='lg' placeholder='Ingrese su email' {...register('email')} />
            {errors?.email && <span className={modal.error}>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label className='mb-0'>Contaseña</Form.Label>
            <Form.Control
              name='password'
              type='password'
              size='lg'
              placeholder='Ingrese su contaseña'
              {...register('password')}
            />
            {errors?.password && <span className={modal.error}>{errors.password.message}</span>}
          </Form.Group>
          <Button type='submit' className='customBtn w-100 mb-4'>
            Ingresar
          </Button>
          <div className='d-flex justify-content-center'>
            <span>
              No tenes cuenta Registrate
              <Button
                id='btnRegister'
                onClick={() => {
                  showLogin(false);
                  handleShowRegister();
                }}
              >
                Aquí...
              </Button>
            </span>
          </div>
        </Form>
      </Modal>
      <RegisterForm showRegister={showRegister} handleCloseRegister={handleCloseRegister} showLogin={showLogin} />
    </>
  );
};

export default SigninForm;
