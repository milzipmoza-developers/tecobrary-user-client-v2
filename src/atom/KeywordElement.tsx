import * as React from "react";

interface IProps {
    onClick: any;
    children?: any;
}

const keywordElementStyle = {
    color: '#3e8bff',
    display: 'table-cell',
    lineHeight: '20px'
};

const KeywordElement = (props: IProps) => (
    <div style={keywordElementStyle} onClick={props.onClick}>{props.children}</div>
);

export default KeywordElement;