import * as React from "react";
import KeywordElement from "../atom/KeywordElement";

const keywordRowStyle = {
    display: 'table-row'
};

const KeywordRow = ({row}: any) => {
    return (
        <div style={keywordRowStyle}>
            {row.map((ele: any, i: number) => (<KeywordElement key={i}>{ele}</KeywordElement>))}
        </div>
    );
};

export default KeywordRow;