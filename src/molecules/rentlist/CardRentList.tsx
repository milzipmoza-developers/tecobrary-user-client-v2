import * as React from "react";
import {CSSProperties} from "react";
import Divider from "../../atoms/Divider";
import {IRentElement} from "../../common/types/IRentElement";
import * as DateParser from "../../common/utils/DateParser";

interface IProps {
    rent: IRentElement;
}

const rowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    fontWeight: 'lighter',
    paddingBottom: '8px',
    paddingTop: '8px',
    textAlign: 'center',
};

const CardRentList = ({rent}: IProps) => (
    <div>
        <div style={rowStyle}>
            <div style={{flex: '1', alignSelf: 'center'}}>{rent.serial}</div>
            <div style={{
                alignSelf: 'center',
                flex: '4',
                fontWeight: 'normal',
                height: '25px',
                lineHeight: '25px',
                overflow: 'hidden',
                textAlign: 'left',
            }}>{rent.title}</div>
            <div style={{flex: '1', alignSelf: 'center'}}>{DateParser.formatPeriod(rent.rentDate)}</div>
        </div>
        <Divider/>
    </div>
);

export default CardRentList;