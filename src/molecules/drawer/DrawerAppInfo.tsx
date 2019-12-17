import * as React from "react";
import DrawerUpdateDateText from "../../atoms/drawer/DrawerUpdateDateText";
import DrawerVersionText from "../../atoms/drawer/DrawerVersionText";

interface IProps {
    version: string;
}

const DrawerAppInfo = ({version}: IProps) => {
    const fullDate = new Date(Date.now());
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();

    return (
        <div style={{fontSize: '12px', color: '#646464', textAlign: 'right', fontWeight: 'lighter'}}>
            <DrawerUpdateDateText year={year} month={month} date={date}/>
            <DrawerVersionText version={version}/>
        </div>
    );
};

export default DrawerAppInfo;