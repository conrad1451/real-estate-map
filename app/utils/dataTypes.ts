export interface GeoJsonFeatureCollection {
  type: "FeatureCollection";
  features: Array<any>; // Use a more specific type if possible
}

export interface MyMapboxDynamicLayerProps {
  dynamicGeoJson: GeoJsonFeatureCollection;
}
