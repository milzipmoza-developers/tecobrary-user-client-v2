import * as React from "react";
import {CSSProperties} from "react";
import CardMessageHolder from "../atoms/CardMessageHolder";
import Divider from "../atoms/Divider";
import HistoryInfoRow from "./HistoryInfoRow";
import {IRentHistoryProps} from "./renthistory/IRentHistoryProps";
import {RentHistoryProps} from "./renthistory/RentHistoryProps";

interface IProps {
    rentHistories: RentHistoryProps[];
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
            {rentHistories.map((rentHistory: IRentHistoryProps, i: number) => (
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
                <CardMessageHolder>내역이 존재하지 않습니다.</CardMessageHolder> :
                <HistoryList/>}
        </div>
    );
};

export default RentHistoryList;