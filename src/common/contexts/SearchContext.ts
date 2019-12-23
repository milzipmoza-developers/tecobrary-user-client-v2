import * as React from "react";

export const SearchContext = React.createContext({
    keyword: '',
    // tslint:disable-next-line:no-empty
    onInputChange: (e: any) => {
    },
    // tslint:disable-next-line:no-empty
    onKeyUp: (e: any) => {
    },
});