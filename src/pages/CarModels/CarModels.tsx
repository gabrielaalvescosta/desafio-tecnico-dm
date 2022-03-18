import * as React from 'react';
import Axios from 'axios';
import IBrands, { baseUrl } from "services/Brands";

interface ICarModelProps {
}

const CarModel: React.FunctionComponent<ICarModelProps> = (props) => {

    
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

  return <>Car Model page</>;
};

export default CarModel;
