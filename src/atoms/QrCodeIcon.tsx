import {CSSProperties} from "react";
import * as React from 'react';
import qrCode from './assets/qr-code.svg';

const qrCodeIconStyle: CSSProperties = {height: '24px', width: '24px'};

const QrCodeIcon = () => <img alt="qrCode" src={qrCode} style={qrCodeIconStyle}/>;

export default QrCodeIcon;