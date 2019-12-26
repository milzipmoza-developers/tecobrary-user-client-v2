import {Snackbar} from "@material-ui/core";
import * as React from "react";
import CommonSnackBarContent from "../../organisms/CommonSnackBarContent";

interface IProps {
    variant: string;
    open: boolean;
    message: string;
    handleClose: any;
}

const CommonSnackBar = ({variant, open, message, handleClose}: IProps) => {
    return (
        <Snackbar
            anchorOrigin={{
                horizontal: 'center',
                vertical: 'bottom',
            }}
            open={open}
            onClose={handleClose}
        >
            <CommonSnackBarContent
                onClose={handleClose}
                variant={variant}
                message={message}
            />
        </Snackbar>
    );
};

export default CommonSnackBar;