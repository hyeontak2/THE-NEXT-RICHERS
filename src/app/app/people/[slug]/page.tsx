import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Building2,
  FileSearch,
  Landmark,
  Milestone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  getRicherBySlug,
  richerProfiles,
  sourceGradeLabels,
} from "@/lib/richers-data";
import {
  getTopRicherCategoryLabel,
  getTopRicherCompanyLabel,
  getTopRicherCountryLabel,
  getTopRicherBySlug,
  getTopRicherDisplayName,
  getTopRicherNetWorthKoreanLabel,
  getTopRicherProfileHref,
  getTopRicherSlug,
  topRicherImages,
  topRichers,
  topRichersSource,
  type TopRicher,
} from "@/lib/top-richers";

type ProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = new Set([
    ...richerProfiles.map((profile) => profile.slug),
    ...topRichers.map((person) => getTopRicherSlug(person)),
  ]);

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getRicherBySlug(slug);
  const topProfile = getTopRicherBySlug(slug);

  if (profile) {
    return {
      title: `${profile.name} | THE NEXT RICHERS`,
      description: profile.headline,
    };
  }

  if (topProfile) {
    return {
      title: `${topProfile.name} 분석 | THE NEXT RICHERS`,
      description: `포브스 ${topProfile.rank}위, ${getTopRicherCategoryLabel(
        topProfile.category,
      )} 기반 랭킹 분석입니다.`,
    };
  }

  if (!profile && !topProfile) {
    return {};
  }

  return {};
}

