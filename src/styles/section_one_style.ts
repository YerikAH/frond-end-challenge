import styled from "styled-components";

export const SectionOneStyle = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`
export const BoxGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);

    @media (min-width: 1000px){
        grid-template-columns: repeat(auto-fill, 400px);
    }
`
export const ChildGrid = styled.div`
    border-radius: 2rem;

`
export const TitleProject = styled.h3`
    font: normal normal 600 1.25rem/1.5rem var(--font-barlow);
    color: var(--black);
    text-overflow: ellipsis;
    @media (min-width: 1000px){
        font-size: 1.5rem;
        line-height: 2rem;
    }
`
export const DescriptionProject = styled.p`
    font: normal normal 400 0.8rem/1rem var(--font-barlow);
    color: var(--black);
    opacity: 0.7;
    @media (min-width: 1000px){
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const ButtonsBox = styled.div``
export const ImageProject = styled.img``
export const ButtonProject = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 15rem;
    font-weight: 500;
    text-transform: uppercase;
`
export const ButtonSpecial= styled.button``
export const ButtonIcon = styled.img``