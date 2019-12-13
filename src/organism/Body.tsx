import * as React from "react";
import {CSSProperties} from "react";

const TemplateBody: CSSProperties = {
    overflow: 'scroll',
    paddingBottom: '100px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '100px',
    width: 'inherit',
};

const Body = ({className, children}: any) => {
    return (
        <div className={className} style={TemplateBody}>
            {children}
        </div>
    )
};

export default Body;