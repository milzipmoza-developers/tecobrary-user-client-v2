import * as React from "react";

interface IProps {
    elevation: boolean;
    children?: any;
}

const defaultCardStyle = (elevation: boolean) => ({
    borderRadius: '8px',
    boxShadow: elevation ? '4px 3px 10px 0 rgba(0, 0, 0, 0.5)' : '',
    height: 'fit-content',
    marginBottom: '32px',
    marginTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '21px',
    paddingRight: '21px',
    paddingTop: '12px',
    width: 'inherit',
});

const DefaultCard = (props: IProps) => (
    <div style={defaultCardStyle(props.elevation)}>
        {props.children}
    </div>
);


export default DefaultCard;