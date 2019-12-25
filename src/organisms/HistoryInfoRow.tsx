import * as React from "react";
import {CSSProperties} from "react";
import HistoryInfoElement from "../molecules/HistoryInfoElement";
import HistoryButtonElement from "./HistoryButtonElement";
import {IRentHistoryProps} from "./renthistory/IRentHistoryProps";

interface IProps {
    rentHistory: IRentHistoryProps
}
const historyInfoRowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    padding: '4px',
    paddingBottom: '8px',
    paddingTop: '8px',
};

const HistoryInfoRow = ({rentHistory}: IProps) => {
    return (
        <div style={historyInfoRowStyle}>
            <HistoryInfoElement startDate={rentHistory.rentDate} endDate={rentHistory.returnDate}>
                {rentHistory.title}
            </HistoryInfoElement>
            <HistoryButtonElement likeStatus={rentHistory.likeStatus}/>
        </div>
    )
};

export default HistoryInfoRow;