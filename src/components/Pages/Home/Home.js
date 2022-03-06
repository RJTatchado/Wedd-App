import style from './Home.module.scss';

import { useState } from 'react';

import { Ticker } from '../../Ticker';

// Future date is set to May 22, 2022 at 3pm
const futureDate = new Date(2022,4,22,15,0,0,0);

export const Home = () => {
    const [tickerVisible, setTickerVisible] = useState(false);
    const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
    const toggleText = tickerVisible ? 'Hide Countdown': 'Show Countdown';
    const homeContents = (
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

    return (
        <div className={style.bg}>
            {homeContents}
        </div>
    );
}