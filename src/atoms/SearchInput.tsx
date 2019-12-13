import {CSSProperties} from "react";
import * as React from "react";

interface IProps {
    disabled: boolean;
}

const inputStyle: CSSProperties = {
    backgroundColor: '#dadada',
    border: '0px',
    borderRadius: '13px',
    float: 'right',
    fontSize: '13px',
    height: '24px',
    lineHeight: '24px',
    width: '100%',
};

const SearchInput = (props: IProps) => {
    return (
        <input type="text" disabled={props.disabled} placeholder="검색어를 입력하세요." style={inputStyle}/>
    );
};

export default SearchInput;