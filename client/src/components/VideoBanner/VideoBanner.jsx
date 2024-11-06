import React from "react";

const VideoBanner = () => {
  return (
    <div className="bg-slate-600">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8">
          {/* video section */}
          <div>
            <iframe
              src="https://www.youtube.com/embed/CiFoHm7HD94?si=rM0xQRYkRkCwKScj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video w-full"
            ></iframe>
          </div>
          {/* text section */}
          <div className="space-y-4 text-center md:text-left text-white ">
            <h1 className="text-4xl font-bold">Watch Our Video</h1>
            <p>
            Unity Fund is a community of like minded people who are ready to help you maximise your charitable impact.
            We can help you find the most pressing problems and then identify the most impactful charities working to solve them.
            We provide the support, community, and information you need at every stage of your giving journey, whether you’re just getting started, or want to make effective giving a meaningful part of your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
