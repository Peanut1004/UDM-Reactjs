import axios from "axios";
import React, { useState } from "react";

function FormPost(props) {
  const { data, setData } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = await axios.post(`http://localhost:3000/people`, {
      name,
      age,
      image,
    });
    const allData = [...data, re.data];
    setData(allData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormPost;
