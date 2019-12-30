import * as React from "react";

interface IProps {
    children: any;
    onClick: any;
}

const buttonStyle = {
    backgroundColor: 'black',
    borderRadius: '10px',
    boxShadow: '4px 3px 10px 0 rgba(0, 0, 0, 0.5)',
    color: 'white',
    cursor: 'pointer',
    height: '36px',
    marginLeft: '12px',
    marginRight: '12px',
    width: '48px',
};
const SmallButton = ({children, onClick}: IProps) => (
    <div onClick={onClick} style={buttonStyle}>{children}</div>
);

export default SmallButton;