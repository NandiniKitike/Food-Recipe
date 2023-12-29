import React from 'react';

const Products = ({ data }) => {
    return (
        <div>
            <div className="row">
                {data.map((meal) => (
                    <div className="col-md-4" key={meal.idMeal}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={meal.strMealThumb} alt="Meal" />
                            <div className="card-body">
                                <center>
                                    <h5 className="card-title">{meal.strMeal}</h5>
                                    <p className="card-text">Category: {meal.strCategory}</p>
                                    <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
                                        Recipe Link
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
