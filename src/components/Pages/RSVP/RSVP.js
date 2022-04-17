import style from './RSVP.module.scss';
import InputForm from './InputForm';

export const RSVP = () => {
    return (
        <section>
            <h1>RSVP</h1>
            <div className={style.bg}>
                <InputForm/>
            </div>
                
        </section>
    );
}