"use client";

// MyMapboxPopupDynamicLayers.tsx

// CHQ: Gemini AI created

import * as React from "react";
import { useState, useCallback } from "react";
import Map, {
  Popup,
  Source,
  Layer,
  type LayerProps,
} from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

import { useNewDataFetch } from "../hooks/useNewDataFetch";
// 1. Define the style properties for the dynamic layer (e.g., points)
const pointLayerStyle: LayerProps = {
  id: "dynamic-points",
  type: "circle", // Use 'circle' for point data
  source: "dynamic-data", // Must match the Source component's id
  paint: {
    "circle-color": "#ff4500", // Orange color for the points
    "circle-radius": 6,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};

export function MyMapboxDynamicLayer() {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  // 2. State to hold the dynamic GeoJSON data
  const [dynamicGeoJson, setDynamicGeoJson] = useState({
    type: "FeatureCollection",
    features: [], // Starts with an empty array
  });

  const MAPBOX_TOKEN =
    process.env.NEXT_PUBLIC_MAPBOX_KEY || "YOUR_MAPBOX_PUBLIC_TOKEN_HERE";

  // CHQ: Gemini AI called the hook here
  const fetchNewData = useNewDataFetch(setDynamicGeoJson);

  // 3. Initial data load (call the returned function inside useEffect)
  React.useEffect(() => {
    fetchNewData(setDynamicGeoJson); // Call the function returned by the hook
  }, [fetchNewData]); // Dependency array: fetchNewData is stable due to useCallback in the hook

  return (
    <div>
      {/* Button to trigger the data refresh */}
      <button
        onClick={fetchNewData}
        style={{
          padding: "10px 20px",
          marginBottom: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Fetch New Dynamic Data ({dynamicGeoJson.features.length} points)
      </button>

      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {/* 5. The Source component uses the state variable */}
        <Source
          id="dynamic-data"
          type="geojson"
          data={dynamicGeoJson} // <--- The map updates whenever this prop changes
        />

        {/* 6. The Layer component displays the data */}
        <Layer {...pointLayerStyle} />

        {/* Existing Popup component */}
        {showPopup && (
          <Popup
            longitude={-100}
            latitude={40}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            Initial Center
          </Popup>
        )}
      </Map>
    </div>
  );
}
