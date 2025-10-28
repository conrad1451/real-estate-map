"use client";
import * as React from "react";
// import Map from "react-map-gl/maplibre";

// CHQ: Gemini AI imported MapEvent for types
import Map, { MapEvent } from "react-map-gl/mapbox";

// CHQ: Gemini AI corrected itself by importing MapMoveEvent for types
// import Map, { MapMoveEvent } from "react-map-gl/mapbox";
// error: '"react-map-gl/mapbox"' has no exported member named 'MapMoveEvent'. Did you mean 'MapMouseEvent'?ts(2724)

// import Map, { MapMouseEvent } from "react-map-gl/mapbox";

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

  // Use the correct MapEvent type from react-map-gl

  //   MapMouseEvent
  //   const onMove = React.useCallback((event: MapMouseEvent) => {
  //   const onMove = React.useCallback((event: MapMoveEvent) => {
  const onMove = React.useCallback((event: MapEvent) => {
    // Destructure the new viewState from the event object
    const newViewState: AView = event.viewState;
    // Property 'viewState' does not exist on type 'MapMouseEvent'.ts(2339)

    // The center point of the NEW view state (where the map is trying to move)
    const newCenter = [newViewState.longitude, newViewState.latitude];

    // Only update the view state if the center is inside the geofence
    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {
      setViewState(newViewState); // CHQ: Gemini AI set the new view state from the event
    }
  }, []); // CHQ: Gemini AI made Dependency array to be empty
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      {...viewState}
      onMove={onMove}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
