// styles
import {
  FooterStyles,
  LinkFooter,
  ListFooter,
  LogoText,
  PointFooter,
  BoxGrid,
  TextDecoration,
} from "../styles/footer_style";

// components
import FrontEndMentorIcon from "./icons/FrontEndMentorIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
  return (
    <FooterStyles>
      <BoxGrid>
        <LogoText>
          {" "}
          Challenges completed
          <br />
          <TextDecoration> by Harvey Yerik</TextDecoration>
        </LogoText>
        <ListFooter>
          <PointFooter>
            <LinkFooter href="https://github.com/YerikAH" target="_blank">
              <GitHubIcon />
            </LinkFooter>
          </PointFooter>

          <PointFooter>
            <LinkFooter
              href="https://www.linkedin.com/in/harvey-yerik-vasquez-huaranga-802218228/"
              target="_blank"
            >
              <LinkedinIcon />
            </LinkFooter>
          </PointFooter>

          <PointFooter>
            <LinkFooter
              href="https://www.frontendmentor.io/profile/YerikAH"
              target="_blank"
            >
              <FrontEndMentorIcon />
            </LinkFooter>
          </PointFooter>
        </ListFooter>
      </BoxGrid>
    </FooterStyles>
  );
}
