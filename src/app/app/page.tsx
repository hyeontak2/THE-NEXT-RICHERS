"use client";

import {
  Activity,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Building2,
  Database,
  Globe2,
  Layers3,
  ListOrdered,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { AppShell, PageIntro } from "./app-chrome";
import { marketCapCompanies, marketCapSource } from "@/lib/market-cap-companies";
import { topRichersSource } from "@/lib/top-richers";

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

      {/* === Premium Metric Cards === */}
      <section className="px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              icon={BarChart3}
              iconBg="bg-emerald-600/10 text-emerald-700"
              label="글로벌 시가총액"
              value={`$${(totalTop100Cap / 1000).toFixed(1)}T`}
              sub={`${marketCapCompanies.length}개 기업 · 기준 ${marketCapSource.checkedAt}`}
            />
            <MetricCard
              icon={Globe2}
              iconBg="bg-amber-600/10 text-amber-700"
              label="TOP 10 집중도"
              value={`${topTenShare}%`}
              sub={`상위 10개 합산 ${(topTenCap / 1000).toFixed(1)}T`}
            />
            <MetricCard
              icon={TrendingUp}
              iconBg="bg-sky-600/10 text-sky-700"
              label="AI·반도체 비중"
              value={`${aiShare}%`}
              sub={`${aiSector?.count ?? 0}개 기업 · 시장 주도 섹터`}
            />
            <MetricCard
              icon={UsersRound}
              iconBg="bg-violet-600/10 text-violet-700"
              label="억만장자 집계"
              value={topRichersSource.stats.totalBillionaires.toLocaleString()}
              sub={`순자산 합계 $${topRichersSource.stats.totalNetWorthTrillion}T`}
            />
          </div>
        </div>
      </section>

      {/* === Premium Charts Section === */}
      <section className="mt-6 px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-2">
            <ChartCard
              icon={BarChart3}
              title="섹터별 시가총액 분포"
              hint="전체 TOP 100 시총 기준"
            >
              <DonutChart data={sectorStats} total={totalTop100Cap} />
              <div className="space-y-2">
                {sectorStats.slice(0, 6).map((s) => {
                  const pct = ((s.cap / totalTop100Cap) * 100);
                  return (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-[#111411]">{s.name}</span>
                        <span className="font-semibold text-[#111411]">{pct.toFixed(1)}%</span>
                      </div>
                      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-[#f0ebe1]">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, backgroundColor: sectorColor(s.name) }}
                        />
                      </div>
                    </div>
                  );
                })}
                {sectorStats.length > 6 && (
                  <div className="text-xs text-[#73786f]">
                    +{sectorStats.length - 6}개 소규모 섹터
                  </div>
                )}
              </div>
            </ChartCard>

            <ChartCard
              icon={Globe2}
              title="지역별 시가총액 분포"
              hint="전체 TOP 100 시총 기준"
            >
              <DonutChart data={regionStats} total={totalTop100Cap} />
              <div className="space-y-2">
                {regionStats.map((r) => {
                  const pct = ((r.cap / totalTop100Cap) * 100);
                  return (
                    <div key={r.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-[#111411]">{r.name}</span>
                        <span className="font-semibold text-[#111411]">{pct.toFixed(1)}%</span>
                      </div>
                      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-[#f0ebe1]">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, backgroundColor: regionColor(r.name) }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ChartCard>
          </div>
        </div>
      </section>

      {/* === Premium TOP 10 Table === */}
      <section className="mt-6 px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-xl border border-[#ded8ca] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[#f0ebe1] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-sm">
                  <Building2 className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
                    시가총액 TOP 10
                  </p>
                  <p className="text-xs text-[#73786f]">기준 {marketCapSource.checkedAt}</p>
                </div>
              </div>
              <Link
                href="/app/market"
                className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900"
              >
                전체 100개 보기
                <ArrowUp className="size-3.5 rotate-45" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead>
                  <tr className="bg-[#faf8f4] text-xs uppercase tracking-wider text-[#73786f]">
                    <th className="px-5 py-3 font-semibold">순위</th>
                    <th className="px-5 py-3 font-semibold">기업</th>
                    <th className="px-5 py-3 font-semibold">티커</th>
                    <th className="px-5 py-3 font-semibold">시가총액</th>
                    <th className="px-5 py-3 font-semibold">섹터</th>
                  </tr>
                </thead>
                <tbody>
                  {marketCapCompanies.slice(0, 10).map((c, i) => (
                    <tr
                      key={c.ticker}
                      className={`border-b border-[#f0ebe1] transition hover:bg-[#faf8f4] last:border-0 ${
                        i < 3 ? "bg-amber-50/30" : ""
                      }`}
                    >
                      <td className="px-5 py-3.5">
                        <span className={`inline-flex size-7 items-center justify-center rounded-md text-sm font-bold ${
                          i === 0 ? "bg-amber-100 text-amber-800" :
                          i === 1 ? "bg-slate-100 text-slate-700" :
                          i === 2 ? "bg-orange-100 text-orange-700" :
                          "text-[#9a6a20]"
                        }`}>
                          {c.rank}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-[#111411]">{c.name}</td>
                      <td className="px-5 py-3.5 font-mono text-xs text-[#73786f]">{c.ticker}</td>
                      <td className="px-5 py-3.5 font-semibold text-[#111411]">{c.marketCap}</td>
                      <td className="px-5 py-3.5">
                        <span className="inline-block rounded-full bg-[#f0ebe1] px-2.5 py-0.5 text-xs font-medium text-[#5d625b]">
                          {c.sector}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* === Premium Quick Navigation === */}
      <section className="mt-6 px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ded8ca] to-transparent" />
            <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#9a6a20]">
              빠른 이동
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ded8ca] to-transparent" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <QuickLink
              icon={ListOrdered}
              iconBg="bg-amber-100 text-amber-700"
              title="억만장자 랭킹"
              desc="TOP 100 순자산 순위와 인물 프로필"
              href="/app/ranking"
            />
            <QuickLink
              icon={BarChart3}
              iconBg="bg-emerald-100 text-emerald-700"
              title="시장 분석"
              desc="시가총액 100개 기업 분석과 필터"
              href="/app/market"
            />
            <QuickLink
              icon={UsersRound}
              iconBg="bg-sky-100 text-sky-700"
              title="인물 프로필"
              desc="개인별 성장 배경과 사업 전략"
              href="/app/profiles"
            />
            <QuickLink
              icon={Activity}
              iconBg="bg-violet-100 text-violet-700"
              title="시장 시나리오"
              desc="섹터별 충격 시뮬레이션"
              href="/app/market"
            />
            <QuickLink
              icon={Layers3}
              iconBg="bg-slate-100 text-slate-700"
              title="출처 검증"
              desc="데이터 계층과 신뢰도 기준"
              href="/app/sources"
            />
            <QuickLink
              icon={Globe2}
              iconBg="bg-indigo-100 text-indigo-700"
              title="글로벌 비교"
              desc="지역·국가별 TOP 기업 비교"
              href="/app/market"
            />
          </div>
        </div>
      </section>

      <div className="h-10" />
    </AppShell>
  );
}

/* ─── Components ─── */

function MetricCard({
  icon: Icon,
  iconBg,
  label,
  value,
  sub,
}: {
  icon: any;
  iconBg: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-[#ded8ca] bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 sm:p-6">
      <div className="absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br from-white/0 to-[#f7f6f1] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#9a6a20]">{label}</p>
          <span className={`grid size-8 place-items-center rounded-lg ${iconBg}`}>
            <Icon className="size-4" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-3xl font-bold tracking-tight text-[#111411]">{value}</p>
        <p className="mt-2 text-sm leading-snug text-[#73786f]">{sub}</p>
      </div>
    </div>
  );
}

function ChartCard({
  icon: Icon,
  title,
  hint,
  children,
}: {
  icon: any;
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-[#f7f6f1] text-[#9a6a20]">
            <Icon className="size-4" />
          </span>
          <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
            {title}
          </p>
        </div>
        <span className="text-xs text-[#73786f]">{hint}</span>
      </div>
      <div className="mt-5 grid gap-6 sm:grid-cols-[180px_1fr] sm:items-start">
        {children}
      </div>
    </div>
  );
}

function QuickLink({
  icon: Icon,
  iconBg,
  title,
  desc,
  href,
}: {
  icon: any;
  iconBg: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-[#ded8ca] bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${iconBg} transition-transform group-hover:scale-110`}>
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-[#111411] group-hover:text-emerald-700 transition-colors">{title}</p>
        <p className="mt-1 text-sm leading-snug text-[#73786f]">{desc}</p>
      </div>
    </Link>
  );
}

function DonutChart({
  data,
  total,
  size = 160,
}: {
  data: Array<{ name: string; cap: number }>;
  total: number;
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.46;
  const innerR = size * 0.30;

  // Build arcs
  const segments = data.map((d) => ({ name: d.name, pct: d.cap / total }));
  
  // Combine small segments
  const maxSlices = 5;
  let displaySegs = segments.slice(0, maxSlices);
  if (segments.length > maxSlices) {
    const restPct = segments.slice(maxSlices).reduce((s, r) => s + r.pct, 0);
    displaySegs.push({ name: "기타", pct: restPct });
  }

  const arcs: Array<{ name: string; pct: number; path: string; color: string }> = [];
  let angle = -90;

  for (const seg of displaySegs) {
    if (seg.pct < 0.001) continue;
    const startAng = angle;
    const endAng = angle + seg.pct * 360;
    const startRad = (startAng * Math.PI) / 180;
    const endRad = (endAng * Math.PI) / 180;

    const x1 = cx + outerR * Math.cos(startRad);
    const y1 = cy + outerR * Math.sin(startRad);
    const x2 = cx + outerR * Math.cos(endRad);
    const y2 = cy + outerR * Math.sin(endRad);

    // Inner circle points
    const ix1 = cx + innerR * Math.cos(endRad);
    const iy1 = cy + innerR * Math.sin(endRad);
    const ix2 = cx + innerR * Math.cos(startRad);
    const iy2 = cy + innerR * Math.sin(startRad);

    const largeArc = seg.pct > 0.5 ? 1 : 0;

    const path = [
      `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
      `L ${ix1.toFixed(2)} ${iy1.toFixed(2)}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2.toFixed(2)} ${iy2.toFixed(2)}`,
      "Z",
    ].join(" ");

    const color = isSectorData(data)
      ? sectorColor(seg.name)
      : regionColor(seg.name);

    arcs.push({ name: seg.name, pct: seg.pct, path, color });
    angle = endAng;
  }

  const topLabel = data[0]
    ? `${data[0].name?.slice(0, 4)}`
    : "";
  const topPct = data[0]
    ? `${(data[0].cap / total * 100).toFixed(1)}%`
    : "";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0"
    >
      <defs>
        {arcs.map((arc) => (
          <filter key={`shadow-${arc.name}`}>
            <feDropShadow dx={0} dy={1} stdDeviation={1} floodOpacity={0.15} />
          </filter>
        ))}
      </defs>
      {arcs.map((arc, i) => (
        <path
          key={arc.name}
          d={arc.path}
          fill={arc.color}
          opacity={0.92}
          className="transition-all hover:opacity-100"
        />
      ))}
      <circle cx={cx} cy={cy} r={innerR - 2} fill="#fff" />
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#111411"
      >
        {topLabel}
      </text>
      <text
        x={cx}
        y={cy + 11}
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="#73786f"
      >
        {topPct}
      </text>
    </svg>
  );
}

function isSectorData(data: Array<{ name: string }>) {
  return data.some((d) =>
    ["AI", "반도체", "금융", "헬스케어", "소비", "에너지"].some((kw) =>
      d.name.includes(kw),
    ),
  );
}

function sectorColor(name: string): string {
  if (name.includes("AI") || name.includes("반도체")) return "#059669";
  if (name.includes("금융")) return "#d97706";
  if (name.includes("헬스케어")) return "#0d9488";
  if (name.includes("소비") || name.includes("통신")) return "#b45309";
  if (name.includes("에너지")) return "#78716c";
  if (name.includes("산업") || name.includes("자동차")) return "#475569";
  return "#a8a29e";
}

function regionColor(name: string): string {
  if (name === "북미") return "#059669";
  if (name === "아시아") return "#d97706";
  if (name === "유럽") return "#0d9488";
  if (name === "중동") return "#b45309";
  if (name === "오세아니아") return "#475569";
  if (name === "남미") return "#78716c";
  return "#a8a29e";
}
