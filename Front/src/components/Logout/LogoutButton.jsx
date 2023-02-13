import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dropdown, Image } from 'react-bootstrap';

import './logout.css';
import { logout } from '../../redux/slices/userSlice';

const LogoutButton = ({ handleShowNewDog, handleShowEditProfile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
          <Image src='./../../../public/img/user.png' alt='user' className='avatar' />
        </Dropdown.Toggle>

        <Dropdown.Menu className='menu'>
          <Dropdown.Item className='item' onClick={handleShowEditProfile}>
            Editar perfil
          </Dropdown.Item>
          <Dropdown.Item className='item' onClick={handleShowNewDog}>
            Agregar mascota
          </Dropdown.Item>
          <Dropdown.Item className='item' onClick={HandleLogout}>
            Cerrar sesión
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default LogoutButton;
