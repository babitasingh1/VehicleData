import React from 'react';
import SwiftSlider from 'react-swift-slider';

export default function Car({ Cardata, images }) {
  const data = [
    { id: '1', src: images.img1 },
    { id: '2', src: images.img2 },
    { id: '3', src: images.img3 },
  ];
  console.log(data);
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
        <SwiftSlider data={data} enableNextAndPrev={false} />
      </div>
    </div>
  );
}
