import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Navigation } from "../components/Navigation";
import svgPaths from "../../imports/svg-27yptgztxt";
import imgImage1 from "figma:asset/53f95c8acce783dc53eb9750520107c8cc1d9afc.png";
import imgImage2 from "figma:asset/8d2cc5647b285616e4723fb180f7da03e2f609a8.png";
import imgP10009271 from "figma:asset/168e178754a77a78b99c0555c815047d21bedf50.png";
import imgBeetle from "figma:asset/c565958b8547f31cd336f604c257c615ec4fd9f5.png";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [beetleSpinning, setBeetleSpinning] = useState(false);

  return (
    <div className="bg-[#fff9e7] min-h-screen">
      <style>{`
        @keyframes beetle-spin {
          from { transform: rotate(45deg); }
          to   { transform: rotate(405deg); }
        }
      `}</style>
      <Navigation />

      {/* Desktop Layout */}
      <div className="hidden min-[900px]:block">
        <div className="max-w-[1280px] mx-auto relative">
          {/* Hero Section - Cream Background - exactly from Figma */}
          <div className="relative h-screen bg-[#fff9e7] flex flex-col">
            {/* Beetle - top right, shifted down and left, rotated 45° clockwise */}
            <img
              src={imgBeetle}
              alt="Beetle illustration"
              className="absolute select-none w-[220px] cursor-pointer"
              onMouseEnter={() => setBeetleSpinning(true)}
              onAnimationEnd={() => setBeetleSpinning(false)}
              style={{
                top: "80px",
                right: "120px",
                transform: beetleSpinning ? undefined : "rotate(45deg)",
                animation: beetleSpinning ? "beetle-spin 0.6s ease-in-out forwards" : "none",
              }}
            />
            <div className="flex-1 flex items-center justify-center">
              {/* Centered group — 903×465px, internal positions unchanged */}
              <div
                className="relative"
                style={{ width: "903px", height: "465px" }}
              >
                {/* Signature Name - Ahmed Fouad */}
                <div className="absolute left-0 top-0">
                  <div className="flex flex-col w-[619px] h-[465px] justify-center text-[#63535b] font-['Zeyada:Regular',sans-serif] text-[295px] font-normal leading-[193px]">
                    <p className="whitespace-pre-wrap m-[0px]">
                      <span style={{ letterSpacing: "-28px" }}>
                        A
                      </span>
                      <span style={{ letterSpacing: "-10px" }}>
                        h
                      </span>
                      <span style={{ letterSpacing: "-14px" }}>
                        m
                      </span>
                      <span style={{ letterSpacing: "-1px" }}>
                        ed
                      </span>
                      <span>{`       `}</span>
                      <span
                        style={{ letterSpacing: "-33px" }}
                      >{`   F`}</span>
                      <span style={{ letterSpacing: "-26px" }}>
                        o
                      </span>
                      <span style={{ letterSpacing: "-10px" }}>
                        u
                      </span>
                      <span style={{ letterSpacing: "-5px" }}>
                        a
                      </span>
                      <span style={{ letterSpacing: "-4px" }}>
                        d
                      </span>
                    </p>
                  </div>
                </div>

                {/* Subtitle - Product, UI and Brand Design */}
                <div className="absolute left-0 top-[405px]">
                  <p className="w-[386px] h-[42px] font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] text-[32px] leading-[42px] text-justify">
                    Product, UI and Brand Design
                  </p>
                </div>

                {/* Bio Text */}
                <div className="absolute left-[524px] top-[149px]">
                  <div className="w-[379px] h-[277px] flex flex-col justify-center">
                    <p className="text-[24px] leading-[26px] whitespace-pre-wrap m-[0px]">
                      <span
                        className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75]"
                        style={{
                          fontVariationSettings:
                            "'YTLC' 500, 'wdth' 100",
                        }}
                      >{`21 years old, designer, researcher, and takes too many photos. Based between Boston and Cairo, `}</span>
                      <span
                        className="font-['Nunito_Sans:Black',sans-serif] font-black text-[#708b75]"
                        style={{
                          fontVariationSettings:
                            "'YTLC' 500, 'wdth' 100",
                        }}
                      >
                        currently studying Engineering
                        Psychology and Studio Arts at Tufts
                        University.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll for more - fixed at bottom of viewport */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[60px] flex flex-row items-center gap-3 mx-[0px] my-[-41px] cursor-pointer"
              onClick={() => {
                const nav = document.querySelector("[class*='fixed']") as HTMLElement | null;
                const navHeight = nav?.clientHeight ?? 64;
                const el = document.getElementById("projects-desktop");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navHeight, behavior: "smooth" });
              }}
            >
              <p
                className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[#ef6351] text-[20px] leading-[0]"
                style={{
                  fontVariationSettings:
                    "'YTLC' 500, 'wdth' 100",
                }}
              >
                Scroll for more
              </p>
              <div className="h-[17px] w-[20px]">
                <svg
                  className="w-5 h-4"
                  fill="none"
                  viewBox="0 0 20 14"
                >
                  <path
                    d={svgPaths.p386d7e80}
                    stroke="#EF6351"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Green Background Section - Full Width */}
        </div>

        {/* Green section - spans full viewport width */}
        <div className="w-full bg-[#708b75] pb-12">
          <div className="max-w-[1280px] mx-auto px-[100px]">
            {/* Projects Section */}
            <div
              id="projects-desktop"
              className="pt-8 scroll-mt-[52px]"
            >
              <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[48px] leading-[193px] p-[0px] mx-[0px] mt-[-22px] mb-[-52px]">
                Projects
              </h2>

              {/* Projects Grid */}
              <div className="space-y-6">
                {/* Project 1 - Cymatics */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  <Link
                    to="/projects/cymatics-resonance"
                    className="block"
                  >
                    <div className="rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
                      <img
                        alt="Cymatics Resonance"
                        className="w-full h-[235px] object-cover"
                        src={imgImage1}
                      />
                    </div>
                  </Link>
                  <div>
                    <Link
                      to="/projects/cymatics-resonance"
                      className="no-underline"
                    >
                      <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-2 hover:text-[#ef6351] transition-colors cursor-pointer">
                        CYMATICS: RESONANCE
                      </h3>
                    </Link>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Product Design + Human Factors
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A real-time visualizer that responds to
                      live music with evolving cymatic imagery.
                      Built to make concerts more immersive and
                      inclusive through thoughtful, sound-driven
                      design.
                    </p>
                  </div>
                </div>

                {/* Project 2 - Orbit */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  <div>
                    <Link
                      to="/projects/orbit-lighting"
                      className="no-underline"
                    >
                      <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2 hover:text-[#ef6351] transition-colors cursor-pointer">
                        ORBIT: LIGHTING REIMAGINED
                      </h3>
                    </Link>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Industrial Design
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A dual-mode lamp that shifts seamlessly
                      from focused task lighting to ambient
                      glow. Built to bring calm, comfort, and
                      control to compact living through
                      intuitive, analog design.
                    </p>
                  </div>
                  <Link
                    to="/projects/orbit-lighting"
                    className="block"
                  >
                    <div className="rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
                      <img
                        alt="Orbit Lighting"
                        className="w-full h-[235px] object-cover"
                        src={imgImage2}
                      />
                    </div>
                  </Link>
                </div>

                {/* Project 3 - Cymatics */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  <Link
                    to="/projects/cymatics-resonance"
                    className="block"
                  >
                    <div className="rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
                      <img
                        alt="Cymatics Resonance"
                        className="w-full h-[235px] object-cover"
                        src={imgImage1}
                      />
                    </div>
                  </Link>
                  <div>
                    <Link
                      to="/projects/cymatics-resonance"
                      className="no-underline"
                    >
                      <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-2 hover:text-[#ef6351] transition-colors cursor-pointer">
                        CYMATICS: RESONANCE
                      </h3>
                    </Link>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Product Design + Human Factors
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A real-time visualizer that responds to
                      live music with evolving cymatic imagery.
                      Built to make concerts more immersive and
                      inclusive through thoughtful, sound-driven
                      design.
                    </p>
                  </div>
                </div>

                {/* Project 4 - Orbit */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  <div>
                    <Link
                      to="/projects/orbit-lighting"
                      className="no-underline"
                    >
                      <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2 hover:text-[#ef6351] transition-colors cursor-pointer">
                        ORBIT: LIGHTING REIMAGINED
                      </h3>
                    </Link>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Industrial Design
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A dual-mode lamp that shifts seamlessly
                      from focused task lighting to ambient
                      glow. Built to bring calm, comfort, and
                      control to compact living through
                      intuitive, analog design.
                    </p>
                  </div>
                  <Link
                    to="/projects/orbit-lighting"
                    className="block"
                  >
                    <div className="rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
                      <img
                        alt="Orbit Lighting"
                        className="w-full h-[235px] object-cover"
                        src={imgImage2}
                      />
                    </div>
                  </Link>
                </div>

                {/* Project 5 - Cymatics */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  <Link
                    to="/projects/cymatics-resonance"
                    className="block"
                  >
                    <div className="rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
                      <img
                        alt="Cymatics Resonance"
                        className="w-full h-[235px] object-cover"
                        src={imgImage1}
                      />
                    </div>
                  </Link>
                  <div>
                    <Link
                      to="/projects/cymatics-resonance"
                      className="no-underline"
                    >
                      <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-2 hover:text-[#ef6351] transition-colors cursor-pointer">
                        CYMATICS: RESONANCE
                      </h3>
                    </Link>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Product Design + Human Factors
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A real-time visualizer that responds to
                      live music with evolving cymatic imagery.
                      Built to make concerts more immersive and
                      inclusive through thoughtful, sound-driven
                      design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Section */}
            <div
              id="studio-desktop"
              className="pt-14 scroll-mt-[52px]"
            >
              <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[48px] leading-[193px] mx-[0px] mt-[0px] mb-[-52px] px-[0px] py-[1px]">
                Studio
              </h2>

              {/* Masonry-style grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-2 rounded-[25px] overflow-hidden">
                  <img
                    alt="Studio work"
                    className="w-full h-[420px] object-cover"
                    src={imgP10009271}
                  />
                </div>
                <div className="rounded-[25px] overflow-hidden">
                  <img
                    alt="Studio work"
                    className="w-full h-[420px] object-cover"
                    src={imgP10009271}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="rounded-[25px] overflow-hidden">
                  <img
                    alt="Studio work"
                    className="w-full h-[350px] object-cover"
                    src={imgP10009271}
                  />
                </div>
                <div className="col-span-2 rounded-[25px] overflow-hidden">
                  <img
                    alt="Studio work"
                    className="w-full h-[350px] object-cover"
                    src={imgP10009271}
                  />
                </div>
              </div>
              <div className="rounded-[25px] overflow-hidden">
                <img
                  alt="Studio work"
                  className="w-full h-[400px] object-cover"
                  src={imgP10009271}
                />
              </div>
            </div>

            {/* Footer - Three Column Layout - Closer to bottom */}
            <div className="pt-16 pb-8">
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Left - Reach Out */}
                <div>
                  <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-3">
                    Reach Out
                  </h3>
                  <p
                    className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#fff9e7] text-[18px] leading-[32px]"
                    style={{
                      fontVariationSettings:
                        "'YTLC' 500, 'wdth' 100",
                    }}
                  >
                    <a
                      href="mailto:aahmedhfouad@gmail.com"
                      className="text-[#fff9e7] hover:text-[#ef6351] transition-colors no-underline"
                    >
                      aahmedhfouad@gmail.com
                    </a>
                  </p>
                </div>

                {/* Center - Back to Top */}
                <div className="flex justify-center">
                  <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <svg
                      className="w-[150px] h-[20px]"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 150.248 20.6"
                    >
                      <g>
                        <path
                          d={svgPaths.p1fa80e00}
                          fill="#FFF9E7"
                        />
                        <g>
                          <path
                            d={svgPaths.pdf16b80}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p29503900}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p2b24fc80}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p1100c400}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p18501dc0}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p7c7d200}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p16f48b00}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p30892b00}
                            fill="#FFF9E7"
                          />
                          <path
                            d={svgPaths.p105e0ca0}
                            fill="#FFF9E7"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

                {/* Right - Resume */}
                <div className="flex justify-end">
                  <a
                    href="https://drive.google.com/file/d/1shFSLlFBIGklTexaEEGoA9ZoKNTLbcPO/view?usp=sharing"
                    target="_blank"
                    className="inline-block px-6 py-1.5 rounded-[15px] text-[#ef6351] font-['Dosis:Bold',sans-serif] font-bold text-[19px] no-underline hover:opacity-80 transition-colors"
                    style={{ backgroundColor: "#fff9e7" }}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="min-[900px]:hidden pt-16 px-6 pb-8">
        {/* Hero */}
        <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center">
          <p
            className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] mx-[0px] mt-[0px] mb-[40px]"
            style={{ fontSize: "20px" }}
          >
            Product, UI and Brand Design
          </p>
          <h1
            className="font-['Zeyada:Regular',sans-serif] text-[#63535b] mx-[0px] mt-[0px] mb-[5px]"
            style={{ fontSize: "128px", lineHeight: 0.85 }}
          >
            Ahmed Fouad
          </h1>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] max-w-[520px]"
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
              lineHeight: 1.65,
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            21 years old, designer, researcher, and takes too
            many photos. Based between Boston and Cairo,{" "}
            <span
              className="font-['Nunito_Sans:Black',sans-serif] font-black"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              currently studying Engineering Psychology and
              Studio Arts at Tufts University.
            </span>
          </p>

          {/* Scroll for more - anchored to bottom of hero */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              const nav = document.querySelector("[class*='fixed']") as HTMLElement | null;
              const navHeight = nav?.clientHeight ?? 64;
              const el = document.getElementById("projects-mobile");
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navHeight, behavior: "smooth" });
            }}
          >
            <p
              className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[#ef6351]"
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              Scroll for more
            </p>
            <svg
              className="w-5 h-4"
              fill="none"
              viewBox="0 0 20 14"
            >
              <path
                d={svgPaths.p386d7e80}
                stroke="#EF6351"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        {/* Projects Section Mobile */}
        <div
          id="projects-mobile"
          className="bg-[#708b75] -mx-6 px-6 py-12 mb-0 scroll-mt-[52px]"
        >
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-5xl mb-5">
            Projects
          </h2>

          <Link
            to="/projects/cymatics-resonance"
            className="block mb-12 no-underline"
          >
            <div className="rounded-[25px] overflow-hidden mb-4">
              <img
                src={imgImage1}
                alt="Cymatics Resonance"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-2xl mb-2">
              CYMATICS: RESONANCE
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-sm mb-3">
              2025 || Product Design + Human Factors
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A real-time visualizer that responds to live music
              with evolving cymatic imagery. Built to make
              concerts more immersive and inclusive through
              thoughtful, sound-driven design.
            </p>
          </Link>

          <Link
            to="/projects/orbit-lighting"
            className="block mb-12 no-underline"
          >
            <div className="rounded-[25px] overflow-hidden mb-4">
              <img
                src={imgImage2}
                alt="Orbit Lighting"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-2xl mb-2">
              ORBIT: LIGHTING REIMAGINED
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-sm mb-3">
              2025 || Industrial Design
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A dual-mode lamp that shifts seamlessly from
              focused task lighting to ambient glow. Built to
              bring calm, comfort, and control to compact living
              through intuitive, analog design.
            </p>
          </Link>

          <Link
            to="/projects/cymatics-resonance"
            className="block mb-12 no-underline"
          >
            <div className="rounded-[25px] overflow-hidden mb-4">
              <img
                src={imgImage1}
                alt="Cymatics Resonance"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-2xl mb-2">
              CYMATICS: RESONANCE
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-sm mb-3">
              2025 || Product Design + Human Factors
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A real-time visualizer that responds to live music
              with evolving cymatic imagery. Built to make
              concerts more immersive and inclusive through
              thoughtful, sound-driven design.
            </p>
          </Link>

          <Link
            to="/projects/orbit-lighting"
            className="block mb-12 no-underline"
          >
            <div className="rounded-[25px] overflow-hidden mb-4">
              <img
                src={imgImage2}
                alt="Orbit Lighting"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-2xl mb-2">
              ORBIT: LIGHTING REIMAGINED
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-sm mb-3">
              2025 || Industrial Design
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A dual-mode lamp that shifts seamlessly from
              focused task lighting to ambient glow. Built to
              bring calm, comfort, and control to compact living
              through intuitive, analog design.
            </p>
          </Link>

          <Link
            to="/projects/cymatics-resonance"
            className="block no-underline"
          >
            <div className="rounded-[25px] overflow-hidden mb-4">
              <img
                src={imgImage1}
                alt="Cymatics Resonance"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-2xl mb-2">
              CYMATICS: RESONANCE
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-sm mb-3">
              2025 || Product Design + Human Factors
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A real-time visualizer that responds to live music
              with evolving cymatic imagery. Built to make
              concerts more immersive and inclusive through
              thoughtful, sound-driven design.
            </p>
          </Link>
        </div>

        {/* Studio Section Mobile */}
        <div
          id="studio-mobile"
          className="bg-[#708b75] -mx-6 px-6 py-12 scroll-mt-[52px]"
        >
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-5xl mb-5">
            Studio
          </h2>

          <div className="space-y-4">
            <div className="rounded-[25px] overflow-hidden">
              <img
                src={imgP10009271}
                alt="Studio work"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-[25px] overflow-hidden">
              <img
                src={imgP10009271}
                alt="Studio work"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-[25px] overflow-hidden">
              <img
                src={imgP10009271}
                alt="Studio work"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-[25px] overflow-hidden">
              <img
                src={imgP10009271}
                alt="Studio work"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-[25px] overflow-hidden">
              <img
                src={imgP10009271}
                alt="Studio work"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer Mobile */}
        <div className="bg-[#708b75] -mx-6 px-6 py-8">
          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
            REACH OUT!
          </h3>
          <p
            className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#fff9e7] text-lg mb-6"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <a
              href="mailto:aahmedhfouad@gmail.com"
              className="text-[#fff9e7] hover:text-[#ef6351] transition-colors no-underline"
            >
              aahmedhfouad@gmail.com
            </a>
          </p>
          <a
            href="https://drive.google.com/file/d/1shFSLlFBIGklTexaEEGoA9ZoKNTLbcPO/view?usp=sharing"
            target="_blank"
            className="inline-block bg-[#ef6351] px-8 py-3 rounded-[15px] text-[#fff9e7] font-['Inter:Regular',sans-serif] no-underline"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}