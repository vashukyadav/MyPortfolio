import Link from "next/link";
import { useRouter } from "next/router";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiCog6Tooth,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "skills", path: "/skills", Icon: HiCog6Tooth },
  { name: "resume", path: "/resume", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "projects", path: "/projects", Icon: HiViewColumns },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-[90vw] translate-z-0">
      <div className="flex items-center justify-center gap-x-3 xs:gap-x-4 sm:gap-x-6 lg:gap-x-8 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-lg sm:text-xl rounded-full overflow-x-auto">
        {navData.map((link, i) => (
          <Link
            href={link.path}
            className={`${
              router.pathname === link.path && "text-accent"
            } relative flex items-center group hover:text-accent transition-colors duration-300 flex-shrink-0 will-change-auto`}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute top-10 sm:top-12 left-1/2 transform -translate-x-1/2 hidden sm:group-hover:flex pointer-events-none translate-z-0"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] whitespace-nowrap">
                <div className="text-[10px] sm:text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-t-white border-t-6 sm:border-t-8 border-x-transparent border-x-[4px] sm:border-x-[6px] border-b-0 absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div className="text-base sm:text-lg lg:text-xl transform-gpu">
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
