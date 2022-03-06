import style from './Home.module.scss';

import { Ticker } from '../../Ticker';

// Future date is set to May 22, 2022 at 3pm
const futureDate = new Date(2022,4,22,15,0,0,0);

export const Home = () => {

    return (
        <div className={style.bg}>
            <div className={style.pageContainer}>
            <div className={style.groom}>Richard and Princess</div>
            <p>Are Getting Married</p>
            <p>May 22, 2022</p>
            <Ticker futureDate={futureDate} />
        </div>
        </div>
    );
}