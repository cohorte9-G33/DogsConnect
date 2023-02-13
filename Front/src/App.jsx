import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ButtonUp from './components/ScrollUp/ButtonUp';
import SigninForm from './components/Login/SigninForm';
import { ProtectedRoute } from './routes/ProtectedRoute';
import NavBarSearch from './components/NavBarSearch/NavBarSearch';
import CardContainer from './components/Card/CardContainer';

const App = () => {
  return (
    <BrowserRouter>
      <ButtonUp />
      <NavBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route
          path='/card'
          element={
            <ProtectedRoute to='/'>
              <CardContainer />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<SigninForm />} />
        <Route path='/nav' element={<NavBarSearch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
