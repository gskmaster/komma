import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "text-sm font-medium text-white/90 transition-colors hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}