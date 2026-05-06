import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "О компании", href: "/about" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Услуги", href: "/services" },
  { label: "Орган по сертификации", href: "https://osp-kavkaz-ing.ru/", external: true },
  { label: "Контакты", href: "/contacts" },
  
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group" aria-label="КАВКАЗ-ИНЖИНИРИНГ — на главную">
          <img
            src={logo}
            alt="Логотип КАВКАЗ-ИНЖИНИРИНГ"
            className="h-9 md:h-11 w-auto [filter:brightness(0)_invert(1)]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-full hover:bg-secondary/60"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-full hover:bg-secondary/60"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button variant="brand" size="sm" asChild>
            <Link to="/contacts">Связаться</Link>
          </Button>
        </div>

        <button
          aria-label="Меню"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-4 gap-1">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-lg transition-smooth"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-lg transition-smooth"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
