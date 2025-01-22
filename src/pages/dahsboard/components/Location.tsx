import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

const Location: React.FC = () => {
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

  const [isFetchingAddress, setIsFetchingAddress] = useState<boolean>(false);

  const fetchAddress = async (lat: number, lon: number) => {
    setIsFetchingAddress(true);
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
    } finally {
      setIsFetchingAddress(false);
    }
  };

  useEffect(() => {
    const savedCoordinates = localStorage.getItem("coordinates");
    const savedAddress = localStorage.getItem("address");
    const savedLastUpdated = localStorage.getItem("lastUpdated");

    if (!savedCoordinates || !savedAddress || !savedLastUpdated) {
      const defaultCoordinates: [number, number] = [-6.2088, 106.8456];
      localStorage.setItem("coordinates", JSON.stringify(defaultCoordinates));
      setCoordinates(defaultCoordinates);

      fetchAddress(defaultCoordinates[0], defaultCoordinates[1]);

      const defaultLastUpdated = new Date().toLocaleString();
      localStorage.setItem("lastUpdated", defaultLastUpdated);
      setLastUpdated(defaultLastUpdated);
    }
  }, []);

  return (
    <div className="h-[600px] lg:h-full bg-white">
      <h2 className="text-2xl font-semibold pb-5">Last Location</h2>

      <div className="h-[60%] lg:h-[76%]">
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
          <Marker position={coordinates} icon={carIcon}>
            <Popup>{isFetchingAddress ? "Loading..." : address}</Popup>
          </Marker>
        </MapContainer>

        <div className="flex flex-col lg:flex-row justify-between mt-4 gap-8 mb-5">
          <p className="w-full lg:w-[75%]">
            {isFetchingAddress ? "Loading address..." : address}
          </p>
          <p className="w-full lg:w-[25%] lg:text-right">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;