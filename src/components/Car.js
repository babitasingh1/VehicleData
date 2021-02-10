import React from 'react';

export default function Car({ Cardata, images }) {
  return (
    <div>
      <div className='formdata'>
        <p1>Trade Name:</p1>
        <p>{Cardata.tradename}</p>
        <p1>Date of first admission:</p1>
        <p>{Cardata.dateofadmission}</p>
        <p1>Brand:</p1>
        <p>{Cardata.brand}</p>
      </div>
      <div>
        <img src={images.img1} alt={'car'}></img>
        <img src={images.img2} alt={'car'}></img>
        <img src={images.img3} alt={'car'}></img>
      </div>
    </div>
  );
}
