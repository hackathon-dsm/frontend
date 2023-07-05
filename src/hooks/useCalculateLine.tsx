import { useState } from "react";
import { Polyline } from "react-kakao-maps-sdk";
import { GeoLocationType } from "./useGeolocation";

const defaulta = { lat: 36.35232530104873, lng: 127.39250839098673 };

export const useCalculateLine = (
  location: GeoLocationType | null,
  target: GeoLocationType | null
) => {
  const [line, setLine] = useState<number>(0);
  const onLineChange = (e: kakao.maps.Polyline) => {
    setLine(e.getLength());
  };
  return [line, onLineChange] as const;
};
