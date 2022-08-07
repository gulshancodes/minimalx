import styled from "styled-components";

export const Btn = styled.button`
background: var(--dark-color);
color: #fff;
border: 2px solid #111;
padding: 0.5rem 1rem;
text-transform: uppercase;
font-size: 0.9rem;
transition: 0.3s;

&:hover {
  background: transparent;
  color: #000;
}
`;