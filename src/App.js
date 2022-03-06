import { Main } from './components/Pages';

import style from './App.module.scss';

import NavProvider from './hooks/NavContext';


function App () {

  return (
      <div className={style.appContainer}>
        <NavProvider>
          <Main />
        </NavProvider>
      </div>
  );
}

export default App;
