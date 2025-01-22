import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import { useEffect, useState } from "react";
import Car from "@/assets/map-car.svg";

const carIcon: Icon = new L.Icon({
  iconUrl: Car,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  className: "custom-icon",
});

const ChangeMapCenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};

const LiveTracking: React.FC = () => {
  const [coordinates, setCoordinates] = useState<[number, number]>(() => {
    const savedCoordinates = localStorage.getItem("coordinates");
    return savedCoordinates
      ? JSON.parse(savedCoordinates)
      : [-6.2088, 106.8456];
  });

  const [address, setAddress] = useState<string>(() => {
    const savedAddress = localStorage.getItem("address");
    return savedAddress || "Loading...";
  });

  const [lastUpdated, setLastUpdated] = useState<string>(() => {
    const savedLastUpdated = localStorage.getItem("lastUpdated");
    return savedLastUpdated || new Date().toLocaleString();
  });

  const fetchAddress = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
      );
      const data = await response.json();

      if (data?.display_name) {
        setAddress(data.display_name);
        localStorage.setItem("address", data.display_name);
      } else {
        const fallbackAddress = "Address not found";
        setAddress(fallbackAddress);
        localStorage.setItem("address", fallbackAddress);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      const fallbackError = "Failed to fetch address";
      setAddress(fallbackError);
      localStorage.setItem("address", fallbackError);
    }
  };

  const updateLocation = async (newCoordinates: [number, number]) => {
    setCoordinates(newCoordinates);
    localStorage.setItem("coordinates", JSON.stringify(newCoordinates));

    await fetchAddress(newCoordinates[0], newCoordinates[1]);

    const updatedTime = new Date().toLocaleString();
    setLastUpdated(updatedTime);
    localStorage.setItem("lastUpdated", updatedTime);
  };

  return (
    <div className="h-[80%] px-10">
      <div className="pb-5">
        <p className="text-2xl font-semibold">Change Location of Marker</p>
        <p className="text-gray-400">
          You can drag the marker to change the location.
        </p>
      </div>
      <MapContainer
        center={coordinates}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full rounded-xl relative"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeMapCenter center={coordinates} />
        <Marker
          position={coordinates}
          icon={carIcon}
          draggable
          eventHandlers={{
            dragend: (e) => {
              const marker = e.target;
              const newCoords: [number, number] = [
                marker.getLatLng().lat,
                marker.getLatLng().lng,
              ];
              updateLocation(newCoords);
            },
          }}
        >
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>

      <div className="flex flex-col lg:flex-row justify-between mt-4 gap-8 mb-5">
        <p className="w-full lg:w-[75%]">{address}</p>
        <p className="w-full lg:w-[25%] lg:text-right">
          Last Updated: {lastUpdated}
        </p>
      </div>
    </div>
  );
};

export default LiveTracking;
