"use client";

import Link from "next/link";
import { ArrowRight, Monitor, TrendingUp } from "lucide-react";
import { AppShell, PageIntro } from "../app-chrome";
import {
  getTopRicherCategoryLabel,
  getTopRicherCompanyLabel,
  getTopRicherCountryLabel,
  getTopRicherDisplayName,
  getTopRicherForbesRankLabel,
  getTopRicherNetWorthLabel,
  getTopRicherProfileHref,
  topRicherCategories,
  topRicherCountries,
  topRichers,
} from "@/lib/top-richers";
import { useI18n } from "../i18n-provider";

export default function DesktopExperiencePage() {
  return (
    <AppShell active="home">
      <PageIntro
        icon={Monitor}
        eyebrowToken="desktop.eyebrow"
        titleToken="desktop.title"
        descriptionToken="desktop.description"
        eyebrow="컴퓨터 웹"
        title="데스크톱에서는 비교와 스캔이 빠른 대시보드로 보여줍니다."
        description="넓은 화면에서는 핵심 지표, 상위 10명 테이블, 카테고리 이동을 한 번에 배치해 리서치 흐름을 줄입니다."
      />

      <DesktopDashboard />
    </AppShell>
  );
}

function DesktopDashboard() {
  const { locale, t } = useI18n();
  const topTen = topRichers.slice(0, 10);
  const metrics = [
    [t("nav.ranking", "랭킹"), `${topRichers.length}`],
    [t("common.countryRegion", "국가/지역"), `${topRicherCountries.length}`],
    [t("common.category", "산업"), `${topRicherCategories.length}`],
    [
      t("desktop.topTenNetWorth", "상위 10 순자산"),
      getTopRicherNetWorthLabel(
        { netWorthBillion: topTen.reduce((sum, item) => sum + item.netWorthBillion, 0) },
        locale,
      ),
    ],
  ];
  const menuItems = [
    ["nav.ranking", "랭킹", "/app/ranking"],
    ["market.eyebrow", "시장 시나리오", "/app/market"],
    ["profiles.eyebrow", "인물 프로필", "/app/profiles"],
    ["sources.eyebrow", "출처 레이어", "/app/sources"],
  ] as const;

  return (
      <section className="px-4 py-8 sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[280px_1fr]">
          <aside className="border border-[#ded8ca] bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-[#9a6a20]">
              {t("desktop.menu", "대시보드 메뉴")}
            </p>
            <div className="mt-5 grid gap-2">
              {menuItems.map(([token, fallback, href]) => (
                <Link
                  key={href}
                  className="flex min-h-11 items-center justify-between border border-[#e5dfd2] px-3 text-sm font-semibold text-[#111411] transition hover:border-[#c8923d] hover:bg-[#f8f4ec]"
                  href={href}
                >
                  {t(token, fallback)}
                  <ArrowRight className="size-4 text-[#9a6a20]" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="grid gap-3 md:grid-cols-4">
              {metrics.map(([label, value]) => (
                <article key={label} className="border border-[#ded8ca] bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-normal text-[#73786f]">
                    {label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#111411]">{value}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 overflow-hidden border border-[#ded8ca] bg-white shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-[#e5dfd2] p-5">
                <div>
                  <p className="text-sm font-semibold text-[#9a6a20]">
                    {t("desktop.topTen", "상위 10명")}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-[#111411]">
                    {t("desktop.rankingTable", "데스크톱 랭킹 테이블")}
                  </h2>
                </div>
                <TrendingUp className="size-5 text-[#12382c]" aria-hidden="true" />
              </div>
              <div className="overflow-auto">
                <table className="w-full min-w-[880px] border-collapse text-left">
                  <thead className="bg-[#f4f1e9] text-xs uppercase tracking-normal text-[#73786f]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.forbesRank", "포브스 순위")}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.name", "인물")}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.company", "대표 기업")}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.netWorth", "순자산")}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.countryRegion", "국가/지역")}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.category", "산업")}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {t("common.analysis", "분석")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5dfd2]">
                    {topTen.map((person) => (
                      <tr key={person.name} className="text-sm transition hover:bg-[#f8f4ec]">
                        <td className="px-4 py-3 font-semibold text-[#9a6a20]">
                          {getTopRicherForbesRankLabel(person.rank, locale)}
                        </td>
                        <td className="px-4 py-3 font-semibold text-[#111411]">
                          {getTopRicherDisplayName(person, locale)}
                        </td>
                        <td className="px-4 py-3 text-[#5d625b]">
                          {getTopRicherCompanyLabel(person, locale)}
                        </td>
                        <td className="px-4 py-3 font-semibold text-[#111411]">
                          {getTopRicherNetWorthLabel(person, locale)}
                        </td>
                        <td className="px-4 py-3 text-[#5d625b]">
                          {t(`country.${person.country}`, getTopRicherCountryLabel(person.country, locale))}
                        </td>
                        <td className="px-4 py-3 text-[#5d625b]">
                          {t(`category.${person.category}`, getTopRicherCategoryLabel(person.category, locale))}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            className="inline-flex min-h-9 items-center rounded-[8px] bg-[#111411] px-3 text-xs font-semibold text-[#ffffff]"
                            href={getTopRicherProfileHref(person)}
                          >
                            {t("common.view", "보기")}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
