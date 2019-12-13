import * as React from "react";
import KeywordElement from "../atom/KeywordElement";

const keywordRowStyle = {
    display: 'table-row'
};

const KeywordRow = ({row}: any) => {
    const keywordElementClickHandler = (e: any) => {
        e.preventDefault();
        alert(`search : ${e.target.innerText}`);
    };

    return (
        <div style={keywordRowStyle}>
            {row.map((ele: any, i: number) => (
                <KeywordElement key={i} onClick={keywordElementClickHandler}>{ele}</KeywordElement>
            ))}
        </div>
    );
};

export default KeywordRow;