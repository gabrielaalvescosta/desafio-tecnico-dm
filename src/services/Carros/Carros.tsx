import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import IBrands, { baseUrl } from "services/Brands";

const Carros: React.FC = () => {

  const pegaMarcas: IBrands[] = [];

  const [cars, setCars]: [IBrands[], (carsBrands: IBrands[]) => void] = React.useState(pegaMarcas);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");



  // get marcas dos carros
  React.useEffect(() => {
    Axios
      .get<IBrands[]>(`${baseUrl}carros/marcas`)
      .then(response => {
        setCars(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
    <ListGroup variant="flush">
      {/* cars.slice(0).reverse().map para inverter os dados */}
      {cars.map((carsBrands, index) => (
        <ListGroup.Item key={index}>
          <NavLink to={`/products/${carsBrands.number}`}><h3>{carsBrands.nome}</h3></NavLink>
          <p>Código: {carsBrands.codigo}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
    {error && <p className="error">{error}</p>}
  </div>
  )
};

export default Carros;

