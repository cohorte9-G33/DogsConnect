import { useEffect, useState } from 'react';
import { Button, Form, FormCheck, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
//import './FormDog.css';

export const FormDog = ({ onHide }) => {
  const [listRaces, setListRaces] = useState([]);
  const [files, setFiles] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`${baseURL}/api/race`)
      .then(({ data: { races } }) => setListRaces(races))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === 'photos' && files) {
        for (let i = 0; i < files.length; i++) formData.append(key, files[i]);
      } else {
        formData.append(key, data[key]);
      }
    });
    try {
      const res = await axios.post(`https://dogs-connect-back.vercel.app/api/dogs/create`, formData);
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
          name='name'
          size='lg'
          placeholder='Ingrese el nombre'
          {...register('name', { required: 'El nombre es requerido' })}
        />
        {errors?.name && <span className='error'>{errors.name.message}</span>}
      </Form.Group>
      <Stack direction='horizontal' gap={2}>
        <Form.Group className='mb-3' controlId='age'>
          <Form.Label className='mb-0'>Edad</Form.Label>
          <Form.Control
            size='lg'
            placeholder='Ingrese la edad'
            name='age'
            {...register('age', {
              required: 'El edad es requerida',
              pattern: { value: /^[0-9]+$/i, message: 'La edad solo acepta números' },
            })}
          />
          {errors?.age && <span className='error'>{errors.age.message}</span>}
        </Form.Group>
        <Form.Group className='mb-3' controlId='typeAge'>
          <Form.Label className='mb-0'>Tipo edad</Form.Label>
          <Form.Select aria-label='tipo de edad' size='lg' defaultValue='years' {...register('typeAge')}>
            <option value='años'>años</option>
            <option value='meses'>meses</option>
          </Form.Select>
          {errors?.age && <span className='error'></span>}
        </Form.Group>
      </Stack>
      <Stack direction='horizontal' gap={2}>
        <Form.Group className='mb-3' controlId='race'>
          <Form.Label className='mb-0'>Raza</Form.Label>
          <Form.Select aria-label='size' size='lg' {...register('race')} defaultValue='Indefinida'>
            <option value='Indefinida'>Indefinida</option>
            {listRaces.length &&
              listRaces.map((race) => (
                <option key={race.id} value={race.name}>
                  {race.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='size'>
          <Form.Label className='mb-0'>Tamaño</Form.Label>
          <Form.Select aria-label='size' size='lg' defaultValue='large' {...register('size')}>
            <option value='Pequeño'>Pequeño</option>
            <option value='Mediano'>Mediano</option>
            <option value='Grande'>Grande</option>
          </Form.Select>
        </Form.Group>
      </Stack>
      <Stack direction='horizontal' gap={5}>
        <Form.Group className='mb-3' controlId='isMale'>
          <Form.Label className='mb-0'>Sexo</Form.Label>
          <Form.Select aria-label='Sexo' size='lg' defaultValue='Macho' {...register('sex')}>
            <option value='Macho'>Macho</option>
            <option value='Hembra'>Hembra</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='isMale'>
          <Form.Label className='mb-0'>En busca de</Form.Label>
          <Form.Select aria-label='Condición' size='lg' defaultValue='Adopción' {...register('condition')}>
            <option value='Adopción'>Adopción</option>
            <option value='Pareja'>Pareja</option>
          </Form.Select>
        </Form.Group>
      </Stack>
      <Stack direction='horizontal' gap={2}>
        <Form.Group className='mb-3' controlId='color'>
          <Form.Label className='mb-0'>Color de pelo</Form.Label>
          <Form.Control size='lg' placeholder='Ingrese el color' name='color' {...register('color')} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='hairStyle'>
          <Form.Label className='mb-0'>Tipo de pelo</Form.Label>
          <Form.Select aria-label='hairStyle' size='lg' defaultValue='large' {...register('hairStyle')}>
            <option value='Corto'>Corto</option>
            <option value='Largo'>Largo</option>
          </Form.Select>
        </Form.Group>
      </Stack>

      <Form.Group className='mb-3' controlId='location'>
        <Form.Label className='mb-0'>Localidad</Form.Label>
        <Form.Control
          name='location'
          size='lg'
          placeholder='Ingrese la localidad'
          {...register('location', { required: 'La localidad es requerida' })}
        />
        {errors?.location && <span className='error'>{errors.location.message}</span>}
      </Form.Group>
      <Form.Group className='mb-3' controlId='description'>
        <Form.Label className='mb-0'>Descripción</Form.Label>
        <Form.Control size='lg' as='textarea' name='age' {...register('description')} />
      </Form.Group>
      <Form.Group controlId='formFileMultiple' className='mb-4'>
        <Form.Label className='mb-0'>Fotos</Form.Label>
        <Form.Control
          type='file'
          name='photos'
          multiple
          size='lg'
          {...register('photos')}
          onChange={(e) => setFiles(e.target.files)}
        />
      </Form.Group>

      <Button type='submit' className='p-4'>
        Guardar
      </Button>
    </Form>
  );
};
