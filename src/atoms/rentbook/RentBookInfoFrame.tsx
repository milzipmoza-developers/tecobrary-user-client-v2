import * as React from "react";

interface IProps {
    children: any;
}

const RentBookInfoFrame = ({children}: IProps) => (
    <div style={{flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {children}
    </div>
);

export default RentBookInfoFrame;