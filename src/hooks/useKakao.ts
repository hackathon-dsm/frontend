import { useRef } from "react";

export const useKakao = () => {
  const kakaoMap = useRef<HTMLDivElement | null>(null);
  return { kakaoMap };
};
