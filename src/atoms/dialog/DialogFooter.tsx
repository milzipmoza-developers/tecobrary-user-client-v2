import * as React from "react";
import {CSSProperties} from "react";
import {BORDER_DEFAULT_GRAY} from "../../common/colors";

interface IProps {
    children: any;
}

const footerStyle: CSSProperties = {
    borderTop: '1px solid',
    borderTopColor: BORDER_DEFAULT_GRAY,
    display: 'flex',
    flexDirection: 'row',
    height: '44px',
};

const DialogFooter = ({children}: IProps) => (
    <div style={footerStyle}>
        {children}
    </div>
);

export default DialogFooter;