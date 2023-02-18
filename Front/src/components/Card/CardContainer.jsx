import { useState, useEffect } from 'react';
import Card from './Card';
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import { useSelector } from 'react-redux';

const CardContainer = () => {
  const { dogs } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState(null);
  const [filterFields, setFilterFields] = useState(null);

  const handleFilters = (fields) => setFilterFields(fields);

  useEffect(() => {
    let listAux = dogs && [...dogs];
    listAux &&
      filterFields &&
      Object.keys(filterFields).forEach((key) => {
        if (key !== 'location') {
          listAux = listAux.filter((dog) => {
            return dog[key] === filterFields[key];
          });
        } else {
          listAux = listAux.filter((dog) => {
            return dog[key].toLowerCase().includes(filterFields[key].toLowerCase());
          });
        }
      });
    listAux && setFilteredList(listAux);
  }, [filterFields]);

  return (
    <div>
      <nav>
        <div className='searchNav'>
          <NavBarSearch handleFilters={handleFilters} />
        </div>
      </nav>
      <Card dogs={filteredList} />
    </div>
  );
};

export default CardContainer;
