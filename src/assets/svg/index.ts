export * from "./Taxi";
export * from "./Location";

export interface SvgPropsType {
  onClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  size?: string;
  color?: string;
}
