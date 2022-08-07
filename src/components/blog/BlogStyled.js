import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogContentWrapper = styled.div`
box-shadow: 1px 1px 20px -4px rgba(0,0,0,0.5);

&:not(:last-child) {
    margin-bottom: 3rem;
}
`;

export const Widget = styled.div`
background-color: #eee;
padding: 1.5rem;
margin-bottom: 2rem;

    h6 {
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .archives_date {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        
            &:not(:last-child) {
                border-bottom: 1px solid #555;
            }
    }

    .tags {
        background-color: #ddd;
        padding: 0.3rem 0.8rem;
        font-size: 0.9rem;
    }
`;

export const SocialButton = styled(Link)`
background-color: ${props => props.color};
color: #fff;
padding: 0.6rem 1rem;
font-size: 1.3rem;
    &:hover {
        color: #fff;
    }
`;