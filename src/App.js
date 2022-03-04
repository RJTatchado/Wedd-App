import { useState } from 'react';

import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';

import style from './App.module.scss';

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = new Date(2022,4,22,15,0,0,0);

function App () {
  const [tickerVisible, setTickerVisible] = useState(false);
  const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
  const toggleText = tickerVisible ? 'Hide Countdown': 'Show Countdown';

  return (
    <div className={style.pageContainer}>
    {/* <Navbar/> */}
      <h1>Richard and Princess</h1>
      <p>Join us on our wedding day</p>
      { tickerEl }
      <button 
        className={ style.toggleButton } 
        onClick={() => setTickerVisible(prev => !prev) }
      >
        { toggleText }
      </button>
    </div>
  );
}

export default App;
