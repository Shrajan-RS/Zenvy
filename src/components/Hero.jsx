import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const totalVideos = 4;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const nextVideoRef = useRef(null);
  const nextVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setCurrentIndex(nextVideoIndex);
  };

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", {
          visibility: "visible",
        });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    const heroTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "center center",
        end: "bottom center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.set("#video-frame", {
      clipPath: " polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    });

    heroTimeLine.to("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0, 90% 90%, 0% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <div
      id="home"
      className="relative h-dvh w-screen overflow-x-hidden"
    >
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100 "
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(nextVideoIndex)}
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>

          <video
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 tracking-wide">
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 z-40 top-0 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 tracking-wide">
              redifi<b>n</b>e{" "}
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 capitalize">
              enter the meta game layer <br /> unleash the play economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch-Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black tracking-wide">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
