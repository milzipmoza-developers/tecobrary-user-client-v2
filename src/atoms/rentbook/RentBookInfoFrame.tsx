import * as React from "react";

interface IProps {
    children: any;
}

const RentBookInfoFrame = ({children}: IProps) => (
    <div style={{flex: '2', display: 'flex', flexDirection: 'column'}}>
        {children}
    </div>
);

export default RentBookInfoFrame;