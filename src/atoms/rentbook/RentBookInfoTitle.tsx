import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: string;
}

const titleStyle: CSSProperties = {
    fontSize: '16px',
    fontWeight: 500,
    height: '24px',
    lineHeight: '24px',
    overflow: 'hidden',
};

const RentBookInfoTitle = ({children}: IProps) => (
    <div style={{paddingTop: '4px'}}>
        <div style={titleStyle}>{children}</div>
    </div>
);

export default RentBookInfoTitle;