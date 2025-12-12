// Header.tsx
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import ModeToggleButton from "./toggles/ModeToggleButton";
import Sidebar from "./Sidebar";
import { createScrollHandler } from "../../components/constant-components/handlers/createScrollHandler";

export type HeaderProps = { id?: string; logo?: string };

const Header: React.FC<HeaderProps> = ({ id, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScroll = useRef<number>(window.scrollY);
  const ticking = useRef(false);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const { scrollHandler, clickHandler } = createScrollHandler(
      lastScroll,
      timeout,
      ticking,
      setVisible
    );

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("click", clickHandler, { capture: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("click", clickHandler, { capture: true });
    };
  }, []);

  const links = [
    { name: "Blog", path: "/" },
    { name: "Projects", path: "/projects-page" },
    { name: "About", path: "/about-page" },
    { name: "Newsletter", path: "/newsletter-page" },
  ];

  return (
    <>
      <header
        id={id}
        className={`header flex items-center justify-between p-5 sticky top-0 left-0 right-0 bg-neutral-100 dark:bg-[#090D1F] text-black dark:text-white z-50 shadow-lg dark:shadow-[#ffffff40] transition-transform duration-300 ${
          visible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center">
          <img
            className="rounded-full"
            src={logo}
            alt="وااو ديزاين"
            width={60}
          />
        </div>

        <div className="hidden sm:flex flex-1 justify-center">
          <Navbar className="flex flex-row gap-8" links={links} />
        </div>

        <div className="hidden sm:block">
          <ModeToggleButton />
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="sm:hidden text-2xl"
        >
          ☰
        </button>
      </header>

      <Sidebar
        isOpen={isMenuOpen}
        logo={logo}
        links={links}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
