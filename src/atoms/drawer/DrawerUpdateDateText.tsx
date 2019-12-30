import * as React from "react";

interface IProps {
    year: number;
    month: number;
    date: number
}

const DrawerUpdateDateText = ({year, month, date}: IProps) => (
    <div>updated at {year}.{month}.{date}</div>
);

export default DrawerUpdateDateText;