import * as React from 'react';
import HeaderCalendar from "../atom/HeaderCalendar";
import HeaderPageName from "../atom/HeaderPageName";

const HeaderTitle = ({children}: any) => {
    return (
        <div>
            <HeaderCalendar/>
            <HeaderPageName>{children}</HeaderPageName>
        </div>
    );
};

export default HeaderTitle;