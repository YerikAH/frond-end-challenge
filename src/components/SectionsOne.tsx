// react
import { useContext } from "react";

// context
import FetchContext from "../context/dataContext";

//styles
import { BoxGrid, SectionOneStyle } from "../styles/section_one_style";
import ErrorLoadProject from "./section/ErrorLoadProject";

// components
import { NoErrorData } from "./section/NoErrorData";
import Loader from "./section/Loader";

export default function SectionsOne() {
  const data = useContext(FetchContext);
  return (
    <FetchContext.Provider value={data}>
      <SectionOneStyle>
        {data.load ? (
          <Loader />
        ) : (
          <BoxGrid>
            {data.data !== null ? (
              <NoErrorData />
            ) : (
              data.error && <ErrorLoadProject />
            )}
          </BoxGrid>
        )}
      </SectionOneStyle>
    </FetchContext.Provider>
  );
}
