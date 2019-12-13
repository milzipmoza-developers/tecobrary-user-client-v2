import * as React from "react";
import styled from "styled-components";
import SearchIcon from "../atom/SearchIcon";
import SearchInput from "../atom/SearchInput";

interface IProps {
    disabled: boolean;
    onClick: any;
}

const MockSearchInput = styled.div`
    background-color: #dadada;
    border-radius: 13px;
    display: flex;
    flex-direction: row;
    padding-left: 12px;
    padding-right: 12px
    height: fit-content
    width: inherit;
`;

const SearchBar = (props: IProps) => {
    return (
        <MockSearchInput onClick={props.onClick}>
            <SearchIcon style={{width: '15px', height: '15px', padding: '4.5px', alignSelf: 'start'}}/>
            <SearchInput disabled={props.disabled}/>
        </MockSearchInput>
    );
};

export default SearchBar;