import Image from "next/image";
import LogoThreads from "@/assets/threads-logo.svg";
import { HomeIcon, Search, PenSquare, Heart, User } from "lucide-react";
import Link from "next/link";

const menus = [
  {
    Logo: HomeIcon,
    alt: "Sua página inicial",
    route: "/home",
  },
  {
    Logo: Search,
    alt: "Pesquise coisas de seu interesse",
    route: "/search",
  },
  {
    Logo: PenSquare,
    alt: "O que você anda pensando?",
    route: "/post",
  },
  {
    Logo: Heart,
    alt: "Atividade",
    route: "/activity",
  },
  {
    Logo: User,
    alt: "Perfil",
    route: "/user",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center px-6 py-1">
        <Image src={LogoThreads} alt="Threads" height={32} />
        <ul className="flex">
          {menus.map((menu) => (
            <li
              key={menu.alt}
              title={menu.alt}
              className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
            >
              <Link href={menu.route}>
                <menu.Logo size={28} className="text-neutral-600" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
