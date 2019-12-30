import {ERROR_COLOR, SUCCESS_COLOR} from "../colors";
import {dialogMode} from "../types";

export const modeConverter = (mode: dialogMode) => {
    if (mode === 'error') {
        return ERROR_COLOR;
    }
    if (mode === 'success') {
        return SUCCESS_COLOR
    }
    return '#ffffff'
};