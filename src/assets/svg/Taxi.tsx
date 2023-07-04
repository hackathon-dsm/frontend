import { SvgPropsType } from ".";

export const Taxi = ({ onClick, size, color }: SvgPropsType) => {
  return (
    <svg
      width="85"
      height="44"
      viewBox="0 0 85 44"
      fill="none"
      onClick={onClick}
    >
      <rect x="17" width="17" height="17" fill="#1F190A" />
      <rect y="17" width="17" height="17" fill="#1F190A" />
      <rect x="34" y="17" width="17" height="17" fill="#1F190A" />
      <rect x="51" width="17" height="17" fill="#1F190A" />
      <rect x="34" width="17" height="17" fill="#F9D934" />
      <rect x="17" y="17" width="17" height="17" fill="#F9D934" />
      <rect x="51" y="17" width="17" height="17" fill="#F9D934" />
      <rect x="68" y="17" width="17" height="17" fill="#1F190A" />
      <circle cx="25" cy="38" r="6" fill="#1F190A" />
      <circle cx="60" cy="38" r="6" fill="#1F190A" />
    </svg>
  );
};
