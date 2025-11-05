import React from "react";
import "./Slider.css"; // make sure this path is correct
import TextType from "./TextType";

function Slider() {
  return (
    <section className="slider-section">
      {/* Background */}
      <div className="void-pulse"></div>

      {/* SVG filter (needs to be inside the component DOM tree) */}
      <svg className="texture-filter">
        <filter id="void-texture">
          <feTurbulence
            result="noise"
            numOctaves="3"
            baseFrequency="0.02"
            type="turbulence"
          ></feTurbulence>
          <feGaussianBlur result="blur" stdDeviation="1" in="noise"></feGaussianBlur>
          <feSpecularLighting
            result="specular"
            lightingColor="#34d399"
            specularExponent="20"
            specularConstant="1"
            surfaceScale="3"
            in="blur"
          >
            <feDistantLight elevation="45" azimuth="90"></feDistantLight>
          </feSpecularLighting>
          <feComposite result="lit" operator="over" in2="SourceGraphic" in="specular"></feComposite>
          <feBlend mode="screen" in2="lit" in="SourceGraphic"></feBlend>
        </filter>
      </svg>

      {/* Foreground content */}
      <div className="slider-content">
        <h2 className="text-4xl font-bold text-white">
                    <TextType
            text={["Inspiring the Future Digital Leaders"]}
            typingSpeed={60}
            pauseDuration={2000}
            deletingSpeed={40}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#fff"]}
          />

        </h2>
      </div>
    </section>
  );
}

export default Slider;
