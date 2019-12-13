import * as React from "react";
import {CSSProperties} from "react";
import KeywordTable from "../molecule/KeywordTable";

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

const KeywordFrame = (props: IProps) => {
    return (
        <div style={{marginTop: '8px', paddingRight: '8px', paddingLeft: '8px', overflow: 'auto', width: '100%'}}>
            <div style={SearchTitleStyle}>{props.children}</div>
            <div style={{width: '80%', float: 'right'}}>
                <KeywordTable keywords={props.keywords}/>
            </div>
        </div>
    );
};

export default KeywordFrame;