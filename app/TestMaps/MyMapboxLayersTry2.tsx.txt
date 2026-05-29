// Source: https://www.google.com/search?q=Module+%27%22react-map-gl%22%27+has+no+exported+member+%27CircleLayer%27.+Did+you+mean+to+use+%27import+CircleLayer+from+%22react-map-gl%22%27+instead%3Fts%282614%29&client=firefox-b-1-d&sca_esv=5174aa7661d349ca&sxsrf=AE3TifNIjD4DecGreBJYZNQl0wncfsU_Kw%3A1761677589631&ei=FREBaaqiJu7l5NoPsLW90Qs&ved=0ahUKEwjqgMG3yMeQAxXuMlkFHbBaL7oQ4dUDCBE&oq=Module+%27%22react-map-gl%22%27+has+no+exported+member+%27CircleLayer%27.+Did+you+mean+to+use+%27import+CircleLayer+from+%22react-map-gl%22%27+instead%3Fts%282614%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiiwFNb2R1bGUgJyJyZWFjdC1tYXAtZ2wiJyBoYXMgbm8gZXhwb3J0ZWQgbWVtYmVyICdDaXJjbGVMYXllcicuIERpZCB5b3UgbWVhbiB0byB1c2UgJ2ltcG9ydCBDaXJjbGVMYXllciBmcm9tICJyZWFjdC1tYXAtZ2wiJyBpbnN0ZWFkP3RzKDI2MTQpSABQAFgAcAB4AJABAJgBAKABAKoBALgBDMgBAJgCAKACAJgDAJIHAKAHALIHALgHAMIHAMgHAA&sclient=gws-wiz-serp

import React from "react";
// import { Map, Source, Layer } from "react-map-gl";
import Map, { Source, Layer } from "react-map-gl/mapbox";

const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_KEY || "YOUR_MAPBOX_PUBLIC_TOKEN_HERE";

function MyMap() {
  const geojsonData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-74.006, 40.7128],
        },
        properties: {
          name: "New York",
        },
      },
    ],
  };

  const circleLayerStyle = {
    id: "data-circles",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf",
    },
  };

  return (
    <Map mapboxAccessToken={MAPBOX_TOKEN}>
      <Source id="my-data" type="geojson" data={geojsonData}>
        <Layer {...circleLayerStyle} />
      </Source>
    </Map>
  );
}
