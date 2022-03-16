import style from './LoveStory.module.scss';

import firstPhoto from '../../../assets/img/Photos/firstStoryPhoto.jpg';
import secondPhoto from '../../../assets/img/Photos/secondStoryPhoto.jpg';

export const LoveStory = () => {

    return (
        <div className={style.pageContainer}>
            <div className={style.header}>Bride and Groom</div>
            <div className={style.storyContainer}>
                <div className={style.storyCell}>
                    <div className={style.storyPhoto}>
                        <img src={firstPhoto} alt='Princess'></img>
                    </div>
                    <div className={style.story}>
                        <div className={style.names}>Princess Jane Rosales</div>
                        <p>Our story is living proof that love is truly patient. From treating each other as little brothers and sisters in the same congregation to being close friends, and now, to becoming my better half for the rest of my life. It all began with his sincere and candid confession in our congregation shortly after our spiritual meeting. I have the impression that Jehovah God has blessed us since it occurred in His sacred home. It’s amazing to see this little boy blossom into a man who is more loving, caring, responsible, and, most importantly, spiritually minded. These are the moments when I feel a spark of love ignited inside me. But, since I wanted Jehovah to guide my decisions, I fervently prayed to Him that I would make a wise decision that would be forever etched in my life story. Eventually, after much meditation and prayer, I gave my unwavering YES! As we embark on a new chapter of our lives together, I am certain that regardless of the storms we face, our love will remain unbreakable as long as we fly with our great pilot, Jehovah God.</p>
                    </div>
                </div>
                <div className={style.storyCell}>
                    <div className={style.story}>
                        <div className={style.names}>Richard Tatchado Jr</div>
                        <p>Princess and I are childhood friends. I remember the first time I saw her; it was during an assembly with her cute pink dress. She has always been beautiful ever since we were still kids. My interest grew when we entered the young adulthood stage where I saw her more often during our congregation meetings and assemblies. We became close friends for a couple of years, and it made me like her even more, which I confessed to her and after a couple of years led to her becoming my fiancée.  It’s a journey with so many ups and downs, but we persevered and let Jehovah guide our relationship which helped us make it through. With us becoming husband and wife, I am determined to lead us to continue following	 Jehovah’s guidance and deepen our love with each other and most importantly to Jehovah.</p>
                    </div>
                    <div className={style.storyPhoto}>
                        <img src={secondPhoto} alt='Richard'></img>
                    </div>
                </div>
            </div>
            
        </div>
    );
}