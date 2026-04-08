import Image from "next/image";

export const ProjectPreview = ({
  bg,
  image,
  className,
  priority = false,
}: {
  bg: string;
  image: string;
  className?: string;
  priority?: boolean;
}) => {
  // Extract URLs from "url('...')" if they are passed in that format
  const extractUrl = (str: string) => {
    const match = str.match(/url\(['"]?([^'"]+)['"]?\)/);
    return match ? match[1] : str;
  };

  const bgUrl = extractUrl(bg);
  const imageUrl = extractUrl(image);

  return (
    <div
      className={`w-full border-[1px] border-gray-300 rounded-2xl relative overflow-hidden ${
        className || "h-[240px] sm:h-[300px]"
      }`}
    >
      <div className="absolute inset-0 w-full h-full z-10">
        <Image
          src={bgUrl}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      <div className="absolute z-50 h-[90%] w-[90%] border-[1px] border-gray-300 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white">
        <Image
          src={imageUrl}
          alt="Project Screenshot"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 90vw, 45vw"
          priority={priority}
        />
      </div>
    </div>
  );
};
