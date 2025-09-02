import Link from "next/link";

import {
  RiLinkedinLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vashuk-yadav9753",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/vashukyadav",
    Icon: RiGithubLine,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vashukyadav",
    Icon: RiTwitterLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/vashukyadav",
    Icon: RiInstagramLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-5 text-base sm:text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300 p-1 sm:p-0"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
