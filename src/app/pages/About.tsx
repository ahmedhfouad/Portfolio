import { Navigation } from '../components/Navigation';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Radio, Coffee, Zap, Globe, Users } from 'lucide-react';
import svgPaths from '../../imports/svg-9ie5eybmtz';
import photoImg from 'figma:asset/0ab568f36097fb3bb2137782108a87708509cf66.png';

const experience = [
  {
    role: 'Creative Director',
    org: 'The Observer',
    period: 'Feb 2024 – Present',
    bullets: [
      'Designed 4 magazine covers and 30+ layouts in Adobe InDesign for a readership of 7,000+.',
      'Led a design team of 20, delivering under tight deadlines while preserving brand identity.',
      'Partnered across 7 editorial sections to align visuals with content themes.',
    ],
  },
  {
    role: 'UI/UX Researcher & Designer',
    org: 'The IDEA Lab',
    period: 'Feb 2024 – Feb 2025',
    bullets: [
      'Engineered 5 interactive interfaces in Figma with heuristic evaluations and user feedback loops.',
      'Led usability testing with 5 participants, surfacing cognitive load issues and improving task efficiency.',
    ],
  },
  {
    role: 'Survey Research Assistant',
    org: 'Office of Institutional Research, Tufts',
    period: 'May 2024 – Present',
    bullets: [
      'Analyzed survey data from 13,000+ students and faculty, surfacing insights for institutional policy.',
      'Coded 500+ questions using NVivo, improving clarity and accuracy in data collection.',
    ],
  },
  {
    role: 'Archival Research Assistant',
    org: 'Dept. of Film & Media Studies',
    period: 'May 2023 – Aug 2024',
    bullets: [
      'Researched 200+ archival sources from early 20th-century Egypt for a scholarly publication.',
      'Translated Arabic-language materials, broadening accessibility for academic audiences.',
    ],
  },
];

const skills: Record<string, string[]> = {
  'UX & Design': [
    'Design Thinking', 'Product Design', 'Wireframing',
    'Prototyping', 'Brand Design', 'Data Visualization',
  ],
  'Research': [
    'User Interviews', 'Usability Testing', 'Journey Mapping',
    'Data Analytics', 'Storyboarding', 'AI-Assisted Design',
  ],
  'Tools': [
    'Figma', 'Adobe CC', 'Blender', 'TouchDesigner',
    'HTML/CSS', 'JavaScript', 'Python', 'NVivo', 'SPSS',
  ],
};

const extras = [
  { Icon: Radio, label: 'Radio Host' },
  { Icon: Coffee, label: 'Barista' },
  { Icon: Zap, label: 'Lights Tech' },
  { Icon: Globe, label: 'Arabic Fluency' },
  { Icon: Users, label: 'Global Orientation Advisor' },
];

