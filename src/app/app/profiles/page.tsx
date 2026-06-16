"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  Filter,
  Landmark,
  Search,
  UsersRound,
} from "lucide-react";
import { AppShell, PageIntro } from "../app-chrome";
import {
  getRegions,
  getSectors,
  richerProfiles,
  type RicherProfile,
} from "@/lib/richers-data";

export default function ProfilesPage() {
  return (
    <Suspense fallback={<ProfilesContent sector="all" region="all" />}>
      <ProfilesPageWithParams />
    </Suspense>
  );
}

function ProfilesPageWithParams() {
  const searchParams = useSearchParams();
  const sector = searchParams.get("sector") ?? "all";
  const region = searchParams.get("region") ?? "all";

  return <ProfilesContent sector={sector} region={region} />;
}

function ProfilesContent({ sector, region }: { sector: string; region: string }) {
  const sectors = getSectors();
  const regions = getRegions();
  const filteredProfiles = richerProfiles.filter((profile) => {
    const matchesSector = sector === "all" || profile.sector === sector;
    const matchesRegion = region === "all" || profile.region === region;

    return matchesSector && matchesRegion;
  });

  return (
    <AppShell active="profiles">
      <PageIntro
        icon={UsersRound}
        eyebrowToken="profiles.eyebrow"
        titleToken="profiles.title"
        descriptionToken="profiles.description"
        eyebrow="인물 프로필"
        title="성장 배경과 전략 신호를 인물별로 분리합니다."
        description="핵심 인물의 성장 과정, 사업 전략, 자산 형성 드라이버를 비교 가능한 프로필 단위로 정리했습니다."
      />

      <section className="px-4 py-6 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit border border-white/10 bg-[#101612] p-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid size-10 place-items-center rounded-[8px] bg-[#12382c] text-[#a8e7b5]">
                  <Filter className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">탐색 필터</p>
                  <p className="text-xs text-white/50">섹터와 지역으로 좁혀보기</p>
                </div>
              </div>

              <FilterGroup
                title="섹터"
                activeValue={sector}
                values={sectors}
                param="sector"
                otherParam="region"
                otherValue={region}
              />
              <FilterGroup
                title="지역"
                activeValue={region}
                values={regions}
                param="region"
                otherParam="sector"
                otherValue={sector}
              />

              <div className="mt-5 border-t border-white/10 pt-5">
                <label className="text-xs font-semibold uppercase tracking-normal text-white/45">
                  검색 모델
                </label>
                <div className="mt-3 flex min-h-11 items-center gap-3 rounded-[8px] border border-white/10 bg-black/18 px-3 text-sm text-white/42">
                  <Search className="size-4" aria-hidden="true" />
                  인물·산업·전략 검색 예정
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#d8a24f]">
                    {filteredProfiles.length}개 프로필
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">인물 탐색</h2>
                </div>
                <Link
                  className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-white/12 px-3 text-sm font-semibold text-white/76 transition hover:border-white/28 hover:text-white"
                  href="/app"
                >
                  홈으로 돌아가기
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="grid gap-4 xl:grid-cols-3">
                {filteredProfiles.map((profile) => (
                  <ProfileCard key={profile.slug} profile={profile} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StrategySignals />
    </AppShell>
  );
}

function FilterGroup({
  title,
  activeValue,
  values,
  param,
  otherParam,
  otherValue,
}: {
  title: string;
  activeValue: string;
  values: string[];
  param: "sector" | "region";
  otherParam: "sector" | "region";
  otherValue: string;
}) {
  return (
    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-normal text-white/45">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {["all", ...values].map((value) => (
          <Link
            key={value}
            className={`rounded-[8px] border px-3 py-2 text-xs font-semibold transition ${
              activeValue === value
                ? "border-[#d8a24f] bg-[#d8a24f] text-[#111009]"
                : "border-white/10 bg-white/[0.03] text-white/62 hover:border-white/26 hover:text-white"
            }`}
            href={buildFilterHref(param, value, otherParam, otherValue)}
          >
            {value === "all" ? "전체" : value}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProfileCard({ profile }: { profile: RicherProfile }) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-[#101612]">
      <div
        className="relative min-h-52 bg-[#1d2d27] bg-cover bg-center"
        role="img"
        aria-label={profile.portrait.alt}
        style={{ backgroundImage: `url(${profile.portrait.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#101612] via-[#101612]/24 to-transparent" />
        <span className="absolute left-4 top-4 rounded-[8px] bg-black/46 px-3 py-1 text-xs font-semibold text-white/76">
          {profile.portrait.credit}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-[#d8a24f]">
              {profile.sector}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {profile.koreanName}
            </h3>
            <p className="mt-1 text-sm text-white/42">{profile.name}</p>
            <p className="mt-1 text-sm text-white/48">{profile.koreanName}</p>
          </div>
          <span className="rounded-[8px] border border-[#a8e7b5]/22 bg-[#12382c] px-3 py-1 text-xs text-[#a8e7b5]">
            {profile.rankLabel}
          </span>
        </div>
        <p className="mt-5 min-h-16 text-sm leading-6 text-white/66">
          {profile.headline}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.signalTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-[8px] border border-white/10 px-2.5 py-1 text-xs text-white/56"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm">
          <div className="flex items-start gap-3">
            <Landmark
              className="mt-0.5 size-4 shrink-0 text-[#d8a24f]"
              aria-hidden="true"
            />
            <p className="text-white/66">{profile.wealthModel}</p>
          </div>
          <div className="flex items-start gap-3">
            <BookOpenCheck
              className="mt-0.5 size-4 shrink-0 text-[#d8a24f]"
              aria-hidden="true"
            />
            <p className="text-white/66">{profile.coreInsight}</p>
          </div>
        </div>
        <Link
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-white text-sm font-semibold text-[#111411] transition group-hover:bg-[#d8a24f]"
          href={`/app/people/${profile.slug}`}
        >
          상세 분석 보기
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function StrategySignals() {
  return (
    <section className="border-y border-white/10 bg-[#f5f1e8] px-4 py-12 text-[#111411] sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#743b46]">
              전략 신호
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-balance">
              인물별 성공 요인을 같은 언어로 비교합니다.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#555d54]">
              각 인물의 강점을 신호 단위로 쪼개면 산업이 달라도 비교가
              가능해집니다. 이 구조가 이후 상위 100명 확장과 다국어 콘텐츠의
              기준이 됩니다.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {richerProfiles.map((profile) => (
              <article key={profile.slug} className="border border-[#d8d0bf] bg-white p-4">
                <p className="text-sm font-semibold text-[#12382c]">
                  {profile.koreanName}
                </p>
                <div className="mt-5 space-y-4">
                  {profile.strategy.map((signal) => (
                    <div key={signal.label}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="font-semibold">{signal.label}</span>
                        <span className="text-[#743b46]">{signal.weight}</span>
                      </div>
                      <div className="mt-2 h-2 bg-[#e6ddcd]">
                        <div
                          className="h-2 bg-[#12382c]"
                          style={{ width: `${signal.weight}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs leading-5 text-[#626961]">
                        {signal.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function buildFilterHref(
  param: "sector" | "region",
  value: string,
  otherParam: "sector" | "region",
  otherValue: string,
) {
  const params = new URLSearchParams();

  if (value !== "all") {
    params.set(param, value);
  }

  if (otherValue !== "all") {
    params.set(otherParam, otherValue);
  }

  const query = params.toString();

  return query ? `/app/profiles?${query}` : "/app/profiles";
}
