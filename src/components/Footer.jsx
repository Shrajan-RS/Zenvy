import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  {
    name: "Discord",
    href: "",
    icon: <FaDiscord />,
  },
  {
    name: "Github",
    href: "https://github.com/Shrajan-RS",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    href: "",
    icon: <FaLinkedin />,
  },
  {
    name: "X",
    href: "",
    icon: <FaTwitter />,
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="w-screen bg-black py-4  text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-12 md:flex-row">
        <p className="text-center text-sm md:text-left ">
          &copy; Zenvy 2025. All Rights Reserved
        </p>

        <a
          href="#home"
          className="w-[3vw] hover:scale-110 text-white transition-colors duration-400 ease-in-out"
        >
          <img src="/img/logo.png" alt="logo" />
        </a>

        <div className="flex justify-center gap-4 md:justify-start text-[20px]">
          {links.map(({ name, href, icon }) => (
            <a
              target="_blank"
              key={name}
              href={href}
              className="hover:text-blue-800 hover:scale-110 text-white transition-colors duration-400 ease-in-out"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
