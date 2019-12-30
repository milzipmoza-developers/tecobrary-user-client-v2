import * as React from "react";
import {CSSProperties} from "react";
import heartFilled from './assets/heart_filled.svg';

const heartUnfilledIconStyle: CSSProperties = {height: '24px', width: '24px'};

const HeartFilledIcon = () => <img alt="qrCode" src={heartFilled} style={heartUnfilledIconStyle}/>;

export default HeartFilledIcon;