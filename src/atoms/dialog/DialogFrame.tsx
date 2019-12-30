import * as React from "react";

interface IProps {
    children: any;
}

const DialogFrame = ({children}: IProps) => (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '4px 3px 10px 0 rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        width: '300px'
    }}>
        {children}
    </div>
);

export default DialogFrame;