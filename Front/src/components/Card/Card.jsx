import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Modal, Row, Stack } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import IsFavoriteButton from '../Favorite/IsFavoriteButton';
import NoFavorateButton from '../Favorite/NoFavoriteButton';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLikes } from '../../redux/slices/userSlice.js';
import MatchButton from '../Match/MatchButton';

import './card.css';

const Cards = ({ dogs }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState([]);
  const dispatch = useDispatch();
  const {
    user: { likes },
  } = useSelector((state) => state);

  const handleClose = () => setShow(false);

  const changeModal = (dog) => {
    setModal([dog]);
    setShow(true);
  };

  return (
    <>
      <div className='container d-flex flex-wrap justify-content-center '>
        {!dogs?.length && <h2>No se encontraron resultados para su busqueda</h2>}
        {dogs?.map((dog) => {
          const { name, age, typeAge, id, images, location, condition } = dog;
          return (
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3' key={id}>
              <Card className='row me-4 mt-5 mx-auto dogCard'>
                <Card.Img
                  variant='top'
                  src={images.length ? `data:image/webp;base64,${images[0]?.url}` : './img/IND.webp'}
                  onClick={() => changeModal(dog)}
                  className='dogCardImg'
                />
                <Card.Body>
                  <div className='dogInfo col-sm-12 col-md-12 d-flex justify-content-between'>
                    <div className='d-flex'>
                      <Card.Img
                        variant='top'
                        className='dogImg me-3'
                        src={images[0]?.url ? `data:image/webp;base64,${images[1]?.url}` : './img/IND.webp'}
                      />
                      <Stack>
                        <p>{`${name}, ${age} ${age > 1 ? typeAge : typeAge.slice(0, 3)}`}</p>
                        <p>{location}</p>
                        <p>
                          <strong>Busco </strong>
                          {condition}
                        </p>
                      </Stack>
                    </div>
                    <div className='dogIcon '>
                      <i onClick={() => dispatch(toggleLikes(id))}>
                        {likes.includes(id) ? <NoFavorateButton /> : <IsFavoriteButton />}
                      </i>
                      <i>
                        <MatchButton />
                      </i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <Modal show={show} onHide={handleClose} size='md'>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className='show-grid'>
            {modal?.map((data) => {
              const { name, age, typeAge, sex, race, color, description, hairStyle, size, location, id, images } = data;
              return (
                <Container key={id}>
                  <Row>
                    <Col xs={12} md={12}>
                      <Carousel variant='light' className='Carousel'>
                        <Carousel.Item>
                          <img
                            className='dogModalImg card-img-top'
                            src={images[0]?.url ? `data:image/webp;base64,${images[0]?.url}` : './img/IND.webp'}
                            alt='First slide'
                          />
                        </Carousel.Item>
                        {images[1]?.url && (
                          <Carousel.Item>
                            <img
                              className='dogModalImg card-img-top'
                              src={`data:image/webp;base64,${images[1]?.url}`}
                              alt='Second slide'
                            />
                          </Carousel.Item>
                        )}
                        {images[2]?.url && (
                          <Carousel.Item>
                            <img
                              className='dogModalImg card-img-top'
                              src={`data:image/webp;base64,${images[2]?.url}`}
                              alt='Third slide'
                            />
                          </Carousel.Item>
                        )}
                      </Carousel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div>
                        <h2 className='dog_title'>
                          {name} <span className='location-modal'> {location}</span>
                        </h2>
                        <div className='dog_info d-flex justify-content-evenly'>
                          <div>
                            <p>
                              <strong>Edad: </strong>
                              {`${age} ${typeAge}`}
                            </p>
                            <p>
                              <strong>Raza: </strong>
                              {race}
                            </p>
                            <p>
                              <strong>Sexo: </strong>
                              {sex}
                            </p>
                          </div>
                          <div>
                            <p>
                              <strong>Tamaño: </strong>
                              {size}
                            </p>
                            <p>
                              <strong>Color: </strong>
                              {color}
                            </p>
                            <p>
                              <strong>Pelo: </strong>
                              {hairStyle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className='dog_info container dog_description'>
                        <p>
                          {' '}
                          <strong>Descripción:</strong> {description}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              );
            })}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Cards;
