"use client";

import WorkMarquee from "./WorkMarquee";

const ROW_1 = [
  { src: "https://framerusercontent.com/images/0DzYDI0BJ4hmv3ZFOEoKCHNRads.png" },
  { src: "https://framerusercontent.com/images/UR1d2u9WH5HccJP03bKTSY1FDQ.png" },
  { src: "https://framerusercontent.com/images/IHfks8oJ30AQUhgh03QgUwHIA.png" },
  { src: "https://framerusercontent.com/images/M2aqRkcDBti4UtcNvjmYLwZUOfo.png" },
];

const ROW_2 = [
  { src: "https://framerusercontent.com/images/jyNE2GeNnp9aMJcnE6tpf72YE.png" },
  { src: "https://framerusercontent.com/images/3HdSKdJID82cm18YIfU2F5to.jpg" },
  { src: "https://framerusercontent.com/images/aCNiceGIrEoe5X35haWm4Ar1uo.jpg" },
  { src: "https://framerusercontent.com/images/v6Mszk3RrZhyQSqyf901fkxHDRg.jpg" },
];

const ROW_3 = [
  { src: "https://framerusercontent.com/images/crpV6RKC6FWLT71lCtgSSST0.png" },
  { src: "https://framerusercontent.com/images/JpaqrzL88okqjP21h9uM2ruGJ4A.png" },
  { src: "https://framerusercontent.com/images/XyWulADII4hpinSHIR6UhpNubbo.jpg" },
  { src: "https://framerusercontent.com/images/k2CV27IWDWGxHRdsQZnVNllkPW0.png" },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative w-full space-y-12 py-24 bg-black"
    >
      <div
        className="space-y-8"
        style={{
          transform: "perspective(1200px) skewX(4deg) skewY(4deg)",
        }}
      >
        <WorkMarquee items={ROW_1} speed={45} mask="soft" />
        <WorkMarquee items={ROW_2} speed={60} reverse />
        <WorkMarquee items={ROW_3} speed={50} mask="soft" />
      </div>
    </section>
  );
}
