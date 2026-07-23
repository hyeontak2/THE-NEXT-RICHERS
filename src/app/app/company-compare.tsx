"use client";

import { X, BarChart3, Scale } from "lucide-react";
import { useState } from "react";
import type { MarketCapCompany } from "@/lib/market-cap-companies";

export function CompanyCompareButton({
  compareMode,
  onToggle,
  compareCount,
}: {
  compareMode: boolean;
  onToggle: () => void;
  compareCount: number;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex min-h-11 items-center gap-2 rounded-[8px] border px-3 text-sm font-semibold transition ${
        compareMode
          ? "border-[#2f6f4e] bg-[#2f6f4e] text-white"
          : "border-[#ded8ca] bg-[#fffaf0] text-[#343a34] hover:border-[#9a6a20]"
      }`}
    >
      <Scale className="size-4" aria-hidden="true" />
      비교
      {compareCount > 0 && (
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/20 text-xs">
          {compareCount}
        </span>
      )}
    </button>
  );
}

export function CompanyComparePanel({
  companies,
  onRemove,
}: {
  companies: MarketCapCompany[];
  onRemove: (ticker: string) => void;
}) {
  if (companies.length === 0) return null;

  return (
    <div className="border border-[#ded8ca] bg-[#f7f6f1] p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
          <Scale className="size-4" aria-hidden="true" />
          기업 비교
          <span className="text-xs font-normal text-[#73786f]">
            {companies.length}/2개 선택
          </span>
        </p>
        <div className="flex gap-2">
          {companies.map((c) => (
            <button
              key={c.ticker}
              type="button"
              onClick={() => onRemove(c.ticker)}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#c8923d] bg-[#fff4d8] px-2.5 py-1.5 text-xs font-semibold text-[#111411] transition hover:bg-[#f3c56f]"
            >
              {c.ticker}
              <X className="size-3" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {companies.length === 2 && (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {companies.map((c) => (
            <div
              key={c.ticker}
              className="border border-[#ded8ca] bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#9a6a20]">
                    #{c.rank} · {c.ticker}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-[#111411]">
                    {c.name}
                  </h3>
                </div>
                <span className="shrink-0 rounded-[8px] border border-[#c8923d] bg-[#fff4d8] px-2.5 py-1.5 text-sm font-semibold text-[#111411]">
                  {c.marketCap}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-[#e8e1d3] py-3 text-sm">
                <CompareField label="국가" value={c.country} />
                <CompareField label="지역" value={c.region} />
                <CompareField label="산업" value={c.sector} />
                <CompareField label="분류" value={c.sectorGroup} />
                <CompareField
                  label="시가총액"
                  value={(c.marketCapBillion >= 1000
                    ? `$${(c.marketCapBillion / 1000).toFixed(3)}T`
                    : `$${c.marketCapBillion.toFixed(2)}B`
                  )}
                />
              </div>

              <div className="mt-4 space-y-3">
                <CompareInsight
                  title="핵심 성장 동력"
                  body={c.driver}
                />
                <CompareInsight
                  title="점검 리스크"
                  body={c.watch}
                />
              </div>
            </div>
          ))}

          {/* Difference highlights */}
          {companies.length === 2 && (
            <div className="col-span-full border border-[#ded8ca] bg-[#fffaf0] p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
                <BarChart3 className="size-4" aria-hidden="true" />
                주요 차이점
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {getDifferences(companies[0], companies[1]).map((diff) => (
                  <div
                    key={diff.label}
                    className="rounded-[8px] border border-[#e8e1d3] bg-white p-3"
                  >
                    <p className="text-xs font-semibold text-[#73786f]">
                      {diff.label}
                    </p>
                    <div className="mt-1.5 flex items-center justify-between gap-2 text-sm">
                      <span className="font-semibold text-[#111411]">
                        {diff.left}
                      </span>
                      <span className="text-[#73786f]">vs</span>
                      <span className="font-semibold text-[#111411] text-right">
                        {diff.right}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {companies.length === 1 && (
        <p className="mt-4 text-sm text-[#73786f]">
          비교할 다른 기업을 표에서 선택하세요.
        </p>
      )}
    </div>
  );
}

function CompareField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[#73786f]">{label}</dt>
      <dd className="mt-0.5 font-semibold text-[#111411]">{value}</dd>
    </div>
  );
}

function CompareInsight({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-[#111411]">{title}</h4>
      <p className="mt-1 text-sm leading-6 text-[#5d625b]">{body}</p>
    </div>
  );
}

function getDifferences(a: MarketCapCompany, b: MarketCapCompany) {
  const diffs: Array<{ label: string; left: string; right: string }> = [];

  // Market cap difference
  const capDiff = a.marketCapBillion - b.marketCapBillion;
  diffs.push({
    label: "시가총액 차이",
    left: `$${(a.marketCapBillion / 1000).toFixed(2)}T`,
    right: `$${(b.marketCapBillion / 1000).toFixed(2)}T`,
  });

  // Market cap ratio
  const ratio =
    b.marketCapBillion > 0
      ? (a.marketCapBillion / b.marketCapBillion).toFixed(2)
      : "N/A";
  diffs.push({
    label: "규모 비율 (A/B)",
    left: `${ratio}배`,
    right: "1배",
  });

  // Rank difference
  const rankDiff = a.rank - b.rank;
  diffs.push({
    label: "순위 차이",
    left: rankDiff < 0 ? `${Math.abs(rankDiff)}위 앞섬` : `${rankDiff}위 뒤짐`,
    right: rankDiff > 0 ? `${rankDiff}위 뒤짐` : `${Math.abs(rankDiff)}위 앞섬`,
  });

  // Country / Region
  if (a.country !== b.country) {
    diffs.push({ label: "국가", left: a.country, right: b.country });
  }
  if (a.region !== b.region) {
    diffs.push({ label: "지역", left: a.region, right: b.region });
  }
  if (a.sectorGroup !== b.sectorGroup) {
    diffs.push({
      label: "산업 분류",
      left: a.sectorGroup,
      right: b.sectorGroup,
    });
  }

  return diffs;
}
