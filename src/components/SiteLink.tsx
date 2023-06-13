import Link from "next/link";
import { useRouter } from "next/router";

interface SiteLinkProps {
  href: string;
  title: string;
}

const SiteLink = ({ href, title }: SiteLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className="group relative">
      {title}

      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[1px] bg-slate-900 transition-[width] duration-300 group-hover:w-full ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default SiteLink;
