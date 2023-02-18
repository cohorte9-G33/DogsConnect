import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dropdown, Image } from 'react-bootstrap';

import './logout.css';
import { logout } from '../../redux/slices/userSlice';
import { useEffect, useState } from 'react';
import NotificationIcon from './../Notifications/NotificationIcon';

const LogoutButton = ({ handleShowNewDog, handleShowEditProfile, profile }) => {
  const [userImg, setUserImg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    const img = profile.photo?.data ? btoa(String.fromCharCode(...new Uint8Array(profile.photo.data))) : null;
    img && setUserImg(img);
  }, [profile]);

  return (
    <>
      <Dropdown>
        <NotificationIcon />
        <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
          <Image src={`data:image/webp;base64,${userImg}`} alt='user' className='avatar' />
        </Dropdown.Toggle>

        <Dropdown.Menu className='menu'>
          <Dropdown.Item className='item' onClick={handleShowEditProfile}>
            Editar perfil
          </Dropdown.Item>
          <Dropdown.Item className='item' onClick={handleShowNewDog}>
            Agregar mascota
          </Dropdown.Item>
          <Dropdown.Item className='item' onClick={() => navigate('/likes')}>
            Ver mis mascotas favoritas
          </Dropdown.Item>
          <Dropdown.Item className='item' onClick={HandleLogout}>
            Cerrar sesión
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <NotificationIcon />
    </>
  );
};

export default LogoutButton;
