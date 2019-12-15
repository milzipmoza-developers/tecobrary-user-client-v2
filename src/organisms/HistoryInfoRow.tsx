import * as React from "react";
import {CSSProperties} from "react";
import HistoryInfoElement from "../molecules/HistoryInfoElement";
import HistoryButtonElement from "./HistoryButtonElement";

interface IHistory {
    title: string;
    createdAt: number;
    deletedAt: number;
    likeStatus: boolean;
}

interface IProps {
    rentHistory: IHistory
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
            <HistoryInfoElement startDate={rentHistory.createdAt} endDate={rentHistory.deletedAt}>
                {rentHistory.title}
            </HistoryInfoElement>
            <HistoryButtonElement likeStatus={rentHistory.likeStatus}/>
        </div>
    )
};

export default HistoryInfoRow;