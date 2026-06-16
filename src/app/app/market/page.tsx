import { BarChart3 } from "lucide-react";
import { AppShell, PageIntro } from "../app-chrome";
import { MarketCapCompaniesPanel } from "../market-cap-companies";

export default function MarketPage() {
  return (
    <AppShell active="market">
      <PageIntro
        icon={BarChart3}
        eyebrow="글로벌 시가총액"
        title="전세계 시가총액 1위부터 100위 기업을 분석합니다."
        description="글로벌 자본시장이 가장 높게 평가하는 기업을 순위, 산업, 성장 동력, 리스크 관점으로 정리합니다. 부자 인사이트와 연결되는 기업가치의 흐름을 한 화면에서 확인합니다."
      />
      <MarketCapCompaniesPanel />
    </AppShell>
  );
}
