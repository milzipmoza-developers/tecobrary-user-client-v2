import * as React from "react";
import {CSSProperties} from "react";

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

const formatDate = (date: number) => {
    const today = new Date(date);
    return `${(today.getMonth() + 1)}월 ${(today.getDate())}일 ${(getDayName(today.getDay()))}요일`
};

const getDayName = (day: number) => {
    const array = ['일', '월', '화', '수', '목', '금', '토'];
    return array[day % 6];
};

const HeaderCalendar = () => {
    return (
        <div style={calendarStyle}>
            {formatDate(Date.now())}
        </div>
    );
};

export default HeaderCalendar;