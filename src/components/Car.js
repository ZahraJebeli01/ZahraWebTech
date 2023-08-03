import React from 'react'

const Car = (props) => {
    const { car } = props;
    return (
            <div className="car card" key={car.codigo}>
              <div className="card-content">
                  <span className="card-title">{car.codigo}</span>
                  <p>{car.nome}</p>
              </div>
            </div>
    )
}

export default Car;
