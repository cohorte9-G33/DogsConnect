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
import toast from 'react-hot-toast';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

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

  const onSubmit = async (values) => {
    try {
      const {
        data: { success },
      } = await toast.promise(axios.post(`${baseURL}/api/auth/register`, values), {
        loading: 'Registrando...',
        success: <b>Usuario registrado correctamente</b>,
        error: <b>Ya existe un usuario con ese email</b>,
      });

      if (success) {
        const { email, password } = values;
        const { data } = await axios.post(`${baseURL}/api/auth/login`, { email, password });
        console.log({ data });
        if (data.success) {
          dispatch(login({ token: data.token, profile: data.user }));
          navigate('/card');
          reset();
          handleCloseRegister();
        } else {
          toast.error('Credenciales de acceso invalidos', { duration: 2000 });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal title='Registro' show={showRegister} onHide={handleCloseRegister}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label className='mb-0'>Email</Form.Label>
            <Form.Control autoFocus name='email' size='lg' placeholder='Ingrese su email' {...register('email')} />
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
            Registrarse
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
