"use client";
// Using Mapbox
import * as React from "react";
import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export function MyMapComponent() {
  const MAPBOX_TOKEN =
    process.env.NEXT_PUBLIC_MAPBOX_KEY || "YOUR_MAPBOX_PUBLIC_TOKEN_HERE";

  return (
    <Map
      // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
