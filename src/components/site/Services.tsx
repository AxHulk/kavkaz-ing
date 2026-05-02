import { ArrowUpRight } from "lucide-react";
import docsImg from "@/assets/service-docs.jpg";
import geodesyImg from "@/assets/service-geodesy.jpg";
import monitoringImg from "@/assets/service-monitoring.jpg";
import controlImg from "@/assets/service-control.jpg";

const services = [
  {
    title: "Исполнительная документация",
    desc: "Полный пакет: АОСР, АОК, исполнительные схемы, журналы и акты по нормативам Заказчика.",
    img: docsImg,
  },
  {
    title: "Геодезическое сопровождение",
    desc: "Точное позиционирование сооружений и элементов конструкций — от подготовки до камеральной обработки.",
    img: geodesyImg,
  },
  {
    title: "Геотехнический мониторинг",
    desc: "Постоянный контроль за состоянием грунтов, конструкций и подземных вод на всех этапах.",
    img: monitoringImg,
  },
  {
    title: "Взаимодействие со стройконтролем",
    desc: "Защита и закрытие объёмов выполненных работ по договору, оперативное согласование.",
    img: controlImg,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
            01 / Услуги
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Наши <span className="text-gradient">услуги</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Беремся за разработку документации любой сложности и объёма. Опыт работы со всеми видами объектов горнолыжной инфраструктуры.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl overflow-hidden bg-gradient-card border border-border/60 shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/40 backdrop-blur-md border border-foreground/10 flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-mono text-muted-foreground">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
