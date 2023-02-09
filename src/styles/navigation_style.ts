import styled from "styled-components"

export const HeaderStyle = styled.header`
    width: 100%;
`
export const NavStyle = styled.nav`
    width:100%;
    max-witdth: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display:grid;
    place-items: center;
    border-bottom: 1px solid #0002;
    @media (min-width:720px){}
`
export const ImageLogo = styled.img`
`
export const HeadlinePrincipal = styled.h1`
    font: normal normal 600 1.5rem/2rem var(--font-barlow);
    color: var(--black);
    margin-top: 1rem;
`
export const TextDecoration = styled.a`
    font: nomrla normal 400 1rem/1.5rem var(--font-barlow);
    color: var(--blue);
    margin-top: 0.5rem;
    display: block;
`