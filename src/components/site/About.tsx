import { Award, Cpu, Layers, Target, Users, Workflow } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Комплексный подход",
    desc: "Закрываем все вопросы — от геодезического колышка до итоговой сертификации объекта.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Users,
    title: "Экспертность",
    desc: "Команда дипломированных инженеров с глубоким пониманием специфики горнолыжного строительства.",
  },
  {
    icon: Cpu,
    title: "Инновации",
    desc: "Автоматизированные системы мониторинга и BIM-технологии при корректировке проектов.",
  },
  {
    icon: Target,
    title: "Точность",
    desc: "Филигранный геодезический контроль и мониторинг на всех этапах возведения.",
  },
  {
    icon: Workflow,
    title: "Системный подход",
    desc: "Взаимодействие с органами стройконтроля для оперативного подтверждения работ.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/20 border-y border-border/60">
      <div className="container">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
            02 / О компании
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ООО «КАВКАЗ-ИНЖИРИНГ» — ведущая компания в сфере проектирования горнолыжной инфраструктуры с многолетним опытом и командой профессионалов.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-5 auto-rows-[minmax(220px,auto)]">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const isHero = idx === 0;
            return (
              <article
                key={f.title}
                className={`group relative rounded-3xl border border-border/60 p-8 overflow-hidden transition-smooth hover:border-accent/40 ${
                  f.span ?? ""
                } ${isHero ? "bg-gradient-brand text-primary-foreground" : "bg-gradient-card"}`}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                      isHero
                        ? "bg-foreground/10 text-foreground"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    } transition-smooth`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className={`font-bold mb-3 ${isHero ? "text-3xl md:text-4xl" : "text-xl"}`}>
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isHero ? "text-primary-foreground/80 max-w-sm" : "text-muted-foreground"}`}>
                    {f.desc}
                  </p>
                  {isHero && (
                    <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-medium tracking-widest uppercase opacity-80">
                      <Award size={14} /> Профессиональный сервис
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
