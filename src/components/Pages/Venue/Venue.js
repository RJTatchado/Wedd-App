import style from './Venue.module.scss';
import React, { useState } from "react";
import { Map, Marker, ZoomControl  } from "pigeon-maps";

import BankDetails from './BankDetails';


export const Venue = () => {
    const [detailsShown, setDetailsShown] = useState(false);
    return (
        <div className={style.pageContainer}>
            <div className={style.mapLocation}>
                <Map className={style.location} defaultCenter={[10.362858, 123.948750]} 
                    defaultZoom={18} metaWheelZoom='true'>
                    <Marker width={50} anchor={[10.362858, 123.948750]} />
                    <ZoomControl />
                </Map>
            </div>
            <h1>Venue</h1>
            <h2>Paradise Garden Events Pavilion</h2>
            <p>Canduman, Mandaue City, Cebu, Philippines 6001</p>
            <p>May 22, 2022 - 2:00pm</p>
            <h2>Zoom Guests</h2>
            <p>Zoom link will be given on the day of the event.</p>
            <button className={style.buttonStyle} onClick={ () => setDetailsShown(!detailsShown)}>Want to support us?</button>
            { detailsShown && (<BankDetails/>)}

        </div>
    );
}