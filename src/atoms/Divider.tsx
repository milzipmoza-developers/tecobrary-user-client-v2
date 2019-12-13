import {CSSProperties} from "react";
import * as React from "react";

interface IProps {
    index?: number;
    lastIndex?: number;
}

const dividerStyle: CSSProperties = {
    backgroundColor: 'rgb(218, 218, 218)',
    height: '1px',
};


const Divider = (props: IProps) => (
    !props.index || !props.lastIndex || (props.index + 1 !== props.lastIndex) ?
        <div style={dividerStyle}/> :
        null
);

export default Divider;