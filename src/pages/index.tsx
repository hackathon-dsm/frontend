import { styled } from "styled-components";
import { useGeolocation } from "../hooks/useGeolocation";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";

export const Main = () => {
  const { location, setLocation } = useGeolocation();

  // ismove?
  console.log(location);
  return (
    <div>
      <_Wrapper>
        {location && (
          <Map
            center={location}
            isPanto={true}
            style={{ width: "500px", height: "500px" }}
            onClick={(_T, e) => {
              setLocation({ lat: e.latLng.getLat(), lng: e.latLng.getLng() });
            }}
          >
            <MapMarker position={location}></MapMarker>
            <MapMarker
              position={{ lat: 36.35232530104873, lng: 127.39250839098673 }}
            ></MapMarker>
            <Polyline
              path={[
                location,
                { lat: 36.35232530104873, lng: 127.39250839098673 },
              ]}
              strokeWeight={3} // 선의 두께입니다
              strokeColor={"#000000"} // 선의 색깔입니다
              strokeOpacity={1} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
              strokeStyle={"solid"} // 선의 스타일입니다
              onCreate={(e) => console.log(e.getLength())}
            />
          </Map>
        )}
      </_Wrapper>
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
`