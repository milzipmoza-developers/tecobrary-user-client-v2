import * as React from "react";
import {CSSProperties} from "react";
import heartUnfilled from './assets/heart_unfilled.svg';

const heartUnfilledIconStyle: CSSProperties = {height: '24px', width: '24px'};

const HeartUnfilledIcon = () => <img alt="qrCode" src={heartUnfilled} style={heartUnfilledIconStyle}/>;

export default HeartUnfilledIcon;