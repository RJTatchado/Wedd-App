import React from "react";
import {Home, Countdown, LoveStory, Photos, RSVP, Venue} from './';
import Navbar from "../Navbar";

export const Main = () => (
    <main>
        <Home/>
        <div className="position-relative">
            <Navbar />
            <Countdown/>
            <LoveStory/>
            <Photos/>
            <Venue/>
            <RSVP/>
        </div>
    </main>
);