import styled from "styled-components";

export const SectionOneStyle = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 2rem;
  @media (min-width: 1230px) {
    padding: 0;
  }
`;
export const BoxGrid = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 5.625rem;
  grid-template-columns: repeat(auto-fill, 300px);
  width: 100%;
  gap: 3rem;
  @media (min-width: 1230px) {
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 360px);
  }
`;
export const ChildGrid = styled.div`
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border: 1px solid rgba(255, 255, 255, 0.24);
  display: flex;
  flex-direction: column;
`;
export const TitleProject = styled.h3`
  margin-top: 1rem;
  font: normal normal 600 1.1rem/1.5rem var(--font-barlow);
  color: var(--black);
  text-overflow: ellipsis;
  padding: 0 1rem;
`;
export const DescriptionProject = styled.p`
  font: normal normal 400 0.9rem/1.5rem var(--font-barlow);
  color: var(--black);
  opacity: 0.7;
  margin-top: 0.5rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const ButtonsBox = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1230px) {
    flex-direction: row;
    justify-content: start;
  }
`;
export const ImageProject = styled.img`
  width: 300px;
  @media (min-width: 1230px) {
    width: 360px;
  }
`;
export const ButtonProject = styled.a`
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  font-style: italic;
  border-radius: 15rem;
  background-color: ${(props) =>
    props.className === "outline" ? "var(--white)" : "var(--blue)"};
  border: ${(props) =>
    props.className === "outline" ? "1px solid var(--blue)" : "none"};
  color: ${(props) =>
    props.className === "outline" ? "var(--blue)" : "var(--white)"};
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.className === "outline" ? "var(--white)" : "var(--dark-blue)"};
    border: ${(props) =>
      props.className === "outline" ? "1px solid var(--dark-blue)" : "none"};
    color: ${(props) =>
      props.className === "outline" ? "var(--dark-blue)" : "var(--white)"};
  }
  &:hover path {
    stroke: ${(props) =>
      props.className === "outline" ? "var(--dark-blue)" : "var(--white)"};
  }
`;
export const ButtonSpecial = styled.a`
  display: flex;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background: var(--white-pale);
  color: var(--black);
  font: normal normal 500 0.9rem/1.2rem var(--font-barlow);
  border-radius: 0.3rem;
  gap: 1rem;
`;
export const ButtonIcon = styled.img``;
export const PathColor = styled.path`
  stroke: ${(props) =>
    props.className === "blue" ? "var(--blue)" : "var(--white)"};
`;
export const BoxEnd = styled.div`
  margin: auto 0 0 0;
`;
