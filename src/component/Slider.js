import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Slider() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = users.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    // console.log(index);
  }, [index, users]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="slider">
      {users.map((user, userIndex) => {
        let position = "nextSlider";
        if (userIndex === index) {
          position = "activeSlider";
        }
        if (
          userIndex === index - 1 ||
          (userIndex === users.length - 1 && index === 0)
        ) {
          position = "lastIndex";
        }
        return (
          <div key={userIndex} className={position}>
            <h3>{user.name}</h3>
            <p>{user.age}</p>
          </div>
        );
      })}

      <div className="slider-btn">
        <FaAngleLeft onClick={() => setIndex(index - 1)} />
        <FaAngleRight onClick={() => setIndex(index + 1)} />
      </div>
    </div>
  );
}

const arr = [0, 1, 2];
export default Slider;
