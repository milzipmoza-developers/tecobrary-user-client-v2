import * as React from "react";
import {CSSProperties} from "react";
import KeywordTable from "../molecules/KeywordTable";

interface IProps {
    keywords: any,
    children?: string,
}

const SearchTitleStyle: CSSProperties = {
    float: 'left',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '20px',
    width: '20%',
};

const keywordFrameStyle:CSSProperties = {
    marginTop: '8px',
    overflow: 'auto',
    paddingLeft: '8px',
    paddingRight: '8px',
    width: '100%',
};

const keywordTableStyle: CSSProperties = {
    float: 'right',
    width: '80%',
};

const KeywordFrame = (props: IProps) => {
    return (
        <div className='keywordFrame' style={keywordFrameStyle}>
            <div style={SearchTitleStyle}>{props.children}</div>
            <div style={keywordTableStyle}>
                <KeywordTable keywords={props.keywords}/>
            </div>
        </div>
    );
};

export default KeywordFrame;