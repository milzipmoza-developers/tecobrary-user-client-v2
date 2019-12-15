import * as React from "react";
import {CSSProperties} from "react";

const messageStyle: CSSProperties = {
    fontWeight: 'lighter',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
};

const EmptyListMessage = () => (
    <div style={messageStyle}>
        내역이 존재하지 않습니다.
    </div>
);

export default EmptyListMessage;