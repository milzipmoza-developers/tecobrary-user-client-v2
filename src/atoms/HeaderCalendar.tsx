import * as React from "react";
import {CSSProperties} from "react";
import * as DateParser from "../common/utils/DateParser";

const calendarStyle: CSSProperties = {
    color: '#000000',
    fontSize: '14px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    textAlign: 'left',
};

const HeaderCalendar = () => {
    return (
        <div style={calendarStyle}>
            {DateParser.formatDate(Date.now(), false)}
        </div>
    );
};

export default HeaderCalendar;