/* ─── Reusable pieces ──────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] mb-6 uppercase tracking-widest"
      style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)' }}
    >
      {children}
    </p>
  );
}

function ExperienceEntry({ role, org, period, bullets, light = false }: {
  role: string; org: string; period: string; bullets: string[]; light?: boolean;
}) {
  const textColor = light ? '#fff9e7' : '#708b75';
  const mutedColor = light ? 'rgba(255,249,231,0.65)' : 'rgba(112,139,117,0.65)';
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
        <span
          className="font-['Dosis:Bold',sans-serif] font-bold"
          style={{ color: '#ef6351', fontSize: 'clamp(1rem, 2.2vw, 1.2rem)' }}
        >
          {role}
        </span>
        <span
          className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold"
          style={{ color: textColor, fontSize: 'clamp(0.85rem, 1.8vw, 1rem)', fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          — {org}
        </span>
      </div>
      <p
        className="font-['Nunito_Sans:Regular',sans-serif] mb-2"
        style={{ color: mutedColor, fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)', fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        {period}
      </p>
      <ul className="space-y-1 pl-4">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="font-['Nunito_Sans:Regular',sans-serif] list-disc"
            style={{ color: light ? 'rgba(255,249,231,0.85)' : 'rgba(112,139,117,0.9)', fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)', lineHeight: 1.65, fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillTags({ light = false }: { light?: boolean }) {
  return (
    <div className="space-y-5">
      {Object.entries(skills).map(([cat, tags]) => (
        <div key={cat}>
          <p
            className="font-['Dosis:Bold',sans-serif] font-bold mb-2"
            style={{ color: light ? 'rgba(255,249,231,0.55)' : 'rgba(112,139,117,0.55)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            {cat}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span
                key={t}
                className="rounded-full px-3 py-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold"
                style={{
                  background: light ? 'rgba(255,249,231,0.12)' : 'rgba(112,139,117,0.12)',
                  color: light ? '#fff9e7' : '#708b75',
                  fontSize: '0.8rem',
                  border: `1px solid ${light ? 'rgba(255,249,231,0.25)' : 'rgba(112,139,117,0.25)'}`,
                  fontVariationSettings: "'YTLC' 500, 'wdth' 100",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="bg-[#fff9e7] min-h-screen">
      <Navigation />

      {/* ════════════════════ DESKTOP ═══════════════════════ */}
      <div className="hidden min-[900px]:block">
        <div className="max-w-[1280px] mx-auto px-[60px] min-[1100px]:px-[106px] pb-[100px]">

          {/* ── Hero ── */}
          <div className="flex items-start gap-12 pt-[110px] pb-[80px]">

            {/* Left text */}
            <div className="flex-1 min-w-0 pt-2">
              {/* SVG name */}
              <div className="mb-5">
                <svg className="w-[320px] h-[205px] min-[1100px]:w-[389px] min-[1100px]:h-[250px]" fill="none" preserveAspectRatio="none" viewBox="0 0 388.975 250">
                  <g id="Ahmed Fouad">
                    <path d={svgPaths.pd590280} fill="#63535B" />
                    <path d={svgPaths.p2e113000} fill="#63535B" />
                    <path d={svgPaths.p30b53800} fill="#63535B" />
                    <path d={svgPaths.p2ad8f800} fill="#63535B" />
                    <path d={svgPaths.p1079df00} fill="#63535B" />
                    <path d={svgPaths.p1953a000} fill="#63535B" />
                    <path d={svgPaths.p37543600} fill="#63535B" />
                    <path d={svgPaths.p1cadbc70} fill="#63535B" />
                    <path d={svgPaths.p10b0e700} fill="#63535B" />
                    <path d={svgPaths.p9c74000} fill="#63535B" />
                  </g>
                </svg>
              </div>

              <p className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] text-[22px] min-[1100px]:text-[28px] mb-8">
                Product, UI and Brand Design
              </p>

              <div className="max-w-[500px] space-y-4 mb-10">
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[17px] min-[1100px]:text-[19px] leading-[30px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Designer and researcher studying{' '}
                  <span className="font-['Nunito_Sans:Black',sans-serif] font-black" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Engineering Psychology and Studio Arts at Tufts University
                  </span>{' '}
                  — which basically means I spend equal time thinking about why things confuse people and making things beautiful.
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] text-[16px] min-[1100px]:text-[17px] leading-[28px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  My work lives at the intersection of human behavior, visual craft, and the occasional 2am InDesign sprint. Currently based between Boston and Cairo — fluent in both Arabic and Figma.
                </p>
              </div>

              <a
                href="https://drive.google.com/file/d/1shFSLlFBIGklTexaEEGoA9ZoKNTLbcPO/view?usp=sharing"
                target="_blank"
                className="inline-block bg-[#ef6351] px-10 min-[1100px]:px-14 py-3 min-[1100px]:py-4 rounded-[15px] text-[#fff9e7] font-['Inter:Regular',sans-serif] text-[17px] min-[1100px]:text-[19px] no-underline hover:bg-[#d94839] transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Right photo */}
            <div className="flex-shrink-0" style={{ width: 'clamp(300px, 38%, 500px)' }}>
              <div className="w-full rounded-[25px] overflow-hidden" style={{ height: 'clamp(420px, 55vw, 660px)' }}>
                <ImageWithFallback src={photoImg} alt="Ahmed Fouad" className="w-full h-full object-cover mx-[1px] my-[0px]" />
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="w-full h-[2px] bg-[#ef6351] rounded-full mb-[70px]" />

          {/* ── Experience + Education/Skills ── */}
          <div className="flex gap-16 mb-[70px]">

            {/* Experience */}
            <div className="flex-1 min-w-0">
              <SectionHeading>Experience</SectionHeading>
              {experience.map(e => (
                <ExperienceEntry key={e.role} {...e} />
              ))}
            </div>

            {/* Divider vertical */}
            <div className="w-[2px] bg-[#708b75] opacity-20 flex-shrink-0 self-stretch" />

            {/* Education + Skills */}
            <div className="w-[320px] min-[1100px]:w-[360px] flex-shrink-0">
              <SectionHeading>Education</SectionHeading>
              <div className="mb-3">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351]" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)' }}>
                  Tufts University
                </p>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-sm leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  B.S. Engineering Psychology (Human Factors)<br />Minor in Studio Arts · GPA 3.77
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] text-xs mt-1" style={{ opacity: 0.6, fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Medford, MA · Expected May 2026
                </p>
              </div>
              <div className="mb-10">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351]" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)' }}>
                  Università di Pavia
                </p>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-sm leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Study Abroad — Italian & Computer Science
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] text-xs mt-1" style={{ opacity: 0.6, fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Pavia, Italy · May – Jun. 2025
                </p>
              </div>

              <SectionHeading>Skills & Tools</SectionHeading>
              <SkillTags />
            </div>
          </div>

          {/* ── Also section ── */}
          <div className="mt-[10px]">
            <SectionHeading>Also</SectionHeading>
            <div className="flex flex-wrap gap-4">
              {extras.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ background: 'rgba(112,139,117,0.1)', border: '1px solid rgba(112,139,117,0.3)' }}
                >
                  <Icon size={15} color="#ef6351" strokeWidth={2} />
                  <span
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75]"
                    style={{ fontSize: '0.875rem', fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════ MOBILE ════════════════════════ */}
      <div className="min-[900px]:hidden">

        {/* Hero */}
        <div className="pt-20 px-6 pb-10 text-center flex flex-col items-center">
          <h1
            className="font-['Zeyada:Regular',sans-serif] text-[#63535b] mb-3"
            style={{ fontSize: 'clamp(3.8rem, 16vw, 6rem)', lineHeight: 1.05 }}
          >
            Ahmed Fouad
          </h1>
          <p
            className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] mb-6"
            style={{ fontSize: 'clamp(0.95rem, 3.8vw, 1.3rem)' }}
          >
            Product, UI and Brand Design
          </p>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] max-w-[520px]"
            style={{ fontSize: 'clamp(0.95rem, 2.6vw, 1.05rem)', lineHeight: 1.7, fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Designer and researcher studying{' '}
            <span className="font-['Nunito_Sans:Black',sans-serif] font-black" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Engineering Psychology and Studio Arts at Tufts
            </span>{' '}
            — thinking about why things confuse people and making them beautiful, simultaneously.
          </p>
        </div>

        {/* Photo */}
        <div className="px-6">
          <div className="w-full rounded-t-[25px] overflow-hidden" style={{ height: 'clamp(240px, 68vw, 400px)' }}>
            <ImageWithFallback src={photoImg} alt="Ahmed Fouad" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Green section */}
        <div className="bg-[#708b75] px-6 pt-10 pb-14 space-y-10">

          {/* Mini bio */}
          <p
            className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7]"
            style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', lineHeight: 1.75, opacity: 0.9, fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Currently based between Boston and Cairo. Fluent in Arabic and Figma. My work lives at the intersection of human behavior, visual craft, and the occasional 2am InDesign sprint.
          </p>

          {/* Experience */}
          <div>
            <p className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#fff9e7] mb-6 uppercase tracking-widest text-xs opacity-60">
              Experience
            </p>
            {experience.map(e => (
              <ExperienceEntry key={e.role} {...e} light />
            ))}
          </div>

          {/* Education */}
          <div>
            <p className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#fff9e7] mb-5 uppercase tracking-widest text-xs opacity-60">
              Education
            </p>
            <div className="mb-4">
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-lg">Tufts University</p>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-sm leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                B.S. Engineering Psychology (Human Factors)<br />Minor in Studio Arts · GPA 3.77
              </p>
              <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-xs mt-1 opacity-55" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Medford, MA · Expected May 2026
              </p>
            </div>
            <div>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-lg">Università di Pavia</p>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-sm leading-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Study Abroad — Italian & Computer Science
              </p>
              <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-xs mt-1 opacity-55" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pavia, Italy · May – Jun. 2025
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#fff9e7] mb-5 uppercase tracking-widest text-xs opacity-60">
              Skills & Tools
            </p>
            <SkillTags light />
          </div>

          {/* Also */}
          <div>
            <p className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#fff9e7] mb-4 uppercase tracking-widest text-xs opacity-60">
              Also
            </p>
            <div className="flex flex-wrap gap-3">
              {extras.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{ background: 'rgba(255,249,231,0.12)', border: '1px solid rgba(255,249,231,0.25)' }}
                >
                  <Icon size={13} color="#ef6351" strokeWidth={2} />
                  <span
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7]"
                    style={{ fontSize: '0.8rem', fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1shFSLlFBIGklTexaEEGoA9ZoKNTLbcPO/view?usp=sharing"
            target="_blank"
            className="inline-block bg-[#ef6351] px-10 py-3 rounded-[15px] text-[#fff9e7] font-['Inter:Regular',sans-serif] no-underline hover:bg-[#d94839] transition-colors"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.1rem)' }}
          >
            Resume
          </a>

        </div>
      </div>
    </div>
  );
}