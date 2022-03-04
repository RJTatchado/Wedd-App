import { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from 'date-fns';

export const useTicker = (futureDate) => {
    const [now, setNow] =  useState(new Date());

    useEffect(() => {        
        const interval = setInterval(() => {
            setNow(new Date());          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, [futureDate]);

    const isTimeUp = isBefore(futureDate, now);

    if (isTimeUp) {
        return { months:0, days: 0, hours: 0, minutes: 0, seconds: 0, isTimeUp };
    }

    let { months, days, hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: futureDate
    });

    return { months, days, hours, minutes, seconds, isTimeUp };
};