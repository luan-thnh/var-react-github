import Button from "@/components/ui/Button";
import { HStack } from "@/components/utils/h-stack";
import { body, container } from "@/components/utils/primitives";
import { ROUTES } from "@/libs/constants";
import { Link } from "react-router-dom";
import logo from "/images/logo.svg";
import xIcon from "/images/home/x_dark_icon.svg";

interface Link {
  label: string;
  href: string;
}

const NAVBAR_LINKS: Link[] = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Feature",
    href: "#feature",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Program",
    href: "#program",
  },
];

const Header = () => {
  return (
    <div
      className={container({
        className:
          "h-navbar flex items-center justify-between relative z-[99999]",
      })}
    >
      <a href={ROUTES.HOME}>
        <img src={logo} alt="logo" width={108} height={25.561} />
      </a>

      <HStack spacing={40} className="hidden lg:flex">
        {NAVBAR_LINKS?.map(({ label, href }) => (
          <Link
            key={label}
            to={href}
            className={body({
              variant: 18,
              className:
                "font-manrope text-white transition-all hover:opacity-60",
            })}
          >
            {label}
          </Link>
        ))}
        <HStack>
          <Button variant="bordered">LAUNCH APP</Button>
          <Button variant="bordered" iconOnly as={Link} to="x.com">
            <img src={xIcon} alt="x" />
          </Button>
        </HStack>
      </HStack>
    </div>
  );
};

export default Header;
