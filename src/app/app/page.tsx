"use client";

import Image from "next/image";
import { CheckCircle2, Database } from "lucide-react";
import { AppShell, PageIntro } from "./app-chrome";
import { HermesTelegramPanel } from "./hermes-telegram-panel";
import { useI18n } from "./i18n-provider";
import {
  getTopRicherCategoryLabel,
  getTopRicherCompanyLabel,
  getTopRicherCountryLabel,
  getTopRicherDisplayName,
  getTopRicherGlobalRankLabel,
  getTopRicherNetWorthLabel,
  topRicherImages,
  topRichers,
} from "@/lib/top-richers";

export default function RichersAppPage() {
  return (
    <AppShell active="home">
      <PageIntro
        icon={Database}
        eyebrowToken="home.eyebrow"
        titleToken="home.title"
        descriptionToken="home.description"
        eyebrow="어플리케이션 소개"
        title="THE NEXT RICHERS 앱 한눈에 보기"
        description="글로벌 부자 TOP 100의 순위, 인물 프로필, 시장 시나리오, 출처 검증을 빠르게 탐색하는 리서치 앱입니다."
      />

      <section className="px-4 py-5 sm:px-5 sm:py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CoreAppIllustration />
        </div>
      </section>

      <HermesTelegramPanel />

      <div className="h-8" />
    </AppShell>
  );
}

function CoreAppIllustration() {
  const { locale, t } = useI18n();
  const topRicher = topRichers[0];
  const image = topRicherImages[topRicher.name];
  const displayName = getTopRicherDisplayName(topRicher, locale);
  const companyLabel = getTopRicherCompanyLabel(topRicher, locale);
  const rankLabel = getTopRicherGlobalRankLabel(topRicher.rank, locale);
  const categoryLabel = t(
    `category.${topRicher.category}`,
    getTopRicherCategoryLabel(topRicher.category, locale),
  );
  const countryLabel = t(
    `country.${topRicher.country}`,
    getTopRicherCountryLabel(topRicher.country, locale),
  );

  return (
    <div className="border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
            {t("home.rankExampleEyebrow", "랭킹 1위 예시")}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#111411]">
            {t("home.rankExampleTitle", "{name}의 순위에서 성장 스토리까지 봅니다.", {
              name: displayName,
            })}
          </h2>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-[#d8d0bf] bg-[#f7f6f1] px-3 py-2 text-sm font-semibold text-[#2f6f4e]">
          <CheckCircle2 className="size-4" aria-hidden="true" />
          {t("home.forbesRankOne", "Forbes 기준 {rank}", { rank: rankLabel })}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[280px_1fr]">
        <article className="overflow-hidden border border-[#ded8ca] bg-[#101612] text-white">
          <div className="relative min-h-56 bg-[#18221d]">
            {image ? (
              <Image
                className="h-full w-full object-cover"
                src={image.src}
                alt={t("common.portraitAlt", "{name} 인물 사진", { name: displayName })}
                width={360}
                height={320}
                unoptimized
              />
            ) : (
              <div className="grid min-h-56 place-items-center text-4xl font-semibold text-[#f3c56f]">
                1
              </div>
            )}
            <span className="absolute left-4 top-4 rounded-[8px] bg-[#d8a24f] px-3 py-1 text-sm font-semibold text-[#111009]">
              #1
            </span>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-[#d8a24f]">{companyLabel}</p>
            <h3 className="mt-2 text-2xl font-semibold">{displayName}</h3>
            <p className="mt-2 text-sm text-white/58">
              {countryLabel} · {categoryLabel}
            </p>
          </div>
        </article>

        <div className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <ExampleMetric
              label={t("home.metricRank", "순위")}
              value={rankLabel}
              note={t("home.metricRankNote", "글로벌 TOP 100")}
            />
            <ExampleMetric
              label={t("home.metricNetWorth", "추정 순자산")}
              value={getTopRicherNetWorthLabel(topRicher, locale)}
              note={t("home.metricNetWorthNote", "Forbes 기준")}
            />
            <ExampleMetric
              label={t("home.metricAxis", "대표 축")}
              value={t("home.metricAxisValue", "기술 · AI")}
              note={companyLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExampleMetric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="border border-[#ded8ca] bg-[#fffaf0] p-4">
      <p className="text-sm text-[#5d625b]">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-[#111411]">{value}</p>
      <p className="mt-2 text-sm text-[#2f6f4e]">{note}</p>
    </article>
  );
}
