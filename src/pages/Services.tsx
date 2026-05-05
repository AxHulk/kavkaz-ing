import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  Layers,
  Mountain,
  ShieldCheck,
  Target,
  TrendingDown,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/services/hero.jpg";
import geoControlImg from "@/assets/services/geo-control.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import executiveImg from "@/assets/services/executive-survey.jpg";
import geoBaseImg from "@/assets/services/geo-base.jpg";
import elbrusResort from "@/assets/projects/elbrus/01.jpg";
import veduchiResort from "@/assets/projects/veduchi/01.jpg";
import mamisonResort from "@/assets/projects/mamison/01.jpg";
import elbrusResort2 from "@/assets/projects/elbrus/02.jpg";

const keyTasks = [
  {
    icon: TrendingDown,
    title: "Минимизация рисков",
    desc: "Своевременное выявление отклонений от проекта и корректировка документации.",
  },
  {
    icon: ShieldCheck,
    title: "Легитимизация работ",
    desc: "Качественное формирование исполнительной документации для беспрепятственной сдачи объектов и закрытия объёмов.",
  },
  {
    icon: Target,
    title: "Точность исполнения",
    desc: "Обеспечение филигранного геодезического контроля и мониторинга на всех этапах возведения.",
  },
  {
    icon: Workflow,
    title: "Системный подход",
    desc: "Взаимодействие с органами строительного контроля для оперативного подтверждения выполненных работ.",
  },
];

const services = [
  {
    icon: Mountain,
    title: "Техническое и геодезическое сопровождение объектов",
    desc: "От этапа котлована до ввода в эксплуатацию.",
    img: elbrusResort,
  },
  {
    icon: Activity,
    title: "Инженерное сопровождение и геомониторинг",
    desc: "Постоянный контроль за состоянием конструкций и грунтов.",
    img: veduchiResort,
  },
  {
    icon: FileText,
    title: "Разработка исполнительной документации",
    desc: "Формирование полного пакета документов (АОСР, АОК, исполнительные схемы).",
    img: mamisonResort,
  },
  {
    icon: Layers,
    title: "Взаимодействие со строительным контролем",
    desc: "Защита и закрытие объёмов выполненных работ по договору.",
    img: elbrusResort2,
  },
];

const additionalServices = [
  { title: "Создание геодезической разбивочной основы", img: geoBaseImg, icon: Compass },
  { title: "Геодезический контроль точности", img: geoControlImg, icon: Target },
  { title: "Исполнительная съёмка", img: executiveImg, icon: FileText },
  { title: "Инженерные изыскания", img: engineeringImg, icon: Layers },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Монтаж канатной дороги в горах" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="container relative">
          <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-6 block">
            Услуги
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Наши <span className="text-gradient">услуги</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Мы обеспечиваем точность, безопасность и полное соответствие строительных процессов государственным стандартам и проектным решениям.
          </p>
        </div>
      </section>

      {/* Key Tasks */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
              01 / Ключевые задачи
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Технологическое <span className="text-gradient">превосходство</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              для обеспечения технологического превосходства и безопасности объектов строительства.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {keyTasks.map((t, i) => (
              <article
                key={t.title}
                className="group relative rounded-3xl bg-gradient-card border border-border/60 p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground/50">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-elegant">
                  <t.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 md:py-32 relative">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
              02 / Услуги
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Что мы <span className="text-gradient">делаем</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative rounded-3xl overflow-hidden border border-border/60 bg-gradient-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-background/40 backdrop-blur-md border border-foreground/10 flex items-center justify-center">
                    <s.icon className="text-accent" size={22} />
                  </div>
                  <div className="absolute top-5 right-5 text-xs font-mono text-foreground/70">
                    0{i + 1}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 leading-snug">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Geomonitoring highlight */}
      <section className="py-24 md:py-32">
        <div className="container">
          <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
            03 / Геомониторинг
          </span>
          <div className="rounded-3xl border border-border/60 bg-gradient-card shadow-card overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-5 mb-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <Activity className="text-accent" size={26} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Геотехнический мониторинг</h3>
                  <p className="text-sm text-muted-foreground mt-1">(геомониторинг)</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl mb-8">
                Геомониторинг — система слежения за параметрами, характеризующими основания зданий или сооружений (т.е. геологической среды), которая обеспечивает безопасное и эффективное осуществление строительно-технологических процессов, ввод и последующую эксплуатацию зданий и сооружений.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-accent">Целью геомониторинга</span>{" "}
                    <span className="text-muted-foreground">
                      является обеспечение высокого качества строительства и сохранности зданий и сооружений окружающей застройки.
                    </span>
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-accent">Задача геомониторинга</span>{" "}
                    <span className="text-muted-foreground">
                      — регулярное отслеживание поведения основания строящегося сооружения и его конструкций, окружающих его зданий, а также принятие мер по обеспечению безопасного строительства и корректировки конструктивно-технологических решений.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={geoBaseImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="container relative">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
              04 / Дополнительно
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Можем оказать <span className="text-gradient">услуги по</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s) => (
              <article
                key={s.title}
                className="group relative rounded-2xl overflow-hidden border border-border/60 aspect-[4/5] shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="w-11 h-11 rounded-xl bg-background/40 backdrop-blur-md border border-foreground/10 flex items-center justify-center">
                    <s.icon className="text-accent" size={20} />
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="rounded-3xl bg-gradient-brand p-10 md:p-16 shadow-elegant text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Обсудим ваш проект?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Расскажите о задаче — подготовим решение под объект любой сложности.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contacts">
                  Связаться <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/portfolio">Наши проекты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
