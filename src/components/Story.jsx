import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const { left, top, width, height } = element.getBoundingClientRect();
    const [x, y] = [clientX - left, clientY - top];
    const [centerX, centerY] = [width / 2, height / 2];

    const [rotateX, rotateY] = [
      ((y - centerY) / centerY) * -10,
      ((x - centerX) / centerX) * 10,
    ];

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  useGSAP(() => {
    const textSplit = SplitText.create(".text-animation", {
      type: "words",
    });

    const animationTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#story",
        start: "top 90% top",
        end: "top center",
        scrub: true,
      },
    });

    animationTimeLine
      .from(textSplit.words, {
        yPercent: 100,
        xPercent: 100,
        duration: 1,
        stagger: 0.2,
        ease: "expo.inOut",
        opacity: 0,
      })
      .from(".story-img-container", {
        yPercent: 200,
        xPercent: 200,
        duration: 1,
        ease: "expo.inOut",
        opacity: 0,
      });
  });

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50 ">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[16px] text-animation">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <p className="mt-5 pointer-events-none mix-blend-difference relative z-10 uppercase text-center special-font font-zentry font-black md:text-[4rem] leading-[0.9] tracking-wider text-animation">
            the st<b>o</b>ry of <br /> a hidden real<b>m</b>
          </p>{" "}
          <div className="story-img-container ">
            <div className="story-img-mask ">
              <div className="story-img-content ">
                <img
                  src="/img/entrance.webp"
                  alt="entrance-img"
                  className="object-contain"
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start capitalize">
              where realm coverage, lies zenvy and the boundless pillars.
              discover it`s secret and shape your fate amidst infinite
              opportunity.
            </p>

            <Button
              id="realm-button"
              title="discover world"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
