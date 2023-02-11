import React from 'react'
import { ProjectProps } from '../../interface/props'
import { ButtonProject, ButtonsBox, ButtonSpecial, ChildGrid, DescriptionProject, ImageProject, TitleProject } from '../../styles/section_one_style'

export default function Project({data}: ProjectProps) {
  console.log(data)
  return (
    <ChildGrid>
      <ImageProject src={data.image_paht}/>
      <TitleProject>{data.name}</TitleProject>
      <DescriptionProject>{data.description}</DescriptionProject>
      <ButtonsBox>
        <ButtonProject href={data.link_preview}>VIEW PREVIEW</ButtonProject>
        <ButtonProject href={data.link_code}>VIEW CODE</ButtonProject>
      </ButtonsBox>
      <ButtonSpecial href={data.link_solution}>
        View solution in Front End Mentor
      </ButtonSpecial>
    </ChildGrid>
  )
}
