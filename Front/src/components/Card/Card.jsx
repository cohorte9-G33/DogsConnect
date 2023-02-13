import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faStar } from '@fortawesome/free-solid-svg-icons';

import './card.css';

const Cards = ({ dogs }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState([]);

  const handleClose = () => setShow(false);

  const changeModal = (dog) => {
    setModal([dog]);
    setShow(true);
  };

  return (
    <>
      <nav>
        <div className='searchNav'>
          <NavBarSearch />
        </div>
      </nav>
      <div className='container d-flex flex-wrap justify-content-center'>
        {dogs?.map((dog) => {
          const { name, age, typeAge, id } = dog;
          return (
            <div className='col-md-3 col-sm-12' key={id}>
              <Card className='row me-3 mt-5 dogCard'>
                <Card.Img variant='top' src='./img/Lilly.jpg' onClick={() => changeModal(dog)} />
                <Card.Body>
                  <div className='dogInfo col-sm-12 col-md-12 d-flex justify-content-between'>
                    <div className='d-flex'>
                      <Card.Img className='dogImg me-3' variant='top' src='./img/Lilly.jpg' />
                      <p>
                        {name}, {age} Años
                      </p>
                    </div>
                    <div className='dogIcon '>
                      <i>
                        <FontAwesomeIcon className='starIcon me-2' icon={faStar} />
                      </i>
                      <i>
                        <FontAwesomeIcon className='rotateIcon footIcon' icon={faPaw} />
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className='show-grid'>
            {modal?.map((data) => {
              const { name, age, typeAge, sex, race, color, description, hairStyle, size, id } = data;
              return (
                <Container key={id}>
                  <Row>
                    <Col xs={12} md={12}>
                      <Carousel variant='light' className='Carousel'>
                        <Carousel.Item>
                          <img className='d-block w-100' src='./img/Lilly.jpg' alt='First slide' />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className='d-block w-100' src='./img/Roky.jpg' alt='Second slide' />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className='d-block w-100' src='./img/pepe.jpg' alt='Third slide' />
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div>
                        <h2 className='dog_title'>{name}</h2>
                        <div className='dog_info d-flex justify-content-evenly'>
                          <div>
                            <p>
                              <strong>Edad: </strong>
                              {age} Años
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
                          <div>
                            <p>{description}</p>
                          </div>
                        </div>
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
