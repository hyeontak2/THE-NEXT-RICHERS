"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { useI18n } from "./i18n-provider";

export function HeaderLoginLink() {
  const { t } = useI18n();
  const loginLabel = t("header.login", "로그인");

  return (
    <Link
      className="inline-flex size-10 items-center justify-center gap-2 rounded-[8px] bg-[#111411] text-[#ffffff] transition hover:bg-[#2b302b] sm:w-auto sm:px-3"
      href="/app/login"
      aria-label={loginLabel}
      title={loginLabel}
    >
      <LogIn className="size-4" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">{loginLabel}</span>
    </Link>
  );
}
