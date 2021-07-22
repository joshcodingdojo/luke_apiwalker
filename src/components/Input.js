import { useState } from "react";
import { navigate } from "@reach/router";

const Input = (props) => {
  const { apiCategories } = props;
  const [categorySelected, setCategorySelected] = useState("");
  const [id, setId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/display/${id}/${categorySelected}`);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Category:
      <select
        name="category"
        id=""
        onChange={(e) => setCategorySelected(e.target.value)}
      >
        <option value="">--------</option>
        {Object.keys(apiCategories).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      ID:{" "}
      <input
        type="text"
        name="id"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <button>Submit</button>
    </form>
  );
};

export default Input;
