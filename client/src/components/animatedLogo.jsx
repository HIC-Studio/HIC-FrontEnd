import { useEffect, useRef } from "react";
import { LOGOGRAM_PATH, LOGOTYPE_PATH } from "../assets/logoHIC.jsx";

export default function AnimatedLogo() {
  const svgRef = useRef(null);

  useEffect(() => {
    let animation;
    let cancelled = false;

    import(/* @vite-ignore */ "https://cdn.jsdelivr.net/npm/animejs/+esm")
      .then(({ animate, createDrawable, stagger }) => {
        if (cancelled || !svgRef.current) return;

        const paths = svgRef.current.querySelectorAll("path");
        const drawables = createDrawable(paths);

        animation = animate(drawables, {
          draw: ["0 0", "0 1", "1 1"],
          ease: "inOutSine", // más suave que inOutQuad
          duration: 8000, // 10 segundos
          delay: stagger(80), // más separación entre trazos
          loop: true,
        });
      })
      .catch((err) => console.error("Failed to load anime.js:", err));

    return () => {
      cancelled = true;
      if (animation && typeof animation.pause === "function") animation.pause();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 110.88999938964844 42"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "70%", height: "70%", overflow: "visible" }}
    >
      <g transform="translate(0, 0.5) rotate(0 20 20.5)">
        <path
          d={LOGOGRAM_PATH}
          clipRule="evenodd"
          fillRule="evenodd"
          style={{
            fill: "transparent",
            stroke: "#7C5CBF",
            strokeWidth: 0.3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            vectorEffect: "non-scaling-stroke",
          }}
        />
      </g>
      <g transform="translate(46, 7.737500000000001)">
        <path
          d={LOGOTYPE_PATH}
          style={{
            fill: "transparent",
            stroke: "#7C5CBF",
            strokeWidth: 0.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            vectorEffect: "non-scaling-stroke",
          }}
        />
      </g>
    </svg>
  );
}
