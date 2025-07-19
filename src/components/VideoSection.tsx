import React from "react";

const videoFiles = [
  "showcase1.mp4",
  "showcase2.mp4",
  "showcase3.mp4",
  "showcase4.mp4",
  "showcase5.mp4",
  "showcase6.mp4",
  "showcase7.mp4",
  "showcase8.mp4",
  "showcase9.mp4",
  "showcase10.mp4",
  "showcase11.mp4",
  "showcase12.mp4",
  "showcase13.mp4",
  "showcase14.mp4",
    // add more video file names here
];

const VideoSection = () => {
  return (
    <section className="w-full bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">
          Our Project Videos
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videoFiles.map((file, index) => (
            <video
              key={index}
              controls
              muted
              autoPlay
              playsInline
              loop
              className="w-full h-auto rounded-xl shadow-lg"
            >
              <source src={`/videos/${file}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
