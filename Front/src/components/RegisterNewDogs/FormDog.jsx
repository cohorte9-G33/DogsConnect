import { useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { NewRace } from '../NewRace/NewRace';
import modal from '../Modal/modal.module.css';
import { toast } from 'react-hot-toast';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const FormDog = ({ onHide }) => {
  const { races: listRaces } = useSelector((state) => state);
  const [showModalNewRace, setShowModalNewRace] = useState(false);
  const [files, setFiles] = useState(null);
  const {
    user: {
      profile: { id },
    },
  } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === 'photos' && files) {
        for (let i = 0; i < files.length; i++) formData.append(key, files[i]);
      } else {
        formData.append(key, data[key]);
      }
    });
    formData.append('userId', id);
    try {
      const res = await toast.promise(axios.post(`${baseURL}/api/dogs/create`, formData), {
        loading: 'Registrando...',
        success: <b>Mascota agregada correctamente</b>,
        error: <b>Error al gurdar la mascota</b>,
      });

      onHide();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label className='mb-0'>Nombre</Form.Label>
          <Form.Control
            autoFocus
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

        <div className='d-flex gap-3 align-items-end'>
          <Form.Group className='mb-3' controlId='race'>
            <Form.Label className='mb-0'>Raza</Form.Label>
            <Form.Select
              aria-label='size'
              size='lg'
              {...register('race', {
                onChange: (e) => setValue('size', listRaces?.find((el) => el.name === e.target.value).size),
              })}
              defaultValue='Indefinida'
            >
              <option value='Indefinida'>Indefinida</option>
              {listRaces.length &&
                listRaces?.map((race) => (
                  <option key={race.id} value={race.name}>
                    {race.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='size'>
            <Form.Label className='mb-0'>Tamaño</Form.Label>
            <Form.Select aria-label='size' size='lg' defaultValue='Pequeño' {...register('size')}>
              <option value='Pequeño'>Pequeño</option>
              <option value='Mediano'>Mediano</option>
              <option value='Grande'>Grande</option>
            </Form.Select>
          </Form.Group>
          <Button className='customBtn' onClick={() => setShowModalNewRace(true)}>
            Cargar raza
          </Button>
        </div>

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
          <Form.Control size='lg' as='textarea' name='age' {...register('description')} className={modal.noResize} />
        </Form.Group>

        <Form.Group controlId='formFileMultiple' className='mb-4'>
          <Form.Label className='mb-0'>Fotos ( Hasta 3 fotos )</Form.Label>
          <Form.Control
            type='file'
            name='photos'
            multiple
            size='lg'
            {...register('photos')}
            onChange={(e) => setFiles(e.target.files)}
          />
        </Form.Group>

        <Button type='submit' className='customBtn w-100'>
          Guardar
        </Button>
      </Form>
      <NewRace show={showModalNewRace} onHide={() => setShowModalNewRace(false)} />
    </>
  );
};
