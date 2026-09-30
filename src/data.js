import {
  Atom,
  Zap,
  Braces,
  FileCode,
  Wind,
  Hexagon,
  Route,
  Webhook,
  Database,
  DatabaseZap,
  Layers,
  PenTool,
  Palette,
} from "lucide-react";

import kostfinderImg from "./assets/kostfinder.png";
import digitallibraryImg from "./assets/digitallibrary.png";
import kasirtokoImg from "./assets/kasirtoko.png";

// Ganti tautan & email berikut dengan milikmu.
export const EMAIL = "2400016091@webmail.uad.ac.id";
export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
];
export const NAV = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Organizations",
  "Contact",
];
export const STATS = [
  { to: 3, suffix: "+", label: "Projects" },
  { to: 5, suffix: "+", label: "Technologies" },
  { to: 3, suffix: "+", label: "Years Exploring" },
];
export const SKILLS = [
  {
    group: "Frontend",
    items: [
      ["React", Atom],
      ["Vite", Zap],
      ["JavaScript", Braces],
      ["HTML/CSS", FileCode],
      ["Tailwind CSS", Wind],
    ],
  },
  {
    group: "Backend",
    items: [
      ["Node.js", Hexagon],
      ["MOCK API", Webhook],
    ],
  },
  {
    group: "Database",
    items: [
      ["MySQL", Database],
      ["MongoDB", Layers],
      ["Laravel", DatabaseZap],
    ],
  },
  {
    group: "Design",
    items: [
      ["Figma", PenTool],
      ["Canva", Palette],
    ],
  },
];
export const PROJECTS = [
  {
    title: "KostFinder",
    desc: "Platform pencarian kost modern dengan fitur pencarian, filtering, detail kost, dan checkout.",
    tech: ["React", "TypeScript", "Tailwind CSS", "MockAPI"],
    from: "#34d399",
    to: "#22d3ee",
    image: kostfinderImg,
  },
  {
    title: "Digital Library",
    desc: "Sistem perpustakaan digital untuk membantu pengelolaan buku dan pengguna.",
    tech: ["React", "MySQL", "REST API"],
    from: "#a78bfa",
    to: "#22d3ee",
    image: digitallibraryImg,
  },
  {
    title: "Kasir Toko",
    desc: "Aplikasi kasir untuk mengelola produk, stok, transaksi, dan pembuatan struk.",
    tech: ["React", "JavaScript", "API"],
    from: "#34d399",
    to: "#a78bfa",
    image: kasirtokoImg,
  },
];
export const JOURNEY = [
  [
    "2024",
    "Started Exploring Web Development",
    "Mulai mempelajari fundamental web development dan programming.",
  ],
  [
    "2025",
    "Building Real Projects",
    "Mulai mengembangkan berbagai project akademik dan personal.",
  ],
  [
    "2026",
    "Full Stack & UI/UX",
    "Fokus pada pengembangan aplikasi full stack dan pengalaman pengguna.",
  ],
];
export const ORGANIZATIONS = [
  {
    org: "Himpunan Mahasiswa Sistem Informasi UAD",
    role: "Staff Divisi MEDKOM",
    period: "2024 — 2025",
    desc: "Mengelola Media sosial internal himpunan dan membantu dokumentasi kegiatan.",
    photos: [],
  },
  {
    org: "Panitia Program Pengenalan Kampus (P2K) UAD",
    role: "Staff Divisi Perlogkom",
    period: "2026",
    desc: "Menyelenggarakan kegiatan perlogistik untuk kegiatan P2K UAD.",
    photos: [],
  },
];
export const PRINCIPLES = [
  ["01", "SIMPLICITY", "Membuat interface yang sederhana dan mudah dipahami."],
  ["02", "PERFORMANCE", "Membangun aplikasi yang cepat dan reliable."],
  ["03", "EXPERIENCE", "Mengutamakan kebutuhan dan pengalaman pengguna."],
];