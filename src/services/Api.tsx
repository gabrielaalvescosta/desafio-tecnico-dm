import Axios from "axios";
import React, { useState, useEffect } from 'react';


const Api: React.FC = () => {

  const [myArray, setMyArray] = useState([])

  const getCars = async () => {
    const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    const data = await response.json()
    const names = data.results.map((r:any) => r.nome);

    setMyArray(names);
}

useEffect(() => {
  getCars();
}, []);

  return(
    <div>
            <h1>get Data</h1>
            {myArray?.map((value,index) => (
                <li key={`${index}-${value}`}>{value}</li>
            ))}
        </div>
)
};

export default Api;

