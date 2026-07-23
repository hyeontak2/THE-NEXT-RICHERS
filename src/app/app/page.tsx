"use client";

import {
  Activity,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Database,
  Globe2,
  ListOrdered,
  TrendingUp,
  UsersRound,
  Layers3,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { AppShell, PageIntro } from "./app-chrome";
import { marketCapCompanies, marketCapSource, marketCapSectorGroups } from "@/lib/market-cap-companies";
import {
  getTopRicherNetWorthLabel,
  topRichers,
  topRichersSource,
} from "@/lib/top-richers";

export default function RichersAppPage() {
  const totalTop100Cap = useMemo(
    () => marketCapCompanies.reduce((s, c) => s + c.marketCapBillion, 0),
    [],
  );
  const topTenCap = useMemo(
    () => marketCapCompanies.slice(0, 10).reduce((s, c) => s + c.marketCapBillion, 0),
    [],
  );
  const topTenShare = Math.round((topTenCap / totalTop100Cap) * 100);

  // Sector breakdown
  const sectorStats = useMemo(() => {
    const map = new Map<string, { count: number; cap: number }>();
    for (const c of marketCapCompanies) {
      const g = c.sectorGroup;
      if (!map.has(g)) map.set(g, { count: 0, cap: 0 });
      const s = map.get(g)!;
      s.count++;
      s.cap += c.marketCapBillion;
    }
    return Array.from(map.entries())
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.cap - a.cap);
  }, []);

  // Region breakdown
  const regionStats = useMemo(() => {
    const map = new Map<string, { count: number; cap: number }>();
    for (const c of marketCapCompanies) {
      const r = c.region;
      if (!map.has(r)) map.set(r, { count: 0, cap: 0 });
      const s = map.get(r)!;
      s.count++;
      s.cap += c.marketCapBillion;
    }
    return Array.from(map.entries())
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.cap - a.cap);
  }, []);

  // AI·Semiconductor sector total
  const aiSector = sectorStats.find((s) => s.name === "AI·반도체");
  const aiShare = aiSector ? Math.round((aiSector.cap / totalTop100Cap) * 100) : 0;

  return (
    <AppShell active="home">
      <PageIntro
        icon={Database}
        eyebrow="어플리케이션 소개"
        title="THE NEXT RICHERS 앱 한눈에 보기"
        description="글로벌 부자 TOP 100의 순위, 인물 프로필, 시장 시나리오, 출처 검증을 빠르게 탐색하는 리서치 앱입니다."
      />

      {/* === Market Overview Cards === */}
      <section className="px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              icon={BarChart3}
              label="글로벌 시가총액"
              value={`$${(totalTop100Cap / 1000).toFixed(1)}T`}
              sub={`${marketCapCompanies.length}개 기업 · 기준 ${marketCapSource.checkedAt}`}
            />
            <MetricCard
              icon={Globe2}
              label="TOP 10 집중도"
              value={`${topTenShare}%`}
              sub={`상위 10개 기업 합산 ${(topTenCap / 1000).toFixed(1)}T`}
            />
            <MetricCard
              icon={TrendingUp}
              label="AI·반도체 비중"
              value={`${aiShare}%`}
              sub={`${aiSector?.count ?? 0}개 기업 · 시장 주도 섹터`}
            />
            <MetricCard
              icon={UsersRound}
              label="억만장자 집계"
              value={topRichersSource.stats.totalBillionaires.toLocaleString()}
              sub={`순자산 합계 $${topRichersSource.stats.totalNetWorthTrillion}T`}
            />
          </div>
        </div>
      </section>

      {/* === Sector Breakdown (Donut Chart) === */}
      <section className="mt-6 px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
                <BarChart3 className="size-4" aria-hidden="true" />
                섹터별 시가총액 분포
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-8">
                <div className="shrink-0">
                  <DonutChart data={sectorStats} total={totalTop100Cap} />
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  {sectorStats.map((s) => (
                    <div key={s.name} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block size-3 shrink-0 rounded-full"
                          style={{ backgroundColor: sectorColor(s.name) }}
                        />
                        <span className="text-sm text-[#111411]">{s.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#111411]">
                        {((s.cap / totalTop100Cap) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
                <Globe2 className="size-4" aria-hidden="true" />
                지역별 시가총액 분포
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-8">
                <div className="shrink-0">
                  <DonutChart data={regionStats} total={totalTop100Cap} />
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  {regionStats.map((r) => (
                    <div key={r.name} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block size-3 shrink-0 rounded-full"
                          style={{ backgroundColor: regionColor(r.name) }}
                        />
                        <span className="text-sm text-[#111411]">{r.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#111411]">
                        {((r.cap / totalTop100Cap) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Top Companies Mini Table === */}
      <section className="mt-6 px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
                <Building2 className="size-4" aria-hidden="true" />
                시가총액 TOP 10
              </p>
              <Link
                href="/app/market"
                className="text-sm font-semibold text-[#2f6f4e] hover:underline"
              >
                전체 100개 보기 →
              </Link>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#e8e1d3] text-xs uppercase text-[#73786f]">
                    <th className="py-2 pr-3 font-semibold">순위</th>
                    <th className="py-2 pr-3 font-semibold">기업</th>
                    <th className="py-2 pr-3 font-semibold">티커</th>
                    <th className="py-2 pr-3 font-semibold">시가총액</th>
                    <th className="py-2 pr-3 font-semibold">섹터</th>
                  </tr>
                </thead>
                <tbody>
                  {marketCapCompanies.slice(0, 10).map((c) => (
                    <tr key={c.ticker} className="border-b border-[#f0ebe1] last:border-0">
                      <td className="py-2 pr-3 font-semibold text-[#9a6a20]">#{c.rank}</td>
                      <td className="py-2 pr-3 font-semibold text-[#111411]">{c.name}</td>
                      <td className="py-2 pr-3 text-[#73786f]">{c.ticker}</td>
                      <td className="py-2 pr-3 font-semibold">{c.marketCap}</td>
                      <td className="py-2 pr-3 text-[#5d625b]">{c.sector}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* === Quick Navigation === */}
      <section className="mt-6 px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
            빠른 이동
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <QuickLink
              icon={ListOrdered}
              title="억만장자 랭킹"
              desc="TOP 100 순자산 순위와 인물 프로필"
              href="/app/ranking"
            />
            <QuickLink
              icon={BarChart3}
              title="시장 분석"
              desc="시가총액 100개 기업 분석과 필터"
              href="/app/market"
            />
            <QuickLink
              icon={UsersRound}
              title="인물 프로필"
              desc="개인별 성장 배경과 사업 전략"
              href="/app/profiles"
            />
            <QuickLink
              icon={Activity}
              title="시장 시나리오"
              desc="섹터별 충격 시뮬레이션"
              href="/app/market"
            />
            <QuickLink
              icon={Layers3}
              title="출처 검증"
              desc="데이터 계층과 신뢰도 기준"
              href="/app/sources"
            />
            <QuickLink
              icon={Globe2}
              title="글로벌 비교"
              desc="지역·국가별 TOP 기업 비교"
              href="/app/market"
            />
          </div>
        </div>
      </section>

      <div className="h-8" />
    </AppShell>
  );
}

/* ─── Components ─── */

function MetricCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: any;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="border border-[#ded8ca] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">{label}</p>
        <Icon className="size-5 text-[#9a6a20]" aria-hidden="true" />
      </div>
      <p className="mt-3 text-3xl font-semibold text-[#111411]">{value}</p>
      <p className="mt-2 text-sm text-[#5d625b]">{sub}</p>
    </div>
  );
}

function QuickLink({
  icon: Icon,
  title,
  desc,
  href,
}: {
  icon: any;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-4 border border-[#ded8ca] bg-white p-5 shadow-sm transition hover:border-[#c8923d] hover:shadow-md"
    >
      <Icon className="mt-0.5 size-5 shrink-0 text-[#9a6a20]" aria-hidden="true" />
      <div>
        <p className="font-semibold text-[#111411]">{title}</p>
        <p className="mt-1 text-sm text-[#5d625b]">{desc}</p>
      </div>
    </Link>
  );
}

function DonutChart({
  data,
  total,
  size = 140,
}: {
  data: Array<{ name: string; cap: number }>;
  total: number;
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;
  const strokeW = size * 0.14;

  let cumulative = 0;
  const slices = data.map((d) => {
    const pct = d.cap / total;
    const startAngle = cumulative * 360;
    cumulative += pct;
    const endAngle = cumulative * 360;
    return { name: d.name, pct, startAngle, endAngle };
  });

  // Only render top-N + "기타" if too many slices
  const maxSlices = 6;
  let mainSlices = slices.slice(0, maxSlices);
  const rest = slices.slice(maxSlices);
  if (rest.length > 0) {
    const restPct = rest.reduce((s, r) => s + r.pct, 0);
    mainSlices.push({ name: "기타", pct: restPct, startAngle: 0, endAngle: 0 }); // placeholder
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {(() => {
        const segments: Array<{ name: string; pct: number }> = [];
        let start = 0;
        for (const s of slices) {
          segments.push({ name: s.name, pct: s.pct });
        }

        // Build actual arc paths
        const arcs: Array<{
          name: string;
          pct: number;
          path: string;
          color: string;
        }> = [];
        let angle = -90; // start from top
        const segmentsToDraw = segments.slice(0, maxSlices);
        if (segments.length > maxSlices) {
          const restPct = segments.slice(maxSlices).reduce((s, r) => s + r.pct, 0);
          segmentsToDraw.push({ name: "기타", pct: restPct });
        }

        for (const seg of segmentsToDraw) {
          if (seg.pct < 0.001) continue;
          const pct = seg.pct;
          const startAng = angle;
          const endAng = angle + pct * 360;
          const startRad = (startAng * Math.PI) / 180;
          const endRad = (endAng * Math.PI) / 180;

          const x1 = cx + r * Math.cos(startRad);
          const y1 = cy + r * Math.sin(startRad);
          const x2 = cx + r * Math.cos(endRad);
          const y2 = cy + r * Math.sin(endRad);

          const largeArc = pct > 0.5 ? 1 : 0;

          const path = [
            `M ${cx} ${cy}`,
            `L ${x1.toFixed(2)} ${y1.toFixed(2)}`,
            `A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
            "Z",
          ].join(" ");

          const color =
            seg.name === "기타"
              ? "#d0cbbc"
              : seg.name.includes("AI") || seg.name.includes("반도체")
                ? "#2f6f4e"
                : seg.name.includes("금융")
                  ? "#d8a24f"
                  : seg.name.includes("헬스케어")
                    ? "#5f8b7a"
                    : seg.name.includes("소비")
                      ? "#c8923d"
                      : seg.name.includes("에너지")
                        ? "#8a7a5a"
                        : seg.name.includes("산업")
                          ? "#6a7a8a"
                          : seg.name.includes("자동차")
                            ? "#4a6a7a"
                            : "#9a8a7a";

          arcs.push({ name: seg.name, pct, path, color });
          angle = endAng;
        }

        return arcs.map((arc) => <path key={arc.name} d={arc.path} fill={arc.color} />);
      })()}
      <circle cx={cx} cy={cy} r={r * 0.55} fill="#fff" />
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        className="text-xs font-semibold"
        fill="#111411"
      >
        {data[0]?.name?.slice(0, 6) || ""}
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        fontSize="11"
        fill="#73786f"
      >
        {data[0] ? `${(data[0].cap / total * 100).toFixed(1)}%` : ""}
      </text>
    </svg>
  );
}

function sectorColor(name: string): string {
  if (name.includes("AI") || name.includes("반도체")) return "#2f6f4e";
  if (name.includes("금융")) return "#d8a24f";
  if (name.includes("헬스케어")) return "#5f8b7a";
  if (name.includes("소비")) return "#c8923d";
  if (name.includes("에너지")) return "#8a7a5a";
  if (name.includes("산업")) return "#6a7a8a";
  if (name.includes("자동차")) return "#4a6a7a";
  if (name.includes("통신")) return "#7a8a7a";
  return "#9a8a7a";
}

function regionColor(name: string): string {
  if (name === "북미") return "#2f6f4e";
  if (name === "아시아") return "#d8a24f";
  if (name === "유럽") return "#5f8b7a";
  if (name === "중동") return "#c8923d";
  if (name === "오세아니아") return "#6a7a8a";
  if (name === "남미") return "#8a7a5a";
  return "#9a8a7a";
}
