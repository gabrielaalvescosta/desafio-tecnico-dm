import * as React from 'react';
import { Accordion } from 'react-bootstrap';
import Carros from '../../services/Carros/Carros';
import Caminhoes from '../../services/Caminhoes/Caminhoes';
import Motos from '../../services/Motos/Motos';

interface ICategoriesProps {
}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  return <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Carros</Accordion.Header>
      <Accordion.Body>
        <Carros />
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Motos</Accordion.Header>
      <Accordion.Body>
        <Motos />
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Caminhões</Accordion.Header>
      <Accordion.Body>
        <Caminhoes />
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>;
};

export default Categories;
