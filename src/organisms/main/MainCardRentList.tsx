import * as React from "react";
import {CSSProperties} from "react";
import Divider from "../../atoms/Divider";
import {IRentElement} from "../../common/types/IRentElement";
import CardRentList from "../../molecules/rentlist/CardRentList";

interface IProps {
    rents: IRentElement[]
}

const noContentStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 'lighter',
    marginBottom: '24px',
    marginTop: '24px',
    textAlign: 'center',
};

const MainCardRentList = ({rents}: IProps) => {
    const List = () => (
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '12px'}}>
            <Divider/>
            {rents.map((rent: any, i: number) => (
                <CardRentList key={i} rent={rent}/>
            ))}
        </div>
    );

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
            {rents.length !== 0 ? <List/> : <NoContent/>}
        </div>
    );
};

export default MainCardRentList;