import { getAudio, getVideos } from "@/sanity/sanity-utils";
import Iframe from "react-iframe";
import React from "react";
import { PortableText } from "@portabletext/react";

export default async function Media() {
  const videos = await getVideos();
  const audio = await getAudio();
  return (
    <div className="text-center">
      <h1>Media</h1>
      <h2>Video</h2>
      {videos.map((video) => {
        return (
          <div key={video._id} className="flex flex-col items-center pb-16">
            <h3>{video.name}</h3>
            <Iframe
              url={video.url}
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <div>
              <PortableText value={video.content} />
            </div>
          </div>
        );
      })}

      <h2>Audio</h2>
      {audio.map((audio) => {
        return (
          <div key={audio._id} className="flex flex-col items-center pb-16">
            <h3>{audio.name}</h3>
            <Iframe
              url={audio.url}
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <div>
              <PortableText value={audio.content} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
