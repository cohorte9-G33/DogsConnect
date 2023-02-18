import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import style from '../Modal/modal.module.css';
import { useDispatch } from 'react-redux';
import { addRace } from '../../redux/slices/racesSlice';

export const FormNewRace = ({ onHide }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(addRace(data));
      onHide();
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label className='mb-0'>Nombre</Form.Label>
        <Form.Control
          autoFocus
          name='name'
          size='lg'
          placeholder='Ingrese el nombre de la raza'
          {...register('name', { required: 'El nombre es requerido' })}
        />
        {errors?.name && <span className={style.error}>{errors.name.message}</span>}
      </Form.Group>
      <Form.Group className='mb-3' controlId='size'>
        <Form.Label className='mb-0'>Tamaño</Form.Label>
        <Form.Select aria-label='size' size='lg' defaultValue='Pequeño' {...register('size')}>
          <option value='Pequeño'>Pequeño</option>
          <option value='Mediano'>Mediano</option>
          <option value='Grande'>Grande</option>
        </Form.Select>
      </Form.Group>
      <Button type='submit' className='customBtn w-100'>
        Guardar
      </Button>
    </Form>
  );
};
