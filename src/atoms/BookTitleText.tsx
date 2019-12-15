import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: string;
}

const titleText: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
};

const BookTitleText = ({children}: IProps) => (
    <div style={titleText}>
        {children}
    </div>
);

export default BookTitleText;