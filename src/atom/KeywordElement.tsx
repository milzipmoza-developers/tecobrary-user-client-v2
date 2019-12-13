import * as React from "react";

const keywordElementStyle = {
    color: '#3e8bff',
    display: 'table-cell',
    lineHeight: '20px'
};

const KeywordElement = ({children}: any) => <div style={keywordElementStyle}>{children}</div>;

export default KeywordElement;