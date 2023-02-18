import { useEffect, useState } from 'react';
import { Button, Form, Image, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import modal from '../Modal/modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/slices/userSlice';
import EditPhotoIcon from './EditPhotoIcon';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const FormProfile = ({ onHide }) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [auxPhoto, setAuxPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
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
  const formData = new FormData();

  useEffect(() => {
    const img = userPhoto.data ? btoa(String.fromCharCode(...new Uint8Array(userPhoto.data))) : null;
    setPhoto(img);
  }, []);

  const onSubmit = async (newProfile) => {
    formData.append('photo', auxPhoto);
    //formData.append(key, newProfile[key][0])
    !newProfile.photo.length && delete newProfile.photo;
    Object.keys(newProfile).forEach((key) => (key === 'photo' ? null : formData.append(key, newProfile[key])));
    const {
      data: { user },
    } = await axios.put(`${baseURL}/api/profile/${id}`, formData);
    dispatch(updateProfile(user));
    onHide();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='photo' className='mb-4'>
        <Form.Label className='d-flex justify-content-center'>
          {photo ? (
            <Image src={`data:image/webp;base64,${photo}`} alt='user' className={modal.photo} />
          ) : (
            <Image src={photoURL} alt='user' className={modal.photo} />
          )}
          <EditPhotoIcon />
        </Form.Label>
        <Form.Control
          type='file'
          hidden
          name='photo'
          accept='image/*'
          size='lg'
          {...register('photo')}
          onChange={(e) => {
            setPhoto(null);
            setPhotoURL(URL.createObjectURL(e.target.files[0]));
            setAuxPhoto(e.target.files[0]);
          }}
        />
      </Form.Group>

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
