"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ListOrdered } from "lucide-react";
import { AppShell, PageIntro } from "../app-chrome";
import { LocalizedText, useI18n } from "../i18n-provider";
import {
  getTopRicherCategoryLabel,
  getTopRicherCompanyLabel,
  getTopRicherCountryLabel,
  getTopRicherDisplayName,
  getTopRicherForbesRankLabel,
  getTopRicherListRankLabel,
  getTopRicherNetWorthLabel,
  getTopRicherProfileHref,
  topRicherImages,
  topRichers,
  topRichersSource,
  type TopRicher,
} from "@/lib/top-richers";

export default function RankingPage() {
  return (
    <AppShell active="ranking">
      <PageIntro
        icon={ListOrdered}
        eyebrow="상위 100명 순위"
        eyebrowToken="ranking.eyebrow"
        title="1위부터 100위까지 순위를 따로 봅니다."
        titleToken="ranking.title"
        description={`동률은 포브스 순위를 그대로 보존하고, 앱 순번은 화면에서 확인하는 100개 행 기준입니다. 기준일은 ${topRichersSource.informationAsOf.replaceAll(
          "-",
          ".",
        )}입니다.`}
        descriptionToken="ranking.description"
        descriptionValues={{
          date: topRichersSource.informationAsOf.replaceAll("-", "."),
        }}
      />

      <section className="px-4 py-6 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border border-white/10 bg-[#101612]">
            <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 p-5 lg:p-6">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#d8a24f]">
                  <ListOrdered className="size-4" aria-hidden="true" />
                  <LocalizedText token="ranking.eyebrow" fallback="상위 100명 순위" />
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  <LocalizedText
                    token="ranking.sectionTitle"
                    fallback="인물별 순자산과 산업 분류를 한 화면에서 비교합니다."
                  />
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  <LocalizedText
                    token="ranking.sectionDescription"
                    fallback="공개 사진이 확인된 인물은 위키미디어 썸네일을 쓰고, 없는 인물은 TNR 슬롯으로 표시합니다. 순자산은 외부 추정치이므로 투자 판단이 아닌 학습용 맥락으로 봅니다."
                  />
                </p>
              </div>
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-white/12 px-3 text-sm font-semibold text-white/74 transition hover:border-white/28 hover:text-white"
                href={topRichersSource.url}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText token="ranking.forbesSource" fallback="포브스 출처" />
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="md:hidden">
              <MobileTopRicherList />
            </div>

            <div className="hidden max-h-[calc(100vh-270px)] overflow-auto md:block">
              <table className="w-full min-w-[1120px] border-collapse text-left">
                <thead className="sticky top-0 z-10 bg-[#0d1310] text-xs uppercase tracking-normal text-white/42">
                  <tr>
                    <th className="w-20 px-4 py-3 font-semibold">
                      <LocalizedText token="common.no" fallback="앱 순번" />
                    </th>
                    <th className="w-28 px-4 py-3 font-semibold">
                      <LocalizedText token="common.forbesRank" fallback="포브스 순위" />
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      <LocalizedText token="common.name" fallback="이름" />
                    </th>
                    <th className="w-56 px-4 py-3 font-semibold">
                      <LocalizedText token="common.company" fallback="대표 기업" />
                    </th>
                    <th className="w-32 px-4 py-3 font-semibold">
                      <LocalizedText token="common.netWorth" fallback="순자산" />
                    </th>
                    <th className="w-40 px-4 py-3 font-semibold">
                      <LocalizedText token="common.countryRegion" fallback="국가/지역" />
                    </th>
                    <th className="w-48 px-4 py-3 font-semibold">
                      <LocalizedText token="common.category" fallback="산업" />
                    </th>
                    <th className="w-32 px-4 py-3 font-semibold">
                      <LocalizedText token="common.analysis" fallback="분석" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {topRichers.map((person, index) => (
                    <TopRicherRow
                      key={`${person.rank}-${person.name}`}
                      person={person}
                      position={index + 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function MobileTopRicherList() {
  const { locale } = useI18n();

  return (
    <div className="divide-y divide-white/10">
      {topRichers.map((person, index) => (
        <article
          key={`${person.rank}-${person.name}-mobile`}
          className="grid grid-cols-[64px_1fr] gap-3 bg-[#101612] p-4"
        >
          <RicherPortrait person={person} size="large" />
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#d8a24f]">
                  {getTopRicherListRankLabel(index + 1, person.rank, locale)}
                </p>
                <h3 className="mt-1 truncate text-base font-semibold text-white">
                  {getTopRicherDisplayName(person, locale)}
                </h3>
                <p className="mt-1 truncate text-xs font-medium text-white/54">
                  {getTopRicherCompanyLabel(person, locale)}
                </p>
              </div>
              <p className="shrink-0 text-lg font-semibold text-white">
                {getTopRicherNetWorthLabel(person, locale)}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-[8px] border border-white/10 px-2 py-1 text-white/56">
                <LocalizedText
                  token={`country.${person.country}`}
                  fallback={getTopRicherCountryLabel(person.country, locale)}
                />
              </span>
              <span className="rounded-[8px] border border-white/10 px-2 py-1 text-white/56">
                <LocalizedText
                  token={`category.${person.category}`}
                  fallback={getTopRicherCategoryLabel(person.category, locale)}
                />
              </span>
              <span className="rounded-[8px] border border-white/10 px-2 py-1 text-white/42">
                <LocalizedText
                  token="common.age"
                  fallback={`나이 ${person.age}`}
                  values={{ age: person.age }}
                />
              </span>
            </div>
            <Link
              className="mt-3 inline-flex min-h-9 items-center gap-1.5 rounded-[8px] bg-white px-3 text-xs font-semibold text-[#111411]"
              href={getTopRicherProfileHref(person)}
            >
              <LocalizedText token="common.viewAnalysis" fallback="분석 보기" />
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function TopRicherRow({
  person,
  position,
}: {
  person: TopRicher;
  position: number;
}) {
  const { locale } = useI18n();

  return (
    <tr className="bg-[#101612] text-sm transition hover:bg-white/[0.06]">
      <td className="px-4 py-3 text-white/42">{position}</td>
      <td className="px-4 py-3 font-semibold text-[#e8bd70]">
        {getTopRicherForbesRankLabel(person.rank, locale)}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <RicherPortrait person={person} />
          <div className="min-w-0">
            <span className="block truncate font-semibold text-white">
              {getTopRicherDisplayName(person, locale)}
            </span>
            <span className="mt-1 block text-xs text-white/38">
              <LocalizedText
                token="common.age"
                fallback={`나이 ${person.age}`}
                values={{ age: person.age }}
              />
            </span>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-white/62">
        {getTopRicherCompanyLabel(person, locale)}
      </td>
      <td className="px-4 py-3 font-semibold text-white">
        {getTopRicherNetWorthLabel(person, locale)}
      </td>
      <td className="px-4 py-3 text-white/62">
        <LocalizedText
          token={`country.${person.country}`}
          fallback={getTopRicherCountryLabel(person.country, locale)}
        />
      </td>
      <td className="px-4 py-3 text-white/62">
        <LocalizedText
          token={`category.${person.category}`}
          fallback={getTopRicherCategoryLabel(person.category, locale)}
        />
      </td>
      <td className="px-4 py-3">
        <Link
          className="inline-flex min-h-9 items-center gap-1.5 rounded-[8px] bg-white px-2.5 text-xs font-semibold text-[#111411] transition hover:bg-[#d8a24f]"
          href={getTopRicherProfileHref(person)}
        >
          <LocalizedText token="common.viewAnalysis" fallback="분석 보기" />
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </td>
    </tr>
  );
}

function RicherPortrait({
  person,
  size = "small",
}: {
  person: TopRicher;
  size?: "small" | "large";
}) {
  const image = topRicherImages[person.name];
  const boxClass =
    size === "large" ? "size-16 rounded-[8px]" : "size-12 rounded-[8px]";

  if (image) {
    return (
      <a
        className={`${boxClass} block shrink-0 overflow-hidden border border-white/10 bg-[#18221d]`}
        href={image.sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${person.name} photo source`}
      >
        <Image
          className="h-full w-full object-cover"
          src={image.src}
          alt={`${person.name} portrait`}
          width={size === "large" ? 64 : 48}
          height={size === "large" ? 64 : 48}
          loading="lazy"
          sizes={size === "large" ? "64px" : "48px"}
          unoptimized
        />
      </a>
    );
  }

  return (
    <div
      className={`${boxClass} grid shrink-0 place-items-center border border-[#d8a24f]/28 bg-[#18221d] text-sm font-semibold text-[#e8bd70]`}
      aria-label={`${person.name} portrait placeholder`}
      role="img"
    >
      {getInitials(person.name)}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .replace(/& family/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
