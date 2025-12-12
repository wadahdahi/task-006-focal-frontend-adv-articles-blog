// Sidebar.tsx
import React from "react";
import Navbar from "./Navbar";
import ModeToggleButton from "./toggles/ModeToggleButton";

type SidebarProps = {
  isOpen: boolean;
  logo?: string;
  onClose: () => void;
  links: { name: string; path: string }[];
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, logo, onClose, links }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-white dark:bg-[#090D1F] flex flex-col justify-between items-center h-screen w-full p-6.5 transition-transform duration-300">
      {/* Top: Logo + Close */}
      <div className="flex justify-between items-center">
        <img className="rounded-full" src={logo} alt="وااو ديزاين" width={60} />
      </div>

      {/* Navbar Links */}
      <Navbar
        className="flex flex-col gap-7"
        links={links}
        isSidebar
        onLinkClick={onClose}
      />

      {/* Bottom: Toggle */}
      <div>
        <ModeToggleButton />
      </div>
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="text-2xl dark:text-white"
      >
        ✕
      </button>
    </div>
  );
};

export default Sidebar;