export default async function RicherProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getRicherBySlug(slug);

  if (!profile) {
    const topProfile = getTopRicherBySlug(slug);

    if (!topProfile) {
      notFound();
    }

    return <TopRicherAnalysisPage person={topProfile} />;
  }

  const currentIndex = richerProfiles.findIndex((item) => item.slug === profile.slug);
  const nextProfile = richerProfiles[(currentIndex + 1) % richerProfiles.length];
  const rankedProfile = getTopRicherBySlug(profile.slug);
  const companyLabel = rankedProfile ? getTopRicherCompanyLabel(rankedProfile) : null;

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#111411]" data-tnr-theme="light">
      <header className="border-b border-white/10 bg-[#0a0d0b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-white/12 px-3 text-sm font-semibold text-white/72 transition hover:border-white/28 hover:text-white"
            href="/app"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            탐색
          </Link>
          <Link className="font-display text-lg" href="/">
            THE NEXT RICHERS
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-30 lg:block"
          role="img"
          aria-label={profile.portrait.alt}
          style={{ backgroundImage: `url(${profile.portrait.src})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0d0b_0%,#0a0d0b_48%,rgba(10,13,11,0.62)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.75fr_0.25fr] lg:px-8 lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] border border-[#d8a24f]/34 bg-[#d8a24f]/10 px-3 py-2 text-xs font-semibold uppercase tracking-normal text-[#e8bd70]">
              <BadgeCheck className="size-4" aria-hidden="true" />
              {profile.rankLabel}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-balance sm:text-6xl">
              {profile.koreanName}
            </h1>
            <p className="mt-3 text-lg text-white/58">{profile.name}</p>
            {companyLabel ? (
              <p className="mt-3 text-sm font-semibold text-[#d8a24f]">
                대표 기업 · {companyLabel}
              </p>
            ) : null}
            <p className="mt-6 max-w-3xl text-xl leading-9 text-pretty text-white/76">
              {profile.headline}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.signalTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[8px] border border-white/12 bg-white/[0.04] px-3 py-2 text-sm text-white/64"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="h-fit border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-[#d8a24f]">자산 모델</p>
            <p className="mt-3 text-lg font-semibold leading-7">{profile.wealthModel}</p>
            <div className="mt-6 grid gap-3 text-sm text-white/58">
              <p className="flex items-center gap-2">
                <Building2 className="size-4 text-[#a8e7b5]" aria-hidden="true" />
                {profile.sector}
              </p>
              <p className="flex items-center gap-2">
                <Landmark className="size-4 text-[#a8e7b5]" aria-hidden="true" />
                {profile.region}
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="size-4 text-[#a8e7b5]" aria-hidden="true" />
                {profile.generation}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.75fr_0.25fr]">
          <article className="border border-white/10 bg-[#101612] p-6">
            <p className="text-sm font-semibold uppercase tracking-normal text-[#d8a24f]">
              핵심 인사이트
            </p>
            <h2 className="mt-3 text-3xl font-semibold">성장 과정에서 봐야 할 구조</h2>
            <p className="mt-5 text-base leading-8 text-white/66">{profile.summary}</p>
            <p className="mt-5 border-l border-[#d8a24f] pl-5 text-lg leading-8 text-white/82">
              {profile.coreInsight}
            </p>
          </article>
          <article className="border border-white/10 bg-[#101612] p-6">
            <BookOpenCheck className="size-6 text-[#a8e7b5]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">콘텐츠 원칙</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              인물 서사는 학습용 맥락, 순자산은 외부 추정치, 기업 성과는 공식
              자료와 공시를 우선 기준으로 분리합니다.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-5 py-12 text-[#111411] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-[#743b46]">
                성장 타임라인
              </p>
              <h2 className="mt-2 font-display text-4xl leading-tight">
                사건을 자산 형성 흐름으로 연결합니다.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#5f655d]">
              연도별 사건은 “배경, 창업, 전환, 확장, 자산” 단계로 분류해
              비교 가능한 학습 단위로 저장합니다.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#d8d0bf] bg-[#d8d0bf] lg:grid-cols-4">
            {profile.milestones.map((milestone) => (
              <article key={`${milestone.year}-${milestone.title}`} className="bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-semibold text-[#12382c]">
                    {milestone.year}
                  </span>
                  <Milestone className="size-5 text-[#c8923d]" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-[#743b46]">
                  {milestone.type}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{milestone.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f655d]">{milestone.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <article className="border border-white/10 bg-[#101612] p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="size-6 text-[#a8e7b5]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">전략 신호</h2>
            </div>
            <div className="mt-6 space-y-5">
              {profile.strategy.map((signal) => (
                <div key={signal.label}>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-semibold">{signal.label}</span>
                    <span className="text-[#d8a24f]">{signal.weight}</span>
                  </div>
                  <div className="mt-2 h-2 bg-white/10">
                    <div
                      className="h-2 bg-[#d8a24f]"
                      style={{ width: `${signal.weight}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/58">{signal.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-white/10 bg-[#101612] p-6">
            <div className="flex items-center gap-3">
              <Landmark className="size-6 text-[#a8e7b5]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">자산 형성 드라이버</h2>
            </div>
            <div className="mt-6 space-y-4">
              {profile.assetDrivers.map((driver) => (
                <div key={driver.label} className="border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-semibold">{driver.label}</h3>
                    <span className="rounded-[8px] bg-[#12382c] px-3 py-1 text-xs text-[#a8e7b5]">
                      {driver.source}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/58">{driver.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <FileSearch className="size-6 text-[#d8a24f]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold">검증 출처</h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {profile.sources.map((source) => (
              <article key={source.name} className="bg-[#101612] p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{source.name}</h3>
                  <ShieldCheck className="size-5 text-[#a8e7b5]" aria-hidden="true" />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-normal text-[#d8a24f]">
                  {sourceGradeLabels[source.grade]}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/58">{source.usage}</p>
                <p className="mt-4 text-xs text-white/42">{source.reliability}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-white/[0.04] p-5">
            <div>
              <p className="text-sm text-white/48">다음 프로필</p>
              <p className="mt-1 text-xl font-semibold">{nextProfile.name}</p>
            </div>
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-semibold text-[#111411] transition hover:bg-[#d8a24f]"
              href={`/app/people/${nextProfile.slug}`}
            >
              다음 분석 보기
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function TopRicherAnalysisPage({ person }: { person: TopRicher }) {
  const image = topRicherImages[person.name];
  const currentIndex = topRichers.findIndex(
    (item) => getTopRicherSlug(item) === getTopRicherSlug(person),
  );
  const previous = topRichers[currentIndex - 1];
  const next = topRichers[currentIndex + 1];
  const categorySignal = getCategorySignal(person.category);
  const categoryLabel = getTopRicherCategoryLabel(person.category);
  const companyLabel = getTopRicherCompanyLabel(person);
  const countryLabel = getTopRicherCountryLabel(person.country);
  const gapToAhead = previous
    ? Math.max(0, previous.netWorthBillion - person.netWorthBillion)
    : 0;
  const bufferBelow = next ? Math.max(0, person.netWorthBillion - next.netWorthBillion) : 0;

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#111411]" data-tnr-theme="light">
      <header className="border-b border-white/10 bg-[#0a0d0b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-white/12 px-3 text-sm font-semibold text-white/72 transition hover:border-white/28 hover:text-white"
            href="/app"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            워크스페이스
          </Link>
          <Link className="font-display text-lg" href="/app">
            THE NEXT RICHERS
          </Link>
        </div>
      </header>

      <section className="border-b border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] border border-[#d8a24f]/34 bg-[#d8a24f]/10 px-3 py-2 text-xs font-semibold uppercase tracking-normal text-[#e8bd70]">
              <BadgeCheck className="size-4" aria-hidden="true" />
              포브스 {person.rank}위
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-balance sm:text-6xl">
              {getTopRicherDisplayName(person)}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-pretty text-white/76">
              {categoryLabel} 자산 노출과 {getTopRicherNetWorthKoreanLabel(person)} 순자산
              기준으로 랭킹 변동 가능성을 읽는 기본 분석입니다.
            </p>
            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <AnalysisMetric
                label="순자산"
                value={getTopRicherNetWorthKoreanLabel(person)}
              />
              <AnalysisMetric label="대표 기업" value={companyLabel} />
              <AnalysisMetric label="국가/지역" value={countryLabel} />
              <AnalysisMetric label="나이" value={`${person.age}`} />
            </div>
          </div>
          <aside className="border border-white/10 bg-[#101612] p-5">
            <AnalysisPortrait person={person} image={image} />
            <p className="mt-5 text-sm font-semibold text-[#d8a24f]">자산 카테고리</p>
            <p className="mt-2 text-2xl font-semibold">{categoryLabel}</p>
            <p className="mt-4 text-sm leading-6 text-white/56">{categorySignal.summary}</p>
          </aside>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="border border-white/10 bg-[#101612] p-6">
            <BarChart3 className="size-6 text-[#a8e7b5]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">순위 방어선</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              바로 위 인물과의 격차는 {formatBillion(gapToAhead)}이고, 바로 아래
              인물과의 완충 폭은 {formatBillion(bufferBelow)}입니다. 이 폭이 작을수록
              주가 변동에 따른 순위 교체가 빨라집니다.
            </p>
          </article>
          <article className="border border-white/10 bg-[#101612] p-6">
            <Landmark className="size-6 text-[#a8e7b5]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">시장 민감도</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              {categorySignal.detail} 앱의 시장 시나리오에서 섹터 변동률을 조정하면
              예상 순위가 다시 계산됩니다.
            </p>
          </article>
          <article className="border border-white/10 bg-[#101612] p-6">
            <Building2 className="size-6 text-[#a8e7b5]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">분석 상태</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              현재 페이지는 랭킹 기반 기본 분석입니다. 성장 배경, 초기 커리어,
              사업 전환점, 자산 형성 경로는 인물별 리서치가 추가되면 심층 분석으로
              확장됩니다.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-5 py-12 text-[#111411] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-normal text-[#743b46]">
              랭킹 맥락
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight">
              위아래 랭킹과 함께 봅니다.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#d8d0bf] bg-[#d8d0bf] md:grid-cols-3">
            <NeighborCard title="상위" person={previous} fallback="현재 1위입니다." />
            <NeighborCard title="현재" person={person} isCurrent />
            <NeighborCard title="하위" person={next} fallback="상위 100명 마지막 행입니다." />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.6fr_0.4fr]">
          <article className="border border-white/10 bg-[#101612] p-6">
            <div className="flex items-center gap-3">
              <FileSearch className="size-6 text-[#d8a24f]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">출처와 한계</h2>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/58">
              순위와 순자산은 {topRichersSource.name} 기준이며, 기준일은{" "}
              {topRichersSource.informationAsOf.replaceAll("-", ".")}입니다. 외부
              추정치이므로 실제 지분, 비상장 평가, 환율, 장중 주가에 따라 달라질 수
              있습니다.
            </p>
            <a
              className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-white/12 px-3 text-sm font-semibold text-white/72 transition hover:border-white/28 hover:text-white"
              href={topRichersSource.url}
              target="_blank"
              rel="noreferrer"
            >
              포브스 출처
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>
          <article className="border border-white/10 bg-[#101612] p-6">
            <ShieldCheck className="size-6 text-[#a8e7b5]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">다음 단계</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              상세 리서치가 추가되면 이 페이지는 성장 배경, 초기 커리어, 사업 전환점,
              자산 형성 경로까지 포함하는 심층 프로필로 자동 교체됩니다.
            </p>
            <Link
              className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-white px-3 text-sm font-semibold text-[#111411] transition hover:bg-[#d8a24f]"
              href="/app/market"
            >
              시장 시나리오 보기
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

function AnalysisMetric({ label, value }: { label: string; value: string }) {
  return (
    <article className="border border-white/10 bg-white/[0.04] p-4">
      <p className="text-sm text-white/48">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </article>
  );
}

function AnalysisPortrait({
  person,
  image,
}: {
  person: TopRicher;
  image: (typeof topRicherImages)[string] | undefined;
}) {
  if (image) {
    return (
      <a
        className="block aspect-square overflow-hidden border border-white/10 bg-[#18221d]"
        href={image.sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${person.name} 사진 출처`}
      >
        <Image
          className="h-full w-full object-cover"
          src={image.src}
          alt={`${person.name} 인물 사진`}
          width={320}
          height={320}
          priority
          sizes="(min-width: 1024px) 320px, 100vw"
          unoptimized
        />
      </a>
    );
  }

  return (
    <div
      className="grid aspect-square place-items-center border border-[#d8a24f]/28 bg-[#18221d] text-5xl font-semibold text-[#e8bd70]"
      role="img"
      aria-label={`${person.name} 인물 사진 자리`}
    >
      {getInitials(person.name)}
    </div>
  );
}

function NeighborCard({
  title,
  person,
  fallback,
  isCurrent = false,
}: {
  title: string;
  person?: TopRicher;
  fallback?: string;
  isCurrent?: boolean;
}) {
  if (!person) {
    return (
      <article className="bg-white p-5">
        <p className="text-sm font-semibold uppercase tracking-normal text-[#743b46]">
          {title}
        </p>
        <p className="mt-5 text-sm leading-6 text-[#5f655d]">{fallback}</p>
      </article>
    );
  }

  return (
    <article className={isCurrent ? "bg-[#12382c] p-5 text-white" : "bg-white p-5"}>
      <p
        className={`text-sm font-semibold uppercase tracking-normal ${
          isCurrent ? "text-[#d8a24f]" : "text-[#743b46]"
        }`}
      >
        {title}
      </p>
      <p className="mt-4 text-2xl font-semibold">{person.rank}위</p>
      <h3 className="mt-2 text-lg font-semibold">
        {getTopRicherDisplayName(person)}
      </h3>
      <p className={isCurrent ? "mt-3 text-sm text-white/62" : "mt-3 text-sm text-[#5f655d]"}>
        {getTopRicherNetWorthKoreanLabel(person)} ·{" "}
        {getTopRicherCategoryLabel(person.category)}
      </p>
      {!isCurrent ? (
        <Link
          className="mt-5 inline-flex min-h-9 items-center gap-2 rounded-[8px] border border-[#12382c]/18 px-3 text-xs font-semibold text-[#12382c]"
          href={getTopRicherProfileHref(person)}
        >
          분석 보기
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}

function getCategorySignal(category: string) {
  switch (category) {
    case "Technology":
      return {
        summary: "상장 기술주와 플랫폼 기대가 순자산 변동을 크게 좌우합니다.",
        detail:
          "기술주는 성장률, 금리, AI/클라우드 투자 사이클에 민감해 순위 변동 폭이 비교적 큽니다.",
      };
    case "Fashion & Retail":
      return {
        summary: "브랜드 가치, 소비 경기, 지주 구조가 핵심 변수입니다.",
        detail:
          "럭셔리와 리테일 자산은 소비 둔화와 지역별 수요 변화에 반응하지만, 강한 브랜드는 하방을 일부 방어합니다.",
      };
    case "Finance & Investments":
      return {
        summary: "시장 가격과 운용자산 변동이 함께 작용합니다.",
        detail:
          "금융/투자 자산은 증시, 유동성, 거래 활동 변화가 지분 가치와 운용 성과에 동시에 영향을 줍니다.",
      };
    case "Energy":
    case "Metals & Mining":
      return {
        summary: "원자재 가격과 정책 리스크가 순위 변동을 흔듭니다.",
        detail:
          "에너지와 원자재 자산은 상품 가격, 공급 제약, 지정학 변수에 따라 단기간에도 평가가 크게 움직일 수 있습니다.",
      };
    default:
      return {
        summary: "사업 포트폴리오와 지역 노출이 변동성을 나눕니다.",
        detail:
          "복합 자산은 단일 주가보다 여러 사업과 지역에 나뉘어 있어 변동성이 완만한 편이지만, 핵심 지분 평가는 계속 중요합니다.",
      };
  }
}

function formatBillion(value: number) {
  return `$${Math.round(value * 10) / 10}B`;
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

