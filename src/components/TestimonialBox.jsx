import React from 'react';


function Testimonial({reviewData}) {
  const { imageUrl, name, review } = reviewData
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="a-b-text">
      
        <p>{review}</p>
        <p className="p-name">-<i><small>{name}</small>   </i></p>
      </div>
    </div>
  )
}

export default Testimonial