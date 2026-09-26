import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="font-display italic font-semibold text-[color:var(--on-board)]">
          T. Benameur
        </a>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
