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
import { UserMark } from "../components/UserMark";
import { Header } from "../components/common/header";
import { useMutation, useQuery } from "@tanstack/react-query";
import { cancleCall, catchCall, getNobodyTakeTaxies } from "../apis/call/user";
import { toast } from "react-toastify";

export const Main = () => {
  const { state, onHandleChange } = useForm({
    start: "",
    end: "",
  });
  const [isFocus, setFocus] = useState<boolean>(false);

  const { location, setLocation, center, setCenter, address, geo2address } =
    useGeolocation();
  const {
    list: start,
    geo: startGeo,
    keyword: startKeyword,
    onLocationChange: locationStartChange,
    SearchElement: startElement,
    onMarkClick: startClick,
  } = useKakaoMap(
    (value: GeoLocationType) => setCenter(value),
    () => setFocus(true),
    {
      placeholder: "출발지를 정해 주세요",
      label: "출발지",
    }
  );
  const {
    list: end,
    geo: endGeo,
    keyword: endKeyword,
    onLocationChange: locationEndChange,
    SearchElement: endElement,
    onMarkClick: endClick,
  } = useKakaoMap(
    (value: GeoLocationType) => setCenter(value),
    () => setFocus(false),
    {
      placeholder: "도착지를 정해 주세요",
      label: "도착지",
    }
  );
  const { mutate, data } = useMutation(
    () => catchCall({ departure: startKeyword, destination: endKeyword }),
    {
      onSuccess: () => {
        toast("성공적으로 택시를 불렀습니다.");
      },
      onError: () => {
        toast("택시를 부르는 데 실패했습니다.");
      },
    }
  );
  const callId = typeof data?.data.call_id === "number";
  const { mutate: cancle } = useMutation(() =>
    cancleCall(data?.data.call_id || 0)
  );

  return (
    <div>
      <Header />
      <_Wrapper>
        <CallTaxiForm onSubmit={callId ? cancle : mutate} buttonName={"택시콜"}>
          {startElement}
          {endElement}
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
              geo2address(lng, lat, (address: string) => {
                if (isFocus) locationStartChange(lng, lat, address);
                else locationEndChange(lng, lat, address);
              });
            }}
          >
            {startGeo && (
              <CustomOverlayMap
                xAnchor={0.4}
                yAnchor={0.91}
                position={startGeo}
              >
                <UserMark label="승객 위치" />
              </CustomOverlayMap>
            )}
            {endGeo && (
              <CustomOverlayMap xAnchor={0.4} yAnchor={0.91} position={endGeo}>
                <UserMark label="목적지 위치" />
              </CustomOverlayMap>
            )}
            <CustomOverlayMap position={location} yAnchor={1.5}>
              <ClickOverlay>{address}</ClickOverlay>
            </CustomOverlayMap>
            {(isFocus ? start : end).map(({ x, y, address_name }) => {
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
      </_Wrapper>
    </div>
  );
};

const _Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px 200px;
  box-sizing: border-box;
`;
