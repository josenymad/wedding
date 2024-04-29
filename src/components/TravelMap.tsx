import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const TravelMap = () => {
  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;
  const position = { lat: 53.420858, lng: -2.038596 };
  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={position} defaultZoom={10} mapId={mapId}>
        <AdvancedMarker />
      </Map>
    </APIProvider>
  );
};

export default TravelMap;
