import { getIcon } from "@/utils/iconsRegistry";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import SocialLinks from "./SocialLinks";

function LinkBoxes() {
  const linksData = [
    {
      title: "QUICK LINKS",
      links: [
        { linkname: "Home", href: "https://www.adityatarale.com" },
        {
          linkname: "Resume",
          target: "_blank",
          href: "https://drive.google.com/file/d/1--lovWaopVc346647Aa3ye8_V6rT7c93/view",
        },
        { linkname: "+91-9405949716", href: "tel:+919405949716" },
      ],
    },
    // {
    //   title: "MISCELLANEOUS",
    //   links: [
    //     // { linkname: "Gallery", href: "/gallery" },
    //     // { linkname: "Me", href: "/me" },
    //   ],
    // },
  ];

  return (
    <section className="flex flex-col gap-6 sm:flex-row sm:gap-12 mx-4 sm:mx-0">
      {linksData.map((box) => (
        <div className="flex flex-col" key={box.title}>
          <h6 className="mb-3 text-sm font-medium text-gray-700">
            {box.title}
          </h6>
          <NavbarLinks className="space-y-2" links={box.links} />
        </div>
      ))}
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="sm:w-6/12 mx-auto py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center">
          {/* Brand Section */}
          <section className="flex flex-col items-center gap-3">
            <Image
              loading="lazy"
              src={getIcon("signature")}
              alt="signature"
              width={249}
              height={50}
              className="invert"
            />
            <span className="text-sm text-gray-600 mx-4 max-w-sm sm:mx-0 my-2">
              Whether you have a question, a project in mind, or just want to
              say hi, my inbox is always open. I&apos;ll try my best to get back
              to you!
            </span>

            <SocialLinks className="mt-4" />
          </section>
          {/* Links Section */}
          <LinkBoxes />
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        <p>Crafted with ❤️ by Aditya Tarale</p>
        <p className="text-xs text-gray-400 mt-1">
          © {new Date().getFullYear()}. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}
