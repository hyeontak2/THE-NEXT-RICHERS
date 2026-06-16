export type SourceGrade = "primary" | "index" | "media" | "report";

export type SourceNote = {
  name: string;
  grade: SourceGrade;
  usage: string;
  reliability: string;
};

export type Milestone = {
  year: string;
  title: string;
  body: string;
  type: "background" | "career" | "venture" | "inflection" | "scale" | "wealth";
};

export type StrategySignal = {
  label: string;
  detail: string;
  weight: number;
};

export type AssetDriver = {
  label: string;
  detail: string;
  source: string;
};

export type RicherProfile = {
  slug: string;
  name: string;
  koreanName: string;
  headline: string;
  sector: string;
  region: string;
  generation: string;
  rankLabel: string;
  wealthModel: string;
  portrait: {
    src: string;
    alt: string;
    credit: string;
  };
  summary: string;
  coreInsight: string;
  signalTags: string[];
  milestones: Milestone[];
  strategy: StrategySignal[];
  assetDrivers: AssetDriver[];
  sources: SourceNote[];
};

export const richerProfiles: RicherProfile[] = [
  {
    slug: "jensen-huang",
    name: "Jensen Huang",
    koreanName: "젠슨 황",
    headline: "AI 인프라 사이클을 지분 가치로 연결한 반도체 창업자",
    sector: "AI · 반도체",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 데이터센터 수요 + GPU 생태계",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jensen_Huang_%28cropped%29.jpg?width=640",
      alt: "Jensen Huang 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "엔지니어 출신 창업자가 그래픽 처리 기술을 범용 컴퓨팅 인프라로 확장하면서, 제품 사이클과 지분 가치가 함께 재평가된 사례입니다.",
    coreInsight:
      "단일 제품 회사가 아니라 개발자 생태계, 소프트웨어 스택, 공급망 협상력을 함께 키운 점이 장기 가치의 핵심입니다.",
    signalTags: ["GPU", "개발자 생태계", "데이터센터", "창업자 지분"],
    milestones: [
      {
        year: "1963",
        title: "대만 출생, 미국 이주",
        body: "어린 시절 이주와 공학 교육을 거쳐 실리콘밸리 반도체 산업의 성장기에 커리어를 시작했습니다.",
        type: "background",
      },
      {
        year: "1993",
        title: "NVIDIA 공동 창업",
        body: "PC 그래픽 시장의 성장 가능성을 보고 전문 그래픽 칩 회사를 세웠습니다.",
        type: "venture",
      },
      {
        year: "2006",
        title: "CUDA 공개",
        body: "GPU를 그래픽 전용 부품에서 범용 병렬 컴퓨팅 플랫폼으로 넓히는 계기가 됐습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "AI 데이터센터 수요 확대",
        body: "생성형 AI와 대규모 모델 학습 수요가 GPU, 네트워킹, 소프트웨어 스택의 가치를 동시에 끌어올렸습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "생태계 전환 비용",
        detail: "CUDA와 개발자 도구로 도입 기업의 전환 비용을 높였습니다.",
        weight: 92,
      },
      {
        label: "플랫폼 확장",
        detail: "그래픽, 게임, 데이터센터, AI 워크로드를 하나의 컴퓨팅 플랫폼으로 연결했습니다.",
        weight: 88,
      },
      {
        label: "공급망 레버리지",
        detail: "첨단 제조 파트너와의 관계가 제품 출시 속도와 마진 방어에 중요하게 작용했습니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "창업자 지분",
        detail: "상장 이후에도 남아 있는 지분 가치가 순자산 추정의 핵심 축입니다.",
        source: "Company filings",
      },
      {
        label: "AI 수요",
        detail: "데이터센터 투자 확대가 매출 기대와 밸류에이션을 동시에 움직입니다.",
        source: "Company earnings",
      },
      {
        label: "시장 멀티플",
        detail: "고성장 기술주에 대한 시장 기대가 순위 변동성을 키웁니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "NVIDIA annual reports",
        grade: "primary",
        usage: "사업 부문, 리스크, 재무 흐름 확인",
        reliability: "공식 공시",
      },
      {
        name: "Forbes Billionaires",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Bloomberg Billionaires Index",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "bernard-arnault",
    name: "Bernard Arnault",
    koreanName: "베르나르 아르노",
    headline: "브랜드 포트폴리오와 M&A로 복리 구조를 만든 럭셔리 전략가",
    sector: "럭셔리 · 브랜드 포트폴리오",
    region: "프랑스",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "지주 구조 + 브랜드 가치 + 글로벌 럭셔리 수요",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg?width=640",
      alt: "Bernard Arnault 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "건설업 기반의 가족 사업에서 출발해 럭셔리 브랜드 포트폴리오를 장기간 구축하며, 희소성과 가격 결정력을 자산 가치로 연결한 사례입니다.",
    coreInsight:
      "럭셔리 산업에서는 규모가 단순 비용 절감보다 브랜드 통제력, 유통 장악력, 인재 확보력으로 이어집니다.",
    signalTags: ["M&A", "브랜드 자산", "가격 결정력", "가족 지배 구조"],
    milestones: [
      {
        year: "1970s",
        title: "가족 사업에서 커리어 시작",
        body: "공학 교육 후 가족 건설 사업에 합류했고, 이후 자산 매각과 재배치를 통해 럭셔리 산업으로 방향을 틀었습니다.",
        type: "career",
      },
      {
        year: "1980s",
        title: "럭셔리 기업 인수",
        body: "위기에 놓인 소비재·럭셔리 자산을 인수하며 브랜드 포트폴리오 전략의 출발점을 만들었습니다.",
        type: "inflection",
      },
      {
        year: "1989",
        title: "LVMH 지배력 확보",
        body: "브랜드와 지주 구조를 결합해 장기적인 자본 배분의 중심을 마련했습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "글로벌 럭셔리 수요 확대",
        body: "아시아, 미국, 유럽의 고소득 소비층과 브랜드 희소성이 포트폴리오 가치를 지탱했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "브랜드 포트폴리오",
        detail: "서로 다른 고객층과 카테고리를 가진 브랜드를 한 그룹 안에서 운영합니다.",
        weight: 90,
      },
      {
        label: "가격 결정력",
        detail: "희소성, 장인성, 유통 통제가 프리미엄 가격을 유지하게 합니다.",
        weight: 86,
      },
      {
        label: "인수 후 통합",
        detail: "인수한 브랜드를 단기 매출보다 장기 브랜드 가치 중심으로 관리합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "지주회사 지분",
        detail: "가족 지배 구조와 상장 지분 가치가 순자산의 중심입니다.",
        source: "Company filings",
      },
      {
        label: "브랜드 가치",
        detail: "소비 경기와 럭셔리 수요가 포트폴리오 가치에 반영됩니다.",
        source: "Company reports",
      },
      {
        label: "M&A 성과",
        detail: "장기 인수 전략이 그룹의 성장률과 멀티플을 좌우합니다.",
        source: "Deal history",
      },
    ],
    sources: [
      {
        name: "LVMH annual reports",
        grade: "primary",
        usage: "브랜드 포트폴리오, 부문별 실적, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Forbes Billionaires",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "주요 인수와 경영 의사결정 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    koreanName: "일론 머스크",
    headline: "복수 산업의 지분과 시장 기대가 동시에 움직이는 창업자",
    sector: "모빌리티 · 우주 · AI",
    region: "미국",
    generation: "Serial founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + 비상장 기업 가치 + 고변동 성장 기대",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Elon_Musk_Royal_Society_crop.jpg?width=640",
      alt: "Elon Musk 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "인터넷, 전기차, 우주, AI로 이어지는 여러 산업 전환점에 걸쳐 지분을 보유하며 순자산 변동성이 크게 나타나는 사례입니다.",
    coreInsight:
      "높은 실행 속도와 자본시장 서사가 맞물릴 때 기업 가치가 빠르게 커질 수 있지만, 같은 구조가 변동성도 크게 만듭니다.",
    signalTags: ["전기차", "우주", "AI", "상장 지분", "비상장 평가"],
    milestones: [
      {
        year: "1990s",
        title: "인터넷 창업 경험",
        body: "초기 인터넷 기업 창업과 매각 경험을 통해 자본과 네트워크를 확보했습니다.",
        type: "venture",
      },
      {
        year: "2002",
        title: "SpaceX 설립",
        body: "민간 우주 발사 비용을 낮추는 장기 목표를 내세워 고위험 산업에 진입했습니다.",
        type: "venture",
      },
      {
        year: "2004",
        title: "Tesla 초기 투자와 경영 참여",
        body: "전기차 전환이라는 거대한 산업 변화에 창업자급 지분과 경영 역할로 참여했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "복합 기업 가치의 확대",
        body: "상장 지분과 비상장 기업 가치가 함께 순자산 추정에 반영되며 변동성이 커졌습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "카테고리 재정의",
        detail: "기존 산업을 소프트웨어, 제조, 네트워크 효과 관점에서 다시 설계했습니다.",
        weight: 88,
      },
      {
        label: "자본시장 서사",
        detail: "장기 비전과 공개 시장의 성장 기대가 기업 가치에 큰 영향을 줬습니다.",
        weight: 84,
      },
      {
        label: "수직 통합",
        detail: "제조, 소프트웨어, 인프라를 직접 통제하며 속도와 비용 구조를 관리했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "상장 지분",
        detail: "상장사 주가 변동이 순자산 추정에 즉시 반영됩니다.",
        source: "Public market data",
      },
      {
        label: "비상장 가치",
        detail: "SpaceX 등 비상장 기업의 평가가 추정 자산의 큰 축입니다.",
        source: "Private market estimates",
      },
      {
        label: "시장 기대",
        detail: "전기차, 우주, AI에 대한 기대 변화가 순위 변동성을 키웁니다.",
        source: "Business media and filings",
      },
    ],
    sources: [
      {
        name: "Tesla filings",
        grade: "primary",
        usage: "상장 지분, 보상 구조, 사업 리스크 확인",
        reliability: "공식 공시",
      },
      {
        name: "Forbes Billionaires",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Bloomberg Billionaires Index",
        grade: "index",
        usage: "시장 가격 변화에 따른 추정치 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
];

export const appMetrics = [
  { label: "프로필 샘플", value: `${richerProfiles.length}`, note: "MVP 데이터셋" },
  { label: "전략 신호", value: "9", note: "비교 가능한 전략 태그" },
  { label: "출처 레이어", value: "4", note: "공식·공시·랭킹·언론" },
  { label: "지원 언어", value: "KO/EN", note: "다국어 구조 예정" },
];

export const sourceGradeLabels: Record<SourceGrade, string> = {
  primary: "공식/공시",
  index: "랭킹 데이터",
  media: "주요 언론",
  report: "보고서",
};

export function getRicherBySlug(slug: string) {
  return richerProfiles.find((profile) => profile.slug === slug);
}

export function getSectors() {
  return Array.from(new Set(richerProfiles.map((profile) => profile.sector)));
}

export function getRegions() {
  return Array.from(new Set(richerProfiles.map((profile) => profile.region)));
}
