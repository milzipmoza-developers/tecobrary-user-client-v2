import * as React from "react";
import {CSSProperties} from "react";
import {SearchContext} from 'src/common/contexts/SearchContext';

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
        <SearchContext.Consumer>
            {({keyword, onInputChange, onKeyUp}) => {
                return (
                    <input type="text" disabled={props.disabled} autoFocus={!props.disabled} style={inputStyle}
                           placeholder="검색어를 입력하세요." value={keyword}
                           onChange={props.disabled ? undefined : onInputChange}
                           onKeyUp={props.disabled ? undefined : onKeyUp}/>
                )
            }}
        </SearchContext.Consumer>
    );
};

export default SearchInput;