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

const HistoryInfoElement = ({startDate, endDate, children}: IProps) => {

    return (
        <div style={historyInfoStyle}>
            <BookTitleText>{children}</BookTitleText>
            <PeriodText startDate={formatDate(startDate)} endDate={formatDate(endDate)}/>
        </div>
    );
};

export default HistoryInfoElement;