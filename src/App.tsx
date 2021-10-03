import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/GlobalStyles';
import './App.css';
import RootRouter from './Router/RootRouter';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RootRouter />
    </>
  );
}

export default App;
