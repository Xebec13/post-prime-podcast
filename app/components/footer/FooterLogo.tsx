import Image from "next/image";

export default function FooterLogo() {


  return (
    <div
      className="bg-gray-50 rounded-full w-full max-w-25 sm:max-w-35"
    >
      <Image
        src="/postprime-logo-2.png"
        alt="PostPrime logo"
        width={360}
        height={360}
        className="object-contain object-center size-full"
      />
    </div>
  );
}