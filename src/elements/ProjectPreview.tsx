export const ProjectPreview = ({
  bg,
  image,
  className,
}: {
  bg: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={`w-full border-[1px] border-gray-300 rounded-2xl relative overflow-hidden ${className || 'h-[240px] sm:h-[300px]'}`}>
      <div
        className="absolute inset-0 w-full h-full z-10 bg-[length:100%]"
        style={{ backgroundImage: bg }}
      />
      <div
        className="absolute z-50 h-[90%] w-[90%] border-[1px] border-gray-300 rounded-lg bg-cover bg-no-repeat bg-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundImage: image }}
      />
    </div>
  );
};
