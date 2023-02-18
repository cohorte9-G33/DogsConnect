import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import RegisterForm from '../Register/RegisterForm';
import axios from 'axios';
import './signinForm.css';
import { useDispatch } from 'react-redux';
import { loadLikes, login } from '../../redux/slices/userSlice';
import { useForm } from 'react-hook-form';
import { Modal } from '../Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import modal from '../Modal/modal.module.css';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

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
    axios.post(`${baseURL}/api/auth/login`, data).then(({ data: { success, user, token } }) => {
      if (success) {
        handleClose();
        reset();
        dispatch(login({ token, profile: user }));
        axios
          .get(`${baseURL}/api/likes/${user.id}`)
          .then(({ data: { likes } }) => {
            const listLikes = likes.map(({ dogId }) => dogId);
            dispatch(loadLikes(listLikes));
          })
          .catch((error) => {
            console.error(error);
          });

        navigate('/card');
      } else {
        toast.error(data.error, { duration: 1500 });
      }
    });
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
            <Form.Control autoFocus name='email' size='lg' placeholder='Ingrese su email' {...register('email')} />
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
