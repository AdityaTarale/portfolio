export default function Hero() {
  return (
    <div className="mx-4 md:w-6/12 sm:mx-auto relative h-[calc(100vh-5rem)] bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />

      {/* Fading gradient effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, black, transparent)`,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">Engineer by Day, Creator Always</h1>
        <p className="mt-4 text-2xl text-gray-400">
          I build apps that drive results and help your business grow.
        </p>
      </div>
    </div>
  );
}
