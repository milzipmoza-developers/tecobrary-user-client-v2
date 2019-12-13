import * as React from "react";
import KeywordRow from "./KeywordRow";

const tableStyle = {
    display: 'table',
    fontSize: '12px',
    width: '100%'
};

const KeywordTable = ({keywords}: any) => {
    return (
        <div style={tableStyle}>
            <KeywordRow row={keywords.slice(0, 3)}/>
            <KeywordRow row={keywords.slice(3)}/>
        </div>
    );
};

export default KeywordTable;