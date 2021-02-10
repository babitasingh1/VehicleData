import React, { useState } from 'react';
import axios from 'axios';
import Car from './components/Car';
import './App.css';

export default function App() {
  const [VINno, setVINno] = useState([]);
  const [Cardata, setCardata] = useState([]);
  const [carImage, setcarImage] = useState([]);

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

      const sstk = require('shutterstock-api');

      const applicationConsumerId = '2N2fVuxdSjAOOhtozvbw8nFK5ERKGnmo';
      const applicationConsumerSecret = 'BjGn6yjZmODyauQD';
      sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);

      const imagesApi = new sstk.ImagesApi();

      const queryParams = {
        query: Cardata.brand,
        image_type: 'photo',
        page: 2,
        per_page: 3,
        sort: 'popular',
        view: 'minimal',
      };

      imagesApi
        .searchImages(queryParams)
        .then(({ data }) => {
          setcarImage({
            img1: data[0].assets.huge_thumb.url,

            img2: data[1].assets.huge_thumb.url,

            img3: data[2].assets.huge_thumb.url,
          });
        })
        .catch((error) => {
          alert(error.message);
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
        <Car Cardata={Cardata} images={carImage} />
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
