"use client";

import {
  ArrowUp,
  BarChart3,
  ExternalLink,
  Factory,
  Globe2,
  Layers3,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import {
  marketCapCompanies,
  marketCapRegions,
  marketCapSectorGroups,
  marketCapSource,
  type MarketCapCompany,
} from "@/lib/market-cap-companies";

const allOption = "전체";

export function MarketCapCompaniesPanel() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState(allOption);
  const [region, setRegion] = useState(allOption);
  const [selectedTicker, setSelectedTicker] = useState(marketCapCompanies[0]?.ticker ?? "");
  const analysisPanelRef = useRef<HTMLElement>(null);

  const selectedCompany =
    marketCapCompanies.find((company) => company.ticker === selectedTicker) ??
    marketCapCompanies[0];

  const filteredCompanies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return marketCapCompanies.filter((company) => {
      const matchesQuery =
        !normalizedQuery ||
        company.name.toLowerCase().includes(normalizedQuery) ||
        company.ticker.toLowerCase().includes(normalizedQuery) ||
        company.country.toLowerCase().includes(normalizedQuery) ||
        company.sector.toLowerCase().includes(normalizedQuery);

      const matchesSector = sector === allOption || company.sectorGroup === sector;
      const matchesRegion = region === allOption || company.region === region;

      return matchesQuery && matchesSector && matchesRegion;
    });
  }, [query, region, sector]);

  const totalTop100Cap = marketCapCompanies.reduce(
    (sum, company) => sum + company.marketCapBillion,
    0,
  );
  const topTenCap = marketCapCompanies
    .slice(0, 10)
    .reduce((sum, company) => sum + company.marketCapBillion, 0);
  const topTenShare = Math.round((topTenCap / totalTop100Cap) * 100);
  const aiSemiconductorCount = marketCapCompanies.filter(
    (company) => company.sectorGroup === "AI·반도체",
  ).length;
  const topRegion = getTopCount(marketCapCompanies.map((company) => company.region));

  const selectCompany = (ticker: string, scrollToAnalysis = false) => {
    setSelectedTicker(ticker);

    if (scrollToAnalysis) {
      window.requestAnimationFrame(() => {
        analysisPanelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <section id="market-cap-top100" className="px-4 pb-10 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border border-[#ded8ca] bg-[#101612] p-5 text-white shadow-sm sm:p-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#d8a24f]">
              <BarChart3 className="size-4" aria-hidden="true" />
              Global Market Cap Top 100
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
              시가총액은 시장이 지금 가장 크게 믿고 있는 기업 서사를 보여줍니다.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/64">
              1위부터 100위까지 기업을 순위, 국가, 산업, 성장 동력, 점검 리스크로
              나눠 읽을 수 있게 정리했습니다. 부자 순위와 연결되는 지분 가치,
              산업 사이클, 자본시장 기대를 함께 분석하는 화면입니다.
            </p>

            <dl className="mt-6 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-4">
              <SummaryMetric label="총 범위" value="100개" detail="글로벌 상장 기업" />
              <SummaryMetric
                label="전체 시장"
                value={marketCapSource.totalMarketCap}
                detail="추적 기업 합산"
              />
              <SummaryMetric
                label="TOP 10 비중"
                value={`${topTenShare}%`}
                detail="상위 집중도"
              />
              <SummaryMetric
                label="AI·반도체"
                value={`${aiSemiconductorCount}개`}
                detail="핵심 주도 섹터"
              />
            </dl>
          </div>

          <div className="border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
              <ShieldCheck className="size-4" aria-hidden="true" />
              기업분석 프레임
            </p>
            <div className="mt-4 grid gap-4">
              <AnalysisFrame
                icon={TrendingUp}
                title="성장 엔진"
                body="매출을 키우는 핵심 수요가 AI, 클라우드, 소비, 에너지, 금융 중 어디에서 나오는지 먼저 봅니다."
              />
              <AnalysisFrame
                icon={Layers3}
                title="방어력"
                body="브랜드, 네트워크 효과, 특허, 장기계약, 규모의 경제처럼 이익률을 지키는 구조를 확인합니다."
              />
              <AnalysisFrame
                icon={Factory}
                title="리스크"
                body="규제, 경기 사이클, 고객 집중도, 설비투자, 원자재 가격이 시가총액을 흔드는 지점을 표시합니다."
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[370px_1fr]">
          <aside
            id="company-analysis-panel"
            ref={analysisPanelRef}
            className="scroll-mt-24 border border-[#ded8ca] bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
              선택 기업 분석
            </p>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#73786f]">
                  #{selectedCompany.rank} · {selectedCompany.ticker}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-[#111411]">
                  {selectedCompany.name}
                </h3>
              </div>
              <span className="shrink-0 rounded-[8px] border border-[#c8923d] bg-[#fff4d8] px-3 py-2 text-sm font-semibold text-[#111411] shadow-sm">
                {selectedCompany.marketCap}
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-[#e8e1d3] py-4 text-sm">
              <div>
                <dt className="text-[#73786f]">국가</dt>
                <dd className="mt-1 font-semibold text-[#111411]">{selectedCompany.country}</dd>
              </div>
              <div>
                <dt className="text-[#73786f]">산업</dt>
                <dd className="mt-1 font-semibold text-[#111411]">{selectedCompany.sector}</dd>
              </div>
              <div>
                <dt className="text-[#73786f]">지역</dt>
                <dd className="mt-1 font-semibold text-[#111411]">{selectedCompany.region}</dd>
              </div>
              <div>
                <dt className="text-[#73786f]">분류</dt>
                <dd className="mt-1 font-semibold text-[#111411]">
                  {selectedCompany.sectorGroup}
                </dd>
              </div>
            </dl>

            <div className="mt-5 space-y-5">
              <CompanyInsight
                title="핵심 성장 동력"
                body={selectedCompany.driver}
              />
              <CompanyInsight
                title="비즈니스 해석"
                body={getBusinessModel(selectedCompany)}
              />
              <CompanyInsight
                title="점검할 리스크"
                body={selectedCompany.watch}
              />
              <CompanyInsight
                title="THE NEXT RICHERS 관점"
                body={getRicherLearning(selectedCompany)}
              />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="border border-[#ded8ca] bg-white p-4 shadow-sm sm:p-5">
              <div className="grid gap-3 lg:grid-cols-[1fr_180px_160px]">
                <label className="relative block">
                  <span className="sr-only">기업 검색</span>
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8a8f84]"
                    aria-hidden="true"
                  />
                  <input
                    className="min-h-11 w-full rounded-[8px] border border-[#ded8ca] bg-[#fffaf0] pl-10 pr-3 text-sm outline-none transition placeholder:text-[#8a8f84] focus:border-[#9a6a20] focus:bg-white"
                    value={query}
                    placeholder="기업명, 티커, 국가, 산업 검색"
                    onChange={(event) => setQuery(event.currentTarget.value)}
                  />
                </label>

                <select
                  className="min-h-11 rounded-[8px] border border-[#ded8ca] bg-[#fffaf0] px-3 text-sm font-semibold text-[#343a34] outline-none focus:border-[#9a6a20] focus:bg-white"
                  value={sector}
                  aria-label="산업 필터"
                  onChange={(event) => setSector(event.currentTarget.value)}
                >
                  <option value={allOption}>모든 산업</option>
                  {marketCapSectorGroups.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  className="min-h-11 rounded-[8px] border border-[#ded8ca] bg-[#fffaf0] px-3 text-sm font-semibold text-[#343a34] outline-none focus:border-[#9a6a20] focus:bg-white"
                  value={region}
                  aria-label="지역 필터"
                  onChange={(event) => setRegion(event.currentTarget.value)}
                >
                  <option value={allOption}>모든 지역</option>
                  {marketCapRegions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#ebe5d8] pt-4">
                <p className="text-sm font-semibold text-[#111411]">
                  {filteredCompanies.length}개 기업 표시
                </p>
                <p className="inline-flex items-center gap-2 text-xs text-[#73786f]">
                  <Globe2 className="size-3.5" aria-hidden="true" />
                  최다 지역: {topRegion.label} {topRegion.count}개
                </p>
              </div>
            </div>

            <div className="mt-4 hidden overflow-hidden border border-[#ded8ca] bg-white shadow-sm md:block">
              <table className="w-full min-w-[980px] border-collapse text-left">
                <thead className="bg-[#f1eee6] text-xs uppercase tracking-normal text-[#5d625b]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">순위</th>
                    <th className="px-4 py-3 font-semibold">기업</th>
                    <th className="px-4 py-3 font-semibold">시가총액</th>
                    <th className="px-4 py-3 font-semibold">국가·산업</th>
                    <th className="px-4 py-3 font-semibold">기업분석</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ebe5d8]">
                  {filteredCompanies.map((company) => (
                    <CompanyRow
                      key={company.ticker}
                      company={company}
                      selected={selectedCompany.ticker === company.ticker}
                      onSelect={() => selectCompany(company.ticker)}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3 md:hidden">
              {filteredCompanies.map((company) => (
                <CompanyMobileCard
                  key={`${company.ticker}-mobile`}
                  company={company}
                  selected={selectedCompany.ticker === company.ticker}
                  onSelect={() => selectCompany(company.ticker, true)}
                />
              ))}
            </div>

            <div className="mt-4 border border-[#ded8ca] bg-[#fffaf0] p-4 text-sm leading-6 text-[#5d625b]">
              <p>
                기준: {marketCapSource.checkedAt} 확인, {marketCapSource.name} 글로벌
                시가총액 랭킹. 시가총액은 주가와 발행주식 수로 계산되는 시장 가치이며,
                가격 데이터는 지연될 수 있습니다.
              </p>
              <a
                className="mt-3 inline-flex items-center gap-1.5 font-semibold text-[#2f6f4e] transition hover:text-[#111411]"
                href={marketCapSource.url}
                target="_blank"
                rel="noreferrer"
              >
                원본 랭킹 확인
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryMetric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-normal text-white/42">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold text-white">{value}</dd>
      <dd className="mt-1 text-xs text-white/48">{detail}</dd>
    </div>
  );
}

function AnalysisFrame({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof TrendingUp;
  title: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-3 border-t border-[#ebe5d8] pt-4 first:border-t-0 first:pt-0">
      <span className="grid size-8 place-items-center rounded-[8px] bg-[#111411] text-[#f3c56f]">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-[#111411]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#5d625b]">{body}</p>
      </div>
    </div>
  );
}

function CompanyRow({
  company,
  selected,
  onSelect,
}: {
  company: MarketCapCompany;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <tr className={selected ? "bg-[#fff6df]" : "transition hover:bg-[#fffaf0]"}>
      <td className="px-4 py-3 align-top text-sm font-semibold text-[#9a6a20]">
        #{company.rank}
      </td>
      <td className="px-4 py-3 align-top">
        <div className="flex items-center gap-3">
          <CompanyMark company={company} />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#111411]">{company.name}</p>
            <p className="mt-1 text-xs font-medium text-[#73786f]">{company.ticker}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 align-top">
        <p className="text-sm font-semibold text-[#111411]">{company.marketCap}</p>
        <p className="mt-1 text-xs text-[#73786f]">
          약 {formatBillion(company.marketCapBillion)}B
        </p>
      </td>
      <td className="px-4 py-3 align-top">
        <p className="text-sm font-semibold text-[#111411]">{company.country}</p>
        <p className="mt-1 text-xs text-[#73786f]">{company.sector}</p>
      </td>
      <td className="px-4 py-3 align-top">
        <p className="line-clamp-2 max-w-md text-sm leading-6 text-[#3f453d]">
          {company.driver}
        </p>
        <button
          className="mt-2 inline-flex min-h-8 items-center rounded-[8px] border border-[#c8923d] bg-[#fff4d8] px-2.5 text-xs font-semibold text-[#111411] shadow-sm transition hover:bg-[#f3c56f]"
          type="button"
          onClick={onSelect}
        >
            분석 보기
        </button>
      </td>
    </tr>
  );
}

function CompanyMobileCard({
  company,
  selected,
  onSelect,
}: {
  company: MarketCapCompany;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={`border p-4 shadow-sm ${
        selected ? "border-[#c8923d] bg-[#fff6df]" : "border-[#ded8ca] bg-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <CompanyMark company={company} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#9a6a20]">#{company.rank}</p>
              <h3 className="mt-1 truncate text-base font-semibold text-[#111411]">
                {company.name}
              </h3>
              <p className="mt-1 text-xs text-[#73786f]">
                {company.ticker} · {company.country}
              </p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-[#111411]">
              {company.marketCap}
            </p>
          </div>
          <p className="mt-3 text-xs font-semibold text-[#2f6f4e]">
            {company.sectorGroup} · {company.sector}
          </p>
          <p className="mt-2 text-sm leading-6 text-[#3f453d]">{company.driver}</p>
          <button
            className="mt-3 inline-flex min-h-9 items-center gap-1.5 rounded-[8px] border border-[#c8923d] bg-[#fff4d8] px-3 text-xs font-semibold text-[#111411] shadow-sm transition hover:bg-[#f3c56f]"
            type="button"
            onClick={onSelect}
          >
            <ArrowUp className="size-3.5" aria-hidden="true" />
            분석 패널 보기
          </button>
        </div>
      </div>
    </article>
  );
}

function CompanyInsight({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-[#111411]">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[#5d625b]">{body}</p>
    </div>
  );
}

function CompanyMark({ company }: { company: MarketCapCompany }) {
  const [failed, setFailed] = useState(false);
  const logoUrl = getLogoUrl(company.ticker, company.name);

  if (failed || !logoUrl) {
    return (
      <span className="grid size-11 shrink-0 place-items-center rounded-[8px] border border-[#ded8ca] bg-[#111411] text-xs font-semibold text-[#f3c56f]">
        {getInitials(company.name)}
      </span>
    );
  }

  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-[8px] border border-[#ded8ca] bg-white p-1.5">
      <img
        src={logoUrl}
        alt={`${company.name} logo`}
        className="size-full object-contain"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

function getLogoUrl(ticker: string, name: string): string | null {
  // Map ticker → known domain for Clearbit logo API
  const domainMap: Record<string, string> = {
    NVDA: "nvidia.com",
    GOOG: "abc.xyz",
    AAPL: "apple.com",
    MSFT: "microsoft.com",
    AMZN: "amazon.com",
    TSM: "tsmc.com",
    AVGO: "broadcom.com",
    "2222.SR": "aramco.com",
    TSLA: "tesla.com",
    "005930.KS": "samsung.com",
    META: "meta.com",
    MU: "micron.com",
    "000660.KS": "skhynix.com",
    "BRK-B": "berkshirehathaway.com",
    LLY: "lilly.com",
    WMT: "walmart.com",
    AMD: "amd.com",
    JPM: "jpmorganchase.com",
    ASML: "asml.com",
    INTC: "intel.com",
    V: "visa.com",
    XOM: "exxonmobil.com",
    JNJ: "jnj.com",
    TCEHY: "tencent.com",
    ORCL: "oracle.com",
    CSCO: "cisco.com",
    LRCX: "lamresearch.com",
    AMAT: "amat.com",
    COST: "costco.com",
    MA: "mastercard.com",
    CAT: "caterpillar.com",
    "601939.SS": "ccb.com",
    ARM: "arm.com",
    ABBV: "abbvie.com",
    BAC: "bankofamerica.com",
    CVX: "chevron.com",
    UNH: "unitedhealthgroup.com",
    KO: "coca-cola.com",
    "601288.SS": "abchina.com",
    GE: "ge.com",
    PG: "pg.com",
    NFLX: "netflix.com",
    MS: "morganstanley.com",
    "RO.SW": "roche.com",
    KLAC: "kla.com",
    "1398.HK": "icbc.com.cn",
    HD: "homedepot.com",
    HSBC: "hsbc.com",
    GS: "goldmansachs.com",
    PLTR: "palantir.com",
    "601988.SS": "bankofchina.com",
    MRK: "merck.com",
    SNDK: "sandisk.com",
    "MC.PA": "lvmh.com",
    NVS: "novartis.com",
    PM: "pmi.com",
    RY: "rbc.com",
    AZN: "astrazeneca.com",
    "285A.T": "kioxia.com",
    TXN: "ti.com",
    BABA: "alibabagroup.com",
    "300750.SZ": "catl.com",
    "NESN.SW": "nestle.com",
    DELL: "dell.com",
    WFC: "wellsfargo.com",
    IBM: "ibm.com",
    GEV: "gevernova.com",
    RTX: "rtx.com",
    MRVL: "marvell.com",
    LIN: "linde.com",
    "0857.HK": "petrochina.com.cn",
    "OR.PA": "loreal.com",
    "600519.SS": "moutai.com.cn",
    C: "citigroup.com",
    SHEL: "shell.com",
    "SIE.DE": "siemens.com",
    BHP: "bhp.com",
    "9984.T": "softbank.jp",
    "IHC.AE": "ihcuae.com",
    TM: "toyota.com",
    PANW: "paloaltonetworks.com",
    MUFG: "mufg.jp",
    "0941.HK": "chinamobileltd.com",
    QCOM: "qualcomm.com",
    AXP: "americanexpress.com",
    "2454.TW": "mediatek.com",
    STX: "seagate.com",
    "RMS.PA": "hermes.com",
    "601138.SS": "fii-foxconn.com",
    ANET: "arista.com",
    TMUS: "t-mobile.com",
    ADI: "analog.com",
    MCD: "mcdonalds.com",
    "ITX.MC": "inditex.com",
    VZ: "verizon.com",
    "PRX.AS": "prosus.com",
    PEP: "pepsico.com",
    TTE: "totalenergies.com",
    NVO: "novonordisk.com",
    SPCX: "spacex.com",
  };

  const domain = domainMap[ticker];
  if (!domain) return null;

  return `https://logo.clearbit.com/${domain}`;
}

function getBusinessModel(company: MarketCapCompany) {
  switch (company.sectorGroup) {
    case "AI·반도체":
      return "제품 주기가 빠르지만 기술 격차, 고객 락인, 생산능력 확보가 이익률을 좌우합니다. AI 설비투자 사이클을 같이 읽어야 합니다.";
    case "플랫폼·소프트웨어":
      return "사용자 기반과 데이터, 구독 또는 광고 수익이 누적될수록 단위경제가 좋아지는 구조입니다. 규제와 전환 비용이 핵심입니다.";
    case "금융":
      return "자본비용, 신용위험, 수수료 사업 비중이 기업가치를 결정합니다. 금리 환경이 바뀌면 순위도 빠르게 흔들릴 수 있습니다.";
    case "헬스케어":
      return "특허, 임상 파이프라인, 보험 급여 구조가 장기 현금흐름을 만듭니다. 단일 약품 의존도와 약가 정책을 봐야 합니다.";
    case "소비재·유통":
      return "브랜드 신뢰, 유통망, 가격 전가력이 방어력입니다. 소비 둔화 때도 마진을 지키는지가 분석의 핵심입니다.";
    case "에너지·소재":
      return "원자재 가격과 장기 공급계약이 현금흐름을 좌우합니다. 배당·자사주 정책과 에너지 전환 대응을 함께 봅니다.";
    case "자동차·모빌리티":
      return "제조 규모, 배터리·소프트웨어 역량, 가격 경쟁력이 동시에 필요합니다. 전환기에는 밸류에이션 변동성이 커집니다.";
    case "산업·인프라":
      return "수주잔고, 장기 서비스 매출, 정부·기업 설비투자가 가치를 만듭니다. 경기 사이클과 공급망 실행력을 같이 봐야 합니다.";
    case "통신·미디어":
      return "가입자 기반과 주파수·네트워크 자산이 현금흐름을 만듭니다. 성장성은 낮아도 배당과 가격 정책이 중요합니다.";
    default:
      return "시장 지위, 성장률, 이익률, 리스크를 분리해서 기업가치가 어디에서 만들어지는지 확인해야 합니다.";
  }
}

function getRicherLearning(company: MarketCapCompany) {
  if (company.rank <= 10) {
    return "최상위 기업은 한 제품보다 플랫폼, 공급망, 자본시장 서사가 결합될 때 얼마나 큰 자산 가치가 만들어지는지 보여줍니다.";
  }

  if (company.sectorGroup === "AI·반도체") {
    return "AI 인프라 기업의 시가총액은 창업자·투자자 자산 형성에서 기술 병목과 공급망 지위가 얼마나 중요한지 설명합니다.";
  }

  if (company.sectorGroup === "금융") {
    return "금융 기업은 레버리지, 신용 사이클, 자본배분 능력이 부의 축적 구조를 어떻게 바꾸는지 비교하기 좋습니다.";
  }

  if (company.sectorGroup === "소비재·유통") {
    return "소비재 기업은 브랜드와 유통망이 시간이 지나며 무형자산으로 축적되는 과정을 보여줍니다.";
  }

  return "이 기업은 산업 지위와 현금흐름이 순자산과 투자 서사에 어떻게 연결되는지 읽는 비교 사례입니다.";
}

function getTopCount(values: string[]) {
  const counts = values.reduce<Record<string, number>>((state, value) => {
    state[value] = (state[value] ?? 0) + 1;
    return state;
  }, {});

  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)[0];
}

function formatBillion(value: number) {
  return new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits: value >= 1000 ? 0 : 1,
  }).format(value);
}

function getInitials(name: string) {
  return name
    .replaceAll("&", " ")
    .replaceAll("'", "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
