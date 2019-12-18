import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    index?: number;
    lastIndex?: number;
}

const dividerStyle: CSSProperties = {
    backgroundColor: 'rgb(218, 218, 218)',
    height: '1px',
};


const Divider = (props: IProps) => (
    <div style={dividerStyle}/>
);

export default Divider;