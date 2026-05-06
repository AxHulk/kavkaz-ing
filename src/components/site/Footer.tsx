import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Логотип" className="h-9 w-auto" width={40} height={36} />
              <span className="font-bold tracking-wider">КАВКАЗ-ИНЖИРИНГ</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Точность в расчётах, надёжность в исполнении. Проектирование и сопровождение горнолыжных курортов России.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-accent transition-smooth">О компании</a></li>
              <li><a href="#services" className="hover:text-accent transition-smooth">Услуги</a></li>
              <li><a href="#projects" className="hover:text-accent transition-smooth">Портфолио</a></li>
              <li><a href="#contacts" className="hover:text-accent transition-smooth">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Документы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://osp-kavkaz-ing.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">Орган по сертификации</a></li>
              <li><a href="/sout" className="hover:text-accent transition-smooth">Специальная оценка условий труда</a></li>
              <li><a href="/privacy" className="hover:text-accent transition-smooth">Политика конфиденциальности</a></li>
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
