import style from './Venue.module.scss';

import { Map, Marker, ZoomControl  } from "pigeon-maps";


export const Venue = () => {
    return (
        <div className={style.pageContainer}>
            <div className={style.mapLocation}>
                <Map className={style.location} defaultCenter={[10.362858, 123.948750]} 
                    defaultZoom={18} metaWheelZoom='true'>
                    <Marker width={50} anchor={[10.362858, 123.948750]} />
                    <ZoomControl />
                </Map>
            </div>
            <div>Paradise Garden Events Pavilion</div>
            <div>Canduman, 6001 Mandaue City, Philippines</div>
            
        </div>
    );
}