import React from 'react';

const Description = (props) => {

  return (
    <ul id='mk-description'>
      {
        props.description.map(bullet => {
         return (
            <li>
              <span className='mk-bullet'>
                {bullet.slice(1,bullet.length-1)}
              </span>
            </li>
          )
        })
      }
    </ul>
  )
};

export default Description;
