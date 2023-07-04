export * from "./Taxi";

export interface SvgPropsType {
  onClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  size?: string;
  color?: string;
}
