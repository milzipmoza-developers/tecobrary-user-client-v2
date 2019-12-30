import * as React from "react";
import {CSSProperties} from "react";
import {IDrawerItem} from "../../common/types";
import DrawerItem from "../../molecules/drawer/DrawerItem";

interface IProps {
    drawerItems: IDrawerItem[]
}

const itemsStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
};

const DrawerItems = ({drawerItems}: IProps) => (
    <div style={itemsStyle}>
        {drawerItems.map((item: IDrawerItem, i: number) => (
            <div key={i}>
                <DrawerItem item={item}/>
            </div>
        ))}
    </div>
);

export default DrawerItems;