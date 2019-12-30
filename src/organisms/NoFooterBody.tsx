import * as React from "react";
import {CSSProperties} from "react";

const TemplateBody: CSSProperties = {
    overflow: 'scroll',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '110px',
};

const NoFooterBody = ({className, children}: any) => {
    return (
        <div className={className} style={TemplateBody}>
            {children}
        </div>
    )
};

export default NoFooterBody;