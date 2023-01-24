import React from 'react';
import CircleSVG from '@app/assets/images/circle-logo.svg';

export default function CircleLogo({ size = 32 }: { size?: number }) {
    return <CircleSVG width={size} height={size} />;
}
