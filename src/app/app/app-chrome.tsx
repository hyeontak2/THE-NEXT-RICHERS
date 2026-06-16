import Link from "next/link";
import type { ReactNode } from "react";
import {
  Activity,
  Home,
  Layers3,
  ListOrdered,
  Search,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  I18nProvider,
  LanguageSwitcher,
  LocalizedText,
} from "./i18n-provider";
import { HeaderLoginLink } from "./header-login-link";

export type AppSection = "home" | "ranking" | "market" | "profiles" | "sources";

const navItems: Array<{
  key: AppSection;
  label: string;
  href: string;
  icon: LucideIcon;
}> = [
  { key: "home", label: "홈", href: "/app", icon: Home },
  { key: "ranking", label: "랭킹", href: "/app/ranking", icon: ListOrdered },
  { key: "market", label: "시장", href: "/app/market", icon: Activity },
  { key: "profiles", label: "프로필", href: "/app/profiles", icon: UsersRound },
  { key: "sources", label: "출처", href: "/app/sources", icon: Layers3 },
];

export function AppShell({
  active,
  children,
}: {
  active: AppSection;
  children: ReactNode;
}) {
  return (
    <I18nProvider>
      <main
        className="min-h-screen bg-[#f7f6f1] pb-24 text-[#111411] md:pb-0"
        data-tnr-theme="light"
      >
        <AppHeader active={active} />
        {children}
        <MobileTabBar active={active} />
      </main>
    </I18nProvider>
  );
}

export function AppHeader({ active }: { active: AppSection }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e2ded2] bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link className="flex items-center gap-3" href="/app">
          <span className="grid size-10 place-items-center border border-[#c8923d] bg-[#111411] text-sm font-semibold text-[#f3c56f]">
            TNR
          </span>
          <span className="font-display text-lg text-[#111411]">THE NEXT RICHERS</span>
        </Link>
        <nav className="hidden items-center gap-2 text-sm text-[#6a6f66] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              className={`rounded-[8px] px-3 py-2 transition hover:bg-[#f1eee6] hover:text-[#111411] ${
                active === item.key ? "bg-[#111411] text-[#ffffff]" : ""
              }`}
              href={item.href}
            >
              <LocalizedText token={`nav.${item.key}`} fallback={item.label} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <HeaderLoginLink />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export function MobileTabBar({ active }: { active: AppSection }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-[#e2ded2] bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_rgba(17,20,17,0.08)] backdrop-blur md:hidden"
      aria-label="mobile app navigation"
    >
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;

          return (
            <Link
              key={item.key}
              className={`grid min-h-12 place-items-center rounded-[8px] text-[11px] font-semibold transition ${
                isActive
                  ? "bg-[#111411] text-[#ffffff]"
                  : "text-[#73786f] hover:bg-[#f1eee6] hover:text-[#111411]"
              }`}
              href={item.href}
            >
              <Icon className="mb-1 size-4" aria-hidden="true" />
              <LocalizedText token={`nav.${item.key}`} fallback={item.label} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function PageIntro({
  icon: Icon = Search,
  eyebrow,
  title,
  description,
  eyebrowToken,
  titleToken,
  descriptionToken,
  descriptionValues,
}: {
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  eyebrowToken?: string;
  titleToken?: string;
  descriptionToken?: string;
  descriptionValues?: Record<string, string | number>;
}) {
  return (
    <section className="border-b border-[#e2ded2] bg-[#f7f6f1] px-4 py-7 sm:px-5 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-[8px] border border-[#d9c7a0] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-normal text-[#9a6a20] shadow-sm">
          <Icon className="size-4" aria-hidden="true" />
          {eyebrowToken ? (
            <LocalizedText token={eyebrowToken} fallback={eyebrow} />
          ) : (
            eyebrow
          )}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-3xl leading-tight text-balance text-[#111411] sm:text-5xl lg:text-6xl">
          {titleToken ? <LocalizedText token={titleToken} fallback={title} /> : title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-pretty text-[#5d625b] lg:text-lg">
          {descriptionToken ? (
            <LocalizedText
              token={descriptionToken}
              fallback={description}
              values={descriptionValues}
            />
          ) : (
            description
          )}
        </p>
      </div>
    </section>
  );
}
