import mamisonCover from "@/assets/project-mamison.jpg";
import veduchiCover from "@/assets/project-veduchi.jpg";
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

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
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
    year: "2022 — 2024",
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
      elbrus01,
      elbrus10,
      elbrus02,
      elbrus08,
      elbrus07,
      elbrus09,
      elbrus03,
      elbrus05,
      elbrus04,
      elbrus06,
    ],
  },
  {
    slug: "mamison",
    title: "Мамисон",
    subtitle: "Гараж ратраков и СИС",
    location: "Республика Северная Осетия — Алания",
    year: "2023 — 2025",
    scope: ["Исполнительная документация", "Геодезия", "Мониторинг"],
    description:
      "Инженерное сопровождение строительства гаража ратраков и системы искусственного снегообразования на новом всесезонном курорте «Мамисон».",
    cover: mamisonCover,
    gallery: [],
  },
  {
    slug: "veduchi",
    title: "Ведучи",
    subtitle: "Система искусственного снегообразования",
    location: "Чеченская Республика",
    year: "2021 — 2023",
    scope: ["Техническое сопровождение", "Геодезия", "Контроль качества"],
    description:
      "Техническое сопровождение создания системы искусственного снегообразования всесезонного туристско-рекреационного комплекса «Ведучи».",
    cover: veduchiCover,
    gallery: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
