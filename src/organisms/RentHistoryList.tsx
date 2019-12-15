import * as React from "react";
import {CSSProperties} from "react";
import Divider from "../atoms/Divider";
import EmptyListMessage from "../atoms/EmptyListMessage";
import HistoryInfoRow from "./HistoryInfoRow";

interface IHistory {
    title: string;
    createdAt: number;
    deletedAt: number;
    likeStatus: boolean;
}

interface IProps {
    rentHistories: any;
}

const rentHistoryListStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: '4px',
    marginBottom: '8px'
};

const RentHistoryList = ({rentHistories}: IProps) => {
    const HistoryList = () => (
        <div>
            <Divider/>
            {rentHistories.map((rentHistory: IHistory, i: number) => (
                <div key={i}>
                    <HistoryInfoRow rentHistory={rentHistory}/>
                    <Divider/>
                </div>
            ))}
        </div>
    );

    return (
        <div style={rentHistoryListStyle}>
            {rentHistories.length === 0 ?
                <EmptyListMessage/> :
                <HistoryList/>}
        </div>
    );
};

export default RentHistoryList;