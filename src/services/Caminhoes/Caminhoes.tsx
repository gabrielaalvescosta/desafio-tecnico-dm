import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import IBrands from '../Brands';

const Caminhoes: React.FC = () => {

  const pegaMarcasCaminhoes: IBrands[] = [];

  const [trucks, setTrucks]: [IBrands[], (truckBrands: IBrands[]) => void] = React.useState(pegaMarcasCaminhoes);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");



  // get marcas dos carros
  React.useEffect(() => {
    Axios
      .get<IBrands[]>('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas')
      .then(response => {
        setTrucks(response.data);
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
      <ListGroup variant="flush">
        {/* cars.slice(0).reverse().map para inverter os dados */}
        {trucks.map((truckBrands) => (
          <ListGroup.Item key={truckBrands.number}>
            <h3>{truckBrands.nome}</h3>
            <p>Código: {truckBrands.codigo}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {error && <p className="error">{error}</p>}
    </div>
  )
};

export default Caminhoes;

