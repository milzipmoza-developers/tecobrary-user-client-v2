import * as React from "react";

interface IProps {
    children: any;
}

const RentBookImageFrame = ({children}: IProps) => (
    <div style={{flex: '1', marginRight: '8px'}}>
        {children}
    </div>
);

export default RentBookImageFrame;