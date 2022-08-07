import styled from 'styled-components';

export const PortfolioItemWrapper = styled.div`

    a {
        display: block;
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            transform: translateY(100%);
            transition: transform 0.3s;
        }

        &:hover::after {
            transform: translateY(0);
        }

    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 100%);
        z-index: 1;
        color: #fff;
        font-size: 1.5rem;
        opacity: 0;
        transition: opacity 0.3s, transform 0.4s;
    }

    &:hover span {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;