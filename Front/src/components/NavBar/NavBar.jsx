import React, { useState } from 'react';
import SigninForm from '../Login/SigninForm';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Logout/LogoutButton';
import { useSelector } from 'react-redux';
import { RegisterNewDogs } from '../RegisterNewDogs/RegisterNewDogs';
import './navbar.css';
import { EditProfile } from '../EditProfile/EditProfile';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showModalNewDog, setShowModalNewDog] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const {
    user: { islogged },
  } = useSelector((state) => state);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseNewDog = () => setShowModalNewDog(false);
  const handleShowNewDog = () => setShowModalNewDog(true);
  const handleCloseEditProfile = () => setShowEditProfile(false);
  const handleShowEditProfile = () => setShowEditProfile(true);

  return (
    <>
      <header>
        <nav>
          <div className='container d-flex justify-content-between navbar'>
            <a className='navbar-brand'>
              <img src='./img/logo.png' alt='imagen logo' />
            </a>
            <div>
              {!islogged ? (
                <LoginButton handleShow={handleShow} />
              ) : (
                <LogoutButton handleShowNewDog={handleShowNewDog} handleShowEditProfile={handleShowEditProfile} />
              )}
            </div>
          </div>
        </nav>
        <div>
          <SigninForm show={show} handleClose={handleClose} showLogin={setShow} />
        </div>
        <EditProfile show={showEditProfile} onHide={handleCloseEditProfile} />
        <RegisterNewDogs show={showModalNewDog} onHide={handleCloseNewDog} />
      </header>
    </>
  );
};

export default NavBar;
