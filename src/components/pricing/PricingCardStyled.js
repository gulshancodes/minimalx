import styled from "styled-components";

export const PriceCardWrapper = styled.div`
outline: 1px solid var(--dark-color);
text-align: center;
`;

export const PriceCardHead = styled.div`
background-color: ${props => props.color};
color: #fff;
padding: 1.2rem;
`;

export const PriceCardFoot = styled(PriceCardHead)``;