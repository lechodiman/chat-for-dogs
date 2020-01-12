import { useState, useEffect } from 'react';
import axios from 'axios';

const useDogs = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random/3`);
      return res.data.message;
    };

    setLoading(true);

    fetchDogs().then(dogs => {
      setImages(dogs);
      setLoading(false);
    });
  }, []);

  return { images, loading };
};

export default useDogs;
