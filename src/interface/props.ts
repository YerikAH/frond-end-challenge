import { Welcome } from "./data";

export interface ContextProps {
  children: JSX.Element;
}
export interface ProjectProps {
  data: Welcome;
}
export interface SvgProps {
  classProp: string;
}

export interface ContextInterface {
  data: Welcome[] | null;
  error: boolean;
  load: boolean;
}
