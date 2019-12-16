import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    serial: number;
}

const rowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '4px'
};

const serialTextStyle: CSSProperties = {
    flex: '1',
    fontSize: '16px',
    fontWeight: 500,
    height: '24px',
    lineHeight: '24px',
    overflow: 'hidden',
    textAlign: 'right',
};

const RentBookSerialRow = ({serial}: IProps) => (
    <div style={rowStyle}>
        <div style={{flex: '1'}}>일련 번호</div>
        <div style={serialTextStyle}>{serial}</div>
    </div>
);

export default RentBookSerialRow;