import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import IBrands, { baseUrl } from "services/Brands";

const Motos: React.FC = () => {

  const pegaMarcasMotos: IBrands[] = [];

  const [motorcycles, setMotorcycles]: [IBrands[], (motorBrands: IBrands[]) => void] = React.useState(pegaMarcasMotos);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");



  // get marcas dos carros
  React.useEffect(() => {
    Axios
      .get<IBrands[]>(`${baseUrl}motos/marcas`)
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
    <ListGroup variant="flush">
      {/* cars.slice(0).reverse().map para inverter os dados */}
      {motorcycles.map((motorBrands, index) => (
        <ListGroup.Item key={index}>
          <h3>{motorBrands.nome}</h3>
          <p>Código: {motorBrands.codigo}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
    {error && <p className="error">{error}</p>}
  </div>
  )
};

export default Motos;

