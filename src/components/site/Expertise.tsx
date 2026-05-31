import { CheckCircle2, FileText, Compass, Activity } from "lucide-react";

const docPoints = [
  "сбор исходных данных",
  "анализ рабочей документации",
  "оформление схем, журналов и актов в соответствии с требованиями нормативных документов и регламентов Заказчика",
];

const docServices = [
  "оформление исполнительных схем и чертежей",
  "подготовка актов освидетельствования скрытых работ",
  "сбор и систематизация сертификатов и паспортов качества",
  "оформление журналов производства работ",
  "подготовка комплектов документации для сдачи Заказчику",
];

const geoStages = [
  { name: "Подготовительный", desc: "Заключение договора, изучение материалов, технического задания и документации." },
  { name: "Полевой", desc: "Группа геодезистов с высокоточным оборудованием выезжает на объект для замеров и изысканий." },
  { name: "Камеральный", desc: "Расчёты, составление отчётной документации, схем, планов и чертежей." },
];

const geoReport = [
  "информация об объекте, участке и рельефе местности",
  "результаты геодезических изысканий",
  "детальная картина местности",
  "схемы конструктивных элементов сооружения",
  "аксонометрия по подземным и надземным объектам, разрезы, профили",
  "исполнительные инженерные планы и чертежи с объёмами работ",
];

const monitoringStages = [
  {
    n: "01",
    title: "Подготовительный этап",
    desc: "Изучаем проектную документацию, анализируем инженерно-геологические условия, разрабатываем программу мониторинга и календарный план.",
  },
  {
    n: "02",
    title: "Установка оборудования",
    desc: "Монтируем инклинометры, пьезометры, реперы и марки. Все приборы проходят калибровку перед началом эксплуатации.",
  },
  {
    n: "03",
    title: "Измерения и наблюдения",
    desc: "Ведём подробные журналы наблюдений с учётом погодных условий, вибраций и изменений в технологии работ.",
  },
  {
    n: "04",
    title: "Анализ данных",
    desc: "Математическая обработка, графики, сопоставление с предельно допустимыми значениями. Внеплановые заключения при критических изменениях.",
  },
];

