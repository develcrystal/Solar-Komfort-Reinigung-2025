"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import videoThumbnail from "../../public/img/flux/team-bei-der-arbeitwebp.webp";

interface VideoProps {
  videoId: string;
  title?: string;
}

export function Video({ videoId, title }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <Container>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white lg:text-4xl">
          {title}
        </h2>
      )}
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-24 rounded-2xl cursor-pointer shadow-xl border border-gray-100 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.01]">
        {!playVideo && (
          <>
            <Image
              src={videoThumbnail}
              alt="Video Thumbnail"
              fill
              className="object-cover"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20"></div>
            <button
              onClick={() => setPlayVideo(!playVideo)}
              className="absolute inset-auto w-20 h-20 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2 z-10 transition-transform duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 lg:w-28 lg:h-28 drop-shadow-lg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Video abspielen</span>
            </button>
          </>
        )}
        {playVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&autoplay=1`}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
          ></iframe>
        )}
      </div>
    </Container>
  );
}