import * as React from "react";

interface IProps {
    children: any;
}

const RentBookDialogBody = ({children}: IProps) => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        {children}
    </div>
);

export default RentBookDialogBody;