import React, { useState } from "react";
import FormAddCar from "./FormAddCar";
import FilterCar from "./FilterCar";
import AddCar from "./AddCar";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Eletric: (car) => !car.gas,
  Gas: (car) => car.gas,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home(props) {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState("All");

  function addCar(carName) {
    const newCar = { id: nanoid(), carName };
    setCars([...cars, newCar]);
  }

  function deleteCar(id) {
    const remainingCars = cars.filter((car) => id !== car.id);
    setCars(remainingCars);
  }

  const editCar = (id, newCarName) => {
    const editedCarList = cars.map((car) => {
      if (id === car.id) {
        return { ...car, name: newCarName };
      }
      return car;
    });
    setCars(editedCarList);
  };

  const carList = cars
    .filter(FILTER_MAP[filter])
    .map((car) => (
      <AddCar
        id={car.id}
        name={car.name}
        gas={car.gas}
        key={car.id}
        deleteCar={deleteCar}
        editCar={editCar}
      />
    ));

  const filterCarList = FILTER_NAMES.map((name) => (
    <FilterCar
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div>
      <h1>Cars</h1>
      <FormAddCar addCar={addCar} setCars={setCars} />

      <div>{filterCarList}</div>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {carList}
      </ul>
    </div>
  );
}

export default Home;
