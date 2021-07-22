import "./App.css";
import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import axios from "axios";
import Input from "./components/Input";
import Display from "./components/Display";

function App() {
  const [apiCategories, setApiCategories] = useState({});
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/")
      .then((response) => setApiCategories(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>yo</h1>
      <Input apiCategories={apiCategories} />
      <Router>
        <Display path="/display/:uid/:category" />
      </Router>
    </div>
  );
}

export default App;
