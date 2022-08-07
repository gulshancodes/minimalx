import styled from "styled-components";

export const TestiCardWrapper = styled.div`
text-align: center;

.testi_info {
    position: relative;
    padding-top: 3rem;
    padding-bottom: 2rem;
    background-color: var(--light-color);

    .testi_img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
}

`;
