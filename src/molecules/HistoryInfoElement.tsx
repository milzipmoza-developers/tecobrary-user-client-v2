import * as React from "react";
import {CSSProperties} from "react";
import BookTitleText from "../atoms/BookTitleText";
import PeriodText from "../atoms/PeriodText";

interface IProps {
    startDate: number;
    endDate: number;
    children: string;
}

const historyInfoStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '8px',
    width: '100%',
};

const formatDate = (dateNumber: number) => {
    const date = new Date(dateNumber);

    return (
        `${(date.getFullYear())}년 ${(date.getMonth())}월 ${(date.getDate())}일`
    );
};

const endYearParser = (startDate: string, endDate: string) => {
    if (startDate.substring(0, 4) === endDate.substring(0, 4)) {
        return endDate.substring(6);
    }
    return endDate;
};

const HistoryInfoElement = ({startDate, endDate, children}: IProps) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);

    return (
        <div style={historyInfoStyle}>
            <BookTitleText>{children}</BookTitleText>
            <PeriodText startDate={start} endDate={endYearParser(start, end)}/>
        </div>
    );
};

export default HistoryInfoElement;