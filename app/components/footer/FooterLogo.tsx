import Image from "next/image";

export default function FooterLogo() {


  return (
    <div
      className="bg-orange-100 rounded-full w-full max-w-25 sm:max-w-35"
    >
      <Image
        src="/postprime-logo-2.png"
        alt="PostPrime logo"
        width={60}
        height={60}
        className="object-contain object-center size-full"
        priority
      />
    </div>
  );
}