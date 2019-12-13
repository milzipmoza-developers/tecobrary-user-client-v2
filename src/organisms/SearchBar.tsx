import * as React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../atoms/SearchIcon";
import SearchInput from "../atoms/SearchInput";

interface IProps {
    disabled: boolean;
    to?: string;
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
        <MockSearchInput>
            <SearchIcon style={{width: '15px', height: '15px', padding: '4.5px', alignSelf: 'start'}}/>
            {props.disabled ?
                (<Link to='/search' style={{width: '100%'}}>
                    <SearchInput disabled={props.disabled}/>
                </Link>) :
                <SearchInput disabled={props.disabled}/>
            }
        </MockSearchInput>
    );
};

export default SearchBar;