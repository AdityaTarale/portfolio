import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";
import Link from "next/link";

type SocialLink = {
  href?: string;
  link?: string;
  target?: string;
  icon: string;
  alt: string;
};

type SocialLinksProps = {
  className?: string;
};

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks: SocialLink[] = [
    {
      href: "mailto:tanishkadeep09@gmail.com",
      target: "_blank",
      icon: getIcon("mail"),
      alt: "mail",
    },
    {
      link: "https://www.linkedin.com/in/aditya-tarale-about/",
      icon: getIcon("linkedIn"),
      alt: "Linkedin",
    },
    {
      link: "https://github.com/AdityaTarale",
      icon: getIcon("github"),
      alt: "Github",
    },
    {
      link: "https://x.com/AdiTarale",
      icon: getIcon("twitter"),
      alt: "Twitter",
    },
  ];

  return (
    <div className={className}>
      <div className="flex justify-end space-x-4">
        {socialLinks.map((social) => (
          <Link
            key={String(social?.link || social?.href)}
            href={String(social?.link || social?.href)}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              decoding="async"
              src={social.icon}
              alt={social.alt}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
