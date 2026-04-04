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
    <ul className={`${className} text-black`}>
      {links?.map(({ linkname, ...props }) => {
        return (
          <li key={linkname} className="hover:underline">
            <Link {...props}>
              <p>{linkname}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
