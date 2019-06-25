import React from 'react';

const Cards = props => {
  console.log('props cards:' + props);
  return (
    <div className="padding">
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{props.name}</p>
      </div>
    </div>
  );
};

export default Cards;
