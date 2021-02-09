import React from 'react';

export default function Car(Cardata) {
  return (
    <div className="formdata">
      <p1>Trade Name:</p1>
      <p>{Cardata.Cardata.tradename}</p>
      <p1>Date of first admission:</p1>
      <p>{Cardata.Cardata.dateofadmission}</p>
      <p1>Brand:</p1>
      <p>{Cardata.Cardata.brand}</p>
    </div>
  );
}
