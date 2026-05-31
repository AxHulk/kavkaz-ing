import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import mountainDay from "@/assets/about/mountain-day.jpg";

const sections = [
  {
    id: "obshie",
    title: "1. Общие положения",
    items: [
      "Политика обработки персональных данных в ООО «КАВКАЗ-ИНЖИНИРИНГ» (далее – Политика) разработана на основании Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» в целях обеспечения защиты прав и свобод субъектов персональных данных.",
      "Целью Политики является установление основных принципов, условий и подходов к обработке и обеспечению безопасности персональных данных при их обработке ООО «КАВКАЗ-ИНЖИНИРИНГ».",
      "ООО «КАВКАЗ-ИНЖИНИРИНГ», являясь Оператором, обеспечивает защиту прав и свобод субъектов при обработке их персональных данных и принимает меры для выполнения обязанностей, предусмотренных Федеральным законом № 152-ФЗ и принятыми в соответствии с ним нормативно-правовыми актами.",
      "Настоящая Политика действует в отношении всех процессов ООО «КАВКАЗ-ИНЖИНИРИНГ», связанных с обработкой персональных данных, и распространяется на отношения в области обработки персональных данных, возникшие как до, так и после её утверждения.",
      "Персональные данные являются конфиденциальной информацией, охраняемой в соответствии с действующим законодательством Российской Федерации.",
      "Обработка персональных данных осуществляется в соответствии с требованиями законодательства РФ, Роскомнадзора, ФСБ России, ФСТЭК России и иных регулирующих органов.",
      "Настоящая Политика обязательна для ознакомления и исполнения всеми лицами, допущенными к обработке персональных данных ООО «КАВКАЗ-ИНЖИНИРИНГ».",
    ],
  },
  {
    id: "terms",
    title: "2. Термины и определения",
    items: [
      "Персональные данные — любая информация, относящаяся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных).",
      "Обработка персональных данных — любое действие или совокупность действий, совершаемых с использованием средств автоматизации или без таковых: сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача, обезличивание, блокирование, удаление, уничтожение.",
      "Оператор — юридическое или физическое лицо, организующее и (или) осуществляющее обработку персональных данных, а также определяющее цели обработки.",
      "Обезличивание персональных данных — действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту.",
      "Трансграничная передача персональных данных — передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или юридическому лицу.",
    ],
  },
  {
    id: "osnovaniya",
    title: "3. Правовые основания обработки",
    intro:
      "Правовыми основаниями обработки персональных данных являются совокупность нормативных правовых актов, внутренних документов Общества, а также иных документов, в том числе:",
    list: [
      "Трудовой, Гражданский и Налоговый кодексы Российской Федерации;",
      "Федеральный закон № 152-ФЗ «О персональных данных»;",
      "Федеральный закон № 149-ФЗ «Об информации, информационных технологиях и о защите информации»;",
      "Федеральный закон № 115-ФЗ «О противодействии легализации доходов, полученных преступным путём, и финансированию терроризма»;",
      "Федеральный закон № 402-ФЗ «О бухгалтерском учёте»;",
      "Согласие субъекта на обработку персональных данных;",
      "Договоры, заключаемые между ООО «КАВКАЗ-ИНЖИНИРИНГ» и субъектами персональных данных или контрагентами.",
    ],
  },
  {
    id: "celi",
    title: "4. Цели обработки и категории данных",
    items: [
      "Обработка персональных данных ограничивается достижением конкретных, заранее определённых и законных целей. Не допускается обработка, несовместимая с целями сбора.",
      "Содержание и объём обрабатываемых данных соответствуют заявленным целям обработки и не являются избыточными.",
      "Перечень целей обработки и категорий субъектов утверждается приказом Общества и публикуется на официальном сайте.",
      "Обработка специальных категорий персональных данных, касающихся расовой принадлежности, политических взглядов, религиозных или философских убеждений, не осуществляется.",
      "Обработка биометрических персональных данных осуществляется на основании, определённом законодательством РФ, с согласия субъекта.",
    ],
  },
  {
    id: "principy",
    title: "5. Условия и принципы обработки",
    intro: "Обработка персональных данных осуществляется на основе следующих принципов:",
    list: [
      "законность и справедливость целей и способов обработки;",
      "соответствие целей обработки целям, заранее определённым при сборе данных;",
      "соответствие объёма и характера обрабатываемых данных целям обработки;",
      "достоверность данных и их достаточность для целей обработки;",
      "недопустимость объединения баз данных, созданных для несовместимых целей;",
      "хранение данных в форме, позволяющей определить субъекта не дольше, чем этого требуют цели обработки.",
    ],
    after: [
      "К обработке персональных данных допускаются только те работники, должностные обязанности которых обусловливают такую обработку.",
      "Общество обеспечивает конфиденциальность персональных данных и не раскрывает их третьим лицам без согласия субъекта, если иное не предусмотрено законодательством.",
      "Обеспечение безопасности персональных данных осуществляется в рамках единой комплексной системы организационно-технических мероприятий с применением сертифицированных средств защиты информации.",
      "Сроки обработки персональных данных определяются законодательством РФ, сроком действия договора, сроками хранения архивных документов и сроком согласия субъекта.",
      "В случае отзыва согласия Общество прекращает обработку и уничтожает персональные данные в сроки, установленные Федеральным законом № 152-ФЗ.",
      "Субъект персональных данных имеет право на получение информации об обработке его данных, а также на отзыв согласия на обработку.",
    ],
  },
  {
    id: "otvetstvennost",
    title: "6. Ответственность",
    items: [
      "Общество назначает ответственное лицо за организацию обработки персональных данных, осуществляющее управление и методологическое сопровождение, включая внутренний контроль.",
      "Ответственность за нарушение требований законодательства РФ и внутренних документов Общества определяется в соответствии с законодательством Российской Федерации.",
      "Лица, виновные в нарушении норм, регулирующих обработку и защиту персональных данных, несут дисциплинарную, административную, гражданско-правовую или уголовную ответственность.",
    ],
  },
  {
    id: "aktualizaciya",
    title: "7. Порядок актуализации",
    items: [
      "Ответственным за пересмотр настоящей Политики является ООО «КАВКАЗ-ИНЖИНИРИНГ».",
      "Политика подлежит пересмотру в случае изменения законодательства РФ, а также по инициативе Общества, но не реже одного раза в три года.",
    ],
  },
  {
    id: "cookie",
    title: "8. Использование cookie",
    items: [
      "ООО «КАВКАЗ-ИНЖИНИРИНГ» (ОГРН 1252600004249) использует cookie — небольшие текстовые файлы, размещаемые на устройстве пользователя для персонализации сервисов и анализа использования сайта.",
      "Сайт использует сервис веб-аналитики Яндекс.Метрика, предоставляемый ООО «ЯНДЕКС» (119021, Россия, Москва, ул. Л. Толстого, 16). Собираемая информация передаётся для оценки использования сайта и формирования отчётов о его работе.",
      "Вы можете запретить сохранение cookie в настройках своего браузера. Продолжая работу с сайтом, Вы выражаете согласие на обработку Ваших персональных данных в соответствии с Федеральным законом № 152-ФЗ.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={mountainDay} alt="Горы Кавказа" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          </div>

          <div className="container relative">
            <div className="max-w-3xl">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-6 block">
                Правовая информация
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
                <span className="text-foreground">Политика</span>{" "}
                <span className="text-gradient">конфиденциальности</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
                Политика обработки персональных данных в ООО «КАВКАЗ-ИНЖИНИРИНГ», разработанная в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-24 border-t border-border/60">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase block">
                Назначение документа
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Защита прав и свобод <span className="text-gradient">субъектов</span> персональных данных
              </h2>
              <p className="text-foreground/85 text-lg leading-relaxed">
                Настоящая Политика устанавливает основные принципы, условия и подходы к обработке и обеспечению безопасности персональных данных в ООО «КАВКАЗ-ИНЖИНИРИНГ».
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Полная версия документа доступна для скачивания в формате PDF/DOCX и может быть запрошена дополнительно по электронной почте.
              </p>

              <a
                href="/docs/politika_konfidencialnosti.docx"
                download="Политика_конфиденциальности.docx"
                className="inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-gradient-card px-6 py-4 hover:border-accent/40 transition-smooth group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <FileText size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Скачать политику конфиденциальности</span>
                  <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                    <Download size={12} /> DOCX, полный текст документа
                  </span>
                </div>
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-brand p-8 md:p-10 text-primary-foreground shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase opacity-90">
                    Конфиденциальность
                  </span>
                </div>
                <p className="text-lg leading-relaxed">
                  Мы соблюдаем требования законодательства РФ и применяем организационные и технические меры для защиты персональных данных от неправомерного доступа.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 md:py-28 bg-secondary/20 border-y border-border/60">
          <div className="container max-w-4xl">
            <div className="space-y-14">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>

                  {section.intro && (
                    <p className="text-foreground/85 leading-relaxed mb-5">{section.intro}</p>
                  )}

                  {section.items && (
                    <ol className="space-y-4 list-decimal pl-5 marker:text-accent marker:font-semibold">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed pl-1">
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.list && (
                    <ul className="space-y-3 mt-2">
                      {section.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.after && (
                    <ol className="space-y-4 list-decimal pl-5 mt-6 marker:text-accent marker:font-semibold">
                      {section.after.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed pl-1">
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section className="py-24 md:py-28">
          <div className="container max-w-4xl">
            <div className="mb-10">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                Обратная связь
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                По вопросам обработки <span className="text-gradient">персональных данных</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border/60 bg-gradient-card p-6">
                <Mail className="text-accent mb-4" size={20} />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</div>
                <a href="mailto:info@kavkaz-ing.ru" className="text-foreground font-medium hover:text-accent transition-smooth">
                  info@kavkaz-ing.ru
                </a>
              </div>
              <div className="rounded-2xl border border-border/60 bg-gradient-card p-6">
                <Phone className="text-accent mb-4" size={20} />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Телефон</div>
                <a href="tel:+79187846121" className="text-foreground font-medium hover:text-accent transition-smooth">
                  +7 (918) 784-61-21
                </a>
              </div>
              <div className="rounded-2xl border border-border/60 bg-gradient-card p-6">
                <MapPin className="text-accent mb-4" size={20} />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Адрес</div>
                <p className="text-foreground font-medium leading-snug text-sm">
                  357502, Ставропольский край, г. Пятигорск, ул. Ермолова, д. 12, стр. 3
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <div className="rounded-3xl bg-gradient-brand p-10 md:p-16 text-primary-foreground shadow-elegant text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">Остались вопросы?</h2>
              <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8">
                Свяжитесь с нами — ответим на вопросы о порядке обработки и защиты персональных данных.
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

export default Privacy;
