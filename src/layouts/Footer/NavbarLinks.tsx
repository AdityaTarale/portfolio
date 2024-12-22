import Link from "next/link";

type NavbarLink = {
  linkName: string;
  linkUrl: string;
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
          <li key={link.linkName} className="hover:underline">
            <Link href={link.linkUrl}>
              <p>{link.linkName}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
