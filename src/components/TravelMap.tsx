import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const TravelMap = () => {
  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;
  const position = { lat: 53.420858, lng: -2.038596 };
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={13}
        mapId={mapId}
        className="w-[75vw] h-[50vw] xs:w-[60vw] rounded m-auto mb-2 max-h-72"
      >
        <AdvancedMarker position={position}>
          <Pin />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default TravelMap;

// className="w-[80vw] sm:w-[50vw] xl:h-[10vw] rounded m-auto"
