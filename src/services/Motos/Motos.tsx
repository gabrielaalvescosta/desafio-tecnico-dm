import Axios from "axios";
import React, { useState, useEffect } from 'react';
import IBrands from '../Brands';

const Motos: React.FC = () => {

  const pegaMarcasMotos: IBrands[] = [];

  const [motorcycles, setMotorcycles]: [IBrands[], (motorBrands: IBrands[]) => void] = React.useState(pegaMarcasMotos);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");



  // get marcas dos carros
  React.useEffect(() => {
    Axios
      .get<IBrands[]>('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas')
      .then(response => {
        setMotorcycles(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });;
  }, []);

  return (
    <div>
      <ul>
        {/* cars.slice(0).reverse().map para inverter os dados */}
        {motorcycles.map((motorBrands) => (
          <li key={motorBrands.number}>
            <h3>{motorBrands.nome}</h3>
            <p>Código: {motorBrands.codigo}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  )
};

export default Motos;

