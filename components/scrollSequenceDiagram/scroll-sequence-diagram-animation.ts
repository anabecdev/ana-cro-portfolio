import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createScrollSequenceDiagramAnimation(
  container: HTMLDivElement,
) {
  const elements = container.querySelectorAll("[data-step]");

  gsap.set(elements, {
    opacity: 0,
    y: 80,
  });

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
      },
    })
    .to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
    });
}
