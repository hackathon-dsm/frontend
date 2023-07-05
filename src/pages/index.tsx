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

export const Main = () => {
  const { location, setLocation, center, setCenter, address, geo2address } =
    useGeolocation();
  const {
    list: start,
    geo: startGeo,
    onLocationChange: locationStartChange,
    SearchElement: startElement,
    onMarkClick: startClick,
  } = useKakaoMap((value: GeoLocationType) => setCenter(value));
  const {
    list: end,
    geo: endGeo,
    onLocationChange: locationEndChange,
    SearchElement: endElement,
    onMarkClick: endClick,
  } = useKakaoMap((value: GeoLocationType) => setCenter(value));

  const common = { lat: 36.35232530104873, lng: 127.39250839098673 };
  const [move, moveChange] = useCalculateLine(location, common);

  return (
    <div>
      {startElement}
      {endElement}
      <_Wrapper>
        {location && center && (
          <Map
            center={center}
            isPanto={true}
            style={{ width: "500px", height: "500px" }}
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
            <CustomOverlayMap position={location} yAnchor={1.5}>
              <ClickOverlay>{address}</ClickOverlay>
            </CustomOverlayMap>
            {[...start, ...end].map(({ x, y, address_name }) => {
              return (
                <CustomMark
                  onClick={(isStart) =>
                    isStart ? startClick(address_name) : endClick(address_name)
                  }
                  position={{ lng: Number(x), lat: Number(y) }}
                  content={address_name}
                ></CustomMark>
              );
            })}
          </Map>
        )}
        {Math.floor(move)} m
      </_Wrapper>
      {start.map(({ address_name, road_address_name, x, y }) => (
        <div>
          {address_name}/ {road_address_name} / {x} / {y}
        </div>
      ))}
    </div>
  );
};

const _Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const _input = styled.input`
  width: 100%;
`;
