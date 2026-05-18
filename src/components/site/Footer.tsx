import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={logo}
                alt="Логотип КАВКАЗ-ИНЖИНИРИНГ"
                className="h-10 w-auto [filter:brightness(0)_invert(1)]"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Точность в расчётах, надёжность в исполнении.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-smooth">О компании</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Услуги</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-smooth">Портфолио</Link></li>
              <li><Link to="/contacts" className="hover:text-accent transition-smooth">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Документы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://osp-kavkaz-ing.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">Орган по сертификации</a></li>
              <li><Link to="/sout" className="hover:text-accent transition-smooth">Специальная оценка условий труда</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-smooth">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-smooth">Пользовательское соглашение</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} ООО «КАВКАЗ-ИНЖИРИНГ». Все права защищены.</span>
          <span>Сделано с вниманием к деталям</span>
        </div>
      </div>
    </footer>
  );
};
