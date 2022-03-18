import Axios from "axios";
import React, { useState, useEffect } from 'react';


const Carros: React.FC = () => {

  const [cars, setCars] = useState([])

  const getCars = async () => {
    Axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .then(response => console.log(response.data))
    .catch(err => console.log(err))

    setCars(cars)
}

    useEffect(() => {
      getCars();
    }, []);

  return(
    <div>
            <h1>Carros</h1>
        
        </div>
)
};

export default Carros;

