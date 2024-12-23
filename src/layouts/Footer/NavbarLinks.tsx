import Link from "next/link";

type NavbarLink = {
  linkname: string;
  href: string;
  target?: string;
};

type NavbarLinksProps = {
  className?: string;
  links: NavbarLink[];
};

export default function NavbarLinks({ className, links }: NavbarLinksProps) {
  return (
    <ul className={`${className} text-white`}>
      {links?.map((link) => {
        return (
          <li key={link.linkname} className="hover:underline">
            <Link {...link}>
              <p>{link.linkname}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
