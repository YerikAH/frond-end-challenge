import React, {  useContext } from 'react'
import FetchContext from '../context/dataContext'
import { SectionOneStyle } from '../styles/section_one_style'

export default function SectionsOne() {
  const data = useContext(FetchContext)
  return (
    <FetchContext.Provider value={data}>
      <SectionOneStyle></SectionOneStyle>
      
    </FetchContext.Provider>
  )
}
