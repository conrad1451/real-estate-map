"use client";
import * as React from "react";
// import Map from "react-map-gl/maplibre";
import Map from "react-map-gl/mapbox";

// npm install @turf/turf
import * as turf from "@turf/turf";

// A circle of 5 mile radius of the Empire State Building
const GEOFENCE = turf.circle([-74.0122106, 40.7467898], 5, { units: "miles" });

interface AView {
  longitude: number;
  latitude: number;
  zoom: number;
}

export function MyMapboxGeofence() {
  const [viewState, setViewState] = React.useState<AView>({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });
  const MAPBOX_TOKEN =
    process.env.NEXT_PUBLIC_MAPBOX_KEY || "YOUR_MAPBOX_PUBLIC_TOKEN_HERE";

  const onMove = React.useCallback(({ viewState }) => {
    const newCenter = [viewState.longitude, viewState.latitude];
    // Only update the view state if the center is inside the geofence
    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {
      setViewState(viewState);
    }
  }, []);

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      {...viewState}
      onMove={onMove}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
