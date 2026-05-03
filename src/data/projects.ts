import mamison01 from "@/assets/projects/mamison/01.jpg";
import mamison02 from "@/assets/projects/mamison/02.jpg";
import mamison03 from "@/assets/projects/mamison/03.jpg";
import mamison04 from "@/assets/projects/mamison/04.jpg";
import mamison05 from "@/assets/projects/mamison/05.jpg";
import mamison06 from "@/assets/projects/mamison/06.jpg";
import mamison07 from "@/assets/projects/mamison/07.jpg";
import mamison08 from "@/assets/projects/mamison/08.jpg";
import mamison09 from "@/assets/projects/mamison/09.jpg";
import mamison10 from "@/assets/projects/mamison/10.jpg";

import elbrusCover from "@/assets/projects/elbrus/01.jpg";
import elbrus01 from "@/assets/projects/elbrus/01.jpg";
import elbrus02 from "@/assets/projects/elbrus/02.jpg";
import elbrus03 from "@/assets/projects/elbrus/03.jpg";
import elbrus04 from "@/assets/projects/elbrus/04.jpg";
import elbrus05 from "@/assets/projects/elbrus/05.jpg";
import elbrus06 from "@/assets/projects/elbrus/06.jpg";
import elbrus07 from "@/assets/projects/elbrus/07.jpg";
import elbrus08 from "@/assets/projects/elbrus/08.jpg";
import elbrus09 from "@/assets/projects/elbrus/09.jpg";
import elbrus10 from "@/assets/projects/elbrus/10.jpg";

import veduchi01 from "@/assets/projects/veduchi/01.jpg";
import veduchi02 from "@/assets/projects/veduchi/02.jpg";
import veduchi03 from "@/assets/projects/veduchi/03.jpg";
import veduchi04 from "@/assets/projects/veduchi/04.jpg";
import veduchi05 from "@/assets/projects/veduchi/05.jpg";
import veduchi06 from "@/assets/projects/veduchi/06.jpg";
import veduchi07 from "@/assets/projects/veduchi/07.jpg";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  scope: string[];
  description: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "elbrus",
    title: "Эльбрус",
    subtitle: "Система искусственного снегообразования и Альп-городок",
    location: "Кабардино-Балкарская Республика",
    scope: [
      "Геодезическое сопровождение",
      "Исполнительная документация",
      "Геотехнический мониторинг",
      "Строительный контроль",
    ],
    description:
      "Комплексное инженерное сопровождение строительства системы искусственного снегообразования и модульного Альп-городка на высокогорном курорте «Эльбрус». Работы охватывают объекты канатных дорог, горнолыжных трасс и инфраструктуры на высотах свыше 3000 м.",
    cover: elbrusCover,
    gallery: [
      elbrus01, elbrus10, elbrus02, elbrus08, elbrus07,
      elbrus09, elbrus03, elbrus05, elbrus04, elbrus06,
    ],
  },
  {
    slug: "veduchi",
    title: "Ведучи",
    subtitle: "Техническое сопровождение создания Системы искусственного снегообразования",
    location: "Чеченская Республика",
    scope: [
      "Техническое сопровождение",
      "Геодезия",
      "Исполнительная документация",
      "Контроль качества",
    ],
    description:
      "Техническое сопровождение создания системы искусственного снегообразования всесезонного туристско-рекреационного комплекса «Ведучи». Работы включают геодезическое обеспечение, контроль монтажа инженерных систем и сопровождение объектов канатных дорог в условиях горного рельефа.",
    cover: veduchi01,
    gallery: [veduchi01, veduchi02, veduchi03, veduchi04, veduchi05, veduchi06, veduchi07],
  },
  {
    slug: "mamison",
    title: "Мамисон",
    subtitle: "Инженерное сопровождение строительства гаража ратраков и Системы искусственного снегообразования",
    location: "Республика Северная Осетия — Алания",
    scope: [
      "Инженерное сопровождение",
      "Геодезическое обеспечение",
      "Исполнительная документация",
      "Строительный контроль",
    ],
    description:
      "Инженерное сопровождение строительства гаража ратраков и системы искусственного снегообразования на новом всесезонном горном курорте «Мамисон». Работы охватывают объекты канатных дорог, инженерные сети и инфраструктуру курорта в условиях высокогорья.",
    cover: mamison01,
    gallery: [mamison01, mamison02, mamison03, mamison04, mamison05, mamison06, mamison07, mamison08, mamison09, mamison10],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
