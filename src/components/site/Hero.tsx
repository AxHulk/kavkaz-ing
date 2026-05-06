import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-mountains.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Кавказские горы"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md text-xs font-medium tracking-widest text-accent uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            ООО «КАВКАЗ-ИНЖИРИНГ»
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8">
            Проектируем будущее
            <br />
            <span className="text-gradient">горнолыжных курортов</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Точность в расчётах, надёжность в исполнении.<br />
            Исполнительная документация, геодезическое сопровождение и<br />
            геотехнический мониторинг для объектов любой сложности.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Наши услуги <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="outlineLight" size="lg" asChild>
              <Link to="/portfolio">Портфолио</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};
