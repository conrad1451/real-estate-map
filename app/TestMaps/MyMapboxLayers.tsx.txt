// Source: https://visgl.github.io/react-map-gl/docs/get-started/adding-custom-data

import * as React from "react";
// import Map, { Source, Layer } from "react-map-gl/maplibre";
// import type { CircleLayer } from "react-map-gl/maplibre";

// import Map, { Source, Layer } from "react-map-gl/mapbox";
// import type { CircleLayer } from "react-map-gl/mapbox";
// import type CircleLayer from "react-map-gl/mapbox";
// import { CircleLayer } from "react-map-gl";
// import { CircleLayer } from "react-map-gl/mapbox";
// import CircleLayer from "react-map-gl/mapbox";
// import CircleLayer from "react-map-gl";

import type { CircleLayer } from "react-map-gl";

import type { FeatureCollection } from "geojson";

const geojson: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.4, 37.8],
      },
      properties: { title: "915 Front Street, San Francisco, California" },
    },
  ],
};

const layerStyle: CircleLayer = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

function App() {
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: -122.45,
        latitude: 37.78,
        zoom: 14,
      }}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
}
