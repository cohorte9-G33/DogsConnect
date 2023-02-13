import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/userSlice';
import { useForm } from 'react-hook-form';
import { Modal } from '../Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import modal from '../Modal/modal.module.css';
import { Form } from 'react-bootstrap';

const RegisterForm = ({ showRegister, handleCloseRegister, showLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const onSubmit = async (data) => {
    try {
      const {
        data: { success },
      } = await axios.post('http://localhost:5000/api/auth/register', data);

      if (success) {
        const { email, password } = data;
        const dataUser = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        if (dataUser.data.success) {
          dispatch(login(dataUser.data.user.token));
          navigate('/card');
        } else {
          console.log(dataUser.error);
        }

        handleCloseRegister();
      }
    } catch (error) {
      console.log(error.response.status);
    } finally {
      reset();
    }
  };

  return (
    <>
      <Modal
        title='Registro'
        show={showRegister}
        onHide={() => {
          reset();
          handleCloseRegister();
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label className='mb-0'>Email</Form.Label>
            <Form.Control name='email' size='lg' placeholder='Ingrese su email' {...register('email')} />
            {errors?.email && <span className={modal.error}>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group className='mb-3' controlId='location'>
            <Form.Label className='mb-0'>Localidad</Form.Label>
            <Form.Control name='location' size='lg' placeholder='Ingrese su localidad' {...register('location')} />
            {errors?.location && <span className={modal.error}>{errors.location.message}</span>}
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
                  handleCloseRegister();
                  showLogin(true);
                }}
              >
                Aquí...
              </Button>
            </span>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default RegisterForm;

/* 
 <>
      <Modal
        size='sm'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={showRegister}
        onHide={handleCloseRegister}
      >
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleInputChange}
              type='email'
              name='email'
              id='login-email'
              className='form-control mb-3 rounded-4'
              placeholder='Email'
              required
            />
            <label htmlFor='password'>Ciudad:</label>
            <input
              onChange={handleInputChange}
              type='text'
              name='location'
              id='login-pciudad'
              className='form-control mb-3 rounded-4'
              placeholder='Ciudad'
              required
            />
            <label htmlFor='password'>Contraseña:</label>
            <input
              onChange={handleInputChange}
              type='password'
              name='password'
              id='login-password'
              className='form-control mb-3 rounded-4'
              placeholder='Contraseña'
              required
            />
            <Button type='submit' className='customBtn w-100 mb-4'>
              Registrarse
            </Button>
            <div className='d-flex justify-content-center'>
              <span>
                Si ya tenes cuenta Ingresa<Button id='btnRegister'>Aqui!</Button>
              </span>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>

*/
