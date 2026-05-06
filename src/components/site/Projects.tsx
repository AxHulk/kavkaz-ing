import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mamison from "@/assets/project-mamison.jpg";
import veduchi from "@/assets/project-veduchi.jpg";
import elbrus from "@/assets/projects/elbrus/01.jpg";

const projects = [
  {
    slug: "mamison",
    title: "Мамисон",
    img: mamison,
    desc: "Инженерное сопровождение строительства гаража ратраков и СИС.",
    tag: "Северная Осетия",
  },
  {
    slug: "veduchi",
    title: "Ведучи",
    img: veduchi,
    desc: "Техническое сопровождение создания системы искусственного снегообразования.",
    tag: "Чеченская Республика",
  },
  {
    slug: "elbrus",
    title: "Эльбрус",
    img: elbrus,
    desc: "Система искусственного снегообразования (СИС) и Альп-городок.",
    tag: "Кабардино-Балкария",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
              Портфолио
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Наши <span className="text-gradient">проекты</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Реализованные проекты горнолыжных курортов по всей России.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="#projects">Все проекты <ArrowRight /></a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-elegant transition-smooth"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

              <div className="relative h-full flex flex-col justify-end p-7">
                <span className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3 font-semibold">
                  {p.tag}
                </span>
                <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-3">
                  <Button variant="brand" size="sm" asChild>
                    <Link to={`/portfolio/${p.slug}`}>Подробнее</Link>
                  </Button>
                  <Link to="/portfolio" className="text-xs text-muted-foreground hover:text-accent transition-smooth inline-flex items-center gap-1.5">
                    Все проекты <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
