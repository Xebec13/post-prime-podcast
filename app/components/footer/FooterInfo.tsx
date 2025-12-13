interface FooterInfoItem {
  label: string;
  href?: string;
  isLink?: boolean;
}

const footerInfoList: FooterInfoItem[] = [
  { label: "kontakt@postprime.pl", href: "mailto:kontakt@postprime.pl", isLink: true },
  { label: "MG13", href: "#", isLink: true },
  { label: "Fundacja Warszawa", href: "#", isLink: true },
  { label: "Partnerzy PostPrime", href: "#", isLink: true },
  { label: "+48 123 456 789" }, 
];

export default function FooterInfo() {
  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-orange-200">
      {footerInfoList.map((item) =>
        item.isLink && item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-400 transition-colors"
          >
            {item.label}
          </a>
        ) : (
          <p key={item.label}>{item.label}</p>
        )
      )}
    </div>
  );
}