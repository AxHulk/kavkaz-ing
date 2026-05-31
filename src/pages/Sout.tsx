import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import mountainDay from "@/assets/about/mountain-day.jpg";

const documents = [
  {
    title: "Перечень рекомендуемых мероприятий по улучшению условий труда",
    description:
      "Документ содержит перечень мероприятий, направленных на улучшение условий и охраны труда работников ООО «КАВКАЗ-ИНЖИНИРИНГ».",
    file: "/docs/perechen_meropriyatiy_2026.pdf",
    filename: "Перечень_мероприятий_2026.pdf",
  },
  {
    title: "Сводная ведомость результатов проведения СОУТ",
    description:
      "Сводная ведомость результатов проведения специальной оценки условий труда на рабочих местах компании.",
    file: "/docs/svodnaya_vedomost_sout.pdf",
    filename: "Сводная_ведомость_СОУТ.pdf",
  },
];

const Sout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={mountainDay}
              alt="Горы Кавказа"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          </div>

          <div className="container relative">
            <div className="max-w-3xl">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-6 block">
                Охрана труда
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
                <span className="text-foreground">Специальная оценка</span>{" "}
                <span className="text-gradient">условий труда</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
                В соответствии с Федеральным законом № 426-ФЗ публикуем результаты специальной оценки условий труда (СОУТ) на рабочих местах ООО «КАВКАЗ-ИНЖИНИРИНГ».
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-28 border-t border-border/60">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase block">
                О процедуре
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Что такое <span className="text-gradient">СОУТ</span>
              </h2>
              <p className="text-foreground/85 text-lg leading-relaxed">
                Специальная оценка условий труда — это единый комплекс последовательно осуществляемых мероприятий по идентификации вредных и опасных факторов производственной среды и трудового процесса и оценке уровня их воздействия на работника.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                По результатам СОУТ устанавливаются классы и подклассы условий труда на рабочих местах, формируется отчёт и разрабатывается перечень мероприятий по улучшению условий и охраны труда.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-brand p-8 md:p-10 text-primary-foreground shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase opacity-90">
                    Прозрачность
                  </span>
                </div>
                <p className="text-lg leading-relaxed">
                  Мы открыто публикуем результаты СОУТ, подтверждая высокие стандарты безопасности и заботу о сотрудниках компании.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="py-24 md:py-32 bg-secondary/20 border-y border-border/60">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                Документы
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Скачать <span className="text-gradient">результаты</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {documents.map((doc) => (
                <a
                  key={doc.file}
                  href={doc.file}
                  download={doc.filename}
                  className="group rounded-3xl border border-border/60 bg-gradient-card p-7 md:p-8 hover:border-accent/40 transition-smooth flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <FileText size={22} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug flex-1">
                      {doc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {doc.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                    <Download size={16} /> Скачать PDF
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="rounded-3xl bg-gradient-brand p-10 md:p-16 text-primary-foreground shadow-elegant text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Остались вопросы?
              </h2>
              <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8">
                Свяжитесь с нами — ответим на вопросы по результатам СОУТ и условиям труда.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contacts">
                    Связаться с нами <ArrowRight size={18} />
                  </Link>
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

export default Sout;
