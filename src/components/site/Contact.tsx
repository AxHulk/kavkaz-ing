import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contacts" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-[0.08]" />
      <div className="container relative">
        <div className="rounded-3xl bg-gradient-card border border-border/60 shadow-elegant p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
              04 / Контакты
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Готовы обсудить
              <br />
              <span className="text-gradient">ваш проект?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Свяжитесь с нами — подготовим коммерческое предложение под задачи вашего объекта.
            </p>
            <Button variant="hero" size="lg">
              Оставить заявку <ArrowRight />
            </Button>
          </div>

          <div className="space-y-6">
            {[
              { icon: Phone, label: "Телефон", value: "+7 (8662) 00-00-00" },
              { icon: Mail, label: "Email", value: "info@kavkaz-engineering.ru" },
              { icon: MapPin, label: "Адрес", value: "г. Нальчик, КБР, Россия" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-5 p-5 rounded-2xl bg-secondary/40 border border-border/40 hover:border-accent/40 transition-smooth">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</div>
                    <div className="text-foreground font-medium">{c.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
