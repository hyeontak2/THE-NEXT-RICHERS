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
                <div className="space-y-2.5">
                  {sectorStats.slice(0, 6).map((s) => {
                    const pct = ((s.cap / totalTop100Cap) * 100);
                    const baseColor = sectorColor(s.name);
                    return (
                      <div key={s.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-[#111411]">{s.name}</span>
                          <span className="font-semibold text-[#111411] tabular-nums">{pct.toFixed(1)}%</span>
                        </div>
                        <div className="group/progress-bar relative mt-1.5 h-3 w-full overflow-hidden rounded-full bg-gradient-to-r from-[#f0ebe1] to-[#e8e1d3] p-[1.5px] shadow-inner">
                          {/* Glass shine overlay on hover */}
                          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-full opacity-0 transition-opacity duration-500 group-hover/progress-bar:opacity-100">
                            <div className="absolute -inset-4 animate-shimmer" />
                          </div>
                          <div
                            className="relative h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${pct}%`,
                              background: `linear-gradient(135deg, ${lighten(baseColor, 25)}, ${baseColor} 60%, ${darken(baseColor, 8)} 100%)`,
                              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 3px rgba(0,0,0,0.12)`,
                            }}
                          >
                            {/* Glass shine dot */}
                            <div
                              className="absolute right-1 top-0.5 size-2 rounded-full bg-white/20"
                            />
                          </div>
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
                <div className="space-y-2.5">
                  {regionStats.map((r) => {
                    const pct = ((r.cap / totalTop100Cap) * 100);
                    const baseColor = regionColor(r.name);
                    return (
                      <div key={r.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-[#111411]">{r.name}</span>
                          <span className="font-semibold text-[#111411] tabular-nums">{pct.toFixed(1)}%</span>
                        </div>
                        <div className="group/progress-bar relative mt-1.5 h-3 w-full overflow-hidden rounded-full bg-gradient-to-r from-[#f0ebe1] to-[#e8e1d3] p-[1.5px] shadow-inner">
                          {/* Glass shine overlay on hover */}
                          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-full opacity-0 transition-opacity duration-500 group-hover/progress-bar:opacity-100">
                            <div className="absolute -inset-4 animate-shimmer" />
                          </div>
                          <div
                            className="relative h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${pct}%`,
                              background: `linear-gradient(135deg, ${lighten(baseColor, 25)}, ${baseColor} 60%, ${darken(baseColor, 8)} 100%)`,
                              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 3px rgba(0,0,0,0.12)`,
                            }}
                          >
                            {/* Glass shine dot */}
                            <div
                              className="absolute right-1 top-0.5 size-2 rounded-full bg-white/20"
                            />
                          </div>
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
    <div className="group relative overflow-hidden rounded-xl border border-[#ded8ca] bg-white/95 p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15),0_4px_18px_0_rgba(0,0,0,0.06)] hover:-translate-y-1 sm:p-6">
      {/* Premium shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-[#f7f6f1]/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      {/* Top accent line */}
      <div className="absolute inset-x-6 -top-px h-[2px] bg-gradient-to-r from-transparent via-[#d8a24f]/40 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#a8a29e]">{label}</p>
          <span className={`grid size-9 place-items-center rounded-[10px] transition-all duration-500 group-hover:scale-110 group-hover:shadow-md ${iconBg}`}>
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
    <div className="group relative overflow-hidden rounded-xl border border-[#ded8ca] bg-white/95 p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18),0_4px_18px_0_rgba(0,0,0,0.06)] hover:-translate-y-1 sm:p-6">
      {/* Premium top accent gradient line */}
      <div className="absolute inset-x-0 -top-px mx-auto h-[2px] w-0 bg-gradient-to-r from-transparent via-[#d8a24f]/60 to-transparent opacity-0 transition-all duration-700 group-hover:w-3/4 group-hover:opacity-100" />
      {/* Background shimmer on hover */}
      <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-[#fffcf5]/0 via-[#fffcf5]/50 to-[#fffcf5]/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-[10px] bg-gradient-to-br from-[#f7f6f1] to-[#ede8dd] text-[#9a6a20] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] transition-transform duration-500 group-hover:scale-105">
              <Icon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.05em] text-[#9a6a20]">
                {title}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-medium tracking-wide text-[#a8a29e]">{hint}</span>
        </div>
        <div className="mt-5 grid gap-6 sm:grid-cols-[180px_1fr] sm:items-start">
          {children}
        </div>
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
  const strokeW = 1.5; // white gap width between segments
  const gapDeg = 3; // gap between segments for premium look

  // Build arcs
  const segments = data.map((d) => ({ name: d.name, pct: d.cap / total }));
  
  // Combine small segments — keep "기타" off the main chart for clean look
  const maxSlices = 5;
  let displaySegs = segments.slice(0, maxSlices);
  const restPct = segments.length > maxSlices
    ? segments.slice(maxSlices).reduce((s, r) => s + r.pct, 0)
    : 0;
  if (segments.length > maxSlices && restPct > 0.005) {
    displaySegs.push({ name: "기타", pct: restPct });
  }

  const arcs: Array<{
    name: string; pct: number; path: string; gradId: string;
    color: string; outerPct: number;
  }> = [];
  let angle = -90;

  for (const seg of displaySegs) {
    if (seg.pct < 0.001) continue;
    const effectivePct = seg.pct - gapDeg / 360;
    const startAng = angle;
    const endAng = angle + effectivePct * 360;
    const startRad = (startAng * Math.PI) / 180;
    const endRad = (endAng * Math.PI) / 180;

    const x1 = cx + outerR * Math.cos(startRad);
    const y1 = cy + outerR * Math.sin(startRad);
    const x2 = cx + outerR * Math.cos(endRad);
    const y2 = cy + outerR * Math.sin(endRad);

    const ix1 = cx + innerR * Math.cos(endRad);
    const iy1 = cy + innerR * Math.sin(endRad);
    const ix2 = cx + innerR * Math.cos(startRad);
    const iy2 = cy + innerR * Math.sin(startRad);

    const largeArc = effectivePct > 0.5 ? 1 : 0;

    const path = [
      `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
      `L ${ix1.toFixed(2)} ${iy1.toFixed(2)}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2.toFixed(2)} ${iy2.toFixed(2)}`,
      "Z",
    ].join(" ");

    const baseColor = isSectorData(data)
      ? sectorColor(seg.name)
      : regionColor(seg.name);
    const clean = seg.name.replace(/[^a-zA-Z0-9\uAC00-\uD7A3]/g, "");
    const gradId = `dg-${clean}-${(seg.pct * 1000).toFixed(0)}`;

    arcs.push({ name: seg.name, pct: seg.pct, path, gradId, color: baseColor, outerPct: effectivePct });
    angle = endAng + gapDeg;
  }

  const topItem = data[0];
  const topLabel = topItem ? `${topItem.name?.slice(0, 4)}` : "";
  const topPct = topItem
    ? `${(topItem.cap / total * 100).toFixed(1)}%`
    : "";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0"
    >
      <defs>
        {/* 3D-style gradients: darker at the bottom-right, lighter at top-left */}
        {arcs.map((arc) => (
          <linearGradient key={arc.gradId} id={arc.gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lighten(arc.color, 25)} />
            <stop offset="40%" stopColor={lighten(arc.color, 8)} />
            <stop offset="100%" stopColor={darken(arc.color, 10)} />
          </linearGradient>
        ))}
        {/* Premium outer glow */}
        <filter id="dg-glow">
          <feDropShadow dx={0} dy={3} stdDeviation={4} floodColor="#000" floodOpacity={0.10} />
        </filter>
        {/* Inner cutout depth */}
        <filter id="dg-inner">
          <feDropShadow dx={0} dy={1} stdDeviation={2} floodColor="#000" floodOpacity={0.06} />
        </filter>
      </defs>

      {/* Background ring track */}
      <circle
        cx={cx} cy={cy} r={outerR + 1}
        fill="none" stroke="#f0ebe1" strokeWidth={outerR - innerR + 2}
        opacity={0.4}
      />

      {/* Arc segments with white stroke separation */}
      {arcs.map((arc) => (
        <g key={arc.name}>
          {/* Subtle shadow under each segment */}
          <path
            d={arc.path}
            fill="none"
            stroke="rgba(0,0,0,0.04)"
            strokeWidth={strokeW + 2}
            transform={`translate(0, 1)`}
          />
          {/* Main segment fill */}
          <path
            d={arc.path}
            fill={`url(#${arc.gradId})`}
            filter="url(#dg-glow)"
            className="transition-all duration-500 hover:brightness-110 hover:saturate-110"
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
          {/* White separation stroke */}
          <path
            d={arc.path}
            fill="none"
            stroke="white"
            strokeWidth={strokeW}
          />
        </g>
      ))}

      {/* Inner cutout — subtle ring */}
      <circle cx={cx} cy={cy} r={innerR - 1} fill="white" filter="url(#dg-inner)" />
      <circle
        cx={cx} cy={cy} r={innerR - 1}
        fill="none" stroke="url(#dg-inner)"
        strokeWidth={1} opacity={0.3}
      />
      {/* Inner border accent */}
      <circle
        cx={cx} cy={cy} r={innerR - 3}
        fill="none" stroke="#e8e1d3" strokeWidth={1} opacity={0.5}
      />

      {/* Center labels */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill="#111411"
        letterSpacing="-0.3"
        className="select-none"
      >
        {topLabel}
      </text>
      <text
        x={cx}
        y={cy + 13}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#9a6a20"
        letterSpacing="-0.3"
        className="select-none"
      >
        {topPct}
      </text>

      {/* Small decorative dot under percentage */}
      <circle cx={cx} cy={cy + 20} r={1.5} fill="#d8a24f" opacity={0.4} />
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

/** Lighten a hex color by a percentage (0-100) */
function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + Math.round(255 * amount / 100));
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * amount / 100));
  const b = Math.min(255, (num & 0xff) + Math.round(255 * amount / 100));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function sectorColor(name: string): string {
  if (name.includes("플랫폼") || name.includes("소프트웨어") || name.includes("통신")) return "#6366f1";
  if (name.includes("AI") || name.includes("반도체")) return "#059669";
  if (name.includes("금융")) return "#d97706";
  if (name.includes("헬스케어")) return "#0891b2";
  if (name.includes("소비")) return "#ea580c";
  if (name.includes("에너지")) return "#78716c";
  if (name.includes("산업") || name.includes("자동차")) return "#4f46e5";
  return "#a8a29e";
}

function regionColor(name: string): string {
  if (name === "북미") return "#3b82f6";
  if (name === "아시아") return "#f59e0b";
  if (name === "유럽") return "#8b5cf6";
  if (name === "중동") return "#ef4444";
  if (name === "오세아니아") return "#14b8a6";
  if (name === "남미") return "#f97316";
  return "#a8a29e";
}

/** Darken a hex color by a percentage (0-100) */
function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((num >> 16) & 0xff) - Math.round(255 * amount / 100));
  const g = Math.max(0, ((num >> 8) & 0xff) - Math.round(255 * amount / 100));
  const b = Math.max(0, (num & 0xff) - Math.round(255 * amount / 100));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
