import { Main } from './components/Pages';

import './app.scss';

import NavProvider from './hooks/NavContext';


function App () {

  return (
    <NavProvider>
      <Main />
    </NavProvider>
  );
}

export default App;
