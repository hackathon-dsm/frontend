import { useMap, MapMarker } from "react-kakao-maps-sdk";
import { useState, ReactNode } from "react";
import { GeoLocationType } from "../hooks/useGeolocation";
import styled, { css } from "styled-components";

interface PropsType {
  position: GeoLocationType;
  content: string;
  onClick: (isStart?: boolean) => void;
}
export const CustomMark = ({ position, content, onClick }: PropsType) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  const ClickButton = (isStart: boolean) => {
    onClick(isStart);
    setIsVisible(false);
  };
  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      onClick={(marker) => {
        map.panTo(marker.getPosition());
      }}
      onMouseOver={() => setIsVisible(true)}
    >
      {isVisible && (
        <_PlaceHover
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
        >
          {content}
          <_ButtonRow>
            <Button onClick={() => ClickButton(true)}>출발</Button>
            <Button onClick={() => ClickButton(false)}>도착</Button>
          </_ButtonRow>
        </_PlaceHover>
      )}
    </MapMarker>
  );
};

const _PlaceHover = styled.div`
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  width: 200px;
  flex-direction: column;
  gap: 20px;
`;

const _ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button<{ width?: string; isSubmit?: boolean }>`
  padding: 10px;
  width: 100%;
  width: ${({ width = "100%" }) => width};
  height: 40px;
  background-color: #ffd15c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;
