import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ashfaqurpapon" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ashfaqur-rahman-papon/",
  },
  {
    icon: <FaFacebook />,
    path: "https://web.facebook.com/ashfaqurrahman.papon",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
