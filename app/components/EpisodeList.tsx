// app/components/EpisodeList.tsx

import React from "react";
import { useGetEpisodesQuery } from "../generated/graphql";

const EpisodeList = () => {
  const { loading, error, data } = useGetEpisodesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.episodes.map((episode) => (
        // The `episode` object is now fully typed!
        <li key={episode.id}>
          {episode.name} - {episode.air_date}
        </li>
      ))}
    </ul>
  );
};
