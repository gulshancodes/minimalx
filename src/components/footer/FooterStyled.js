import styled from "styled-components";

export const FooterWrapper = styled.section`
background-color: var(--dark-color);
color: #fff;
padding: 2rem 0 1rem;

    a {
        &:not(:last-child) {
            margin-right: 2.2rem;
        }
    }

    .copyright {
        a {
            color: #ccc;

            &:hover {
                color: #fff;
            }
        }
    }
`;