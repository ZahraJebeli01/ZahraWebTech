import React, { useEffect, useState } from 'react';
import Cars from '../components/Cars';
import axios from 'axios';

function ShowCars() {
  const [appState, setAppState] = useState({
    loading: true,
    cars: null,
  });

  useEffect( () => {
    setAppState({ loading: true });
    const apiUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

    // const axios = require('axios');    
    axios.get(apiUrl)
      .then((response) => {
        const apiData = response.data.slice(0,5);
        console.log(apiData);
        setAppState({ loading: true, cars: apiData} ) ;
        
      });
    }, [setAppState]);

  return (
      <Cars isLoading={appState.loading} cars={appState.cars}/>
  );

}
export default ShowCars;
