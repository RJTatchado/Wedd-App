import React, { useRef, useState, useEffect } from 'react';
import Images from './data';
import './style.scss';

export const Photos = () => {
    const carouselRef = useRef();
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [carouselLeft, setCarouselLeft] = useState(0);

    const cyclePhotos = n => {
        setCurrentPhoto(currentPhoto + n);
    };

    useEffect(() => {
        setCarouselLeft(currentPhoto * carouselRef.current.clientWidth);
    }, [currentPhoto])

    return (
        <section>
            <div ref={carouselRef} className="carousel">
                {currentPhoto !== 0 && (
                    <button
                        type="button"
                        className="carousel-button button--left"
                        onClick={() => cyclePhotos(-1)}
                    >
                        Left
                    </button>
                )}

                {currentPhoto < Images.length - 1 && (
                    <button
                        type="button"
                        className="carousel-button button--right"
                        onClick={() => cyclePhotos(1)}
                    >
                        Right
                    </button>
                )}
                <div
                    className="carousel-wrapper"
                    style={{left: `-${carouselLeft}px`}}
                >
                    {Images.map(item => (
                        <figure>
                            <img src={item} alt="" />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
