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
import { UserMark, UserMarkPos } from "../components/UserMark";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  NobodyTaxiesType,
  getCall,
  getNobodyTakeTaxies,
} from "../apis/call/user";
import { toast } from "react-toastify";
import { Header } from "../components/common/header";

const { kakao } = window;

interface BoaringType {
  start: GeoLocationType | null;
  end: GeoLocationType | null;
}

export const Boaring = () => {
  const { state, onHandleChange, setState } = useForm({
    departure: "",
    destination: "",
    visitor_caution: "사용자의 장애 사항입니다",
    call_id: 0,
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

  const { data } = useQuery(["getTaxies"], () => getNobodyTakeTaxies(), {});
  const { mutate } = useMutation(() => getCall(state.call_id), {
    onSuccess: () => {
      toast.success("성공적으로 수락했습니다", {
        autoClose: 1000,
        type: "success",
      });
    },
    onError: () => {
      toast("수락을 실패했습니다.", { autoClose: 1000, type: "error" });
      console.log(1);
    },
  });
  const onChange = ({
    departure,
    destination,
    visitor_caution,
    call_id,
  }: NobodyTaxiesType) => {
    setState({ departure, destination, visitor_caution, call_id });
  };
  data?.data;
  return (
    <div>
      <Header />
      <_Wrapper>
        <CallTaxiForm
          onSubmit={mutate}
          handcap={"장애 사항: " + state.visitor_caution}
          buttonName="수락하기"
        >
          <AddressInput
            label="출발지"
            value={state.departure}
            placeholder="사용자의 출발지입니다."
            onChange={() => {}}
            name=""
            disabled
          />
          <AddressInput
            label="도착지"
            value={state.destination}
            placeholder="사용자의 도착지입니다."
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
            {data &&
              data.data?.map((data) => (
                <UserMarkPos data={data} onClick={onChange} />
              ))}
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
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px 200px;
  box-sizing: border-box;
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
