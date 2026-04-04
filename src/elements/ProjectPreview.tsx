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

        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: bg,
          backgroundSize: "100%",
        }}
      />
      <div
        className="absolute z-50 h-[90%] w-[90%] border-[1px] border-gray-300 rounded-lg"
        style={{
          backgroundImage: image,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};
