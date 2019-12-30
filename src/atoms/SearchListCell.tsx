import {FontWeightProperty} from "csstype";
import * as React from "react";

interface IProps {
    fontWeight: FontWeightProperty;
    children?: string;
    fontSize?: string;
    width: string;
}

const tableCellStyle = (fontWeight: FontWeightProperty, width: string, fontSize?: string) => ({
    display: 'table-cell',
    fontSize: fontSize ? fontSize : '14px',
    fontWeight,
    height: '24px',
    width,
});

const textBoxStyle = {
    height: '24px',
    lineHeight: '24px',
    marginRight: '8px',
    overflow: 'hidden',
};

const SearchListCell = (props: IProps) => {
    return (
        <div style={tableCellStyle(props.fontWeight, props.width, props.fontSize)}>
            <div style={textBoxStyle}>
                {props.children}
            </div>
        </div>
    )
};

export default SearchListCell;