const SectionHeader = ({ icon: Icon, eyebrow, title }: { icon: any; eyebrow: string; title: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
      <Icon size={26} />
    </div>
    <div>
      <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase block mb-1">
        {eyebrow}
      </span>
      <h3 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h3>
    </div>
  </div>
);

export const Expertise = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-secondary/20 border-y border-border/60">
      <div className="container space-y-24">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
            Направления работы
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Документация и инженерное <span className="text-gradient">сопровождение</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <span className="text-foreground font-semibold">ООО «КАВКАЗ-ИНЖИНИРИНГ»</span> разрабатывает документацию для любых видов строительных работ. Беремся за задачи любой сложности и объёма, имеем опыт работы со всеми типами объектов.
          </p>
        </div>

        {/* Исполнительная документация */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader icon={FileText} eyebrow="Направление 01" title="Исполнительная документация" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Подготовка и ведение исполнительной документации — комплексная работа, которая включает:
            </p>
            <ul className="space-y-3 mb-8">
              {docPoints.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span>{p}.</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Услуги предоставляются как разово, так и в формате полного сопровождения объекта.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-card border border-border/60 p-8 md:p-10 shadow-card">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
              В перечень услуг входит
            </h4>
            <ul className="space-y-4">
              {docServices.map((s, i) => (
                <li key={s} className="flex gap-4 items-start pb-4 border-b border-border/40 last:border-0 last:pb-0">
                  <span className="text-2xl font-mono font-bold text-accent/40 leading-none w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{s}.</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Геодезическое сопровождение */}
        <div>
          <SectionHeader icon={Compass} eyebrow="Направление 02" title="Геодезическое сопровождение" />
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Комплексная услуга в ходе строительных работ — определение точного позиционирования сооружений и элементов конструкции в соответствии с проектными данными, ГОСТом, допусками СНиП и прочей нормативной документацией.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Цель геодезического сопровождения — обеспечить <span className="text-foreground font-semibold">качество</span> и <span className="text-foreground font-semibold">надёжность</span> возводимой конструкции. Сопровождение может носить как постоянный, так и временный характер в зависимости от специфики объекта.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {geoStages.map((s, i) => (
              <div
                key={s.name}
                className="relative rounded-3xl bg-gradient-card border border-border/60 p-7 hover:border-accent/40 transition-smooth"
              >
                <div className="text-5xl font-mono font-bold text-accent/30 mb-4">
                  0{i + 1}
                </div>
                <h5 className="text-xl font-semibold mb-3">{s.name} этап</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-brand p-8 md:p-12 text-primary-foreground shadow-elegant">
            <h4 className="text-2xl md:text-3xl font-bold mb-3">Результат сопровождения</h4>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              Финальная стадия — детальный отчёт, который передаётся заказчику. В отчёт включаются:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {geoReport.map((r) => (
                <div key={r} className="flex gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-1 opacity-80" />
                  <span className="text-primary-foreground/95 text-sm leading-relaxed">{r}.</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Геотехнический мониторинг */}
        <div>
          <SectionHeader icon={Activity} eyebrow="Направление 03" title="Геотехнический мониторинг" />

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 rounded-3xl bg-gradient-card border border-border/60 p-8 md:p-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Комплекс работ по наблюдению за поведением конструкций строящегося или реконструируемого объекта, его основания и окружающего грунтового массива. Мониторинг начинается с подготовки строительной площадки и продолжается весь период строительства, а также год после завершения.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Особую важность приобретает при точечной застройке в сложившихся микрорайонах, где существует риск просадок и деформаций существующих зданий.
              </p>
            </div>

            <div className="rounded-3xl bg-accent/10 border border-accent/30 p-8 flex flex-col justify-center">
              <div className="text-5xl font-bold text-accent mb-2">365<span className="text-2xl">+</span></div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                дней наблюдения после завершения строительства для контроля устойчивости и безопасности.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Основные цели",
                desc: "Контроль состояния грунтового массива, выявление деформаций, изменений напряжённо-деформированного состояния и динамики подземных вод.",
              },
              {
                title: "Задачи при работе",
                desc: "Измерение осадок фундаментов, деформаций конструкций, контроль уровня и химического состава грунтовых вод для прогноза коррозионных процессов.",
              },
              {
                title: "Безопасность",
                desc: "Система раннего предупреждения с предельно допустимыми значениями. При превышении — корректировка технологии или усиление конструкций.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-border/60 bg-card/40 p-7 hover:border-accent/40 transition-smooth"
              >
                <h5 className="text-lg font-semibold mb-3">{c.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Этапы <span className="text-gradient">проведения</span>
          </h4>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {monitoringStages.map((s) => (
              <div
                key={s.n}
                className="relative rounded-3xl bg-gradient-card border border-border/60 p-7 hover:-translate-y-1 hover:border-accent/40 transition-smooth"
              >
                <div className="absolute top-6 right-6 text-xs font-mono font-semibold tracking-widest text-accent/60">
                  {s.n}
                </div>
                <div className="w-10 h-1 bg-accent rounded-full mb-5" />
                <h5 className="text-lg font-semibold mb-3 leading-snug">{s.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border/60 bg-secondary/40 p-8 md:p-10 text-center max-w-3xl mx-auto">
            <h5 className="text-xl font-semibold mb-3">Результаты мониторинга</h5>
            <p className="text-muted-foreground leading-relaxed">
              Все данные оформляются в виде отчётов с таблицами, графиками динамики и схемами расположения приборов. Отчётность готовится в оговорённые сроки, а при резких изменениях параметров формируется внеплановое заключение.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
