import * as React from "react";
import DefaultCard from "../organisms/DefaultCard";

interface IProps {
    title?: string,
    children?: any,
    fontSize?: string;
    elevation?: boolean,
}

const titleStyle = (fontSize?: string) => ({
    color: '#000000',
    fontSize: fontSize ? fontSize : '21px',
    fontWeight: 500,
    height: '32px',
    lineHeight: '32px',
    marginBottom: '20px',
    overflow: 'hidden',
});

const TitledCard = (props: IProps) => {
    return (
        <DefaultCard elevation={props.elevation === true}>
            {props.title ? <div className='title' style={titleStyle(props.fontSize)}>{props.title}</div> : null}
            {props.children}
        </DefaultCard>
    );
};

export default TitledCard;