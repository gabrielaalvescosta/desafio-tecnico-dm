import Axios from "axios";
import React, { useState, useEffect } from 'react';
import IBrands from '../Brands';


// get marcas carros
/* const getCars = async () => {
  
      const result = await Axios.get<IBrands[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  
} */

const Carros: React.FC = () => {

  const pegaMarcas:IBrands[] = [];

  const [cars, setCars]: [IBrands[], (carsBrands: IBrands[]) => void] = React.useState(pegaMarcas);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

   // const [cars, setCars] = useState<string>("")

  //  useEffect(() => {
  //    getCars();
   // }, []);

   React.useEffect(() => {
    Axios
      .get<IBrands[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
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
      });;
  }, []);

  return(
    <div>
    <ul>
      {cars.map((carsBrands) => (
       <li key={carsBrands.id}>
        <h3>{carsBrands.nome}</h3>
        <p>{carsBrands.codigo}</p>
       </li>
     ))}
    </ul>
    {error && <p className="error">{error}</p>}
  </div>
)
};

export default Carros;

