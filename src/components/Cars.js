import React from 'react';
import Car from './Car'

const Cars = (props) => {
  const { cars, isLoading } = props;
  
  if (!cars || cars.length === 0) {
    return <p>No Cars available.</p>;
  }
  
  return (
    <div >
        <h2 > Cars </h2>
        {!isLoading && cars.map((car) => {
            return (
              <Car key={car.codigo} car={car}/>
            );
        })
        }
    </div>
  );
};
export default Cars;