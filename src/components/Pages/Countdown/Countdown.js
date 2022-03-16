import style from './Countdown.module.scss';

import { Ticker } from '../../Ticker';
import Profile1 from '../../../assets/img/Photos/Profile1.JPG';
import Profile2 from '../../../assets/img/Photos/Profile2.jpg';

// Future date is set to May 22, 2022 at 3pm
const futureDate = new Date(2022,4,22,15,0,0,0);

export const Countdown = () => {

    return (
        <div className={style.pageContainer}>
            <div className={style.pictureContainer}>
                <div className={style.pictureAndName}>
                    <img className={style.profilePicture} src={Profile1} alt='Profile of Richard'></img>
                    <div className={style.names}>Richard</div>
                </div>
                <div className={style.separator}>&</div> 
                <div className={style.pictureAndName}>
                    <img className={style.profilePicture} src={Profile2} alt='Profile of Princess'></img>
                    <div className={style.names}>Princess Jane</div>
                </div>
            </div>
            <div className={style.captionContainer}>
                <div className={style.caption}>Are Getting Married</div>
                <p>on May 22, 2022 - Cebu Philippines</p>
            </div>
            <Ticker futureDate={futureDate} />
        </div>
    );
}