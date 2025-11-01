"use client";
import React from "react";
// 1. Import the standard useQuery hook from Apollo Client
// This import is standard and should resolve if the package is correctly installed (which it is).
// import { useQuery } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

// 2. FIX: Import the Typed Document Node (TDO) and the Result Type from the generated directory.
// The client-preset usually generates an 'index' file (or similar entry)
// or the module resolution requires a specific file path, like 'index' or 'graphql'.
// Since we used "./app/generated/" in codegen.ts, a relative import path
// that leads to the main generated file (often named 'graphql' or 'index') should be used.
// We will try importing from the index file directly.
import { GetLocationsQuery, GetLocationsDocument } from "../generated/graphql";

// Define a helper type for a single location item.
type LocationItem = NonNullable<GetLocationsQuery["locations"]>[number];

const LocationList = () => {
  // 3. CORRECT USAGE: Pass the TDO (GetLocationsDocument) to the standard Apollo useQuery hook.
  // The types (data, loading, error) are automatically inferred correctly.
  const { loading, error, data } =
    useQuery<GetLocationsQuery>(GetLocationsDocument);

  // Handle Loading and Error states using appropriate UI elements
  if (loading)
    return (
      <div className="p-4 text-center text-indigo-600 font-medium">
        Loading property data...
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-center text-red-600 font-medium border border-red-300 bg-red-50 rounded-lg">
        Error loading locations: {error.message}
      </div>
    );

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl max-w-xl mx-auto my-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
        Available Properties ({data?.locations?.length || 0})
      </h2>
      <ul className="space-y-3">
        {/* Iterate over the locations, checking for nullability */}
        {data?.locations?.map((location: LocationItem) => (
          // Use location.id for the key as it is expected to be unique and stable
          <li
            key={location.id}
            className="p-3 border border-gray-100 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors duration-200"
          >
            <span className="font-semibold text-indigo-700">
              {location.name}
            </span>
          </li>
        ))}
      </ul>
      {(!data?.locations || data.locations.length === 0) && (
        <div className="text-center text-gray-500 py-4">
          No properties found.
        </div>
      )}
    </div>
  );
};

export default LocationList;
