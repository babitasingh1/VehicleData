import React, { useState } from 'react';
import axios from 'axios';
import Car from './components/Car';
import './App.css';

export default function App() {
  const [VINno, setVINno] = useState([]);
  const [Cardata, setCardata] = useState([]);

  async function Search() {
    let url = `https://api.overheid.io/voertuiggegevens/${VINno}?ovio-api-key=25b9cb5e319da93ed0e1bec60066dfaf502af7583c27bf0badbfec018cd2a6e5`;

    try {
      const response = await axios.get(url);

      setCardata({
        loading: true,
        tradename: response.data.handelsbenaming,
        dateofadmission: response.data.datum_eerste_toelating,
        brand: response.data.brandstof[0].brandstof_omschrijving,
      });
    } catch (error) {
      alert(error.message);
      setCardata({
        loading: false,
      });
    }
  }

  if (Cardata.loading) {
    return (
      <div>
        <h2>Please enter your license plate number</h2>
        <input
          type='text'
          onChange={(event) => {
            setVINno(event.target.value);
          }}
        ></input>
        <button onClick={() => Search()}>Send</button>
        <Car Cardata={Cardata} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Please enter your license plate number</h2>
        <input
          type='text'
          onChange={(event) => {
            setVINno(event.target.value);
          }}
        ></input>
        <button onClick={() => Search()}>Send</button>
      </div>
    );
  }
}
