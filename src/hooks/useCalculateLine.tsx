import { useState } from "react";
import { Polyline } from "react-kakao-maps-sdk";
import { GeoLocationType } from "./useGeolocation";

export const useCalculateLine = (target: GeoLocationType) => {
  const [line, setLine] = useState<number>(0);
  const onLineChange = ({ getLength }: kakao.maps.Polyline) => {
    setLine(getLength());
  };
  const LineElement = () => <Polyline path={[target]} />;
  return [line, onLineChange];
};
