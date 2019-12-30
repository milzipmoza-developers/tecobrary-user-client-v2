import * as React from "react";
import {CSSProperties} from "react";
import {Link} from "react-router-dom";
import RentButton from "../molecules/RentButton";

const footerStyle: CSSProperties = {
    backgroundColor: 'rgba( 255, 255, 255, 0 )',
    bottom: '0',
    height: '80px',
    left: '50%',
    maxWidth: '450px',
    minWidth: '250px',
    position: 'fixed',
    transform: 'translateX(-50%)',
    width: '100%',
};

const buttonStyle: CSSProperties = {
    backgroundColor: 'black',
    borderRadius: '10px',
    boxShadow: '4px 3px 10px 0 rgba(0, 0, 0, 0.5)',
    height: '50px',
    marginLeft: '24px',
    marginRight: '24px',
};

const Footer = ({className}: any) => {
    return (
        <div className={className} style={footerStyle}>
            <Link to='/rents' style={{textDecoration: 'none', cursor: 'initial'}}>
                <div className='qrCodeButton' style={buttonStyle}>
                    <RentButton/>
                </div>
            </Link>
        </div>
    );
};

export default Footer;