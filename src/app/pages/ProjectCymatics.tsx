import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';
import imgImage1 from "figma:asset/53f95c8acce783dc53eb9750520107c8cc1d9afc.png";

export default function ProjectCymatics() {
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
            CYMATICS: RESONANCE
          </h1>
          
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[24px] leading-[32px] mb-[60px]">
            2025 || Product Design + Human Factors
          </p>

          {/* Hero Image */}
          <div className="w-full h-[500px] rounded-[25px] overflow-hidden mb-[60px]">
            <img 
              src={imgImage1} 
              alt="Cymatics: Resonance" 
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
                Cymatics: Resonance is a real-time visualizer that responds to live music with evolving cymatic imagery. The project explores the intersection of sound, vibration, and visual art to create an immersive concert experience that is both captivating and inclusive.
              </p>
              <p className="mb-[25px]">
                Through careful research in human factors and product design, this system was developed to enhance the concert experience for all attendees, including those with hearing impairments, by providing a visual representation of the music's rhythm, tone, and intensity.
              </p>
              <p>
                The design focuses on creating meaningful visual patterns that mirror the complexity and emotion of live music, transforming sound waves into beautiful, ever-changing cymatic patterns that audiences can see and feel.
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
                  Real-Time Response
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Visualizations react instantly to live music, creating dynamic patterns that evolve with every note and beat.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Inclusive Design
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Makes concerts accessible to audiences with hearing impairments through visual representation of sound.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Cymatic Patterns
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Uses the science of cymatics to create visually stunning patterns that represent sound frequencies.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[28px] leading-[36px] mb-[15px]">
                  Immersive Experience
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[20px] leading-[34px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Enhances the emotional connection between audience and performance through synchronized visuals.
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
                  src={imgImage1} 
                  alt="Design Process 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[350px] rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage1} 
                  alt="Design Process 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-[100px]">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-[30px]">
              Impact & Outcomes
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[#fff9e7] text-[22px] leading-[38px] max-w-[900px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p className="mb-[25px]">
                The Cymatics: Resonance system successfully bridges the gap between audio and visual experiences, creating a more inclusive and engaging concert environment. Through user testing and feedback, the project demonstrated significant improvements in audience engagement and accessibility.
              </p>
              <p>
                This project represents a thoughtful application of human factors research and engineering psychology principles to create technology that enhances human experience while addressing real accessibility needs in live entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="min-[900px]:hidden px-6 py-8">
        {/* Mobile Header */}
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
            CYMATICS: RESONANCE
          </h1>
          
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-lg mb-8">
            2025 || Product Design + Human Factors
          </p>

          {/* Hero Image */}
          <div className="w-full rounded-[25px] overflow-hidden mb-8">
            <img 
              src={imgImage1} 
              alt="Cymatics: Resonance" 
              className="w-full h-auto"
            />
          </div>

          {/* Project Overview */}
          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Project Overview
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-7 space-y-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p>
                Cymatics: Resonance is a real-time visualizer that responds to live music with evolving cymatic imagery. The project explores the intersection of sound, vibration, and visual art to create an immersive concert experience that is both captivating and inclusive.
              </p>
              <p>
                Through careful research in human factors and product design, this system was developed to enhance the concert experience for all attendees, including those with hearing impairments, by providing a visual representation of the music's rhythm, tone, and intensity.
              </p>
              <p>
                The design focuses on creating meaningful visual patterns that mirror the complexity and emotion of live music, transforming sound waves into beautiful, ever-changing cymatic patterns that audiences can see and feel.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Key Features
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Real-Time Response
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Visualizations react instantly to live music, creating dynamic patterns that evolve with every note and beat.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Inclusive Design
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Makes concerts accessible to audiences with hearing impairments through visual representation of sound.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Cymatic Patterns
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Uses the science of cymatics to create visually stunning patterns that represent sound frequencies.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-xl mb-2">
                  Immersive Experience
                </h3>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Enhances the emotional connection between audience and performance through synchronized visuals.
                </p>
              </div>
            </div>
          </div>

          {/* Process Images */}
          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Design Process
            </h2>
            <div className="space-y-4">
              <div className="rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage1} 
                  alt="Design Process 1" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[25px] overflow-hidden">
                <img 
                  src={imgImage1} 
                  alt="Design Process 2" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-10">
            <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-3xl mb-4">
              Impact & Outcomes
            </h2>
            <div className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-base leading-7 space-y-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p>
                The Cymatics: Resonance system successfully bridges the gap between audio and visual experiences, creating a more inclusive and engaging concert environment. Through user testing and feedback, the project demonstrated significant improvements in audience engagement and accessibility.
              </p>
              <p>
                This project represents a thoughtful application of human factors research and engineering psychology principles to create technology that enhances human experience while addressing real accessibility needs in live entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}