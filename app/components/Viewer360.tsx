"use client";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

export default function Viewer360() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-black/40 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="overflow-hidden rounded-[1.5rem]">
        <ReactPhotoSphereViewer
          src="/experiencia360.jpg"
          height="420px"
          width="100%"
          littlePlanet={false}
        />
      </div>
    </div>
  );
}