"use client";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

export default function Viewer360() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/30">
      <ReactPhotoSphereViewer
        src="/experiencia360.jpg"
        height="500px"
        width="100%"
        littlePlanet={false}
      />
    </div>
  );
}