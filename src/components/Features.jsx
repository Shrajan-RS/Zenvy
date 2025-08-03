import { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, height, width } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  const BentoCard = ({ src, title, description, isComingSoon }) => {
    return (
      <div className="relative size-full ">
        <video
          src={src}
          loop
          autoPlay
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex size-full flex-col gap-2 p-5 text-blue-50 justify-between">
          <div>
            <h1 className="bento-title special-font tracking-widest ">
              {title}
            </h1>
            {description && (
              <p className="mt-0 max-w-64 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>

          {isComingSoon && (
            <div className=" bg-gray-200 flex items-center px-3 py-2 w-32 rounded-2xl border border-gray-700">
              <p className="flex gap-3 font-circular-web uppercase tracking-tight text-[10px] text-black ">
                <img
                  src="/img/play.svg"
                  alt="play-icon"
                  className="w-[0.8vw]"
                />
                Coming Soon
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="py-6  ">
          <p className="font-circular-web text-blue-50 text-lg capitalize mt-12 ">
            into the metagame layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 capitalize mt-4">
            immerse yourself in a rich and ever-expanding universe where a
            vibrant array of the product coverage into the interconnected
            overlay experience on your world.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] mt-20  ">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="The game of games app transforming moments across Web2 & Web3 titles into rewards Coming SoonComing Soon"
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="The NFT collection merging Zentry’s IP, AI, and
                  gaming—pushing the boundaries of NFT innovation"
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="The metagame portal uniting humans & AI to play, compete and earn,
shaping profiles that reflect their legacy."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1   me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic AI
                  experience to be more fun and productive."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 uppercase">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re Co<b>m</b>ing S<b>o</b>on.
              </h1>
              <img
                src="/img/logo.png"
                alt="play-icon"
                className="mt-5 size-[6vw] self-end rotate-[-20deg]"
              />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 ">
            <video
              src="videos/feature-5.mp4"
              className="size-full object-cover object-center"
              muted
              loop
              autoPlay
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
