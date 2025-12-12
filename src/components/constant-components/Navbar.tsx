import { NavLink } from "react-router-dom";

export type NavbarProps = {
  id?: string;
  links: { name: string; path: string }[];
  isSidebar?: boolean;
  className?: string;
  onLinkClick?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  id,
  links,
  isSidebar,
  className,
  onLinkClick,
}) => {
  return (
    <nav id={id} className={className}>
      <ul
        id="nav-list"
        className="flex flex-col gap-6 sm:flex-row md:gap-8 dark:text-white"
      >
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isSidebar
                  ? isActive
                    ? "border-b-2 border-amber-100 font-semibold"
                    : "border-b-2 border-transparent"
                  : isActive
                  ? "border-b-2 border-amber-100 font-semibold"
                  : "border-b-2 border-transparent"
              }
              onClick={onLinkClick}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
