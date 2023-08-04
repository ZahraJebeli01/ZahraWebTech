import React from 'react'

const Car = (props) => {
    const { car } = props;
    return (
            <div key={car.codigo}>
              <div>
                  <span >{car.codigo}</span>
                  <p>{car.nome}</p>
              </div>
            </div>
    )
}
export default Car;

