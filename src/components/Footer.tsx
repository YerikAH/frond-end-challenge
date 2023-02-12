import { FooterStyles, LinkFooter, ListFooter, LogoText, PointFooter } from "../styles/footer_style";
import { BoxGrid } from "../styles/section_one_style";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
  return (
    <FooterStyles>
      <BoxGrid>
        <LogoText> Challenges completed </LogoText>
        <ListFooter>

          <PointFooter>
            <LinkFooter href="">
              <GitHubIcon/>
            </LinkFooter>
          </PointFooter>

          <PointFooter>
            <LinkFooter href="">
              <LinkedinIcon/>
            </LinkFooter>
          </PointFooter>

          <PointFooter>
            <LinkFooter href="">
              <GitHubIcon/>
            </LinkFooter>
          </PointFooter>


        </ListFooter>


      </BoxGrid>


    </FooterStyles>
  )
}
