import style from './Countdown.module.scss';

import { Ticker } from '../../Ticker';
import Profile1 from '../../../assets/img/Photos/Profile1.JPG';
import Profile2 from '../../../assets/img/Photos/Profile2.jpg';

// Future date is set to May 22, 2022 at 3pm
const futureDate = new Date(2022,4,22,14,0,0,0);

export const Countdown = () => {

    return (
        <div className="pageContainer">
            <div className={style.pictureContainer}>
                <div className={style.pictureAndName}>
                    <img className={style.profilePicture} src={Profile1} alt='Profile of Richard'></img>
                    <h5 className={style.names}>Richard</h5>
                </div>
                <div className={style.separator}>&</div> 
                <div className={style.pictureAndName}>
                    <img className={style.profilePicture} src={Profile2} alt='Profile of Princess'></img>
                    <h5 className={style.names}>Princess Jane</h5>
                </div>
            </div>
            <div className={style.captionContainer}>
                <h1 className={style.caption}>Are Getting Married</h1>
                <p>on May 22, 2022 - Cebu Philippines</p>
            </div>
            <Ticker futureDate={futureDate} />
        </div>
    );
}