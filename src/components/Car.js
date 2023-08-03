import React from 'react'

const Car = (props) => {
    const { car } = props;
    return (
            <div className="car card" key={car.id}>
              <div className="card-content">
                  <span className="card-title">{car.title}</span>
                  <p>{car.body}</p>
              </div>
            </div>
    )
}

export default Car;
