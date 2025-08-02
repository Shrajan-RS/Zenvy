import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const paraSplit = SplitText.create(".para-split", {
      type: "words",
    });

    const paraTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 20% top",
        scrub: true,
      },
    });

    paraTimeLine.from(paraSplit.words, {
      opacity: 0,
      yPercent: 100,
      xPercent: 100,
      stagger: 0.2,
      ease: "power1.inOut",
      duration: 1,
      rotateX: "30deg",
    });

    const clipTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipTimeLine.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm md:text-[20px] uppercase para-split">
          welcome to zenvy
        </h2>
        <div className="mt-5 text-4xl uppercase text-center md:text-[5.5rem] para-split special-font font-zentry font-black tracking-wide leading-[80px]">
          disc<b>o</b>ver the world`s <br />l<b>a</b>rgest shared adventure
        </div>
        <div className="about-subtext">
          <p className="capitalize ">
            the game of the games begins-your life, now an epic MMORPG
          </p>
          <p className="capitalize ">
            Zenvy unites every player from countless games and platforms{" "}
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
