import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
`;
export const NavStyle = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  border-bottom: 1px solid #0002;
  @media (min-width: 720px) {
  }
`;
export const ImageLogo = styled.img``;
export const HeadlinePrincipal = styled.h1`
  font: normal normal 600 1rem/1.5rem var(--font-barlow);
  color: var(--black);
  margin-top: 1rem;
  text-align: center;
  @media (min-width: 720px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
export const TextDecoration = styled.a`
  font: normal normal 500 0.8rem/1.2rem var(--font-barlow);
  color: var(--blue);
  display: block;
  text-align: center;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
