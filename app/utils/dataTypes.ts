import type { SetStateAction } from "react";
export interface GeoJsonFeatureCollection {
  type: "FeatureCollection";
  features: Array<any>; // Use a more specific type if possible
}

export interface MyMapboxDynamicLayerProps {
  dynamicGeoJson: GeoJsonFeatureCollection;
}

// CHQ: create new interface for sidebar controls
export interface SidebarControlsProps {
  currentMap: string;
  // setMapType is a state setter function for a string state
  setMapType: React.Dispatch<SetStateAction<string>>;
}
