import * as React from "react";
import {CSSProperties} from "react";
import {useHistory} from "react-router";
import Divider from "../../atoms/Divider";
import {IDrawerItem} from "../../common/types";

interface IProps {
    item: IDrawerItem;
}

const drawerItemStyle: CSSProperties = {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    fontWeight: 'lighter',
    padding: '16px',
};

const DrawerItem = ({item}: IProps) => {
    const history = useHistory();

    const dialogButtonHandler = (to: string) => () => {
        history.push(to);
    };

    return (
        <div>
            <div style={{height: '55px', width: '100%'}} onClick={dialogButtonHandler(item.to)}>
                <div style={drawerItemStyle}>
                    <div style={{flex: 1, paddingLeft: '8px'}}>
                        {item.icon}
                    </div>
                    <div style={{flex: 4}}>{item.title}</div>
                </div>
            </div>
            <Divider/>
        </div>
    );
};

export default DrawerItem;