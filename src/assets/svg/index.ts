export * from "./";

export interface SvgPropsType {
  onClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  size?: string;
  color?: string;
}
