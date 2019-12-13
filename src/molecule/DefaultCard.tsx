import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 15px;
    box-shadow: 4px 3px 10px 0 rgba(0, 0, 0, 0.5);
    height: fit-content;
    margin-bottom: 32px;
    margin-top: 12px;
    padding-bottom: 12px;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 12px;
    width: inherit;
`;

const DefaultCard = ({children}: any) => (<Card>{children}</Card>);

export default DefaultCard;