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
    justify-content: center;
    margin-top: 5.625rem;
    grid-template-columns: repeat(auto-fill, 300px);
    width: 100%;
    gap: 3rem;
    @media (min-width: 1000px){
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 360px);
    }
`
export const ChildGrid = styled.div`
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border: 1px solid rgba(255, 255, 255, 0.24);

`
export const TitleProject = styled.h3`
    margin-top: 1rem;
    font: normal normal 600 1.1rem/1.5rem var(--font-barlow);
    color: var(--black);
    text-overflow: ellipsis;
    padding: 0 1rem;
`
export const DescriptionProject = styled.p`
    font: normal normal 400 0.9rem/1.5rem var(--font-barlow);
    color: var(--black);
    opacity: 0.7;
    margin-top: 0.5rem;
    padding: 0 1rem;
`

export const ButtonsBox = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    @media (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
    }
`
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