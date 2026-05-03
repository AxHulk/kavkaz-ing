import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Lightbox } from "@/components/site/Lightbox";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) return <Navigate to="/portfolio" replace />;

  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
  const gallery = project.gallery;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        {/* Hero with cover */}
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />

          <div className="container relative h-full flex flex-col justify-end pb-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth mb-8 w-fit"
            >
              <ArrowLeft size={16} /> Все проекты
            </Link>

            <div className="flex items-center gap-4 mb-6 text-xs tracking-[0.3em] uppercase">
              <span className="text-accent font-semibold">Проект</span>
              <span className="h-px w-12 bg-border" />
              <span className="text-muted-foreground inline-flex items-center gap-2">
                <MapPin size={12} /> {project.location}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              {project.subtitle}
            </p>
          </div>
        </section>

        {/* Meta */}
        <section className="container py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                О проекте
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Инженерное сопровождение в условиях высокогорья
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <aside className="lg:col-span-5 lg:pl-8 lg:border-l border-border/40">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                    Состав работ
                  </dt>
                  <dd>
                    <ul className="space-y-2">
                      {project.scope.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        {gallery.length > 0 && (
          <section className="container pb-24">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-3 block">
                  Галерея
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {gallery.length} фото с объекта
                </h2>
              </div>
            </div>

            {/* Mosaic grid */}
            <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px]">
              {gallery.map((src, i) => {
                // varied layout pattern
                const pattern = [
                  "col-span-12 md:col-span-8 row-span-2",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-6 row-span-2",
                  "col-span-12 md:col-span-6 row-span-2",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-2",
                  "col-span-12 md:col-span-8 row-span-2",
                  "col-span-12 md:col-span-12 row-span-2",
                ];
                return (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth ${pattern[i % pattern.length]}`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} — фото ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute bottom-3 left-4 text-[10px] tracking-[0.3em] uppercase text-foreground/90 opacity-0 group-hover:opacity-100 transition-smooth">
                      {String(i + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Next project */}
        <section className="border-t border-border/40">
          <Link
            to={`/portfolio/${next.slug}`}
            className="container py-20 md:py-28 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent mb-3 block">
                Следующий проект
              </span>
              <h3 className="text-4xl md:text-6xl font-bold group-hover:text-gradient transition-smooth">
                {next.title}
              </h3>
              <p className="text-muted-foreground mt-3">{next.subtitle}</p>
            </div>
            <Button variant="brand" size="lg" asChild>
              <span>Смотреть проект</span>
            </Button>
          </Link>
        </section>
      </main>
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i! - 1 + gallery.length) % gallery.length)}
          onNext={() => setLightboxIndex((i) => (i! + 1) % gallery.length)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
