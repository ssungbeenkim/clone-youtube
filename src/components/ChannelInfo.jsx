import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="my-4 mb-8 flex items-center">
      {url && <img className="h-10 w-10 rounded-full" src={url} alt={name} />}
      <p className="ml-2 text-lg font-medium">{name}</p>
    </div>
  );
}
