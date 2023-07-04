import { useState, useEffect } from "react";

export interface GeoLocationType {
  lat: number;
  lng: number;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeoLocationType | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) =>
        setLocation({ lat: latitude, lng: longitude })
    );
    
  }, []);
  
  return { location, setLocation };
};
