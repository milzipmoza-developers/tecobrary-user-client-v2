import * as React from "react";
import {CSSProperties} from "react";

const titleStyle: CSSProperties = {
    color: '#000000',
    fontSize: '36px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    paddingTop: '4px',
    textAlign: 'left',
};

const HeaderPageName = ({children}: any) => {
    return (
        <div className='headerTitle' style={titleStyle}>
            {children}
        </div>
    );
};

export default HeaderPageName;