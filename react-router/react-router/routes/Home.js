import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>h1</h1>
      <Link to="/logout">ir para logout</Link>
    </div>
  );
}

export default Home;