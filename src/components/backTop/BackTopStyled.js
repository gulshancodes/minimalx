import styled from "styled-components";

export const BackTopBtn = styled.div`
position: fixed;
bottom: 2vh;
right: 1vw;
z-index: 999;
background-color: var(--dark-color);
color: var(--light-color);
width: 50px;
height: 50px;
line-height: 50px;
text-align: center;
cursor: pointer;
opacity: 0;
transform: translateY(200%);
transition: 0.3s;

&.visible {
    opacity: 1;
    transform: translateY(0);
}
`;