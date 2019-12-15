import * as React from "react";
import {CSSProperties} from "react";
import HeartButton from "./HeartButton";

interface IProps {
    likeStatus: boolean;
}

const buttonElementStyle: CSSProperties = {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    height: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    width: '48px',
};

const HistoryButtonElement = ({likeStatus}: IProps) => {
    return (
        <div style={buttonElementStyle}>
            <HeartButton likeStatus={likeStatus}/>
        </div>
    );
};

export default HistoryButtonElement;