import { useForm } from 'react-hook-form';
import ButtonSearch from '../Search/ButtonSearch';
import { useSelector } from 'react-redux';

import './navBarSearch.css';

const NavBarSearch = ({ handleFilters }) => {
  const { races: listRaces } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const fields = Object.keys(data).reduce((acc, key) => {
      if (data[key]) acc = { ...acc, [key]: data[key] };
      return acc;
    }, {});
    handleFilters(fields);
  };

  const clearFilters = (data) => {
    reset();
    handleFilters({});
  };

  return (
    <>
      <form className='formulario contenedor' onSubmit={handleSubmit(onSubmit)}>
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
        <div className='formulario__campo boton'>
          <button type='submit' className='formulario__submit'>
            Buscar
          </button>
        </div>
      </form>
      <div className='nav_toggle'>
        <span>
          <ButtonSearch handleFilters={handleFilters} />
        </span>
      </div>
    </>
  );
};

export default NavBarSearch;
