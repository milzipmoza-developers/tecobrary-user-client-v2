import * as React from "react";
import styled from "styled-components";
import DefaultCard from "../molecules/DefaultCard";

interface IProps {
    title?: string,
    children?: any,
    elevation?: boolean,
}

const TitleWrapper = styled.div`
  height: 32px;
  font-size: 21px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  padding-bottom: 20px;
`;

const TitledCard = (props: IProps) => {
    return (
        <DefaultCard elevation={props.elevation === true}>
            {props.title ? <TitleWrapper>{props.title}</TitleWrapper> : null}
            {props.children}
        </DefaultCard>
    );
};

export default TitledCard;