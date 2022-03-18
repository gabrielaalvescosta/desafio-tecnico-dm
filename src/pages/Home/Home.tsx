import * as React from 'react';
import { Container } from 'react-bootstrap';
import Categories from '../../components/Categories/Categories';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return <Container>
            <Categories/>
         </Container>;
};

export default Home;
