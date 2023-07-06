import { styled } from "styled-components";
import { UserLocation } from "../assets/svg/UserLocation";
import { NobodyTaxiesType } from "../apis/call/user";
import { useEffect, useState } from "react";
import { GeoLocationType } from "../hooks/useGeolocation";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

interface PropsTYpe {
  label: string;
  onClick?: () => void;
}

export const UserMark = ({ label, onClick }: PropsTYpe) => {
  return (
    <_Wrapper onClick={onClick}>
      {label}
      <UserLocation />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  gap: 10px;
  justify-content: center;
  font-size: 15px;
  font-weight: 300;
`;

interface UserMarkType {
  data: NobodyTaxiesType;
  onClick: (e: NobodyTaxiesType) => void;
  type?: "departure" | "destination";
}
const { kakao } = window;
export const UserMarkPos = ({
  data,
  onClick,
  type = "departure",
}: UserMarkType) => {
  const [state, setState] = useState<GeoLocationType>({ lng: 0, lat: 0 });
  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(data[type], (e) => {
      console.log(e);
      if (!e.length) return;
      setState(() => ({ lng: Number(e[0].x), lat: Number(e[0].y) }));
    });
  }, [data]);
  console.log(state, data.departure);
  return (
    <CustomOverlayMap xAnchor={0.5} yAnchor={0.9} position={state}>
      <UserMark label="승객위치" onClick={() => onClick(data)} />
    </CustomOverlayMap>
  );
};
