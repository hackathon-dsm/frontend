import { useState, useEffect } from "react";
import { Input } from "../components/common/input";
import { GeoLocationType } from "./useGeolocation";
import { AddressInput } from "../components/common/input/Address";

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

interface InputOptionType {
  label: string;
  placeholder: string;
}

export const useKakaoMap = (
  setCenter: (value: GeoLocationType) => void,
  option: InputOptionType
) => {
  const [keyword, setKeyword] = useState<string>("");
  const [list, setList] = useState<kakao.maps.services.PlacesSearchResult>([]);
  const [geo, setGeo] = useState<GeoLocationType | null>(null);
  const [stop, setStop] = useState<number | undefined | any>();
  const [stopSearch, setSearch] = useState<boolean>(false);
  const [isFocus, setFocus] = useState<boolean>(false);

  const ps = new kakao.maps.services.Places();

  useEffect(() => {
    clearTimeout(stop);
    if (stopSearch) setSearch(false);
    else
      keyword &&
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
    <AddressInput
      value={keyword}
      name=""
      onChange={(e) => setKeyword(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...option}
    />
  );

  const onLocationChange = (lng: number, lat: number, address: string) => {
    if (!isFocus) return;
    setGeo({ lng, lat });
    setSearch(true);
    setKeyword(address);
  };

  const onMarkClick = (name: string, pos: GeoLocationType) => {
    setKeyword(name);
    setGeo(pos);
  };

  return {
    list,
    geo,
    SearchElement,
    onLocationChange,
    onMarkClick,
  };
};
