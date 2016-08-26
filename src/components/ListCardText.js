import React from 'react';
import getFeed from './helpers';


const ListCardText = ({text}) => {
  console.log(text);
  var t = JSON.stringify(text)
    return (
      <p className="card-text">{t}</p>
    )
}

export default ListCardText;