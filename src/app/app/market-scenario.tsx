"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, RotateCcw, TrendingDown, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import {
  getTopRicherCategoryLabel,
  getTopRicherCompanyLabel,
  getTopRicherDisplayName,
  getTopRicherDeltaNetWorthLabel,
  getTopRicherGlobalRankLabel,
  getTopRicherNetWorthLabel,
  getTopRicherProfileHref,
  getTopRicherScenarioRankLabel,
  topRicherImages,
  topRichers,
  type TopRicher,
} from "@/lib/top-richers";
import { useI18n } from "./i18n-provider";

type ShockKey =
  | "technology"
  | "fashion"
  | "finance"
  | "energy"
  | "metals"
  | "automotive"
  | "defensive";

type ShockState = Record<ShockKey, number>;

type ScenarioPerson = TopRicher & {
  adjustedNetWorthBillion: number;
  baselinePosition: number;
  deltaBillion: number;
  movement: number;
  scenarioPosition: number;
  sensitivity: number;
};

const scenarioControls: Array<{
  id: ShockKey;
  label: string;
  categories: string[];
  defaultShock: number;
}> = [
  {
    id: "technology",
    label: "기술주",
    categories: ["Technology"],
    defaultShock: 6,
  },
  {
    id: "fashion",
    label: "럭셔리/리테일",
    categories: ["Fashion & Retail"],
    defaultShock: -2,
  },
  {
    id: "finance",
    label: "금융/투자",
    categories: ["Finance & Investments", "Gambling & Casinos"],
    defaultShock: 2,
  },
  {
    id: "energy",
    label: "에너지",
    categories: ["Energy"],
    defaultShock: 3,
  },
  {
    id: "metals",
    label: "원자재",
    categories: ["Metals & Mining"],
    defaultShock: 1,
  },
  {
    id: "automotive",
    label: "자동차",
    categories: ["Automotive"],
    defaultShock: 4,
  },
  {
    id: "defensive",
    label: "방어/기타",
    categories: [
      "Diversified",
      "Food & Beverage",
      "Healthcare",
      "Logistics",
      "Manufacturing",
      "Telecom",
    ],
    defaultShock: 0,
  },
];

const defaultShocks = scenarioControls.reduce((state, control) => {
  state[control.id] = control.defaultShock;
  return state;
}, {} as ShockState);

const scenarioPresets: Array<{ label: string; shocks: ShockState }> = [
  {
    label: "기본",
    shocks: defaultShocks,
  },
  {
    label: "AI 랠리",
    shocks: {
      technology: 14,
      fashion: -1,
      finance: 3,
      energy: 1,
      metals: 0,
      automotive: 6,
      defensive: 0,
    },
  },
  {
    label: "기술주 조정",
    shocks: {
      technology: -14,
      fashion: -3,
      finance: -4,
      energy: 2,
      metals: 1,
      automotive: -8,
      defensive: 0,
    },
  },
  {
    label: "원자재 강세",
    shocks: {
      technology: -2,
      fashion: 0,
      finance: 1,
      energy: 10,
      metals: 12,
      automotive: -1,
      defensive: 1,
    },
  },
];

const sensitivityByCategory: Record<string, number> = {
  Technology: 0.74,
  "Fashion & Retail": 0.56,
  "Finance & Investments": 0.48,
  "Gambling & Casinos": 0.42,
  Energy: 0.55,
  "Metals & Mining": 0.52,
  Automotive: 0.68,
  Diversified: 0.38,
  "Food & Beverage": 0.34,
  Healthcare: 0.42,
  Logistics: 0.44,
  Manufacturing: 0.46,
  Telecom: 0.4,
};

