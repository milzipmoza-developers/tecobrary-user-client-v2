import * as React from 'react';
import HeaderCalendar from "../atoms/HeaderCalendar";
import HeaderPageName from "../atoms/HeaderPageName";

const HeaderTitle = ({children}: any) => {
    return (
        <div style={{cursor: 'pointer'}}>
            <HeaderCalendar/>
            <HeaderPageName>{children}</HeaderPageName>
        </div>
    );
};

export default HeaderTitle;