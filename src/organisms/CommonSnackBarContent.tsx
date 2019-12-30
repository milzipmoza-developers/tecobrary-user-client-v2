import {Icon, IconButton, SnackbarContent} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import * as React from "react";
import './snackbar.css';

interface IProps {
    message: any;
    onClose: any;
    variant: any;
}

const VariantIcon = ({variant}: any) => {
    if (variant === 'error') {
        return <ErrorIcon/>
    } else if (variant === 'info') {
        return <InfoIcon/>
    } else if (variant === 'success') {
        return <CheckCircleIcon/>
    } else if (variant === 'warning') {
        return <WarningIcon/>
    }
    return null;
};

const CommonSnackBarContent = ({message, onClose, variant}: IProps) => {
    return (
        <SnackbarContent
            className={variant}
            aria-describedby="client-snackbar"
            message={
                <div id="client-snackbar" style={{
                    display: 'flex', flexDirection: 'row'
                }}>
                    <Icon>
                        <VariantIcon variant={variant}/>
                    </Icon>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{paddingLeft: '8px'}}>{message}</div>
                    </div>
                </div>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon/>
                </IconButton>,
            ]}
        />
    );
};

export default CommonSnackBarContent;
