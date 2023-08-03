import React from 'react';
import Car from './Car'

const Cars = (props) => {
  const { Cars, isLoading } = props;
  
  if (!Cars || Cars.length === 0) {
    return <p>No Cars available.</p>;
  }
  
  return (
    <div className="container">
        <h2 className='list-head'>Cars</h2>
        {!isLoading && Cars.map((Car) => {
            return (
              <Car key={Car.id} Car={Car}/>
            );
        })
        }
    </div>
  );
};
export default Cars;
