import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cards from '../Card/Card';

const LikePage = () => {
  const navigate = useNavigate();
  const { dogs } = useSelector((state) => state);
  const {
    user: { likes },
  } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState(null);

  useEffect(() => {
    const listAux = dogs?.filter((dog) => likes.includes(dog.id));
    listAux && setFilteredList(listAux);
  }, [likes]);

  return (
    <div>
      <Button size='lg' variant='outline-danger m-5 px-5 py-3' onClick={() => navigate(-1)}>
        Volver
      </Button>
      <Cards dogs={filteredList} />
    </div>
  );
};

export default LikePage;
