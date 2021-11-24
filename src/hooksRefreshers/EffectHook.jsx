import React, { useEffect, useState } from "react";

const EffectComponent = () => {
  const [coffeeType, setCoffeeType] = useState("");
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    document.title = coffeeType;
    console.log(document.title);
    return () => {
      document.title = "x_x";
    };
  }, [coffeeType]);

  const getData = () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://random-data-api.com/api/coffee/random_coffee", options)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data.blend_name);
        setCoffeeType(data.blend_name);
      })
      .catch((error) => {
        console.log("something went wrong " + error);
      });
  };

  return (
    <div>
      <h1>Use Effect</h1>
      <button onClick={() => getData()}> Fetch a type of coffee</button>
      <p> {coffeeType} </p>
    </div>
  );
};

export default EffectComponent;
