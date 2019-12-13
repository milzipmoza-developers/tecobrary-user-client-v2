import * as React from "react";
import {CSSProperties} from "react";
import QrCodeIcon from "../atom/QrCodeIcon";

const textContainerStyle: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
};

const textBoxStyle: CSSProperties = {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    fontSize: '21px',
    height: '100%',
    justifyContent: 'center',
};

const textStyle: CSSProperties = {
    paddingLeft: '8px'
};

const RentButton = () => {
    return (
        <div style={textContainerStyle}>
            <div style={textBoxStyle}>
                <QrCodeIcon/>
                <div style={textStyle}>대여하기</div>
            </div>
        </div>
    )
};

export default RentButton;