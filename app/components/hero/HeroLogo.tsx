export default function HeroLogo({ title }: { title: string }) {
  return (
    <div className="overflow-hidden text-center scale-y-140">
      <h1 className="hero-logo text-[clamp(2rem,23.5vw,25vw)] uppercase whitespace-nowrap tracking-tight leading-none">
        {title}
      </h1>
    </div>
  );
}