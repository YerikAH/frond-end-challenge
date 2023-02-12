import React from "react";
import { ProjectProps } from "../../interface/props";
import {
  BoxEnd,
  ButtonIcon,
  ButtonProject,
  ButtonsBox,
  ButtonSpecial,
  ChildGrid,
  DescriptionProject,
  ImageProject,
  TitleProject,
} from "../../styles/section_one_style";
import logoBlue from "../../assets/icon-logo.svg";
import linkWhite from "../../assets/icon_link_white.svg";
import linkBlue from "../../assets/icon_link_blue.svg";
import LinkBlueComponent from "../icons/LinkBlueComponent";

export default function Project({ data }: ProjectProps) {
  console.log(data);
  return (
    <ChildGrid>
      <ImageProject src={data.image_paht} />
      <TitleProject>{data.name}</TitleProject>
      <DescriptionProject>{data.description}</DescriptionProject>
      <BoxEnd>
        <ButtonsBox>
          <ButtonProject href={data.link_preview}>
            VIEW PREVIEW
            <LinkBlueComponent classProp="white"/>
          </ButtonProject>
          <ButtonProject href={data.link_code} className="outline">
            VIEW CODE
            <LinkBlueComponent classProp="blue"/>
          </ButtonProject>
        </ButtonsBox>
        <ButtonSpecial href={data.link_solution}>
          <ButtonIcon src={logoBlue} />
          View solution in Front End Mentor
        </ButtonSpecial>
      </BoxEnd>
    </ChildGrid>
  );
}
