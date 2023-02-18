import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import './buttonSearch.css';

const ButtonSearch = ({ handleFilters }) => {
  const [searchButton, setSearchButton] = useState(false);
  const [show, setShow] = useState(false);
  const { races: listRaces } = useSelector((state) => state);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const fields = Object.keys(data).reduce((acc, key) => {
      if (data[key]) acc = { ...acc, [key]: data[key] };
      return acc;
    }, {});
    handleFilters(fields);
    handleClose();
  };

  const handleshow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const buttonSearch = document.getElementById('button-search');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setSearchButton(true);
        buttonSearch.style.transform = 'scale(1)';
      } else if (window.scrollY < 500) {
        setSearchButton(false);
        buttonSearch.style.transform = 'scale(0)';
      }
    });
  }, []);

  const clearFilters = (data) => {
    reset();
    handleFilters({});
  };

  return (
    <>
      <div>
        <Modal
          title='Buscar'
          show={show}
          onHide={() => {
            handleClose();
          }}
          aria-labelledby='contained-modal-title-vcenter'
        >
          <form className='formularioModal contenedor' onSubmit={handleSubmit(onSubmit)}>
            <div className='formulario__campo'>
              <select name='condition' className='formulario__input' {...register('condition')} defaultValue=''>
                <option value=''>Condición</option>
                <option value='Adopción'>Adopción</option>
                <option value='Pareja'>Pareja</option>
              </select>
            </div>

            <div className='formulario__campo'>
              <input
                type='text'
                className='formulario__input'
                name='location'
                placeholder='Ciudad'
                {...register('location')}
              />
            </div>

            <div className='formulario__campo'>
              <select name='race' className='formulario__input' {...register('race')} defaultValue=''>
                <option value=''>Raza</option>
                <option value='Indefinida'>Indefinida</option>
                {listRaces.length &&
                  listRaces.map((race) => (
                    <option key={race.id} value={race.name}>
                      {race.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className='formulario__campo'>
              <select name='sex' className='formulario__input' {...register('sex')} defaultValue=''>
                <option value=''>Sexo</option>
                <option value='Macho'>Macho</option>
                <option value='Hembra'>Hembra</option>
              </select>
            </div>

            <div className='formulario__campo'>
              <select name='size' className='formulario__input' {...register('size')} defaultValue=''>
                <option value=''>Tamaño</option>
                <option value='Pequeño'>Pequeño</option>
                <option value='Mediano'>Mediano</option>
                <option value='Grande'>Grande</option>
              </select>
            </div>

            <div className='formulario__campo'>
              <select name='hairStyle' className='formulario__input' {...register('hairStyle')} defaultValue=''>
                <option value=''>Pelo</option>
                <option value='Corto'>Corto</option>
                <option value='Largo'>Largo</option>
              </select>
            </div>

            <div className='formulario__campo boton'>
              <button type='button' className='formulario__submit clear' onClick={clearFilters}>
                Limpiar
              </button>
            </div>
            <div className='formulario__campo '>
              <button className='formulario__submit' onClick={handleSubmit}>
                Buscar
              </button>
            </div>
          </form>
        </Modal>
      </div>

      <div id='button-search' onClick={handleshow}>
        {searchButton && (
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        )}
      </div>
    </>
  );
};

export default ButtonSearch;
