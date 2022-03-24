import React from "react";
import {Home, Countdown, LoveStory, Photos, RSVP, Venue} from './';
import Navbar from "../Navbar";

export const Main = () => (
    <>
        <Home/>
        <div className="position-relative w-100">
            <Navbar />
            <Countdown/>
            <LoveStory/>
            <Photos/>
            <Venue/>
            <RSVP/>
        </div>
    </>
);