import * as React from "react";
import Divider from "../../atoms/Divider";
import {IRentElement} from "../../common/types/IRentElement";
import CardRentList from "../../molecules/rentlist/CardRentList";

interface IProps {
    rents: IRentElement[]
}

const MainCardRentList = ({rents}: IProps) => (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '12px'}}>
            <Divider/>
            {rents.map((rent: any, i: number) => (
                <CardRentList key={i} rent={rent}/>
            ))}
        </div>
    </div>
);

export default MainCardRentList;