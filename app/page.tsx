"use client";
import { useState } from "react"; // 1. Import useState hook
import "./pagestyle.css";

import { MyMapComponent } from "./TestMaps/MyMapbox";
import { MyMapboxPopup } from "./TestMaps/MyMapboxPopup";
import { MyMapboxGeofence } from "./TestMaps/MyMapboxGeofence";
import { MyMapboxPopupWithLayers } from "./TestMaps/MyMapboxPopupWithLayers";
import { MyMapboxDynamicLayer } from "./TestMaps/MyMapboxPopupDynamicLayers";

// CHQ: Gemini AI added Helper component for the sidebar to demonstrate interaction
const SidebarControls = ({ currentMap, setMapType }) => {
  return (
    <>
      <h2>🗺️ Map Controls</h2>
      <p>Currently showing: **{currentMap}**</p>
      <button
        onClick={() => setMapType("Popup")}
        disabled={currentMap === "Popup"}
        style={{
          margin: "5px",
          padding: "10px",
          display: "block",
          width: "90%",
        }}
      >
        Show Popup Map
      </button>
      <button
        onClick={() => setMapType("PopupWithLayers")}
        disabled={currentMap === "PopupWithLayers"}
        style={{
          margin: "5px",
          padding: "10px",
          display: "block",
          width: "90%",
        }}
      >
        Show PopupWithLayers Map
      </button>
      <button
        onClick={() => setMapType("PopupWithDyanmicLayers")}
        disabled={currentMap === "PopupWithDyanmicLayers"}
        style={{
          margin: "5px",
          padding: "10px",
          display: "block",
          width: "90%",
        }}
      >
        Show PopupWithDyanmicLayers Map
      </button>
      <button
        onClick={() => setMapType("Geofence")}
        disabled={currentMap === "Geofence"}
        style={{
          margin: "5px",
          padding: "10px",
          display: "block",
          width: "90%",
        }}
      >
        Show Geofence Map
      </button>
      <button
        onClick={() => setMapType("Basic")}
        disabled={currentMap === "Basic"}
        style={{
          margin: "5px",
          padding: "10px",
          display: "block",
          width: "90%",
        }}
      >
        Show Basic Map
      </button>
    </>
  );
};

const MyApp = function () {
  // CHQ: Gemini added state to manage which map component is rendered
  const [mapType, setMapType] = useState("Popup");

  // CHQ: Gemini AI added Function to conditionally render the correct map component
  const renderMap = () => {
    switch (mapType) {
      case "Popup":
        return <MyMapboxPopup />;
      case "Geofence":
        return <MyMapboxGeofence />;
      case "Basic":
        return <MyMapComponent />;
      case "PopupWithLayers":
        return <MyMapboxPopupWithLayers />;
      case "PopupWithDyanmicLayers":
        return <MyMapboxPopupWithLayers />;
      default:
        return <p>Select a map type from the sidebar.</p>;
    }
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Hello, Next.js! ({mapType} View)</h1>
        </div>
        <div className="container">
          <div className="sidebar">
            {/* Pass state and state setter to the sidebar component */}
            <SidebarControls currentMap={mapType} setMapType={setMapType} />
          </div>

          <div className="content">
            <h2>Main Content: Map Integration</h2>
            {/* 4. Use the renderMap function to display the correct layer */}
            {renderMap()}
          </div>
        </div>
        <div className="footer">
          <h3>The footer is here!</h3>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <>
      <MyApp />
    </>
  );
}
