import style from './RSVP.module.scss';
import backgroundPhoto from './../../../assets/img/Photos/rsvp.jpg'

export const RSVP = () => {
    return (
        <section>
            <h1>RSVP</h1>
            <p>Please let us know if you will be able to make it.</p>
            <div className={style.bg}>
                <img src={backgroundPhoto} alt='bible and family'></img>
            </div>
            
        </section>
    );
}