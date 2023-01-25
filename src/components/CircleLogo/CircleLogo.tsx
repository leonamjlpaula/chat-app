import React, { memo } from 'react';
import CircleSVG from '@app/assets/images/circle-logo.svg';

const CircleLogo = ({ size = 32 }: { size?: number }) => {
    return <CircleSVG width={size} height={size} />;
};

export default memo(CircleLogo);
