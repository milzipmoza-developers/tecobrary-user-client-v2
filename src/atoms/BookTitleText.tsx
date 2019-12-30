import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: string;
}

const titleText: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    height: '28px',
    lineHeight: '28px',
    overflow: 'hidden',
    width: '100%',
};

const BookTitleText = ({children}: IProps) => (
    <div style={titleText}>
        {children}
    </div>
);

export default BookTitleText;