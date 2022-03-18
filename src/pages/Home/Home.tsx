import * as React from 'react';
import { Container } from 'react-bootstrap';
import Categories from '../../components/Categories/Categories';
import Slideshow from '../../components/Slideshow/Slideshow'

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return <Container>
            <Slideshow/>
            <Categories/>
         </Container>;
};

export default Home;
