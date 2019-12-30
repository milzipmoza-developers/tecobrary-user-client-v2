import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children?: string;
    hidden: boolean;
}

const elementStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
};

const elementHiddenStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
};

const LibraryBookElement = ({children, hidden}: IProps) => (
    hidden ?
        <div style={elementHiddenStyle}>
            {children}
        </div> :
        <div style={elementStyle}>
            {children}
        </div>
);

export default LibraryBookElement;