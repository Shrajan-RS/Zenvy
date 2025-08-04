import gsap from "gsap";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} alt="" />
    </div>
  );

  useGSAP(() => {
    const card1 = ".animate-card-1";
    const card2 = ".animate-card-2";

    const cardTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom 90% top",
        scrub: true,
      },
    });

    cardTimeLine
      .from(card1, {
        xPercent: 90,
        ease: "expo.inOut",
        backgroundColor: "black",
        zIndex: 99,
        duration: 2,
      })
      .from(card2, {
        xPercent: -100,
        ease: "expo.inOut",
        backgroundColor: "black",
        zIndex: 99,
        duration: 2,
      });
  });

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 animate-card-1">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1 "
          />

          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 animate-card-2">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />

          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[20px] uppercase">join zenvy</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            let`s b<b>u</b>ild the <br /> new er<b>a</b> of <br /> gaming t
            <b>o</b>gether
          </p>

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
