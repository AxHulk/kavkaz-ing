import { Award, Cpu, Layers, Target, Users, Workflow } from "lucide-react";
import heroBg from "@/assets/projects/elbrus/02.jpg";

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
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
            О компании
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            «Точность в расчётах, <span className="text-gradient">надёжность в исполнении!</span>»
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
            ООО «КАВКАЗ-ИНЖИНИРИНГ» — единый центр инжиниринговых компетенций, который оказывает полный комплекс организационных, координационных, административных и инженерно-технических услуг. Весь цикл строительного инжиниринга: от документации до мониторинга.
          </p>
          <div className="mt-10 max-w-4xl mx-auto">
            <p className="text-foreground font-semibold text-center text-sm tracking-[0.25em] uppercase text-accent mb-6">
              Мы обеспечиваем
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                { t: "Подготовку исполнительной документации", d: "Сбор данных, анализ, оформление схем и актов по нормативам для объектов любого назначения." },
                { t: "Геодезическое сопровождение", d: "Съёмка, расчёты, отчёты с планами, профилями и аксонометрией на всех этапах." },
                { t: "Геотехнический мониторинг", d: "Контроль грунтов, фундаментов, уровня вод и раннее предупреждение рисков." },
              ].map((i) => (
                <div key={i.t} className="rounded-2xl border border-border/60 bg-card/40 p-6 hover:border-accent/40 transition-smooth">
                  <h4 className="text-foreground font-semibold mb-2 leading-snug">{i.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Работаем разово и в формате полного сопровождения.
            </p>
            <p className="text-center text-accent font-semibold text-lg md:text-xl mt-3">
              Доверьте надёжность вашего объекта профессионалам!
            </p>
          </div>
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
                } ${isHero ? "text-primary-foreground" : "bg-gradient-card"}`}
              >
                {isHero && (
                  <>
                    <img
                      src={heroBg}
                      alt="Горнолыжный курорт Эльбрус"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
                  </>
                )}
                <div className="relative flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                      isHero
                        ? "bg-white/15 text-primary-foreground backdrop-blur-md"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    } transition-smooth`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className={`font-bold mb-3 ${isHero ? "text-3xl md:text-4xl" : "text-xl"}`}>
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isHero ? "text-primary-foreground/90 max-w-sm" : "text-muted-foreground"}`}>
                    {f.desc}
                  </p>
                  {isHero && (
                    <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-medium tracking-widest uppercase opacity-90">
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
