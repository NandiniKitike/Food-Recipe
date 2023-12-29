import React, { useState } from 'react';
import Products from './Products';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const MEALDB_API_KEY = '1'; // TheMealDB doesn't require an API key for free access
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/${MEALDB_API_KEY}/search.php?s=${search}`)
      .then((response) => response.json())
      .then((result) => setData(result.meals))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

export default App;
