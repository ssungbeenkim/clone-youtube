import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
// import FakeYoutube from "../api/fakeYoutube";
// import Youtube from "../api/youtube";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <>
      <div>Videos {keyword ? `🔎${keyword}` : `🔥`}</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
