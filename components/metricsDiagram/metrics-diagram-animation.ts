import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createMetricsDiagramAnimation(
  section: HTMLDivElement,
  track: HTMLDivElement,
) {
  const distance = track.scrollWidth - window.innerWidth;

  const horizontalTween = gsap.to(track, {
    x: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 10%",
      end: `+=${distance}`,
      pin: true,
      scrub: true,
    },
  });

  const cards = gsap.utils.toArray<HTMLElement>(".metric-card");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0.2,
        scale: 0.85,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalTween,
          start: "left center",
          end: "center center",
          scrub: true,
        },
      },
    );
  });
}
