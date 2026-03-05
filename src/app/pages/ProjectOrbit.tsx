import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';
import imgImage2 from "figma:asset/8d2cc5647b285616e4723fb180f7da03e2f609a8.png";

export default function ProjectOrbit() {
  return (
    <div className="bg-[#fff9e7] relative w-full min-h-screen overflow-x-hidden">
      {/* Desktop Layout */}
      <div className="hidden min-[900px]:block relative w-[1280px] min-h-screen mx-auto">
        <div className="absolute bg-[#708b75] min-h-[3000px] left-0 top-[100px] w-[1280px]" />
        
        <Navigation />

        <div className="relative pt-[120px] px-[183px]">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] mb-[40px] hover:text-[#ef6351] transition-colors no-underline"
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[64px] leading-[70px] mb-[20px]">
            ORBIT: LIGHTING REIMAGINED
          </h1>
          
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[24px] leading-[32px] mb-[60px]">
            2025 || Industrial Design
          </p>

          {/* Hero Image */}
          <div className="w-full h-[500px] rounded-[25px] overflow-hidden mb-[60px]">
            <img 
              src={imgImage2} 
              alt="Orbit: Lighting Reimagined" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="mb-[80px]">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-[30px]">
              Project Overview
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[22px] leading-[38px] max-w-[900px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p className="mb-[25px]">
                Orbit is a dual-mode lamp that seamlessly transitions between focused task lighting and ambient glow. Designed specifically for compact living spaces, it brings together functionality and comfort through intuitive, analog controls.
              </p>
              <p className="mb-[25px]">
                The design philosophy centers on creating a lighting solution that adapts to different needs throughout the day—from concentrated work sessions to relaxed evening moments—all while maintaining a minimal footprint and elegant aesthetic.
              </p>
              <p>
                Through careful consideration of user needs and spatial constraints, Orbit delivers a thoughtful balance of form and function, proving that smart design doesn't always require digital interfaces.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-[80px]">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-[30px]">
              Key Features
            </h2>
            <div className="grid grid-cols-2 gap-[40px]">
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Dual-Mode Lighting
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Switches effortlessly between focused task lighting for work and soft ambient glow for relaxation.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Analog Control
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Intuitive physical controls provide immediate, tactile feedback without digital complexity.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Compact Design
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Optimized for small living spaces without sacrificing functionality or aesthetic appeal.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Mindful Illumination
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Designed to support both productivity and wellbeing through carefully calibrated light quality.
                </p>
              </div>
            </div>
          </div>

          {/* Process Images */}
          <div className="mb-[80px]">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-[30px]">
              Design Process
            </h2>
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="h-[350px] rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage2} 
                  alt="Design Process 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[350px] rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage2} 
                  alt="Design Process 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="mb-[80px]">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-[30px]">
              Design Philosophy
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[22px] leading-[38px] max-w-[900px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p className="mb-[25px]">
                In an age of smart homes and connected devices, Orbit takes a deliberately analog approach. The design recognizes that sometimes the best interface is no interface at all—just simple, intuitive physical controls that work exactly as expected.
              </p>
              <p>
                The lamp's form follows function, with every element serving a purpose. The result is a product that feels both timeless and contemporary, bringing calm and control to modern living spaces.
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-[100px]">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-[30px]">
              Impact & Outcomes
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[22px] leading-[38px] max-w-[900px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p className="mb-[25px]">
                Orbit demonstrates how thoughtful industrial design can address real user needs in compact living situations. By focusing on essential functions and eliminating unnecessary complexity, the lamp provides exactly what users need, when they need it.
              </p>
              <p>
                The project showcases the value of human-centered design in creating products that enhance daily life through simplicity, beauty, and genuine utility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="min-[900px]:hidden px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <svg className="w-16 h-12" fill="none" preserveAspectRatio="none" viewBox="0 0 84.2188 60.6562">
              <g id="AF">
                <path d="M0 0L84.2188 0L84.2188 60.6562L0 60.6562L0 0Z" fill="var(--fill-0, #63535B)" />
              </g>
            </svg>
          </Link>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-base mb-8 hover:text-[#ef6351] transition-colors no-underline"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          <ArrowLeft size={20} />
          Back Home
        </Link>

        <div className="bg-[#708b75] -mx-6 px-6 py-8">
          <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-4xl leading-tight mb-3">
            ORBIT: LIGHTING REIMAGINED
          </h1>
          
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-lg mb-8">
            2025 || Industrial Design
          </p>

          <div className="w-full rounded-[25px] overflow-hidden mb-8">
            <img 
              src={imgImage2} 
              alt="Orbit: Lighting Reimagined" 
              className="w-full h-auto"
            />
          </div>

          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Project Overview
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-7 space-y-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p>
                Orbit is a dual-mode lamp that seamlessly transitions between focused task lighting and ambient glow. Designed specifically for compact living spaces, it brings together functionality and comfort through intuitive, analog controls.
              </p>
              <p>
                The design philosophy centers on creating a lighting solution that adapts to different needs throughout the day—from concentrated work sessions to relaxed evening moments—all while maintaining a minimal footprint and elegant aesthetic.
              </p>
              <p>
                Through careful consideration of user needs and spatial constraints, Orbit delivers a thoughtful balance of form and function, proving that smart design doesn't always require digital interfaces.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Key Features
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Dual-Mode Lighting
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Switches effortlessly between focused task lighting for work and soft ambient glow for relaxation.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Analog Control
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Intuitive physical controls provide immediate, tactile feedback without digital complexity.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Compact Design
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Optimized for small living spaces without sacrificing functionality or aesthetic appeal.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Mindful Illumination
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Designed to support both productivity and wellbeing through carefully calibrated light quality.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Design Process
            </h2>
            <div className="space-y-4">
              <div className="rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage2} 
                  alt="Design Process 1" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage2} 
                  alt="Design Process 2" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Design Philosophy
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-7 space-y-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p>
                In an age of smart homes and connected devices, Orbit takes a deliberately analog approach. The design recognizes that sometimes the best interface is no interface at all—just simple, intuitive physical controls that work exactly as expected.
              </p>
              <p>
                The lamp's form follows function, with every element serving a purpose. The result is a product that feels both timeless and contemporary, bringing calm and control to modern living spaces.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Impact & Outcomes
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-7 space-y-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p>
                Orbit demonstrates how thoughtful industrial design can address real user needs in compact living situations. By focusing on essential functions and eliminating unnecessary complexity, the lamp provides exactly what users need, when they need it.
              </p>
              <p>
                The project showcases the value of human-centered design in creating products that enhance daily life through simplicity, beauty, and genuine utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}