import { TickerCell } from '../TickerCell';
import { useTicker } from '../../hooks';

import style from './Ticker.module.scss';

export const Ticker = ({ futureDate }) => {
    const { months, days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className={ style.timeIsUp }>Time is up!!!</div>
    ) : (
        <>
            <TickerCell value={months} label="Months" />
            <TickerCell value={days} label="Days" />
            <TickerCell value={hours} label="Hours" />
            <TickerCell value={minutes} label="Minutes" />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (
        <div className={ style.tickerShell }>
        
            { tickerContents }           
        </div>              
    );
}