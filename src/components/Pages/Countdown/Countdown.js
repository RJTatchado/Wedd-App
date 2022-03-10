import style from './Countdown.module.scss';

import { Ticker } from '../../Ticker';

// Future date is set to May 22, 2022 at 3pm
const futureDate = new Date(2022,4,22,15,0,0,0);

export const Countdown = () => {

    return (
        <div className={style.pageContainer}>
            <div className={style.bg}>
            <div className={style.groom}>Richard and Princess</div>
            <p>Are Getting Married on May 22, 2022 - Cebu Philippines</p>
            <Ticker futureDate={futureDate} />
        </div>
        </div>
    );
}