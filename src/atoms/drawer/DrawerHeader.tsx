import * as React from "react";
import DrawerAppInfo from "../../molecules/drawer/DrawerAppInfo";
import DrawerTecobraryLogo from "./DrawerTecobraryLogo";

interface IProps {
    version: string;
    onClick?: any;
}

const drawerHeaderStyle = {
    marginBottom: '12px',
    marginTop: '12px',
    padding: '16px',
};

const DrawerHeader = ({version, onClick}: IProps) => (
    <div className='drawerHeader' style={drawerHeaderStyle}>
        <DrawerTecobraryLogo/>
        <DrawerAppInfo version={version}/>
    </div>
);

export default DrawerHeader;