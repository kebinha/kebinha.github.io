import styled from "styled-components";

export const Col2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-columns: 1fr;
    gap: 1.25rem;
    margin-top: 30px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Col3 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: 1fr;
    gap: 1.25rem;
    margin-top: 30px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Col5 = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-columns: 1fr;
    gap: 1.25rem;
    margin-top: 30px;
    @media (max-width: 1075px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 870px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 670px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 460px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
