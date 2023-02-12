import styled from "styled-components";

export const FooterStyles = styled.footer`
    width: 100%;
    margin-top: 4rem;
`
export const BoxGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  gap: 2rem;
  border-top: 1px solid #0002;
  

  @media (min-width: 1300px){
    padding: 2rem 0;
}
`
export const LogoText = styled.p`
    font-size: 1rem;
    color: var(--black);
    text-align: center;
    width: 100%;
`
export const ListFooter = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const TextDecoration = styled.span`
  font: normal normal 500 0.8rem/1rem var(--font-barlow);
  color: var(--blue);
`
export const PointFooter = styled.li``
export const LinkFooter = styled.a`
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15rem;
  width: 2.5rem;
  height: 2.5rem;
  
`
