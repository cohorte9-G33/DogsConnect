import { useState } from 'react';
import { Button, Form, Image, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import modal from '../Modal/modal.module.css';
import { useSelector } from 'react-redux';

export const FormProfile = ({ onHide }) => {
  const [photo, setPhoto] = useState(null);
  const {
    user: {
      profile: { id, firstName, lastName, phone, photo: userPhoto },
    },
  } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      phone,
    },
  });

  const onSubmit = async (newProfile) => {
    console.log(newProfile);
    const { data } = await axios(`http://localhost:5000/api/profile/${id}`, newProfile);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='horizontal' gap={2}>
        <Image src={photo ? photo : './../../../public/img/user.png'} alt='user' className={modal.photo} />
        <Form.Group controlId='formFileMultiple' className='mb-4'>
          <Form.Label className='mb-0'>Cambiar foto</Form.Label>
          <Form.Control
            type='file'
            name='photo'
            accept='image/*'
            size='lg'
            {...register('photo')}
            onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
          />
        </Form.Group>
      </Stack>

      <Form.Group className='mb-3' controlId='firstName'>
        <Form.Label className='mb-0'>Nombre</Form.Label>
        <Form.Control name='firstName' size='lg' placeholder='Ingrese el nombre' {...register('firstName')} />
        {errors?.firstName && <span className='error'>{errors.firstName.message}</span>}
      </Form.Group>
      <Form.Group className='mb-3' controlId='lastName'>
        <Form.Label className='mb-0'>Apellido</Form.Label>
        <Form.Control name='lastName' size='lg' placeholder='Ingrese el apellido' {...register('lastName')} />
        {errors?.lastName && <span className='error'>{errors.lastName.message}</span>}
      </Form.Group>
      <Form.Group className='mb-3' controlId='phone'>
        <Form.Label className='mb-0'>Teléfono</Form.Label>
        <Form.Control name='phone' size='lg' placeholder='Ingrese el teléfono' {...register('phone')} />
        {errors?.phone && <span className='error'>{errors.phone.message}</span>}
      </Form.Group>

      <Button type='submit' className='customBtn w-100 mt-3'>
        Guardar
      </Button>
    </Form>
  );
};
