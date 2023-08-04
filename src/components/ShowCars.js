import React, { useEffect, useState } from 'react';
import Cars from '../components/Cars';
import axios from 'axios';
import '../index.css';

function ShowCars() {
  const [appState, setAppState] = useState({
    loading: false,
    cars: null,
  });

  useEffect( () => {
    setAppState({ loading: true });
    const apiUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

    // const axios = require('axios');    
    axios.get(apiUrl)
      .then((response) => {
        const apiData = response.data.slice(0,10);
        console.log(apiData);
        setAppState({ loading: false, cars: apiData} ) ;
        
      });
    }, [setAppState]);

//   return (
//       <Cars isLoading={appState.loading} cars={appState.cars}/>
//   );


  return (
    <div className="container">
      <div className="table-container"> 
        {appState.loading ? (
          <div className="loading">Loading...</div> 
        ) : (
          <ul className="car-list"> 
            {appState.cars.map((car) => (
              <li key={car.codigo} className="car-item"> 
                <span className="car-name">{car.nome}</span> 
                <span className="car-id">{car.codigo}</span> 
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ShowCars;