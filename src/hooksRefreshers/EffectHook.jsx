import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CoffeeIcon from "@mui/icons-material/Coffee";

const EffectComponent = () => {
  const [coffeeType, setCoffeeType] = useState("");
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    document.title = coffeeType;
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
      .then((data) => {
        setCoffeeType(data.blend_name);
        return data;
      })
      .catch((error) => {
        console.log("something went wrong " + error);
      });
  };

  return (
    <div>
      <h1>Use Effect</h1>
      <Button
        variant="contained"
        startIcon={<CoffeeIcon />}
        color="primary"
        size="small"
        sx={{ mb: 3 }}
        onClick={() => getData()}
      >
        {" "}
        Fetch a type of coffee
      </Button>
      <p> {coffeeType} </p>
    </div>
  );
};

export default EffectComponent;
