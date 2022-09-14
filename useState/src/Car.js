import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    //하나의 state에 object를 포함할 수 있음
    name: "요를레이",
    brand: "KIA",
    model: "van",
    year: "2022",
    color: "white",
  });

  const updateColor = () => {
    setCar((previousState) => {
      //previousState를 사용하면 state를 호출하지 않고 이전 state의 값을 사용할 수 있음
      return { ...previousState, color: "black" };
      //오직 state에서 color만 호출할 수 있음
    });
  };

  return (
    <>
      <p>
        {car.name} is my car. it is {car.brand} {car.color} {car.model} from{" "}
        {car.year}.
      </p>
      <button type="type" onClick={updateColor}>
        BLACK
      </button>
    </>
  );
}

export default Car;
