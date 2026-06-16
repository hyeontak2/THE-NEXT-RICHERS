import { Layers3, ShieldCheck } from "lucide-react";
import { AppShell, PageIntro } from "../app-chrome";
import { sourceGradeLabels } from "@/lib/richers-data";
import { topRichersSource } from "@/lib/top-richers";

export default function SourcesPage() {
  return (
    <AppShell active="sources">
      <PageIntro
        icon={Layers3}
        eyebrowToken="sources.eyebrow"
        titleToken="sources.title"
        descriptionToken="sources.description"
        eyebrow="출처 레이어"
        title="출처는 종류별로 분리해서 봅니다."
        description="순자산은 외부 추정치이며, 성장 사건과 사업 성과는 공식 자료와 공시를 우선합니다. 추정과 사실을 구분해 콘텐츠 신뢰도를 관리합니다."
      />

      <section className="bg-[#0a0d0b] px-4 py-8 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(sourceGradeLabels).map(([grade, label]) => (
              <article key={grade} className="bg-[#101612] p-5">
                <ShieldCheck className="size-5 text-[#a8e7b5]" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold">{label}</h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {getSourceDescription(grade)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {sourceNotes.map((note) => (
              <article key={note.title} className="border border-white/10 bg-[#101612] p-5">
                <p className="text-sm font-semibold text-[#d8a24f]">{note.title}</p>
                <p className="mt-3 text-sm leading-6 text-white/58">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

const sourceNotes = [
  {
    title: "순위와 순자산",
    body: `${topRichersSource.name}는 ${formatSourceDate(
      topRichersSource.informationAsOf,
    )} 기준 주가와 환율로 산정한 추정치입니다. 현재 앱은 상위 100명 행과 동률 순위를 보존하며, 자료 확인일은 ${formatSourceDate(
      topRichersSource.retrievedAt,
    )}입니다.`,
  },
  {
    title: "최신 집계 범위",
    body: `Forbes 2026 집계는 억만장자 ${topRichersSource.stats.totalBillionaires.toLocaleString(
      "ko-KR",
    )}명, 총자산 $${topRichersSource.stats.totalNetWorthTrillion.toLocaleString(
      "en-US",
      { maximumFractionDigits: 1 },
    )}T, 전년 대비 ${topRichersSource.stats.increaseFrom2025.toLocaleString(
      "ko-KR",
    )}명 증가를 기준으로 합니다.`,
  },
  {
    title: "사업 성과",
    body: "기업 공식 자료, 연차보고서, 공시, 실적 발표처럼 확인 가능한 자료를 우선합니다.",
  },
  {
    title: "성장 사건",
    body: "인수, 창업, 전환점, 시장 반응은 신뢰도 높은 언론과 공식 발표를 교차 확인합니다.",
  },
];

function getSourceDescription(grade: string) {
  switch (grade) {
    case "primary":
      return "기업 공식 자료, 연차보고서, 공시처럼 사실 확인의 기준이 되는 자료입니다.";
    case "index":
      return "포브스, 블룸버그처럼 순위와 순자산 추정치를 비교하는 외부 데이터입니다.";
    case "media":
      return "인수, 경영 의사결정, 시장 반응의 맥락을 보완하는 주요 언론 자료입니다.";
    default:
      return "시장 규모와 사용자 수요를 설명하는 산업 보고서와 플랫폼 발표 자료입니다.";
  }
}

function formatSourceDate(date: string) {
  return date.replaceAll("-", ".");
}
