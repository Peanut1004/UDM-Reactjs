import React, { useEffect, useState } from "react";
import axios from "axios";
import FormPost from "./FormPost";

function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/people`);
    setData(response.data);
  };
  useEffect(() => {
    console.log(data);
    fetchData();
  }, []);

  const removeItems = (id) => {
    axios.delete(`http://localhost:3000/people/${id}`);
    let newData = data.filter((el) => el.id !== id);
    setData(newData);
  };

  return (
    <div>
      {data.map((el) => (
        <div>
          <img src={el.image} alt="images" />
          <h3 key={el.id}>{el.name}</h3>
          <p>{el.price}</p>
          <button onClick={() => removeItems(el.id)}>Remove</button>
        </div>
      ))}
      <FormPost data={data} setData={setData} />
    </div>
  );
}

export default Home;
