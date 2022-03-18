import React from 'react';
import Routes from "./routes";
import { Theme } from './themes';
import { GlobalStyles } from './themes/styles';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <Theme>
            <GlobalStyles/>
            <Routes/>
        </Theme>;
};

export default App;
