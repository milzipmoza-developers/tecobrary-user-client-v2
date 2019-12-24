import {Fab} from "@material-ui/core";
import * as React from "react";
import {CSSProperties} from "react";
import Divider from "../../atoms/Divider";
import {IRentElement} from "../../common/types/IRentElement";
import * as DateParser from "../../common/utils/DateParser";

interface IProps {
    rents: IRentElement[];
    returnButtonHandler: any;
}

const noContentStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 'lighter',
    marginBottom: '48px',
    marginTop: '48px',
    textAlign: 'center',
};

const RentListBody = ({rents, returnButtonHandler}: IProps) => {

    const List = () => (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {rents.map((rent: any, i: number) => {
                return (
                    <div key={i}>
                        <div style={{display: 'flex', flexDirection: 'row', paddingTop: '8px', paddingBottom: '8px'}}>
                            <div style={{flex: '1', fontSize: '14px', textAlign: 'center', alignSelf: 'center'}}>{rent.serial}</div>
                            <div style={{flex: '2', fontSize: '14px', height: '50px', lineHeight: '25px', alignSelf: 'center', overflow: 'hidden'}}>{rent.title}</div>
                            <div style={{flex: '2', fontSize: '14px', textAlign: 'center', alignSelf: 'center'}}>{DateParser.formatDate(rent.rentDate, false)}</div>
                            <div style={{flex: '1', fontSize: '14px', textAlign: 'center', alignSelf: 'center'}}>{DateParser.formatPeriod(rent.rentDate)}</div>
                            <div style={{flex: '1', fontSize: '14px', textAlign: 'center', alignSelf: 'center'}}>
                                <Fab size="small" onClick={returnButtonHandler(rent.serial)}>
                                    반납
                                </Fab>
                            </div>
                        </div>
                        <Divider/>
                    </div>
                )
            })}
        </div>);

    const NoContent = () => (
        <div>
            <div style={noContentStyle}>
                현재 대여중인 도서가 없어요 !
            </div>
            <Divider/>
        </div>
    );

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {rents.length !== 0 ? <List /> :  <NoContent/> }
        </div>
    );
};

export default RentListBody;