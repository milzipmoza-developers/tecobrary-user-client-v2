import * as React from "react";
import {CSSProperties} from "react";
import {TEXT_BUTTON_RED} from "../common/colors";

interface IProps {
    message: string;
}

const messageHolderStyle: CSSProperties = {
    color: TEXT_BUTTON_RED,
    fontSize: '14px',
    fontWeight: 600,
    textAlign: 'center',
};

const QrCodeMessageHolder = ({message}: IProps) => (
    <div style={messageHolderStyle}>
        <div>{message}</div>
        <div>[iPhone 은 Safari 를 이용해주세요.]</div>
    </div>
);

export default QrCodeMessageHolder;