import React from "react";
import { useLocation } from "react-router-dom";
import ChannelIInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  console.log(video);
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          title={title}
          id="player"
          type="text/html"
          width="100%"
          height="649"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        />
        <div>
          <h2>{title}</h2>
          <ChannelIInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
