export default function HeroLogo({ title }: { title: string }) {
  return (
    <div className="overflow-hidden pb-5 pt-10 border-2 text-center">
      <h1 className="hero-logo text-[clamp(3rem,24vw,23rem)] text-orange-200 uppercase whitespace-nowrap tracking-tight leading-none">
        {title}
      </h1>
    </div>
  );
}