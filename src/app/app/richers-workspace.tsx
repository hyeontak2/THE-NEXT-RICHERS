"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookmarkCheck,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  getTopRicherCategoryLabel,
  getTopRicherCompanyLabel,
  getTopRicherCountryLabel,
  getTopRicherDisplayName,
  getTopRicherForbesRankLabel,
  getTopRicherNetWorthLabel,
  getTopRicherProfileHref,
  getTopRicherSlug,
  topRicherCategories,
  topRicherCountries,
  topRicherImages,
  topRichers,
  type TopRicher,
} from "@/lib/top-richers";
import { useI18n } from "./i18n-provider";

type SortMode = "rank" | "wealth" | "name";

const watchlistKey = "tnr-watchlist";

export function RichersWorkspace() {
  const { locale, t } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [country, setCountry] = useState("all");
  const [sortMode, setSortMode] = useState<SortMode>("rank");
  const [watchlistOnly, setWatchlistOnly] = useState(false);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [watchlistReady, setWatchlistReady] = useState(false);
  const [comparison, setComparison] = useState<string[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const saved = window.localStorage.getItem(watchlistKey);

      setWatchlist(saved ? (JSON.parse(saved) as string[]) : []);
      setWatchlistReady(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (watchlistReady) {
      window.localStorage.setItem(watchlistKey, JSON.stringify(watchlist));
    }
  }, [watchlist, watchlistReady]);

  const filteredPeople = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...topRichers]
      .filter((person) => {
        const slug = getTopRicherSlug(person);
        const localizedCountry = t(
          `country.${person.country}`,
          getTopRicherCountryLabel(person.country, locale),
        );
        const localizedCategory = t(
          `category.${person.category}`,
          getTopRicherCategoryLabel(person.category, locale),
        );
        const matchesQuery =
          !normalizedQuery ||
          [
            person.name,
            getTopRicherDisplayName(person, locale),
            getTopRicherDisplayName(person, "ko"),
            person.country,
            localizedCountry,
            person.category,
            localizedCategory,
            getTopRicherCompanyLabel(person, locale),
            getTopRicherCompanyLabel(person, "ko"),
          ]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);
        const matchesCategory = category === "all" || person.category === category;
        const matchesCountry = country === "all" || person.country === country;
        const matchesWatchlist = !watchlistOnly || watchlist.includes(slug);

        return matchesQuery && matchesCategory && matchesCountry && matchesWatchlist;
      })
      .sort((a, b) => {
        if (sortMode === "wealth") {
          return b.netWorthBillion - a.netWorthBillion;
        }

        if (sortMode === "name") {
          return a.name.localeCompare(b.name);
        }

        return a.rank - b.rank;
      });
  }, [category, country, locale, query, sortMode, t, watchlist, watchlistOnly]);

  const comparedPeople = comparison
    .map((slug) => topRichers.find((person) => getTopRicherSlug(person) === slug))
    .filter(Boolean) as TopRicher[];

  const toggleWatchlist = (person: TopRicher) => {
    const slug = getTopRicherSlug(person);
    setWatchlist((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  };

  const toggleComparison = (person: TopRicher) => {
    const slug = getTopRicherSlug(person);
    setComparison((current) => {
      if (current.includes(slug)) {
        return current.filter((item) => item !== slug);
      }

      if (current.length >= 3) {
        return [current[1], current[2], slug];
      }

      return [...current, slug];
    });
  };

  return (
    <section id="workspace" className="px-4 pb-10 pt-2 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#101612]">
        <div className="grid gap-5 border-b border-white/10 p-5 lg:grid-cols-[0.82fr_1.18fr] lg:p-6">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#d8a24f]">
              <SlidersHorizontal className="size-4" aria-hidden="true" />
              탐색 워크스페이스
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              검색하고, 저장하고, 비교하는 앱 화면입니다.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              상위 100명 인물을 이름, 국가, 산업으로 찾고 관심목록과 비교 큐에 담아
              다음 분석 흐름으로 이어갑니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <WorkspaceMetric label="검색 결과" value={`${filteredPeople.length}`} />
            <WorkspaceMetric label="관심목록" value={`${watchlist.length}`} />
            <WorkspaceMetric label="비교 큐" value={`${comparison.length}/3`} />
          </div>
        </div>

        <div className="grid gap-5 p-5 lg:grid-cols-[320px_1fr] lg:p-6">
          <aside className="h-fit border border-white/10 bg-black/12 p-4">
            <label className="text-xs font-semibold uppercase tracking-normal text-white/42">
              검색
            </label>
            <div className="mt-3 flex min-h-11 items-center gap-3 rounded-[8px] border border-white/10 bg-[#0a0d0b] px-3">
              <Search className="size-4 shrink-0 text-white/42" aria-hidden="true" />
              <input
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/34"
                placeholder="이름, 국가, 산업 검색"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query ? (
                <button
                  className="grid size-7 place-items-center rounded-[8px] text-white/48 hover:bg-white/10 hover:text-white"
                  type="button"
                  aria-label="검색어 지우기"
                  onClick={() => setQuery("")}
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <WorkspaceSelect
              label="산업"
              value={category}
              values={topRicherCategories.map(
                (item) =>
                  [
                    item,
                    t(`category.${item}`, getTopRicherCategoryLabel(item, locale)),
                  ] as [string, string],
              )}
              onChange={setCategory}
            />
            <WorkspaceSelect
              label="국가/지역"
              value={country}
              values={topRicherCountries.map(
                (item) =>
                  [
                    item,
                    t(`country.${item}`, getTopRicherCountryLabel(item, locale)),
                  ] as [string, string],
              )}
              onChange={setCountry}
            />
            <WorkspaceSelect
              label="정렬"
              value={sortMode}
              values={[
                ["rank", t("common.forbesRank", "포브스 순위")],
                ["wealth", t("common.netWorth", "순자산")],
                ["name", t("common.name", "이름")],
              ]}
              onChange={(value) => setSortMode(value as SortMode)}
            />

            <button
              className={`mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border text-sm font-semibold transition ${
                watchlistOnly
                  ? "border-[#d8a24f] bg-[#d8a24f] text-[#111009]"
                  : "border-white/10 text-white/64 hover:border-white/28 hover:text-white"
              }`}
              type="button"
              onClick={() => setWatchlistOnly((current) => !current)}
            >
              <BookmarkCheck className="size-4" aria-hidden="true" />
              관심목록만 보기
            </button>
          </aside>

          <div className="min-w-0">
            <ComparisonStrip people={comparedPeople} onRemove={toggleComparison} />
            <div className="mt-4 hidden overflow-hidden border border-white/10 md:block">
              <table className="w-full min-w-[780px] border-collapse text-left">
                <thead className="bg-[#0d1310] text-xs uppercase tracking-normal text-white/42">
                  <tr>
                    <th className="px-4 py-3 font-semibold">순위</th>
                    <th className="px-4 py-3 font-semibold">인물</th>
                    <th className="px-4 py-3 font-semibold">순자산</th>
                    <th className="px-4 py-3 font-semibold">시장</th>
                    <th className="px-4 py-3 font-semibold">작업</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredPeople.map((person) => (
                    <WorkspaceRow
                      key={getTopRicherSlug(person)}
                      person={person}
                      watched={watchlist.includes(getTopRicherSlug(person))}
                      compared={comparison.includes(getTopRicherSlug(person))}
                      onToggleWatch={toggleWatchlist}
                      onToggleCompare={toggleComparison}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid gap-3 md:hidden">
              {filteredPeople.map((person) => (
                <WorkspaceCard
                  key={`${getTopRicherSlug(person)}-card`}
                  person={person}
                  watched={watchlist.includes(getTopRicherSlug(person))}
                  compared={comparison.includes(getTopRicherSlug(person))}
                  onToggleWatch={toggleWatchlist}
                  onToggleCompare={toggleComparison}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkspaceMetric({ label, value }: { label: string; value: string }) {
  return (
    <article className="border border-white/10 bg-black/12 p-4">
      <p className="text-xs font-semibold uppercase tracking-normal text-white/38">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </article>
  );
}

function WorkspaceSelect({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: string[] | Array<[string, string]>;
  onChange: (value: string) => void;
}) {
  const { t } = useI18n();
  const optionPairs = values.map((item) => (Array.isArray(item) ? item : [item, item]));

  return (
    <label className="mt-4 block">
      <span className="text-xs font-semibold uppercase tracking-normal text-white/42">
        {label}
      </span>
      <select
        className="mt-3 min-h-11 w-full rounded-[8px] border border-white/10 bg-[#0a0d0b] px-3 text-sm text-white outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">{t("common.all", "전체")}</option>
        {optionPairs.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function ComparisonStrip({
  people,
  onRemove,
}: {
  people: TopRicher[];
  onRemove: (person: TopRicher) => void;
}) {
  const { locale, t } = useI18n();

  if (people.length === 0) {
    return (
      <div className="border border-white/10 bg-black/12 p-4 text-sm leading-6 text-white/50">
        비교할 인물을 최대 3명까지 담아 순위, 순자산, 산업 노출을 한눈에 볼 수 있습니다.
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {people.map((person) => (
        <article key={`${person.name}-compare`} className="border border-white/10 bg-black/12 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#d8a24f]">
                Forbes {getTopRicherForbesRankLabel(person.rank, locale)}
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-white">
                {getTopRicherDisplayName(person, locale)}
              </p>
              <p className="mt-1 truncate text-xs text-white/48">
                {getTopRicherCompanyLabel(person, locale)}
              </p>
            </div>
            <button
              className="grid size-8 shrink-0 place-items-center rounded-[8px] text-white/44 hover:bg-white/10 hover:text-white"
              type="button"
              aria-label={`${person.name} 비교 제거`}
              onClick={() => onRemove(person)}
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 text-xl font-semibold text-white">
            {getTopRicherNetWorthLabel(person, locale)}
          </p>
          <p className="mt-1 text-xs text-white/44">
            {t(`category.${person.category}`, getTopRicherCategoryLabel(person.category, locale))}
          </p>
        </article>
      ))}
    </div>
  );
}

function WorkspaceRow({
  person,
  watched,
  compared,
  onToggleWatch,
  onToggleCompare,
}: WorkspacePersonProps) {
  const { locale, t } = useI18n();

  return (
    <tr className="text-sm transition hover:bg-white/[0.06]">
      <td className="px-4 py-3 font-semibold text-[#e8bd70]">
        {getTopRicherForbesRankLabel(person.rank, locale)}
      </td>
      <td className="px-4 py-3">
        <PersonIdentity person={person} />
      </td>
      <td className="px-4 py-3 font-semibold text-white">
        {getTopRicherNetWorthLabel(person, locale)}
      </td>
      <td className="px-4 py-3 text-white/58">
        {t(`country.${person.country}`, getTopRicherCountryLabel(person.country, locale))}
        <span className="mx-2 text-white/22">/</span>
        {t(`category.${person.category}`, getTopRicherCategoryLabel(person.category, locale))}
      </td>
      <td className="px-4 py-3">
        <WorkspaceActions
          person={person}
          watched={watched}
          compared={compared}
          onToggleWatch={onToggleWatch}
          onToggleCompare={onToggleCompare}
        />
      </td>
    </tr>
  );
}

function WorkspaceCard(props: WorkspacePersonProps) {
  const { person } = props;
  const { locale, t } = useI18n();

  return (
    <article className="border border-white/10 bg-black/12 p-4">
      <div className="flex items-start justify-between gap-3">
        <PersonIdentity person={person} />
        <p className="shrink-0 text-lg font-semibold text-white">
          {getTopRicherNetWorthLabel(person, locale)}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/56">
        <span className="rounded-[8px] border border-white/10 px-2 py-1">
          Forbes {getTopRicherForbesRankLabel(person.rank, locale)}
        </span>
        <span className="rounded-[8px] border border-white/10 px-2 py-1">
          {t(`country.${person.country}`, getTopRicherCountryLabel(person.country, locale))}
        </span>
        <span className="rounded-[8px] border border-white/10 px-2 py-1">
          {t(`category.${person.category}`, getTopRicherCategoryLabel(person.category, locale))}
        </span>
      </div>
      <div className="mt-4">
        <WorkspaceActions {...props} />
      </div>
    </article>
  );
}

type WorkspacePersonProps = {
  person: TopRicher;
  watched: boolean;
  compared: boolean;
  onToggleWatch: (person: TopRicher) => void;
  onToggleCompare: (person: TopRicher) => void;
};

function WorkspaceActions({
  person,
  watched,
  compared,
  onToggleWatch,
  onToggleCompare,
}: WorkspacePersonProps) {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        className={`inline-flex min-h-9 items-center gap-1.5 rounded-[8px] px-2.5 text-xs font-semibold transition ${
          watched
            ? "bg-[#d8a24f] text-[#111009]"
            : "border border-white/10 text-white/58 hover:border-white/28 hover:text-white"
        }`}
        type="button"
        onClick={() => onToggleWatch(person)}
      >
        <Star className="size-3.5" aria-hidden="true" />
        {t("common.save", "저장")}
      </button>
      <button
        className={`inline-flex min-h-9 items-center gap-1.5 rounded-[8px] px-2.5 text-xs font-semibold transition ${
          compared
            ? "bg-white text-[#111411]"
            : "border border-white/10 text-white/58 hover:border-white/28 hover:text-white"
        }`}
        type="button"
        onClick={() => onToggleCompare(person)}
      >
        {t("common.compare", "비교")}
      </button>
      <Link
        className="inline-flex min-h-9 items-center gap-1.5 rounded-[8px] bg-white px-2.5 text-xs font-semibold text-[#111411] transition hover:bg-[#d8a24f]"
        href={getTopRicherProfileHref(person)}
      >
        {t("common.viewAnalysis", "분석 보기")}
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

function PersonIdentity({ person }: { person: TopRicher }) {
  const { locale, t } = useI18n();
  const image = topRicherImages[person.name];

  return (
    <div className="flex min-w-0 items-center gap-3">
      {image ? (
        <span className="block size-12 shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-[#18221d]">
          <Image
            className="h-full w-full object-cover"
            src={image.src}
            alt={`${person.name} 인물 사진`}
            width={48}
            height={48}
            loading="lazy"
            sizes="48px"
            unoptimized
          />
        </span>
      ) : (
        <span className="grid size-12 shrink-0 place-items-center rounded-[8px] border border-[#d8a24f]/28 bg-[#18221d] text-xs font-semibold text-[#e8bd70]">
          {getInitials(person.name)}
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate font-semibold text-white">
          {getTopRicherDisplayName(person, locale)}
        </p>
        <p className="mt-1 truncate text-xs font-medium text-white/54">
          {getTopRicherCompanyLabel(person, locale)}
        </p>
        <p className="mt-1 truncate text-xs text-white/38">
          {t("common.age", "나이 {age}", { age: person.age })}
        </p>
      </div>
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
