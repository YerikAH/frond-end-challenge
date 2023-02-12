import {
  FooterStyles,
  LinkFooter,
  ListFooter,
  LogoText,
  PointFooter,
  BoxGrid,
  TextDecoration,
} from "../styles/footer_style";
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
            <LinkFooter href="">
              <GitHubIcon />
            </LinkFooter>
          </PointFooter>

          <PointFooter>
            <LinkFooter href="">
              <LinkedinIcon />
            </LinkFooter>
          </PointFooter>

          <PointFooter>
            <LinkFooter href="">
              <FrontEndMentorIcon />
            </LinkFooter>
          </PointFooter>
        </ListFooter>
      </BoxGrid>
    </FooterStyles>
  );
}