export function MarketScenarioPanel() {
  const { locale, t } = useI18n();
  const [shocks, setShocks] = useState<ShockState>(defaultShocks);
  const updateShock = (id: ShockKey, value: number) => {
    setShocks((current) => ({
      ...current,
      [id]: value,
    }));
  };

  const scenario = useMemo(() => buildScenario(shocks), [shocks]);
  const topMovers = [...scenario]
    .sort((a, b) => Math.abs(b.movement) - Math.abs(a.movement))
    .slice(0, 6);
  const biggestGain = topMovers.find((person) => person.movement > 0);
  const biggestDrop = topMovers.find((person) => person.movement < 0);
  const activeShockCount = Object.values(shocks).filter((shock) => shock !== 0).length;

  return (
    <section id="market" className="px-4 pb-10 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#101612]">
        <div className="grid gap-6 border-b border-white/10 p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#d8a24f]">
              <Activity className="size-4" aria-hidden="true" />
              시장 시나리오
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              주가 변동에 따른 예상 순위 변동을 반영합니다.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              글로벌 금융 정보 기준 순자산에 섹터별 주가 변동률과 자산 민감도를 곱해 시나리오 순위를
              다시 계산합니다. 실제 실시간 자산가 순위가 아니라 학습용 추정 모델입니다.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <ScenarioStat
              label="변동 가정"
              value={`${activeShockCount}개`}
              tone="neutral"
            />
            <ScenarioStat
              label="최대 상승"
              value={biggestGain ? `${biggestGain.name} +${biggestGain.movement}` : "변동 없음"}
              tone="up"
            />
            <ScenarioStat
              label="최대 하락"
              value={biggestDrop ? `${biggestDrop.name} ${biggestDrop.movement}` : "변동 없음"}
              tone="down"
            />
          </div>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-[360px_1fr] lg:p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {scenarioPresets.map((preset) => (
                <button
                  key={preset.label}
                  className="min-h-10 rounded-[8px] border border-white/10 bg-black/12 px-3 text-xs font-semibold text-white/64 transition hover:border-[#d8a24f]/50 hover:text-white"
                  type="button"
                  onClick={() => setShocks({ ...preset.shocks })}
                >
                  {preset.label}
                </button>
              ))}
            </div>
            {scenarioControls.map((control) => (
              <label key={control.id} className="block border border-white/10 bg-black/12 p-4">
                <span className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-white">{control.label}</span>
                  <span
                    className={`text-sm font-semibold ${
                      shocks[control.id] >= 0 ? "text-[#a8e7b5]" : "text-[#ef9a9a]"
                    }`}
                  >
                    {formatPercent(shocks[control.id])}
                  </span>
                </span>
                <input
                  className="mt-4 h-2 w-full accent-[#d8a24f]"
                  type="range"
                  min="-20"
                  max="20"
                  step="1"
                  value={shocks[control.id]}
                  aria-label={`${control.label} 변동률`}
                  onInput={(event) =>
                    updateShock(control.id, Number(event.currentTarget.value))
                  }
                  onChange={(event) =>
                    updateShock(control.id, Number(event.currentTarget.value))
                  }
                />
                <span className="mt-3 block text-xs leading-5 text-white/42">
                  {control.categories
                    .map((category) =>
                      t(`category.${category}`, getTopRicherCategoryLabel(category, locale)),
                    )
                    .join(", ")}
                </span>
              </label>
            ))}
            <button
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-white/12 text-sm font-semibold text-white/72 transition hover:border-white/28 hover:text-white"
              type="button"
              onClick={() => setShocks(defaultShocks)}
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              기본 시나리오로 복원
            </button>
          </div>

          <div className="min-w-0">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">시나리오 Top 20</h3>
              <p className="text-xs text-white/42">순자산 단위: USD billion</p>
            </div>
            <div className="hidden overflow-hidden border border-white/10 md:block">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead className="bg-[#0d1310] text-xs uppercase tracking-normal text-white/42">
                  <tr>
                    <th className="px-4 py-3 font-semibold">시나리오</th>
                    <th className="px-4 py-3 font-semibold">인물</th>
                    <th className="px-4 py-3 font-semibold">조정 순자산</th>
                    <th className="px-4 py-3 font-semibold">순위 변동</th>
                    <th className="px-4 py-3 font-semibold">민감도</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {scenario.slice(0, 20).map((person) => (
                    <ScenarioRow key={person.name} person={person} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 md:hidden">
              {scenario.slice(0, 20).map((person) => (
                <ScenarioCard key={`${person.name}-mobile`} person={person} />
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topMovers.map((person) => (
                <article key={`${person.name}-mover`} className="border border-white/10 bg-black/12 p-4">
                  <p className="text-xs font-semibold uppercase tracking-normal text-white/38">
                    변동폭
                  </p>
                  <p className="mt-2 truncate text-sm font-semibold text-white">
                    {getTopRicherDisplayName(person, locale)}
                  </p>
                  <p className={`mt-3 text-2xl font-semibold ${getMovementTone(person.movement)}`}>
                    {formatMovement(person.movement)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function buildScenario(shocks: ShockState): ScenarioPerson[] {
  const adjusted = topRichers.map((person, index) => {
    const sensitivity = sensitivityByCategory[person.category] ?? 0.35;
    const shock = getCategoryShock(person.category, shocks);
    const adjustedNetWorthBillion = roundBillion(
      person.netWorthBillion * (1 + (shock / 100) * sensitivity),
    );

    return {
      ...person,
      adjustedNetWorthBillion,
      baselinePosition: index + 1,
      deltaBillion: roundBillion(adjustedNetWorthBillion - person.netWorthBillion),
      movement: 0,
      scenarioPosition: 0,
      sensitivity,
    };
  });

  return adjusted
    .sort((a, b) => b.adjustedNetWorthBillion - a.adjustedNetWorthBillion)
    .map((person, index) => ({
      ...person,
      scenarioPosition: index + 1,
      movement: person.baselinePosition - (index + 1),
    }));
}

function getCategoryShock(category: string, shocks: ShockState) {
  const control = scenarioControls.find((item) => item.categories.includes(category));
  return control ? shocks[control.id] : shocks.defensive;
}

function ScenarioStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "neutral" | "up" | "down";
}) {
  const Icon = tone === "up" ? TrendingUp : tone === "down" ? TrendingDown : Activity;

  return (
    <article className="border border-white/10 bg-black/12 p-4">
      <Icon
        className={`size-4 ${
          tone === "up" ? "text-[#a8e7b5]" : tone === "down" ? "text-[#ef9a9a]" : "text-[#d8a24f]"
        }`}
        aria-hidden="true"
      />
      <p className="mt-3 text-xs font-semibold uppercase tracking-normal text-white/38">
        {label}
      </p>
      <p className="mt-2 line-clamp-2 text-sm font-semibold text-white">{value}</p>
    </article>
  );
}

function ScenarioRow({ person }: { person: ScenarioPerson }) {
  const { locale } = useI18n();

  return (
    <tr className="text-sm transition hover:bg-white/[0.06]">
      <td className="px-4 py-3 font-semibold text-[#e8bd70]">
        {getTopRicherScenarioRankLabel(person.scenarioPosition, locale)}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <ScenarioPortrait person={person} />
          <div className="min-w-0">
            <p className="truncate font-semibold text-white">
              {getTopRicherDisplayName(person, locale)}
            </p>
            <p className="mt-1 truncate text-xs font-medium text-white/54">
              {getTopRicherCompanyLabel(person, locale)}
            </p>
            <p className="text-xs text-white/38">
              글로벌 {getTopRicherGlobalRankLabel(person.rank, locale)}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="font-semibold text-white">
          {getTopRicherNetWorthLabel({
            netWorthBillion: person.adjustedNetWorthBillion,
          }, locale)}
        </p>
        <p className={person.deltaBillion >= 0 ? "text-xs text-[#a8e7b5]" : "text-xs text-[#ef9a9a]"}>
          {getTopRicherDeltaNetWorthLabel(person.deltaBillion, locale)}
        </p>
      </td>
      <td className={`px-4 py-3 font-semibold ${getMovementTone(person.movement)}`}>
        {formatMovement(person.movement)}
      </td>
      <td className="px-4 py-3 text-white/58">{Math.round(person.sensitivity * 100)}%</td>
    </tr>
  );
}

function ScenarioCard({ person }: { person: ScenarioPerson }) {
  const { locale, t } = useI18n();

  return (
    <article className="grid grid-cols-[52px_1fr] gap-3 border border-white/10 bg-black/12 p-3">
      <ScenarioPortrait person={person} />
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#d8a24f]">
              {getTopRicherScenarioRankLabel(person.scenarioPosition, locale)}
            </p>
            <p className="truncate text-sm font-semibold text-white">
              {getTopRicherDisplayName(person, locale)}
            </p>
            <p className="mt-1 truncate text-xs text-white/48">
              {getTopRicherCompanyLabel(person, locale)}
            </p>
          </div>
          <p className={`shrink-0 text-sm font-semibold ${getMovementTone(person.movement)}`}>
            {formatMovement(person.movement)}
          </p>
        </div>
        <p className="mt-2 text-xs text-white/54">
          {t("market.expected", "예상")} {getTopRicherNetWorthLabel({
            netWorthBillion: person.adjustedNetWorthBillion,
          }, locale)} · 글로벌 {getTopRicherGlobalRankLabel(person.rank, locale)}
        </p>
        <Link
          className="mt-3 inline-flex min-h-8 items-center gap-1.5 rounded-[8px] bg-white px-2.5 text-xs font-semibold text-[#111411]"
          href={getTopRicherProfileHref(person)}
        >
          {t("common.viewAnalysis", "분석 보기")}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function ScenarioPortrait({ person }: { person: TopRicher }) {
  const image = topRicherImages[person.name];

  if (image) {
    return (
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
    );
  }

  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-[8px] border border-[#d8a24f]/28 bg-[#18221d] text-xs font-semibold text-[#e8bd70]">
      {getInitials(person.name)}
    </span>
  );
}

function formatMovement(movement: number) {
  if (movement > 0) {
    return `+${movement}`;
  }

  if (movement < 0) {
    return `${movement}`;
  }

  return "0";
}

function getMovementTone(movement: number) {
  if (movement > 0) {
    return "text-[#a8e7b5]";
  }

  if (movement < 0) {
    return "text-[#ef9a9a]";
  }

  return "text-white/42";
}

function formatPercent(value: number) {
  return value > 0 ? `+${value}%` : `${value}%`;
}

function roundBillion(value: number) {
  return Math.round(value * 10) / 10;
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
