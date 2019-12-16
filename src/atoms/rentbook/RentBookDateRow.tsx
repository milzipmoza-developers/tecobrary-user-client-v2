import * as React from "react";
import {CSSProperties} from "react";
import * as DateParser from "../../common/utils/DateParser";

const nameTextStyle: CSSProperties = {
    fontSize: '16px',
    height: '24px',
    lineHeight: '24px',
    overflow: 'hidden',
};

const dateTextStyle: CSSProperties = {
    fontSize: '13px',
    fontWeight: 500,
    textAlign: 'right',
};

const RentBookDateRow = () => (
    <div style={{paddingTop: '4px'}}>
        <div style={nameTextStyle}>대여일</div>
        <div style={dateTextStyle}>
            {DateParser.formatDate(Date.now(), true)}
        </div>
    </div>
);

export default RentBookDateRow;