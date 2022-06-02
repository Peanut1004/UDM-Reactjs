import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';



const Home = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/people')
      .then(res => res.json())
      .then(data => setPeoples(data))
  }, [])

  // console.log(peoples)
  
  return (
    <div className='box-people-list'>{peoples.map((people, index) => (
      <ProductList key={index} {...people} />
    ))}</div>
  )
}


export default Home