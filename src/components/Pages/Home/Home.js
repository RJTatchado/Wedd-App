import style from './Home.module.scss';
import Logo from  '../../../assets/img/logo/Logo-Gold.png';
import playBtn from '../../../assets/img/icons/play.svg';
import pauseBtn from '../../../assets/img/icons/pause.svg';
import stopBtn from '../../../assets/img/icons/stop.svg';

import music from '../../../assets/snd/backgroundMusic.mp3';

import { useEffect } from 'react';
import { ParticleBackground } from '../../ParticleBackground/ParticleBackground';

export const Home = () => {
    
    const audio = new Audio(music);

    useEffect(() => {
        audio.load();
    }, []);

    const playMusic = () => {
        audio.play();
    }

    const pauseMusic = () => {
        audio.pause();
    }

    const stopMusic = () => {
        audio.pause();
        audio.currentTime = 0;
    }

    return (
        <div className={style.parent} id="homeParentContainer">
            <div className={style.bg}>
                <ParticleBackground />
            </div>
            <div className={style.logo}>
                <img className={style.logoImg} src={Logo} alt='Logo of Richard and Princess Seal'></img>
            </div>
            <div className={style.audioControls}>
                <button className={style.audioDivs} onClick={playMusic}><img className={style.audioBtn} src={playBtn} alt='Play Button'/></button>
                <button className={style.audioDivs} onClick={pauseMusic}><img className={style.audioBtn} src={pauseBtn} alt='Play Button'/></button>
                <button className={style.audioDivs} onClick={stopMusic}><img className={style.audioBtn} src={stopBtn} alt='Play Button'/></button>
            </div>
        </div>
    );
}