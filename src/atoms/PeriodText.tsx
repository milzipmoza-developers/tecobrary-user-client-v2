import * as React from "react";
import {CSSProperties} from "react";

interface IProp {
    startDate: string;
    endDate: string;
}

const periodTextStyle: CSSProperties = {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    fontSize:'14px',
    fontWeight: 'lighter',
};
const PeriodText = ({startDate, endDate}: IProp) => (
    <div style={periodTextStyle}>
        {`${startDate} ~ ${endDate}`}
    </div>
);

export default PeriodText;