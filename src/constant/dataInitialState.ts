import { Welcome } from "../interface/data";
import { ContextInterface } from "../interface/props";

export const DATA_INITIAL_STATE: Welcome[] = [
  {
    id: "404",
    name: "",
    image_paht: "",
    description: "",
    link_preview: "",
    link_code: "",
    link_solution: "",
  },
];

export const CONTEXT_INITIAL_STATE: ContextInterface = {
  data: null,
  load: true,
  error: false,
};
