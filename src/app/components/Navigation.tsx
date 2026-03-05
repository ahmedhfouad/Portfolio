import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-27yptgztxt";
import { Linkedin } from "lucide-react";

function Af() {
  return (
    <div className="h-[28px] w-[40px] min-[900px]:h-[40px] min-[900px]:w-[56px]" data-name="AF">
      <Link
        to="/"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        <svg
          className="block size-full cursor-pointer"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 84.2188 60.6562"
        >
          <g id="AF">
            <path
              d={svgPaths.p3746de00}
              fill="var(--fill-0, #63535B)"
              id="Vector"
            />
            <path
              d={svgPaths.p1f0c7780}
              fill="var(--fill-0, #63535B)"
              id="Vector_2"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}

function ConnectButton() {
  return (
    <a
      href="https://www.linkedin.com/in/ahmedhfouad/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label="LinkedIn Profile"
    >
      <Linkedin
        className="w-8 h-8 text-[#ef6351]"
        strokeWidth={2}
      />
    </a>
  );
}

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth < 900;
      const projectsSection = document.getElementById(
        isMobile ? "projects-mobile" : "projects-desktop"
      );
      const studioSection = document.getElementById(
        isMobile ? "studio-mobile" : "studio-desktop"
      );

      if (
        studioSection &&
        studioSection.offsetTop > 0 &&
        scrollPosition >= studioSection.offsetTop - 150
      ) {
        setActiveSection("studio");
      } else if (
        projectsSection &&
        projectsSection.offsetTop > 0 &&
        scrollPosition >= projectsSection.offsetTop - 150
      ) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position

      return () =>
        window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const isMobile = window.innerWidth < 900;
    const resolvedId = isMobile ? `${sectionId}-mobile` : `${sectionId}-desktop`;
    const navHeight = document.querySelector("nav")?.closest("div[class*='fixed']")?.clientHeight
      ?? 64;

    const doScroll = () => {
      const element = document.getElementById(resolvedId);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 150);
    } else {
      doScroll();
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#fff9e7] z-50 shadow-sm">
      {/* AF logo — always 22px from left viewport edge */}
      <div className="absolute left-[22px] top-1/2 -translate-y-1/2 py-3">
        <Af />
      </div>

      {/* Centered nav links */}
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-center py-3">
        <nav className="hidden min-[900px]:flex items-center gap-8">
          <button
            onClick={scrollToTop}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                activeSection === "home" &&
                location.pathname === "/"
                  ? "text-[#ef6351]"
                  : "text-[#708b75] hover:text-[#ef6351]"
              }
            >
              Home
            </span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                activeSection === "projects"
                  ? "text-[#ef6351]"
                  : "text-[#708b75] hover:text-[#ef6351]"
              }
            >
              Projects
            </span>
          </button>
          <button
            onClick={() => scrollToSection("studio")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                activeSection === "studio"
                  ? "text-[#ef6351]"
                  : "text-[#708b75] hover:text-[#ef6351]"
              }
            >
              Studio
            </span>
          </button>
          <button
            onClick={() => navigate("/about")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                isActive("/about")
                  ? "text-[#ef6351]"
                  : "text-[#708b75] hover:text-[#ef6351]"
              }
            >
              About
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <nav className="min-[900px]:hidden flex items-center gap-4 text-sm">
          <button
            onClick={scrollToTop}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("studio")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            Studio
          </button>
          <button
            onClick={() => navigate("/about")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[#708b75] bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            About
          </button>
        </nav>
      </div>

      {/* LinkedIn icon — always 22px from right viewport edge */}
      <div className="hidden min-[900px]:block absolute right-[22px] top-1/2 -translate-y-1/2">
        <ConnectButton />
      </div>
    </div>
  );
}