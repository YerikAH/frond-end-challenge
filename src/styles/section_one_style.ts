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
    justify-content: space-between;
    margin-top: 5.625rem;
    grid-template-columns: repeat(auto-fill, 300px);
    width: 100%;
    @media (min-width: 1000px){
        grid-template-columns: repeat(auto-fill, 360px);
    }
`
export const ChildGrid = styled.div`
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

`
export const TitleProject = styled.h3`
    font: normal normal 600 1.1rem/1.5rem var(--font-barlow);
    color: var(--black);
    text-overflow: ellipsis;
`
export const DescriptionProject = styled.p`
    font: normal normal 400 0.9rem/1.5rem var(--font-barlow);
    color: var(--black);
    opacity: 0.7;
`

export const ButtonsBox = styled.div``
export const ImageProject = styled.img`
    width:300px;
    @media (min-width: 1000px){
        width:360px;
    }

`
export const ButtonProject = styled.a`
    padding: 0.5rem 1rem;
    border-radius: 15rem;
    font-weight: 500;
    text-transform: uppercase;
    display: block;
    font-style: italic;
`
export const ButtonSpecial= styled.a``
export const ButtonIcon = styled.img``