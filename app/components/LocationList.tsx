// app/components/LocationList.tsx

import React from "react";
// CHQ: Gemini AI included type import
// 1. Import the primary generated type alongside the hook.
import { useGetLocationsQuery, GetLocationsQuery } from "../generated/graphql";

// CHQ: Gemini AI included helper type definition
// 2. Define a helper type for a single location item.
// This extracts the type of an element within the 'locations' array on the 'data' object.
type LocationItem = NonNullable<GetLocationsQuery["locations"]>[number];

const LocationList = () => {
  const { loading, error, data } = useGetLocationsQuery();

  // CHQ: Gemini AI changed below to use <div> for better HTML structure compatibility
  if (loading) return <div>Loading Locations...</div>;
  if (error) return <div>Error loading locations: {error.message}</div>;

  return (
    <ul>
      {/* CHQ: Gemini AI fixed below */}
      {/* 3. FIX: Explicitly type 'location' using the helper type LocationItem */}
      {/* We use 'data?.locations' and NonNullable above to safely handle potential null/undefined values. */}
      {data?.locations?.map((location: LocationItem) => (
        <li key={location.id}>{location.name}</li>
      ))}
    </ul>
  );
};

export default LocationList;
