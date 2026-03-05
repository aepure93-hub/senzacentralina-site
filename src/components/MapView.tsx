"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
}

interface MapViewProps {
  places: Place[];
  center?: [number, number];
  zoom?: number;
  onSelect?: (place: Place) => void;
  selectedPlace?: Place | null;
}

function FlyToPlace({ place }: { place: Place | null | undefined }) {
  const map = useMap();
  useEffect(() => {
    if (place && !isNaN(place.lat) && !isNaN(place.lng)) {
      map.flyTo([place.lat, place.lng], 10, { duration: 1 });
    }
  }, [place, map]);
  return null;
}

export default function MapView({
  places,
  center = [42.5, 12.5],
  zoom = 5,
  onSelect,
  selectedPlace,
}: MapViewProps) {
  return (
    <MapContainer center={center} zoom={zoom} className="h-[400px] md:h-[500px] rounded-xl z-0">
      <FlyToPlace place={selectedPlace} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng]}
          icon={icon}
          eventHandlers={{
            click: () => onSelect?.(place),
          }}
        >
          <Popup>
            <strong>{place.name}</strong>
            {place.address && <br />}
            {place.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
