import * as React from "react";
import {CSSProperties} from "react";
import DefaultCard from "../organisms/DefaultCard";

interface IProps {
    title?: string,
    children?: any,
    elevation?: boolean,
}

const titleStyle: CSSProperties = {
    color: '#000000',
    fontSize: '21px',
    fontWeight: 'bold',
    height: '32px',
    paddingBottom: '20px',
};

const TitledCard = (props: IProps) => {
    return (
        <DefaultCard elevation={props.elevation === true}>
            {props.title ? <div className='title' style={titleStyle}>{props.title}</div> : null}
            {props.children}
        </DefaultCard>
    );
};

export default TitledCard;