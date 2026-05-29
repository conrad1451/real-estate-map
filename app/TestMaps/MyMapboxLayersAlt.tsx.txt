"use client";

// MyMapboxLayersAlt.tsx
import React from "react";
// import Map from "react-map-gl";
// import { Source, Layer } from "react-map-gl";
import Map, { Source, Layer } from "react-map-gl";

import { GeoJsonFeatureCollection } from "../utils/dataTypes";
// Replace with your Mapbox access token
const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_KEY || "YOUR_MAPBOX_PUBLIC_TOKEN_HERE";

// Example GeoJSON data (a simple point)
const geojson: GeoJsonFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.4, 37.8], // Longitude, Latitude
      },
      properties: {
        name: "San Francisco Point",
      },
    },
  ],
};

// Style for the circle layer
const layerStyle = {
  id: "my-point-layer",
  type: "circle",
  paint: {
    "circle-color": "#4264fb",
    "circle-radius": 8,
    "circle-stroke-width": 2,
    "circle-stroke-color": "#ffffff",
  },
};

export function MyMapboxLayersAlt() {
  return (
    <Map
      initialViewState={{
        longitude: -122.45,
        latitude: 37.78,
        zoom: 12,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11" // Or your custom style
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Source id="my-geojson-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
}

// export default MyMapboxLayersAlt;
