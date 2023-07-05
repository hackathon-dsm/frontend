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

export const Main = () => {
  const { state, onHandleChange } = useForm({
    start: "",
    end: "",
  });
  

  const { location, setLocation, center, setCenter, address, geo2address } =
    useGeolocation();
  const {
    list: start,
    geo: startGeo,
    onLocationChange: locationStartChange,
    SearchElement: startElement,
    onMarkClick: startClick,
  } = useKakaoMap((value: GeoLocationType) => setCenter(value), {
    placeholder: "출발지를 정해 주세요",
    label: "출발지",
  });
  const {
    list: end,
    geo: endGeo,
    onLocationChange: locationEndChange,
    SearchElement: endElement,
    onMarkClick: endClick,
  } = useKakaoMap((value: GeoLocationType) => setCenter(value), {
    placeholder: "도착지를 정해 주세요",
    label: "도착지",
  });

  const common = { lat: 36.35232530104873, lng: 127.39250839098673 };
  const [move, moveChange] = useCalculateLine(location, common);

  return (
    <div>
      <Container>
      <_LogoWrapper>
        <Taxi /> Texcer
      </_LogoWrapper>
      </Container>
      
      <_Wrapper>
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
              locationStartChange(lng, lat, address);
              locationEndChange(lng, lat, address);
            }}
          >
            {startGeo && (
              <CustomOverlayMap
                xAnchor={0.4}
                yAnchor={0.91}
                position={startGeo}
              >
                <DirectionOverlay />
              </CustomOverlayMap>
            )}
            {endGeo && (
              <CustomOverlayMap xAnchor={0.4} yAnchor={0.91} position={endGeo}>
                <DirectionOverlay color="blue" />
              </CustomOverlayMap>
            )}
            <CustomOverlayMap position={location} yAnchor={1.5}>
              <ClickOverlay>{address}</ClickOverlay>
            </CustomOverlayMap>
            {[...start, ...end].map(({ x, y, address_name }) => {
              const pos = { lng: Number(x), lat: Number(y) };
              return (
                <CustomMark
                  onClick={(isStart) =>
                    isStart
                      ? startClick(address_name, pos)
                      : endClick(address_name, pos)
                  }
                  position={pos}
                  content={address_name}
                ></CustomMark>
              );
            })}
          </Map>
        )}
        <CallTaxiForm onSubmit={() => {}}>
          {startElement}
          {endElement}
        </CallTaxiForm>
      </_Wrapper>
      {Math.floor(move)} m
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