import React from 'react';
import Particles from 'react-tsparticles';
import { ParticleConfig } from '../../hooks';

export function ParticleBackground () {
    return (
        <Particles params={ ParticleConfig }></Particles>
    );
}