// react
import { useContext } from "react";

// context
import FetchContext from "../context/dataContext";

//styles
import { BoxGrid, SectionOneStyle } from "../styles/section_one_style";

// components
import Project from "./section/Project";

export default function SectionsOne() {
  const data = useContext(FetchContext);
  return (
    <FetchContext.Provider value={data}>
      <SectionOneStyle>
        <BoxGrid>

          {data.data?.length === 0 && <p>No hay items</p> }
          {data.data !== null && data.data.map((item) => (
            <Project data={item} key={item.id} />
          ))}

          {data.error && <p>Sucedio un error</p> }
        </BoxGrid>
      </SectionOneStyle>
    </FetchContext.Provider>
  );
}
