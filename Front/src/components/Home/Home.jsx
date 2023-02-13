import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCamera, faComments } from '@fortawesome/free-solid-svg-icons';
import ButtonUp from '../ScrollUp/ButtonUp';
import './home.css';

const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row d-flex align-items-center '>
            <div className='col-md-6 col-sm-12'>
              <h1 className='hero-title'>
                La web que conecta <br /> a los perros!
              </h1>
              <h3 className='hero-title2'>Probala es gratis.</h3>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className='hero-img' src='./img/hero.png' alt='imagen celular con perros' />
            </div>
          </div>
        </div>
      </section>

      <section
        className='ourweb container d-flex flex-column align-items-center justify-content-center'
        data-aos='zoom-in'
        data-aos-delay='100'
        data-aos-duration='500'
      >
        <h2 className='ourweb-title'>Nuestra Web</h2>
        <p className='ourweb-text'>
          DogsConnect es una red social para dueños de perr@s y aquellos que quieran serlo. Conectamos perros en una
          comunidad amorosa y divertida. Ayudamos a encontrar la pareja perfecta o el perr@ perfecto.{' '}
        </p>
        <p className='ourweb-text'>
          Nuestra misión es que nuestros usuarios puedan encontrar ese perr@ que están buscando y conectarlos con otros
          con las mismas necesidades.
        </p>
      </section>

      <section className='container search'>
        <div className='row d-flex align-items-center'>
          <div
            className='col-md-5 col-sm-12  img-container'
            data-aos='fade-right'
            data-aos-delay='100'
            data-aos-duration='500'
          >
            <img className='search-img' src='./img/screen1.png' alt='foto celular perros' />
          </div>
          <div className='col-md-7 col-sm-12' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>
            <i className='fa-5x icon'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <h2 className='search-title'>Busca perros cerca de ti</h2>
            <p className='search-text'>
              Crea un perfil , ya sea que busque adoptar o para la cruza, y encuentra el perr@ perfecto cercano a tu
              ubicación.
            </p>
          </div>
        </div>
      </section>

      <section className='container post'>
        <div className='row d-flex align-items-center'>
          <div
            className='col-md-7 col-sm-12 post-text'
            data-aos='fade-right'
            data-aos-delay='100'
            data-aos-duration='500'
          >
            <i className='fa-4x'>
              <FontAwesomeIcon icon={faCamera} />
            </i>
            <h2 className='post-title'>Comparte las mejores fotos de tu perr@</h2>
            <p className='post-text'>
              Sube fotos de tus perr@s en todo sus momentos para que otros usuarios te den like y comenten.
            </p>
          </div>
          <div className='col-md-5 img-container' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>
            <img className='post-img' src='./img/screen2.png' alt='foto celular perros' />
          </div>
        </div>
      </section>

      <section className='container connect'>
        <div className='row d-flex align-items-center'>
          <div
            className='col-md-5 col-sm-12  img-container'
            data-aos='fade-right'
            data-aos-delay='100'
            data-aos-duration='500'
          >
            <img className='connect-img' src='./img/screen3.png' alt='foto celular perros' />
          </div>
          <div className='col-md-7 col-sm-12' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>
            <i className='fa-5x icon'>
              <FontAwesomeIcon icon={faComments} />
            </i>
            <h2 className='connect-title'>Haz Match y Conecta</h2>
            <p className='connect-text'>
              Dale Match a los perr@s que te gusten para hablar con el dueño. Podrás hablar y arreglar un encuentro.
            </p>
          </div>
        </div>
      </section>
      <ButtonUp />
    </>
  );
};

export default Home;
