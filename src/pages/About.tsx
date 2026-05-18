import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  FileText,
  Layers,
  Lightbulb,
  Mountain,
  Settings2,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import mountainDay from "@/assets/about/mountain-day.jpg";
import mountainNight from "@/assets/about/mountain-night.jpg";
import summerMountain from "@/assets/about/summer-mountain.jpg";
import valleyAerial from "@/assets/about/valley-aerial.jpg";
import elbrusGondola from "@/assets/about/elbrus-gondola.jpg";

const competencies = [
  { icon: FileText, title: "Разработка исполнительной документации" },
  { icon: Settings2, title: "Техническое сопровождение объектов" },
  { icon: Compass, title: "Геодезическое сопровождение объектов" },
  { icon: Layers, title: "Инженерное сопровождение" },
  { icon: Mountain, title: "Геомониторинг" },
  { icon: ShieldCheck, title: "Взаимодействие со строительным контролем" },
];

const advantages = [
  {
    icon: Layers,
    title: "Комплексный подход",
    desc: "Закрываем все вопросы — от геодезического колышка до итоговой сертификации объекта.",
  },
  {
    icon: Lightbulb,
    title: "Инновации",
    desc: "Использование автоматизированных систем мониторинга и BIM-технологий при корректировке проектов.",
  },
  {
    icon: Users,
    title: "Экспертность",
    desc: "Команда дипломированных инженеров с глубоким пониманием специфики регионального строительства и сложных геологических условий.",
  },
  {
    icon: Settings2,
    title: "Корректировка проектов",
    desc: "Адаптация проектных решений под актуальные условия строительства.",
  },
];

const departments = [
  "Отдел формирования и ведения ИД по общестроительным работам",
  "Отдел ведения ИД по инженерным сетям",
  "Отдел ведения ИД по инженерной защите и специальным инженерным сооружениям",
  "Отдел геодезического сопровождения в строительстве",
  "Собственный Орган по сертификации",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={mountainDay}
              alt="Горный пейзаж Кавказа"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          </div>

          <div className="container relative">
            <div className="max-w-3xl">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-6 block">
                О компании
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8 whitespace-nowrap">
                <span className="text-foreground">ООО</span>{" "}
                <span className="text-gradient">«КАВКАЗ-ИНЖИРИНГ»</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
                Точность в расчётах, надёжность в исполнении.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-28 border-t border-border/60">
          <div className="container grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-foreground/85 text-lg leading-relaxed">
                Мы специализируемся на комплексном сопровождении сложных инфраструктурных объектов, обеспечивая <span className="text-foreground font-semibold">точность</span>, <span className="text-foreground font-semibold">безопасность</span> и полное соответствие строительных процессов государственным стандартам и проектным решениям.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Заботимся о безопасности и условиях труда сотрудников — результаты <Link to="/sout" className="text-accent hover:underline">специальной оценки условий труда (СОУТ)</Link> опубликованы в открытом доступе.
              </p>
              <div className="rounded-3xl bg-gradient-brand p-8 md:p-10 text-primary-foreground shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={20} />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase opacity-90">
                    Наша миссия
                  </span>
                </div>
                <p className="text-lg md:text-xl leading-relaxed">
                  Обеспечение технологического превосходства и безопасности объектов строительства через внедрение точных инженерных решений, безупречное ведение документации и профессиональный контроль на каждом этапе жизненного цикла проекта.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <img
                src={mountainDay}
                alt="Горный пейзаж Кавказа"
                className="rounded-3xl object-cover h-64 w-full row-span-2"
              />
              <img
                src={summerMountain}
                alt="Летние горы"
                className="rounded-3xl object-cover h-[124px] w-full"
              />
              <img
                src={valleyAerial}
                alt="Долина с высоты"
                className="rounded-3xl object-cover h-[124px] w-full"
              />
            </div>
          </div>
        </section>

        {/* COMPETENCIES */}
        <section className="py-24 md:py-32 bg-secondary/20 border-y border-border/60">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                Наши компетенции
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Что мы делаем <span className="text-gradient">профессионально</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {competencies.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="group rounded-3xl border border-border/60 bg-gradient-card p-7 hover:border-accent/40 transition-smooth"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-accent/60 mb-1 block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ADVANTAGES with image */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                Наши преимущества
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Почему нам <span className="text-gradient">доверяют</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[420px] shadow-card">
                <img
                  src={mountainNight}
                  alt="Кавказские горы ночью"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3 text-accent">
                    <Award size={18} />
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase">
                      Качество
                    </span>
                  </div>
                  <p className="text-foreground text-xl font-semibold leading-snug">
                    Безупречное ведение документации и контроль на каждом этапе жизненного цикла проекта.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {advantages.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={a.title}
                      className="rounded-3xl border border-border/60 bg-card/40 p-7 hover:border-accent/40 transition-smooth"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{a.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* GOAL */}
        <section className="relative py-28 md:py-36 overflow-hidden border-y border-border/60">
          <div className="absolute inset-0">
            <img
              src={valleyAerial}
              alt="Долина с высоты"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
          </div>

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-6 block">
                Наша цель
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Стать ведущим партнёром для крупнейших застройщиков и государственных заказчиков в <span className="text-gradient">Северо-Кавказском регионе</span> и за его пределами.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Гарантируем соответствие возводимых объектов самым строгим государственным и международным стандартам.
              </p>
            </div>
          </div>
        </section>

        {/* STRUCTURE */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                  Структура компании
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Профильные <span className="text-gradient">подразделения</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Для эффективного управления проектами в компании сформированы профильные подразделения, каждое из которых отвечает за свою область экспертизы.
                </p>
                <img
                  src={summerMountain}
                  alt="Горы Кавказа"
                  className="rounded-3xl w-full h-64 object-cover hidden lg:block"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                {departments.map((d, i) => (
                  <div
                    key={d}
                    className="group flex items-start gap-5 rounded-3xl border border-border/60 bg-gradient-card p-6 md:p-7 hover:border-accent/40 transition-smooth"
                  >
                    <span className="text-3xl font-mono font-bold text-accent/40 leading-none w-12 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-foreground/90 leading-relaxed font-medium">{d}.</p>
                    </div>
                    <CheckCircle2
                      size={22}
                      className="text-accent shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-smooth"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <div className="rounded-3xl bg-gradient-brand p-10 md:p-16 text-primary-foreground shadow-elegant text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Обсудим ваш проект?
              </h2>
              <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8">
                Свяжитесь с нами — расскажем, как обеспечим качество и безопасность вашего объекта.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contacts">
                    Связаться с нами <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outlineLight" size="lg" asChild>
                  <Link to="/portfolio">Наши проекты</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
