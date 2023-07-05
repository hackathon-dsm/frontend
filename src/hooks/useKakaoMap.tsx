import { useState, useEffect } from "react";
import { Input } from "../components/common/input";
import { GeoLocationType } from "./useGeolocation";

interface PlaceList {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

const { kakao } = window;

export const useKakaoMap = (setCenter: (value: GeoLocationType) => void) => {
  const [keyword, setKeyword] = useState<string>("");
  const [list, setList] = useState<kakao.maps.services.PlacesSearchResult>([]);
  const [geo, setGeo] = useState<GeoLocationType | null>(null);
  const [stop, setStop] = useState<number | undefined | any>();
  const [stopSearch, setSearch] = useState<boolean>(false);
  const [isFocus, setFocus] = useState<boolean>(false);

  const ps = new kakao.maps.services.Places();
  const gc = new kakao.maps.services.Geocoder();

  useEffect(() => {
    clearTimeout(stop);
    if (stopSearch) setSearch(false);
    else
      setStop(
        setTimeout(
          () =>
            ps.keywordSearch(
              keyword || "대전",
              (e: kakao.maps.services.PlacesSearchResult) => {
                if (!e.length) return;
                setList(e);
                setCenter({ lng: Number(e[0].x), lat: Number(e[0].y) });
              }
            ),
          3000
        )
      );
  }, [keyword]);

  const SearchElement = (
    <Input
      value={keyword}
      name=""
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="장소를 입력해세요"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );

  const onLocationChange = (lng: number, lat: number, address: string) => {
    if (!isFocus) return;
    setGeo({ lng, lat });
    setSearch(true);
    setKeyword(address);
  };

  const onMarkClick = (name: string) => {
    setKeyword(name);
  };

  return {
    list,
    geo,
    SearchElement,
    onLocationChange,
    onMarkClick,
  };
};
