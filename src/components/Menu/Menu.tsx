import * as React from 'react';
import { Navbar, Container, NavDropdown, FormControl, Form, Button, Nav } from 'react-bootstrap';


interface IMenuProps {
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home">doutormultas</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Pesquise seu carro aqui"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
