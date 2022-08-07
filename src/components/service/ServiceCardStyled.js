import styled from 'styled-components';

export const ServiceCardWrapper = styled.div`
border: 1px solid var(--dark-color);
width: 32%;

@media (max-width: 991.98px) {
    width: 48%;
}

@media (max-width: 575.98px) {
    width: 100%;
}

    h4 {
        position: relative;
        padding: 0.5rem 0 1.2rem;
        margin-top: 1rem;
        margin-bottom: 0.9rem;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: #111;
        }
    }
`;