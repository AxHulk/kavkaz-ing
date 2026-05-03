import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mb-20 md:mb-28">
          <div className="max-w-4xl">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-6 block">
              Портфолио
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05]">
              Реализованные <span className="text-gradient">проекты</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Инженерное сопровождение строительства горнолыжных курортов и инфраструктуры
              в высокогорных районах Северного Кавказа.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden">
            {[
              { v: "3", l: "Курорта" },
              { v: "10+", l: "Объектов" },
              { v: "3000+", l: "Метров над у. м." },
              { v: "365", l: "Дней мониторинга" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{s.v}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Project list */}
        <section className="container">
          <div className="space-y-6">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                to={`/portfolio/${p.slug}`}
                className="group relative grid md:grid-cols-12 gap-0 rounded-3xl overflow-hidden bg-gradient-card border border-border/40 hover:border-accent/40 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent md:from-transparent md:to-card/50" />
                </div>

                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                      <span className="text-accent font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-10 bg-border" />
                      <span>{p.location}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-gradient transition-smooth">
                      {p.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                      {p.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {p.scope.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full bg-secondary/60 text-foreground/80 border border-border/40"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-smooth">
                      Смотреть проект
                      <span className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground">
                        <ArrowUpRight size={16} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
