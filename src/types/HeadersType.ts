import { ReactElement } from "react";

interface HeadersType {
  label: string;
  key: string;
  adapter?: (value: any) => ReactElement;
}

export default HeadersType;
