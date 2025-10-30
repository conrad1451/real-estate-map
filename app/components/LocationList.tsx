// app/components/LocationList.tsx

import React from "react";
import { useGetLocationsQuery } from "../generated/graphql";

const LocationList = () => {
  const { loading, error, data } = useGetLocationsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.locations.map((location) => (
        // The `location` object is now fully typed!
        <li key={location.id}>
          {location.name} - {location.air_date}
        </li>
      ))}
    </ul>
  );
};
