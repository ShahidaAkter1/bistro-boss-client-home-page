import React from 'react';

const MenuRecommend= ({menu}) => {
    const {image,name,recipe}=menu;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-orange-500 font-bold">ADD TO CART</button>
          </div>
        </div>
      </div>
    );
};

export default MenuRecommend;