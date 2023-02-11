import React, { useContext } from "react";
import FetchContext from "../context/dataContext";
import { BoxGrid, SectionOneStyle } from "../styles/section_one_style";
import Project from "./section/Project";

export default function SectionsOne() {
  const data = useContext(FetchContext);
  console.log(data);
  return (
    <FetchContext.Provider value={data}>
      <SectionOneStyle>
        <BoxGrid>
          {data.map((item) => (
            <Project data={item} />
          ))}
        </BoxGrid>
      </SectionOneStyle>
    </FetchContext.Provider>
  );
}
