import { useContext } from "react";

// components
import NoThereProjects from "./NoThereProjects";
import FetchContext from "../../context/dataContext";
import Project from "./Project";

export const NoErrorData = () => {
  const data = useContext(FetchContext);
  return (
    <FetchContext.Provider value={data}>
      {data.data!.length === 0 ? (
        <NoThereProjects />
      ) : (
        data.data!.map((item) => <Project data={item} key={item.id} />)
      )}
    </FetchContext.Provider>
  );
};
