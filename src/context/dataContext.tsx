import { createContext, useEffect, useState } from "react";

/* hook */
import { useFetch } from "../hook/useFetch";

/* interface and init state */
import { CONTEXT_INITIAL_STATE } from "../constant/dataInitialState";
import { ContextInterface, ContextProps } from "../interface/props";

const FetchContext = createContext<ContextInterface>(CONTEXT_INITIAL_STATE);

const FetchProvider = ({ children }: ContextProps) => {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const { dataJson, load } = useFetch(envUrl);
  const [dataContext, setDataContext] = useState<ContextInterface>(CONTEXT_INITIAL_STATE)
  
  useEffect(() => {
    if (dataJson !== null) {
      setDataContext({
        data: dataJson,
        error: false
      })
    }else{
      setDataContext(CONTEXT_INITIAL_STATE)
    }
  }, [load]);

  return <FetchContext.Provider value={dataContext}>{children}</FetchContext.Provider>;
};

export default FetchContext;
export { FetchProvider };
