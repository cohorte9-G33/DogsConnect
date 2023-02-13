import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

const baseURL = process.env.VITE_APP_BASE_URL || 'http://localhost:5000/';

const CardContainer = () => {
  const [dogs, setDogs] = useState();
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    const {
      data: { success, dogs },
    } = await axios.get(`${baseURL}/api/dogs/`);
    success && setDogs(dogs);
  };

  useEffect(() => {
    setLoading(true);
    handleFetch();
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <Card dogs={dogs} />
    </div>
  );
};

export default CardContainer;
