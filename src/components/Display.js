import { useEffect, useState } from "react";
import axios from "axios";

const Display = (props) => {
  console.log("DISPLAY COMPONENT RENDER");
  const { uid, category } = props;
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${category}/${uid}`)
      .then((response) => setApiData(response.data))
      .catch((err) => console.log(err));
  }, [props]);
  if (category === "people") {
    return (
      <div>
        <h3>Name: {apiData.name}</h3>
        <h3>Birth Year: {apiData.birth_year}</h3>
      </div>
    );
  } else if (category === "planets") {
    return (
      <div>
        <h3>Planet Name: {apiData.name}</h3>
        <h3>Climate: {apiData.climate}</h3>
      </div>
    );
  } else if (category === "films") {
    return (
      <div>
        <h3>{apiData.title}</h3>
        <h3>{apiData.episode_id}</h3>
      </div>
    );
  } else {
    return null;
  }
  // return (
  //   <div>
  //     <h1>{apiData.name}</h1>
  //     <h1>{apiData.birth_year}</h1>
  //   </div>
  // );
};

export default Display;

var x = {
  a: "b",
  c: "d",
  e: "f",
};
console.log(x[0]);
