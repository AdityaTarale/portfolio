import Image from "next/image";
import galleryData from "../../../public/data/gallery.json";

export default function Home() {
  return (
    <main className="mt-24 flex flex-col gap-48 bg-black md:w-11/12 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryData.map((column, colIdx) => (
          <div key={colIdx} className="grid gap-4">
            {column.map((url, imgIdx) => (
              <div key={imgIdx}>
                <Image
                  className="rounded-lg"
                  src={url}
                  alt={`Gallery image ${colIdx}-${imgIdx}`}
                  width={1080}
                  height={1080}
                  priority={imgIdx === 0}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
