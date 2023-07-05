import { useState, useEffect } from "react";

export interface GeoLocationType {
  lat: number;
  lng: number;
}

const { kakao } = window;

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeoLocationType | null>(null);
  const [address, setAddress] = useState<string>("");
  const [center, setCenter] = useState<GeoLocationType | null>(null);

  const gs = new kakao.maps.services.Geocoder();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        const result = { lat: latitude, lng: longitude };
        setLocation(result);
        setCenter(result);
      }
    );
  }, []);

  const geo2address = (
    lng: number,
    lat: number,
    callback?: (address: string) => void
  ) => {
    return gs.coord2Address(lng, lat, (success) => {
      const address = success[0].address.address_name;
      setAddress(address);
      if (callback) callback(address);
    });
  };

  return {
    location,
    setLocation,
    center,
    setCenter,
    address,
    geo2address,
  } as const;
};
