import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";
import Link from "next/link";

type SocialLink = {
  href: string;
  icon: string;
  alt: string;
};

type SocialLinksProps = {
  className?: string;
};

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks: SocialLink[] = [
    {
      href: "mailto:tarale.adi@gmail.com",
      icon: getIcon("mail"),
      alt: "Email",
    },
    {
      href: "https://www.linkedin.com/in/aditya-tarale-about/",
      icon: getIcon("linkedIn"),
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/AdityaTarale",
      icon: getIcon("github"),
      alt: "GitHub",
    },
    {
      href: "https://x.com/aditarale1805",
      icon: getIcon("x"),
      alt: "X",
    },
    {
      href: "https://stackoverflow.com/users/14806412/aditya-tarale",
      icon: getIcon("stackoverflow"),
      alt: "Stack Overflow",
    },
    {
      href: "https://codeforces.com/profile/tarale.adi",
      icon: getIcon("codeforces"),
      alt: "Codeforces",
    },
  ];

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-2 sm:gap-4">
        {socialLinks.map((social, index) => (
          <Link
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center shrink-0"
          >
            <Image
              decoding="async"
              src={social.icon}
              alt={social.alt}
              width={20}
              height={20}
              loading={index === 0 ? "eager" : "lazy"} // ✅ mail icon (first) loads eagerly
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
