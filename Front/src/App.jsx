import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ButtonUp from './components/ScrollUp/ButtonUp';
import SigninForm from './components/Login/SigninForm';
import { ProtectedRoute } from './routes/ProtectedRoute';
import NavBarSearch from './components/NavBarSearch/NavBarSearch';
import CardContainer from './components/Card/CardContainer';
import { useDispatch } from 'react-redux';
import { loadDogs, loadRaces } from './redux/slices';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import LikePage from './components/Likes/LikePage';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${baseURL}api/race`)
      .then(({ data: { races } }) => dispatch(loadRaces(races)))
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${baseURL}/api/dogs/`)
      .then(({ data: { success, dogs } }) => {
        if (success) {
          const auxDogs = dogs?.map((dog) => {
            if (dog.images.length) {
              dog.images.forEach((image, idx) => {
                dog.images[idx].url = btoa(String.fromCharCode(...new Uint8Array(image.photo.data)));
              });
            }
            return dog;
          });
          auxDogs?.length && dispatch(loadDogs(auxDogs));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        <Route
          path='/likes'
          element={
            <ProtectedRoute to='/'>
              <LikePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};
export default App;
