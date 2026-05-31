import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight, ExternalLink, ShieldCheck, Send, Loader2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { extractDigits, formatPhone, isValidRuPhone } from "@/lib/phone";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты — КАВКАЗ-ИНЖИНИРИНГ";
    const desc = "Контакты ООО «КАВКАЗ-ИНЖИНИРИНГ»: г. Пятигорск, ул. Ермолова 12, стр. 3. Телефон +7 (918) 784-61-21, info@kavkaz-ing.ru.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = extractDigits(e.target.value);
    setPhone(formatPhone(digits));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow backspace to actually remove a digit even if a separator is selected
    if (e.key === "Backspace") {
      const target = e.currentTarget;
      const pos = target.selectionStart ?? 0;
      const value = target.value;
      // If char before cursor is non-digit, jump to previous digit and remove it
      if (pos > 0 && !/\d/.test(value[pos - 1])) {
        e.preventDefault();
        const before = value.slice(0, pos).replace(/\D+$/, "");
        const after = value.slice(pos);
        const digits = extractDigits(before.slice(0, -1) + after);
        setPhone(formatPhone(digits));
      }
    }
  };

  const handlePhoneFocus = () => {
    if (!phone) setPhone("+7 ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      toast({ title: "Заполните имя и фамилию", variant: "destructive" });
      return;
    }
    const digits = extractDigits(phone);
    if (!isValidRuPhone(digits)) {
      toast({ title: "Введите корректный номер телефона", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами в ближайшее время." });
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-5 block">
              Контакты
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Свяжитесь <span className="text-gradient">с нами</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Готовы обсудить проект, рассчитать стоимость работ или ответить
              на вопросы по сертификации.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="container mt-16">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 rounded-3xl bg-gradient-card border border-border/60 shadow-card p-8 md:p-10">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Адрес офиса</div>
                  <div className="text-lg font-medium leading-relaxed">
                    Российская Федерация, Ставропольский край,<br />
                    г. Пятигорск, ул. Ермолова, д. 12, стр. 3
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <a
                  href="tel:+79187846121"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/40 border border-border/40 hover:border-accent/40 transition-smooth group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Телефон</div>
                    <div className="font-medium group-hover:text-accent transition-smooth">+7 (918) 784-61-21</div>
                  </div>
                </a>
                <a
                  href="mailto:info@kavkaz-ing.ru"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/40 border border-border/40 hover:border-accent/40 transition-smooth group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                    <div className="font-medium group-hover:text-accent transition-smooth truncate">info@kavkaz-ing.ru</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Certification body card */}
            <a
              href="https://osp-kavkaz-ing.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-gradient-brand text-primary-foreground p-8 md:p-10 shadow-elegant flex flex-col justify-between"
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                  <ShieldCheck size={22} />
                </div>
                <div className="text-xs uppercase tracking-[0.3em] opacity-80 mb-3">Орган по сертификации</div>
                <h3 className="text-2xl font-bold leading-tight mb-3">
                  ОСП «КАВКАЗ-ИНЖИНИРИНГ»
                </h3>
                <p className="text-sm opacity-90 mb-6">
                  Аккредитованный орган по сертификации. Подробности и услуги — на отдельном сайте.
                </p>
              </div>
              <div className="relative flex items-center justify-between gap-3">
                <span className="text-sm font-medium underline-offset-4 group-hover:underline truncate">
                  osp-kavkaz-ing.ru
                </span>
                <ExternalLink size={18} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="relative mt-4 pt-4 border-t border-white/20 text-sm flex items-center gap-2 opacity-90">
                <Mail size={14} /> osp@kavkaz-ing.ru
              </div>
            </a>
          </div>
        </section>

        {/* Form + map-like panel */}
        <section className="container mt-10">
          <div className="grid lg:grid-cols-5 gap-5">
            <div className="lg:col-span-3 rounded-3xl bg-gradient-card border border-border/60 shadow-card p-8 md:p-12">
              <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase mb-4 block">
                Обратная связь
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Оставьте заявку</h2>
              <p className="text-muted-foreground mb-8">Мы перезвоним в течение рабочего дня.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value.slice(0, 80))}
                      placeholder="Иванов"
                      autoComplete="family-name"
                      className="h-12 bg-secondary/40 border-border/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value.slice(0, 80))}
                      placeholder="Иван"
                      autoComplete="given-name"
                      className="h-12 bg-secondary/40 border-border/60"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    ref={phoneRef}
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    onFocus={handlePhoneFocus}
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 bg-secondary/40 border-border/60 font-medium tracking-wide"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? <Loader2 className="animate-spin" /> : <Send />}
                  {submitting ? "Отправка…" : "Отправить заявку"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            </div>

            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border/60 shadow-card relative min-h-[420px] bg-secondary/40">
              <iframe
                title="Карта офиса в Пятигорске"
                src="https://yandex.ru/map-widget/v1/?text=Пятигорск%2C%20улица%20Ермолова%2012%20стр%203&z=16"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mt-16">
          <div className="rounded-3xl bg-gradient-brand text-primary-foreground p-10 md:p-14 flex flex-wrap items-center justify-between gap-6 shadow-elegant">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Хотите увидеть наши работы?</h3>
              <p className="opacity-90">Реализованные проекты на курортах Северного Кавказа.</p>
            </div>
            <Button asChild variant="outlineLight" size="lg">
              <Link to="/portfolio">Перейти в портфолио <ArrowRight /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
