import { Global } from '@emotion/react';
import { Location } from './components';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Location />
    </>
  );
}

export default App;
