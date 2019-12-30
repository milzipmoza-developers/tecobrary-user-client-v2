import * as React from "react";
import {CSSProperties} from "react";
import {Link} from "react-router-dom";
import SearchIcon from "../atoms/SearchIcon";
import SearchInput from "../atoms/SearchInput";

interface IProps {
    disabled: boolean;
    to?: string;
}

const searchBarStyle: CSSProperties = {
    backgroundColor: '#dadada',
    borderRadius: '13px',
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
    paddingLeft: '12px',
    paddingRight: '12px',
    width: 'inherit',
};

const searchIconStyle: CSSProperties = {
    alignSelf: 'start',
    height: '15px',
    padding: '4.5px',
    width: '15px',
};

const SearchBar = (props: IProps) => {
    return (
        <div className='searchBar' style={searchBarStyle}>
            <SearchIcon style={searchIconStyle}/>
            {props.disabled ?
                (<Link to='/search' style={{width: '100%'}}>
                    <SearchInput disabled={props.disabled}/>
                </Link>) :
                <SearchInput disabled={props.disabled}/>
            }
        </div>
    );
};

export default SearchBar;