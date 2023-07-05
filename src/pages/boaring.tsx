import { styled } from "styled-components";
import { GeoLocationType, useGeolocation } from "../hooks/useGeolocation";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polyline,
} from "react-kakao-maps-sdk";
import { useCalculateLine } from "../hooks/useCalculateLine";
import { useKakaoMap } from "../hooks/useKakaoMap";
import { Input } from "../components/common/input";
import { CustomMark } from "../components/CustomMark";
import { useState, useEffect } from "react";
import { ClickOverlay, DirectionOverlay } from "../components/CustomOverlay";
import { CallTaxiForm } from "../components/CallTaxiForm";
import { AddressInput } from "../components/common/input/Address";
import { useForm } from "../hooks/useForm";
import { Taxi } from "../assets/svg";
import { UserLocation } from "../assets/svg/UserLocation";
import { UserMark } from "../components/UserMark";

const { kakao } = window;

interface BoaringType {
  start: GeoLocationType | null;
  end: GeoLocationType | null;
}

export const Boaring = () => {
  const { state, onHandleChange } = useForm({
    start: "서울역",
    end: "대전역",
  });

  const { location, setLocation, center, setCenter, address, geo2address } =
    useGeolocation();

  const [pos, setPos] = useState<BoaringType>({ start: null, end: null });
  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch("서울역", (e: kakao.maps.services.PlacesSearchResult) => {
      if (!e.length) return;
      setPos((prev) => ({
        ...prev,
        start: { lng: Number(e[0].x), lat: Number(e[0].y) },
      }));
    });
    ps.keywordSearch("대전역", (e: kakao.maps.services.PlacesSearchResult) => {
      if (!e.length) return;
      setPos((prev) => ({
        ...prev,
        end: { lng: Number(e[0].x), lat: Number(e[0].y) },
      }));
    });
  }, []);
  return (
    <div>
      <Container>
        <_LogoWrapper>
          <Taxi /> Texier
        </_LogoWrapper>
      </Container>
      <_Wrapper>
        <CallTaxiForm onSubmit={() => {}} handcap="석고" buttonName="수락하기">
          <AddressInput
            label="출발지"
            value={state.start}
            placeholder=""
            onChange={() => {}}
            name=""
            disabled
          />
          <AddressInput
            label="도착지"
            value={state.end}
            placeholder=""
            onChange={() => {}}
            name=""
            disabled
          />
        </CallTaxiForm>
        {location && center && (
          <Map
            center={center}
            isPanto={true}
            style={{ width: "800px", height: "600px", borderRadius: "20px" }}
            onClick={(_T, { latLng }) => {
              const lat = latLng.getLat();
              const lng = latLng.getLng();
              setLocation({ lat, lng });
              geo2address(lng, lat);
            }}
          >
            {pos.start && (
              <CustomOverlayMap
                xAnchor={0.4}
                yAnchor={0.91}
                position={pos.start}
              >
                <UserMark label="승객 위치" />
              </CustomOverlayMap>
            )}
            {pos.end && (
              <CustomOverlayMap xAnchor={0.5} yAnchor={0.9} position={pos.end}>
                <UserMark label="목적지 위치" />
              </CustomOverlayMap>
            )}
            <CustomOverlayMap position={location} yAnchor={1.5}>
              <ClickOverlay>{address}</ClickOverlay>
            </CustomOverlayMap>
          </Map>
        )}
      </_Wrapper>
    </div>
  );
};

const _Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px;
`;

const _LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 50px;
  font-weight: 700;
`;
const Container = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 50px 20px 0 50px;
  gap: 60px;
`;
