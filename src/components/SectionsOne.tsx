import React, {  useContext } from 'react'
import FetchContext from '../context/dataContext'
import { SectionOneStyle } from '../styles/section_one_style'
import Project from './section/Project'

export default function SectionsOne() {
  const data = useContext(FetchContext)
  return (
    <FetchContext.Provider value={data}>
      <SectionOneStyle>
        <Project data={data}/>
      </SectionOneStyle>
    </FetchContext.Provider>
  )
}
