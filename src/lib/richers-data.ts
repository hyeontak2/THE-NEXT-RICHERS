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
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
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
        name: "Global Billionaires List",
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
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "시장 가격 변화에 따른 추정치 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "larry-page",
    name: "Larry Page",
    koreanName: "래리 페이지",
    headline: "데이터와 검색 기술로 인터넷 정보 질서를 바꾼 창업자",
    sector: "AI · 검색 · 기술 지주",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 기술 지주회사 가치 + 조기 투자 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Larry_Page_%28cropped%29.jpg?width=640",
      alt: "Larry Page 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "대학원 연구실에서 시작한 검색 알고리즘이 글로벌 정보 접근 방식을 바꾸고, 지주회사 체제와 조기 투자를 통해 다각화된 자산 구조를 만든 사례입니다.",
    coreInsight:
      "핵심 검색 수익을 지속적으로 R&D와 인프라에 재투자하며, 기존 시장을 넘어 새로운 산업 영역으로 지배력을 확장했습니다.",
    signalTags: ["검색", "데이터 인프라", "기술 지주", "AI"],
    milestones: [
      {
        year: "1973",
        title: "미국 미시간 출생, 컴퓨터 공학 교육",
        body: "컴퓨터 공학 교수 가정에서 성장하며 기술에 대한 깊은 관심을 키웠고, 스탠퍼드 대학원에서 검색 알고리즘을 연구했습니다.",
        type: "background",
      },
      {
        year: "1998",
        title: "Google 공동 창업",
        body: "서지 브린과 함께 검색 엔진을 창업하며 페이지랭크 알고리즘을 기반으로 한 광고 중심 수익 모델을 구축했습니다.",
        type: "venture",
      },
      {
        year: "2004",
        title: "Google IPO",
        body: "차등 의결권 구조를 통해 창업자 지배력을 유지하며 공개 시장 자본을 확보해 검색 및 광고 인프라를 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2015",
        title: "Alphabet 지주회사 체제 전환",
        body: "검색 사업과 신규 벤처(자율주행, 생명과학 등)를 분리해 장기 투자와 자본 배분의 효율성을 높였습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "데이터 네트워크 효과",
        detail: "검색 데이터가 많을수록 검색 결과와 광고 정확도가 높아지는 데이터 기반 경쟁 우위를 구축했습니다.",
        weight: 91,
      },
      {
        label: "장기 R&D 재투자",
        detail: "핵심 수익을 AI, 자율주행, 헬스테크 등 신규 영역에 장기적으로 재투자하며 미래 성장 동력을 확보했습니다.",
        weight: 85,
      },
      {
        label: "지주회사 자본 배분",
        detail: "Alphabet 체제로 각 사업부의 독립성과 자본 배분 효율을 동시에 확보했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "Alphabet 지분",
        detail: "차등 의결권 구조 아래 창업자 지분 가치가 순자산의 중심축입니다.",
        source: "Company filings",
      },
      {
        label: "검색·광고 시장 지배력",
        detail: "글로벌 검색 점유율과 디지털 광고 수익이 Alphabet 기업 가치의 핵심입니다.",
        source: "Company earnings",
      },
      {
        label: "조기 투자 포트폴리오",
        detail: "개인 및 지주회사를 통한 초기 단계 투자 자산이 부의 다각화에 기여합니다.",
        source: "Public market and private data",
      },
    ],
    sources: [
      {
        name: "Alphabet annual reports",
        grade: "primary",
        usage: "지배 구조, 부문별 실적, 자본 배분 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "jeff-bezos",
    name: "Jeff Bezos",
    koreanName: "제프 베이조스",
    headline: "전자상거래와 클라우드 인프라로 소비자 기술 생태계를 구축한 창업자",
    sector: "전자상거래 · 클라우드 · 기술",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 클라우드 수익 + 미디어·우주 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeff_Bezos_2016_%28cropped%29.jpg?width=640",
      alt: "Jeff Bezos 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "온라인 서점에서 출발한 전자상거래 기업을 클라우드 컴퓨팅, 디지털 콘텐츠, 물류 인프라로 확장하며 산업 전반의 소비자 경험 기준을 바꾼 사례입니다.",
    coreInsight:
      "고정 비용 기반의 물류·클라우드 인프라를 구축하고 규모가 확대될수록 단위 경제성이 개선되는 구조를 설계했습니다.",
    signalTags: ["전자상거래", "클라우드", "물류 인프라", "AWS"],
    milestones: [
      {
        year: "1964",
        title: "미국 뉴멕시코 출생",
        body: "어린 시절부터 공학과 컴퓨터 과학에 관심을 보였고, 프린스턴 대학에서 전기공학 및 컴퓨터 과학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1994",
        title: "Amazon 창업",
        body: "인터넷 상거래의 성장 가능성을 보고 온라인 서점으로 시작해 전 카테고리 종합몰로 확장했습니다.",
        type: "venture",
      },
      {
        year: "2006",
        title: "AWS 출시",
        body: "내부 인프라를 외부에 제공하는 클라우드 서비스가 기업용 컴퓨팅 시장의 패러다임을 바꾸고 Amazon의 핵심 수익원이 됐습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "소비자 기술 생태계 완성",
        body: "물류, 콘텐츠, 클라우드, 광고, 헬스케어로 영역을 확장하며 매출과 현금 흐름의 다각화를 이뤘습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "고객 중심 역방향 작업",
        detail: "고객 경험에서 출발해 필요한 기술과 인프라를 내부에서 먼저 개발하고 외부로 확장했습니다.",
        weight: 91,
      },
      {
        label: "인프라 자본 집약 투자",
        detail: "물류센터, 데이터센터, 배송 네트워크에 장기 자본을 집중해 경쟁사의 진입 장벽을 높였습니다.",
        weight: 87,
      },
      {
        label: "수익원 다각화",
        detail: "전자상거래에 더해 AWS, 광고, 구독 등 고마진 사업을 추가해 전체 수익 구조를 강화했습니다.",
        weight: 79,
      },
    ],
    assetDrivers: [
      {
        label: "Amazon 지분",
        detail: "상장 지분 가치가 순자산의 대부분을 차지하며 시장 변동에 직접 노출됩니다.",
        source: "Company filings",
      },
      {
        label: "AWS 수익성",
        detail: "클라우드 부문의 높은 마진이 전체 기업 가치 평가에 중요한 영향을 줍니다.",
        source: "Company earnings",
      },
      {
        label: "Blue Origin 등 개인 자산",
        detail: "우주 기업 및 미디어 자산(워싱턴포스트)이 부의 다각화에 기여합니다.",
        source: "Private market and media reports",
      },
    ],
    sources: [
      {
        name: "Amazon annual reports",
        grade: "primary",
        usage: "사업 부문별 실적, 자본 지출, 현금 흐름 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    koreanName: "마크 저커버그",
    headline: "소셜 그래프를 글로벌 광고 플랫폼과 메타버스로 확장한 창업자",
    sector: "소셜 미디어 · 광고 · AI",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 광고 수익 + 메타버스 투자 가치",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mark_Zuckerberg_F8_2018_%28cropped%29.jpg?width=640",
      alt: "Mark Zuckerberg 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "대학 기숙사에서 시작한 소셜 네트워크를 글로벌 디지털 광고 플랫폼으로 성장시키고, AI와 메타버스로 다음 성장 동력을 준비하는 사례입니다.",
    coreInsight:
      "사용자 네트워크 효과와 개인화 광고 기술이 결합해 높은 마진의 광고 수익 모델을 만들었고, 이를 차세대 플랫폼에 재투자하고 있습니다.",
    signalTags: ["소셜 미디어", "디지털 광고", "AI", "메타버스"],
    milestones: [
      {
        year: "1984",
        title: "미국 뉴욕 출생",
        body: "의사 가정에서 성장하며 컴퓨터와 프로그래밍에 조기 재능을 보였고, 하버드 대학에서 심리학과 컴퓨터 과학을 공부했습니다.",
        type: "background",
      },
      {
        year: "2004",
        title: "Facebook 창업",
        body: "대학생용 소셜 네트워크 서비스에서 출발해 글로벌 플랫폼으로 빠르게 확장했습니다.",
        type: "venture",
      },
      {
        year: "2012",
        title: "Facebook IPO와 모바일 전환",
        body: "공개 시장 진입과 동시에 모바일 광고 플랫폼을 구축하며 Instagram, WhatsApp 등 대형 인수를 단행했습니다.",
        type: "inflection",
      },
      {
        year: "2021",
        title: "Meta로 리브랜딩과 AI 투자",
        body: "소셜 미디어를 넘어 메타버스와 AI 인프라에 장기 투자하는 지주회사 체제로 전환했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "네트워크 효과 극대화",
        detail: "사용자 증가가 플랫폼 가치를 높이는 선순환 구조를 통해 글로벌 진입 장벽을 구축했습니다.",
        weight: 92,
      },
      {
        label: "데이터 기반 광고 플랫폼",
        detail: "사용자 데이터와 머신러닝을 결합해 광고 효율을 높이고 글로벌 디지털 광고 시장 지배력을 확보했습니다.",
        weight: 88,
      },
      {
        label: "플랫폼 확장 M&A",
        detail: "신규 경쟁 플랫폼을 조기에 인수해 사용자와 기술을 내재화하며 생태계를 확장했습니다.",
        weight: 77,
      },
    ],
    assetDrivers: [
      {
        label: "Meta 지분",
        detail: "차등 의결권을 보유한 창업자 지분이 회사 가치 변동에 직접 연동됩니다.",
        source: "Company filings",
      },
      {
        label: "디지털 광고 수익",
        detail: "글로벌 광고 시장 점유율과 사용자당 평균 수익(ARPU)이 기업 가치의 핵심입니다.",
        source: "Company earnings",
      },
      {
        label: "AI 및 메타버스 투자",
        detail: "차세대 컴퓨팅 플랫폼에 대한 조기 투자가 미래 자산 가치를 형성합니다.",
        source: "Company reports and industry analysis",
      },
    ],
    sources: [
      {
        name: "Meta annual reports",
        grade: "primary",
        usage: "사용자 지표, 광고 수익, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    koreanName: "워런 버핏",
    headline: "보험 부채와 가치 투자로 복리 시스템을 설계한 투자자",
    sector: "투자 · 보험 · 복합 기업",
    region: "미국",
    generation: "Capital allocator",
    rankLabel: "Top wealth cohort",
    wealthModel: "보험 플로트 + 상장 지분 + 전액 소유 기업 현금 흐름",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Warren_Buffett_2017_%28cropped%29.jpg?width=640",
      alt: "Warren Buffett 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "보험사의 선수익(플로트)을 자본 원천으로 활용해 우량 기업 지분과 전액 소유 자회사에 장기 투자하며 복리 효과를 극대화한 사례입니다.",
    coreInsight:
      "단기 시장 변동에 대응하지 않고 우량 기업을 장기 보유하며, 보험 부채를 저비용 자본으로 전환하는 구조를 설계했습니다.",
    signalTags: ["가치 투자", "보험 부채", "복리", "자본 배분"],
    milestones: [
      {
        year: "1930",
        title: "미국 네브래스카 출생",
        body: "어린 시절부터 숫자와 투자에 관심을 보였고, 컬럼비아 대학에서 벤저민 그레이엄에게 가치 투자를 배웠습니다.",
        type: "background",
      },
      {
        year: "1965",
        title: "Berkshire Hathaway 경영권 인수",
        body: "섬유 회사였던 Berkshire Hathaway의 경영권을 인수한 후 보험 사업을 중심으로 자본 배분 플랫폼으로 전환했습니다.",
        type: "inflection",
      },
      {
        year: "1970s-1990s",
        title: "보험 플로트 기반 투자 구조 완성",
        body: "GEICO, General Re 등 보험사를 인수해 저비용 플로트 자본을 확보하고 주식 및 기업 인수에 활용했습니다.",
        type: "scale",
      },
      {
        year: "2000s-2020s",
        title: "장기 복리 효과의 축적",
        body: "Coca-Cola, Apple, American Express 등 우량 기업 지분을 장기 보유하며 자본 복리 구조를 완성했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "보험 플로트 활용",
        detail: "보험료 선수취 후 지급까지의 시간 차이를 저비용 투자 자본으로 전환했습니다.",
        weight: 90,
      },
      {
        label: "장기 가치 투자",
        detail: "경제적 해자(moat)가 있는 우량 기업을 장기 보유하며 단기 변동성에 대응하지 않습니다.",
        weight: 88,
      },
      {
        label: "자본 배분 규율",
        detail: "자사주 매입, 배당, 인수 중 가장 효율적인 자본 사용처를 선택해 주주 가치를 극대화합니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Berkshire Hathaway 지분",
        detail: "상장 복합 기업의 주가 변동이 순자산 추정의 직접적인 기준입니다.",
        source: "Company filings",
      },
      {
        label: "보험 플로트 규모",
        detail: "보험 부채를 투자 자본으로 활용하는 구조가 Berkshire의 핵심 경쟁력입니다.",
        source: "Berkshire annual reports",
      },
      {
        label: "포트폴리오 지분 가치",
        detail: "Apple, Coca-Cola, American Express 등 주요 보유 지분의 시장 가치가 자산의 큰 축입니다.",
        source: "SEC filings and public market data",
      },
    ],
    sources: [
      {
        name: "Berkshire Hathaway annual reports",
        grade: "primary",
        usage: "보험 부문 실적, 포트폴리오 구성, 자본 배분 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "sergey-brin",
    name: "Sergey Brin",
    koreanName: "세르게이 브린",
    headline: "검색 알고리즘과 데이터 인프라로 인터넷 정보 혁명을 이끈 공동 창업자",
    sector: "AI · 검색 · 기술 지주",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Alphabet 지분 + 조기 투자 포트폴리오 + 기술 로열티",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sergey_Brin_2011_(cropped).jpg?width=640",
      alt: "Sergey Brin 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "러시아 이민자 가정에서 태어나 스탠퍼드 대학원에서 만난 래리 페이지와 함께 검색 엔진을 창업하며 인터넷 정보 접근 방식을 근본적으로 바꾼 사례입니다.",
    coreInsight:
      "페이지랭크 알고리즘 하나가 글로벌 데이터 인프라로 확장되며, 창업자 지분 가치와 기술적 통찰이 동시에 보상받는 구조를 만들었습니다.",
    signalTags: ["검색", "데이터 인프라", "기술 지주", "AI"],
    milestones: [
      {
        year: "1973",
        title: "러시아 모스크바 출생, 미국 이주",
        body: "수학자 가정에서 태어나 6세 때 미국으로 이주했고, 메릴랜드 대학과 스탠퍼드 대학원에서 컴퓨터 공학을 공부했습니다.",
        type: "background",
      },
      {
        year: "1998",
        title: "Google 공동 창업",
        body: "래리 페이지와 함께 검색 엔진을 창업하며 페이지랭크 알고리즘을 기반으로 광고 수익 모델을 구축했습니다.",
        type: "venture",
      },
      {
        year: "2004",
        title: "Google IPO와 지배 구조 설계",
        body: "차등 의결권 구조로 창업자 지배력을 유지하며 공개 시장 자본을 확보해 검색 광고 인프라를 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2015",
        title: "Alphabet 지주회사 체제와 조기 투자",
        body: "자율주행, 생명과학, 에너지 등 신규 벤처에 대한 조기 투자를 포함한 다각화된 자산 구조를 형성했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "알고리즘 우위",
        detail: "페이지랭크와 검색 알고리즘을 지속적으로 개선하며 경쟁사 대비 압도적인 검색 품질을 유지했습니다.",
        weight: 90,
      },
      {
        label: "데이터 인프라 투자",
        detail: "검색 데이터와 사용자 행동 데이터를 기반으로 광고 타겟팅과 AI 모델 학습 인프라를 구축했습니다.",
        weight: 85,
      },
      {
        label: "조기 기술 투자",
        detail: "개인 및 지주회사를 통해 자율주행, 생명공학, 에너지 등 미래 기술 분야에 조기 투자했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "Alphabet 지분",
        detail: "차등 의결권 구조 아래 창업자 지분 가치가 순자산의 중심축입니다.",
        source: "Company filings",
      },
      {
        label: "검색·광고 시장 지배력",
        detail: "글로벌 검색 점유율과 디지털 광고 수익이 Alphabet 기업 가치의 핵심입니다.",
        source: "Company earnings",
      },
      {
        label: "조기 투자 포트폴리오",
        detail: "테슬라 초기 투자 등 개인 포트폴리오가 부의 다각화에 기여합니다.",
        source: "Public market and private data",
      },
    ],
    sources: [
      {
        name: "Alphabet annual reports",
        grade: "primary",
        usage: "지배 구조, 부문별 실적, 자본 배분 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "larry-ellison",
    name: "Larry Ellison",
    koreanName: "래리 앨리슨",
    headline: "관계형 데이터베이스 시장을 창조하고 M&A로 제국을 확장한 기술 경영자",
    sector: "기술 · 데이터베이스 · 클라우드",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Oracle 지분 + 클라우드 전환 + 개인 투자 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Larry_Ellison_picture.png?width=640",
      alt: "Larry Ellison 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "드롭아웃 출신의 프로그래머가 관계형 데이터베이스라는 새로운 시장을 개척하고, 공격적인 M&A와 클라우드 전환으로 기술 제국을 확장한 사례입니다.",
    coreInsight:
      "엔터프라이즈 소프트웨어 시장은 고객 전환 비용이 매우 높아, 초기 시장 선점과 지속적인 인수 통합이 장기 지배력의 핵심입니다.",
    signalTags: ["데이터베이스", "M&A", "클라우드", "기술 지배력"],
    milestones: [
      {
        year: "1944",
        title: "미국 뉴욕 출생",
        body: "미혼모 사이에서 태어나 시카고에서 성장했고, 두 대학을 중퇴한 후 캘리포니아로 건너가 프로그래머로 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1977",
        title: "Oracle 공동 창업",
        body: "IBM 연구 논문에서 영감을 받은 관계형 데이터베이스 시스템을 상용화해 엔터프라이즈 소프트웨어 시장의 새로운 기준을 만들었습니다.",
        type: "venture",
      },
      {
        year: "1986",
        title: "Oracle IPO와 시장 확장",
        body: "공개 시장 자본을 기반으로 공격적인 세일즈와 제품 확장을 통해 데이터베이스 시장 지배력을 구축했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "클라우드 전환과 대형 인수",
        body: "Sun Microsystems, NetSuite 등 대형 인수를 통해 클라우드와 하드웨어로 사업을 확장하며 기업 가치를 재편했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "제품 호환성 잠금",
        detail: "자사 데이터베이스와 미들웨어, 애플리케이션 간의 높은 통합으로 고객 전환 비용을 극대화했습니다.",
        weight: 91,
      },
      {
        label: "공격적 M&A 통합",
        detail: "경쟁사와 인접 기술 기업을 인수해 시장 점유율과 제품 포트폴리오를 동시에 확장했습니다.",
        weight: 86,
      },
      {
        label: "엔터프라이즈 구독 전환",
        detail: "라이선스에서 클라우드 구독 모델로 전환하며 수익의 예측 가능성과 마진을 개선했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "Oracle 지분",
        detail: "상장 지분 가치가 순자산의 대부분을 차지하며 시장 변동에 직접 노출됩니다.",
        source: "Company filings",
      },
      {
        label: "클라우드 전환율",
        detail: "온프레미스에서 클라우드로의 마이그레이션 속도가 기업 가치 평가에 영향을 줍니다.",
        source: "Company earnings",
      },
      {
        label: "개인 투자 자산",
        detail: "부동산, 요트, 기술 스타트업 등 개인 자산 포트폴리오가 부의 다각화에 기여합니다.",
        source: "Private market and media reports",
      },
    ],
    sources: [
      {
        name: "Oracle annual reports",
        grade: "primary",
        usage: "사업 부문별 실적, M&A 내역, 구독 전환율 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "amancio-ortega",
    name: "Amancio Ortega",
    koreanName: "아만시오 오르테가",
    headline: "패스트 패션 공급망 혁신으로 소매 유통의 패러다임을 바꾼 창업자",
    sector: "패션 · 소매 · 물류",
    region: "스페인",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Inditex 지분 + 패스트 패션 공급망 + 부동산 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Amancio_Ortega_2014.jpg?width=640",
      alt: "Amancio Ortega 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "은행원이었던 아버지와 가정부였던 어머니 사이에서 태어나 14세에 학교를 그만두고 옷가게 배달원으로 시작해 글로벌 패션 제국을 세운 사례입니다.",
    coreInsight:
      "디자인-생산-유통의 수직 통합과 극단적인 리드 타임 단축이 패스트 패션의 경쟁력을 만들었고, 이는 자산 가치의 핵심 동력이 되었습니다.",
    signalTags: ["패스트 패션", "수직 통합", "공급망 혁신", "소매"],
    milestones: [
      {
        year: "1936",
        title: "스페인 출생, 가난한 가정에서 성장",
        body: "스페인 레온에서 태어나 가난한 가정에서 자랐고, 14세에 학교를 중퇴하고 지역 셔츠 가게의 배달원으로 일하기 시작했습니다.",
        type: "background",
      },
      {
        year: "1975",
        title: "Zara 첫 매장 오픈",
        body: "로브 가운과 속옷을 생산하는 가족 작업장에서 시작해 스페인 라코루냐에 첫 Zara 매장을 열었습니다.",
        type: "venture",
      },
      {
        year: "1980s-1990s",
        title: "공급망 혁신과 글로벌 확장",
        body: "자체 생산-물류 시스템을 구축해 디자인에서 매장 진열까지 2주 내외로 단축하는 혁신적인 패스트 패션 모델을 완성했습니다.",
        type: "inflection",
      },
      {
        year: "2001",
        title: "Inditex IPO와 부의 실현",
        body: "Inditex 그룹의 상장으로 창업자 지분 가치가 공개 시장에서 평가받기 시작했으며, 이후 배당금을 기반으로 글로벌 부동산 투자를 확대했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "수직 통합 공급망",
        detail: "디자인, 생산, 물류, 유통을 직접 통제해 업계 최단 리드 타임과 재고 리스크 최소화를 동시에 달성했습니다.",
        weight: 92,
      },
      {
        label: "데이터 기반 생산 결정",
        detail: "실시간 매장 판매 데이터를 기반으로 생산량과 디자인을 신속하게 조정해 재고 손실을 최소화했습니다.",
        weight: 87,
      },
      {
        label: "프라임 부동산 전략",
        detail: "세계 주요 도시의 프리미엄 상업용 부동산을 장기 보유하며 패션 소매와의 시너지를 창출했습니다.",
        weight: 75,
      },
    ],
    assetDrivers: [
      {
        label: "Inditex 지분",
        detail: "상장 지분 가치가 순자산의 중심이며 배당 수익이 현금 흐름의 주요 원천입니다.",
        source: "Company filings",
      },
      {
        label: "글로벌 부동산 포트폴리오",
        detail: "개인 회사를 통해 런던, 뉴욕, 마드리드 등 주요 도시의 상업용 부동산 투자를 확대했습니다.",
        source: "Private market and media reports",
      },
      {
        label: "패션 소매 수익성",
        detail: "Inditex 그룹의 매출 성장과 마진이 기업 가치와 배당 규모를 결정합니다.",
        source: "Company earnings",
      },
    ],
    sources: [
      {
        name: "Inditex annual reports",
        grade: "primary",
        usage: "매출, 마진, 점포 수, 공급망 데이터 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },

  {
    slug: "rob-walton",
    name: "Rob Walton & family",
    koreanName: "롭 월튼",
    headline: "월마트 상속 2세대, 지분 가치와 가족 지배 구조의 복리 효과를 누리는 상속자",
    sector: "소매 · 유통",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "월마트 상속 지분 + 배당 수익 + 가족 지배 구조",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sam_Walton_Portrait.jpg?width=640",
      alt: "Rob Walton 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "월마트 창업자 샘 월튼의 장남으로 태어나 1992년부터 2015년까지 이사회 의장을 맡으며 가족 경영 체제를 유지했습니다. 상장 이후에도 가족이 지분 약 50%를 보유하며 유통업 최대 부를 유지하고 있습니다.",
    coreInsight:
      "상속자가 경영 일선에서 물러난 후에도 가족 지분 구조와 배당 수익이 복리 효과를 만들어내며, 지분 매각 없이도 순자산이 꾸준히 증가하는 구조를 만들었습니다.",
    signalTags: ["월마트", "가족 지분", "소매 유통", "상속"],
    milestones: [
      {
        year: "1944",
        title: "미국 아칸소 출생",
        body: "샘 월튼의 장남으로 태어나 아칸소 대학에서 법학을 전공하고 변호사 자격을 취득했습니다.",
        type: "background",
      },
      {
        year: "1992",
        title: "월마트 이사회 의장 취임",
        body: "아버지 샘 월튼의 사망 후 이사회 의장직을 승계하며 가족 경영 체제를 공식화했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "글로벌 확장과 지분 가치 성장",
        body: "월마트의 해외 진출과 대형 할인점 체제 확장 속에서 가족 지분의 가치가 크게 증가했습니다.",
        type: "scale",
      },
      {
        year: "2015",
        title: "이사회 의장 사임",
        body: "아들 그렉 월튼에게 의장직을 넘기고 경영에서 물러났지만, 가족 지분 구조와 배당 수익은 유지되었습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "가족 지분 집중",
        detail: "상장 후에도 가족 합의를 통해 지분을 분산하지 않고 일괄 의결권을 유지하며 지배력을 지켰습니다.",
        weight: 90,
      },
      {
        label: "장기 배당 재투자",
        detail: "월마트의 꾸준한 배당금을 가족 회사를 통해 재투자하며 복리 효과를 극대화했습니다.",
        weight: 85,
      },
      {
        label: "경영 전문성 위임",
        detail: "가족 구성원은 이사회에서 전략적 방향을 결정하고 일상 운영은 전문 경영인에게 위임했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "월마트 지분",
        detail: "가족 합산 기준 월마트 지분 약 50%가 순자산의 핵심이며 배당 수익이 현금 흐름의 주요 원천입니다.",
        source: "Company filings",
      },
      {
        label: "월마트 주가",
        detail: "유통업의 안정적인 현금 흐름과 배당 성장이 주가와 순자산 가치를 지탱합니다.",
        source: "Public market data",
      },
      {
        label: "가족 오피스 투자",
        detail: "개인 투자 회사를 통해 부동산, 사모펀드 등 다양한 자산군으로 포트폴리오를 다각화했습니다.",
        source: "Private market estimates",
      },
    ],
    sources: [
      {
        name: "Walmart annual reports",
        grade: "primary",
        usage: "지분 구조, 배당 정책, 부문별 실적 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "jim-walton",
    name: "Jim Walton & family",
    koreanName: "짐 월튼",
    headline: "월마트 지분과 지역 은행을 결합한 2세대 자산가",
    sector: "소매 · 유통 · 금융",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "월마트 상속 지분 + 은행 자산 + 가족 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sam_Walton_Portrait.jpg?width=640",
      alt: "Jim Walton 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "샘 월튼의 막내 아들로 월마트 지분 외에도 아칸소주 최대 은행 중 하나인 아르베스트 은행을 소유하며 자산을 다각화했습니다. 월마트 이사회에서 활동하며 가족의 경영 참여를 이어가고 있습니다.",
    coreInsight:
      "소매 유통 지분과 지역 은행이라는 안정적인 현금 흐름 자산을 결합해 경기 변동에 강한 포트폴리오를 구축했습니다.",
    signalTags: ["월마트", "지역 은행", "가족 지분", "자산 다각화"],
    milestones: [
      {
        year: "1948",
        title: "미국 아칸소 출생",
        body: "샘 월튼의 셋째 아들로 태어나 아칸소 대학에서 경영학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1975",
        title: "월마트 입사와 경영 참여",
        body: "월마트에서 다양한 부문을 경험하며 가족 경영 체제에서 실무 역량을 쌓았습니다.",
        type: "career",
      },
      {
        year: "2005",
        title: "Arvest Bank 지배력 강화",
        body: "가족 소유의 아칸소 지역 은행인 Arvest Bank의 지분과 경영을 맡아 소매 외 금융 자산을 확대했습니다.",
        type: "scale",
      },
      {
        year: "2016",
        title: "월마트 이사회 사임",
        body: "월마트 이사회에서 물러난 후에도 가족 지분을 유지하며 은행과 가족 오피스 투자에 집중했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "지역 금융 프랜차이즈",
        detail: "아칸소와 중서부 지역에 집중된 은행 네트워크를 통해 안정적인 예금 기반과 수수료 수익을 확보했습니다.",
        weight: 87,
      },
      {
        label: "가족 지분 유지",
        detail: "월마트 지분을 장기 보유하며 배당금과 자본 이득을 가족 오피스를 통해 재투자했습니다.",
        weight: 85,
      },
      {
        label: "비상장 자산 프리미엄",
        detail: "비상장 은행 자산을 통해 공개 시장 변동성에 노출되지 않는 안정적인 가치를 유지했습니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "월마트 지분",
        detail: "월마트 지분 약 5% 이상을 개인 명의로 보유하며 배당 수익과 주가 상승의 혜택을 받습니다.",
        source: "Company filings",
      },
      {
        label: "Arvest Bank 가치",
        detail: "비상장 지역 은행의 안정적인 이자 수익과 자산 성장이 순자산의 중요한 축입니다.",
        source: "Private market estimates",
      },
      {
        label: "가족 투자 포트폴리오",
        detail: "가족 오피스를 통해 부동산, 인프라, 사모펀드 등으로 자산을 분산 투자합니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "Walmart annual reports",
        grade: "primary",
        usage: "지분 구조, 배당 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "michael-dell",
    name: "Michael Dell",
    koreanName: "마이클 델",
    headline: "PC 맞춤 제조에서 엔터프라이즈 IT 솔루션으로 전환한 기술 경영자",
    sector: "기술 · IT 인프라",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Dell Technologies 지분 + 사모펀드 투자 + VMware 전환",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Michael_Dell_2019_%28cropped%29.jpg?width=640",
      alt: "Michael Dell 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "대학 기숙사에서 PC 조립 판매 사업을 시작해 글로벌 PC 제조사로 키운 후, 대형 M&A와 사모펀드와의 협력을 통해 엔터프라이즈 IT 솔루션 기업으로 변모시킨 사례입니다.",
    coreInsight:
      "직접 판매 모델의 비용 우위를 기반으로 시장 점유율을 확보한 후, 인프라·스토리지·클라우드로 포트폴리오를 확장하며 기업 가치를 재정의했습니다.",
    signalTags: ["PC 제조", "M&A", "IT 인프라", "사모펀드"],
    milestones: [
      {
        year: "1965",
        title: "미국 텍사스 출생",
        body: "텍사스 주 휴스턴에서 태어나 어린 시절부터 전자 기기에 관심이 많았고, 텍사스 대학에 진학했으나 중퇴했습니다.",
        type: "background",
      },
      {
        year: "1984",
        title: "Dell Computer 창업",
        body: "PCs Limited라는 이름으로 기숙사에서 PC 조립 판매 사업을 시작해 맞춤 제작 직접 판매 모델을 구축했습니다.",
        type: "venture",
      },
      {
        year: "2013",
        title: "Dell 사모화 (LBO)",
        body: "MSD 파트너스와 함께 249억 달러 규모의 레버리지 바이아웃을 통해 Dell을 비상장화하며 기업 구조를 재편했습니다.",
        type: "inflection",
      },
      {
        year: "2016",
        title: "EMC 인수와 VMware 통합",
        body: "EMC를 670억 달러에 인수하며 엔터프라이즈 스토리지, 서버, 클라우드 시장으로 사업 영역을 대폭 확장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "직접 판매 모델",
        detail: "중간 유통 과정을 없앤 맞춤 제작 직접 판매 방식으로 비용 우위와 재고 효율을 동시에 달성했습니다.",
        weight: 90,
      },
      {
        label: "사모화를 통한 재편",
        detail: "공개 시장의 단기 압력에서 벗어나 장기 전환 투자를 단행하며 기업 구조를 근본적으로 재설계했습니다.",
        weight: 86,
      },
      {
        label: "대형 M&A 통합",
        detail: "EMC-VMware 인수를 통해 PC를 넘어 엔터프라이즈 IT 전체로 포트폴리오를 확장했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Dell Technologies 지분",
        detail: "2018년 재상장 후 Dell 지분 가치가 순자산의 중심이 되었으며 VMware 트래킹 스톡도 포함됩니다.",
        source: "Company filings",
      },
      {
        label: "MSD Partners 투자",
        detail: "자신의 사모펀드 MSD Partners를 통해 다양한 기술 기업에 투자하며 자산을 다각화했습니다.",
        source: "Private market data",
      },
      {
        label: "기업 IT 수요",
        detail: "클라우드 전환, AI 인프라 수요 증가가 Dell의 서버·스토리지 사업 가치를 끌어올립니다.",
        source: "Company earnings",
      },
    ],
    sources: [
      {
        name: "Dell Technologies annual reports",
        grade: "primary",
        usage: "사업 부문별 실적, 부채 구조, 지분 구성 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "alice-walton",
    name: "Alice Walton",
    koreanName: "앨리스 월튼",
    headline: "월마트 상속 2세대, 미술관과 자선 사업으로 자산을 사회에 환원하는 상속자",
    sector: "소매 · 유통 · 예술",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "월마트 상속 지분 + 미술 컬렉션 + 자선 재단",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alice_Walton_2011_%28cropped%29.jpg?width=640",
      alt: "Alice Walton 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "샘 월튼의 유일한 딸로 태어나 월마트 지분을 상속받아 세계 최고의 여성 부호 중 한 명이 되었습니다. 아칸소에 크리스탈 브리지 미술관을 설립하며 예술과 자선 사업에 주력하고 있습니다.",
    coreInsight:
      "상속받은 소매 유통 지분이 창출하는 배당 수익을 기반으로 미술 수집과 자선 활동을 병행하며 부의 사회적 영향력을 확대하고 있습니다.",
    signalTags: ["월마트", "여성 부호", "미술 컬렉션", "자선"],
    milestones: [
      {
        year: "1949",
        title: "미국 아칸소 출생",
        body: "샘 월튼과 헬렌 월튼 사이의 유일한 딸로 태어나 아칸소에서 성장했습니다.",
        type: "background",
      },
      {
        year: "1988",
        title: "투자 자문 경력",
        body: "텍사스에서 투자 자문사와 부동산 개발 사업을 운영하며 금융과 투자 경험을 쌓았습니다.",
        type: "career",
      },
      {
        year: "2011",
        title: "Crystal Bridges 미술관 개관",
        body: "아칸소주 벤턴빌에 8억 달러를 투자해 크리스탈 브리지 미술관을 설립하며 미국 현대 미술의 주요 전시 공간을 조성했습니다.",
        type: "venture",
      },
      {
        year: "2020s",
        title: "월마트 지분 가치 상승",
        body: "월마트의 코로나19 이후 소매 강세와 디지털 전환 가속화로 지분 가치가 크게 증가했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "장기 지분 보유",
        detail: "월마트 지분을 매각하지 않고 장기 보유하며 배당 수익과 주가 상승의 복리 효과를 누리고 있습니다.",
        weight: 88,
      },
      {
        label: "예술 자산 다각화",
        detail: "개인 미술 컬렉션과 미술관 설립을 통해 소매 유통 의존도를 줄이고 문화 자산을 축적했습니다.",
        weight: 80,
      },
      {
        label: "자선 재단 운영",
        detail: "월튼 가족 재단을 통해 교육, 환경, 예술 분야에 체계적인 자선 활동을 펼치며 세금 효율성을 높였습니다.",
        weight: 72,
      },
    ],
    assetDrivers: [
      {
        label: "월마트 지분",
        detail: "월마트 지분 약 5% 이상을 보유하며 안정적인 배당 수익과 주가 성장의 혜택을 받습니다.",
        source: "Company filings",
      },
      {
        label: "미술 컬렉션",
        detail: "수십억 달러 규모의 미국 현대 미술 컬렉션을 보유하며 대체 자산으로서 가치를 유지합니다.",
        source: "Media reports",
      },
      {
        label: "가족 오피스",
        detail: "월튼 가족 오피스를 통해 부동산, 주식, 사모펀드 등 분산 투자 포트폴리오를 운영합니다.",
        source: "Private market estimates",
      },
    ],
    sources: [
      {
        name: "Walmart annual reports",
        grade: "primary",
        usage: "지분 구조, 배당 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "steve-ballmer",
    name: "Steve Ballmer",
    koreanName: "스티브 발머",
    headline: "세일즈와 운영 중심의 경영으로 마이크로소프트를 이끌고 클라우드 전환의 토대를 마련한 CEO",
    sector: "기술 · 소프트웨어 · 클라우드",
    region: "미국",
    generation: "Capital allocator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Microsoft 지분 + 스포츠 프랜차이즈 + 클라우드 전환",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Steve_Ballmer_2014_%28cropped%29.jpg?width=640",
      alt: "Steve Ballmer 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "마이크로소프트의 30번째 직원으로 합류해 2000년부터 2014년까지 CEO를 역임하며 매출을 4배로 성장시켰습니다. 퇴임 후에도 초기 고용 옵션과 지분 매입을 통해 축적한 마이크로소프트 지분이 순자산의 핵심입니다.",
    coreInsight:
      "전문 경영인으로 시작했지만 창업자 수준의 지분을 확보할 수 있었던 것은 초기 고용 옵션과 지속적인 지분 매입 덕분이며, 이후 스포츠 프랜차이즈로 자산을 다각화했습니다.",
    signalTags: ["Microsoft", "클라우드", "스포츠 구단", "전문 경영인"],
    milestones: [
      {
        year: "1956",
        title: "미국 미시간 출생",
        body: "미시간 주 디트로이트에서 태어나 하버드 대학에서 응용수학과 경제학을 전공했고, 후에 스탠퍼드 경영대학원에서 MBA를 취득했습니다.",
        type: "background",
      },
      {
        year: "1980",
        title: "Microsoft 합류",
        body: "빌 게이츠의 하버드 동창으로 Microsoft의 30번째 직원이자 첫 번째 비즈니스 매니저로 합류했습니다.",
        type: "career",
      },
      {
        year: "2000",
        title: "Microsoft CEO 취임",
        body: "빌 게이츠로부터 CEO직을 승계받아 Windows, Office, Xbox 등 핵심 제품 라인을 확장하며 매출을 크게 성장시켰습니다.",
        type: "inflection",
      },
      {
        year: "2014",
        title: "CEO 퇴임과 LA Clippers 인수",
        body: "CEO직에서 물러난 후 20억 달러에 LA 클리퍼스를 인수하며 스포츠 프랜차이즈 투자자로 전환했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "초기 지분 축적",
        detail: "초기 직원 옵션과 지속적인 자사주 매입을 통해 창업자 수준의 Microsoft 지분을 확보했습니다.",
        weight: 90,
      },
      {
        label: "클라우드 전환 기반 마련",
        detail: "CEO 재임 기간 Azure 클라우드 플랫폼의 기반을 마련하며 이후 사티아 나델라 시대의 성장 토대를 구축했습니다.",
        weight: 85,
      },
      {
        label: "스포츠 프랜차이즈 투자",
        detail: "NBA 구단 인수를 통해 소프트웨어 지분 의존도를 낮추고 대체 자산으로 포트폴리오를 다각화했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "Microsoft 지분",
        detail: "약 4%의 Microsoft 지분을 보유하며 안정적인 배당과 주가 상승의 혜택을 받습니다.",
        source: "Company filings",
      },
      {
        label: "LA Clippers 가치",
        detail: "NBA 프랜차이즈 가치 상승이 순자산 증가에 기여하며 미디어 권리와 구장 수익이 추가 수익원입니다.",
        source: "Media reports",
      },
      {
        label: "개인 투자 포트폴리오",
        detail: "미국 국채, 부동산 등 보수적인 투자 포트폴리오를 통해 자산을 보존하고 있습니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "Microsoft annual reports",
        grade: "primary",
        usage: "지분 구조, 부문별 실적 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "carlos-slim-helu",
    name: "Carlos Slim Helu & family",
    koreanName: "카를로스 슬림 엘루",
    headline: "통신 독점과 위기 자산 매입으로 라틴아메리카 최대 재산을 구축한 투자가",
    sector: "통신 · 인프라 · 투자",
    region: "멕시코",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "America Movil 지분 + 인프라 독점 + 위기 매수 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Carlos_Slim_2011_%28cropped%29.jpg?width=640",
      alt: "Carlos Slim Helu 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "레바논 이민자 가정에서 태어나 멕시코 경제 위기 시기에 헐값에 매입한 자산을 기반으로 통신, 인프라, 금융을 아우르는 복합 기업을 구축했습니다. 아메리카 모빌의 지분 가치가 전체 자산의 핵심입니다.",
    coreInsight:
      "멕시코의 전화·통신 시장 독점적 지위가 거대한 현금 흐름을 창출했고, 이 현금을 위기 때마다 헐값 자산 매입에 활용하는 선순환 구조를 만들었습니다.",
    signalTags: ["통신 독점", "위기 매수", "멕시코", "복합 기업"],
    milestones: [
      {
        year: "1940",
        title: "멕시코시티 출생",
        body: "레바논계 이민자 가정에서 태어나 어린 시절부터 아버지로부터 투자와 사업에 대한 교육을 받았습니다.",
        type: "background",
      },
      {
        year: "1990",
        title: "Telmex 민영화 인수",
        body: "멕시코 정부의 통신사 민영화 과정에서 Telmex를 인수하며 통신 시장 독점권을 확보했습니다.",
        type: "inflection",
      },
      {
        year: "2000s",
        title: "America Movil 설립과 라틴 확장",
        body: "Telmex의 무선 사업부를 분사해 America Movil을 설립하고 라틴아메리카 전역으로 통신 네트워크를 확장했습니다.",
        type: "scale",
      },
      {
        year: "2010s",
        title: "글로벌 투자 포트폴리오 확장",
        body: "스페인 통신사, 뉴욕 타임스, 멕시코 건설·광산 기업 등으로 투자 영역을 다각화했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "위기 자산 매수",
        detail: "멕시코 경제 위기와 민영화 시점에 정부 보유 자산을 헐값에 인수해 독점적 시장 지위를 확보했습니다.",
        weight: 92,
      },
      {
        label: "통신 독점 현금 흐름",
        detail: "고정 통신 독점권에서 창출되는 안정적인 현금 흐름을 신규 투자와 배당의 원천으로 활용했습니다.",
        weight: 88,
      },
      {
        label: "분야별 지주 구조",
        detail: "Grupo Carso를 통해 통신, 건설, 금융, 소매 등 다양한 산업을 지주회사 체제로 운영했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "America Movil 지분",
        detail: "라틴아메리카 최대 통신사의 지분 가치가 순자산의 절반 이상을 차지합니다.",
        source: "Company filings",
      },
      {
        label: "Grupo Carso 포트폴리오",
        detail: "건설, 금융, 소매 등 다양한 부문의 비상장·상장 기업 지분이 자산 다각화에 기여합니다.",
        source: "Company reports",
      },
      {
        label: "글로벌 투자 자산",
        detail: "스페인 통신, 뉴욕 부동산, 글로벌 주식 등 해외 투자 포트폴리오가 추가 수익원입니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "America Movil annual reports",
        grade: "primary",
        usage: "통신 부문 실적, 지분 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "changpeng-zhao",
    name: "Changpeng Zhao",
    koreanName: "자오창펑",
    headline: "암호화폐 거래소 제국의 창시자, 글로벌 규제 속에서도 비즈니스를 확장한 플랫폼 빌더",
    sector: "암호화폐 · 핀테크",
    region: "캐나다",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Binance 지분 + BNB 토큰 + 암호화폐 거래 수수료",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Changpeng_Zhao_2021_%28cropped%29.jpg?width=640",
      alt: "Changpeng Zhao 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "중국 이민자 가정에서 태어나 캐나다에서 성장한 소프트웨어 엔지니어가 암호화폐 열풍 속에서 세계 최대 거래소를 창업했습니다. 바이낸스의 거래량 기반 수수료 수익과 BNB 토큰 생태계가 순자산의 핵심입니다.",
    coreInsight:
      "암호화폐 거래소는 시장 변동성 자체를 수익으로 전환하는 독특한 비즈니스 모델로, 거래량이 증가할수록 수수료 수익이 커지는 구조를 가지고 있습니다.",
    signalTags: ["암호화폐", "거래소", "BNB", "글로벌 규제"],
    milestones: [
      {
        year: "1977",
        title: "중국 출생, 캐나다 이주",
        body: "중국 장쑤성에서 태어나 10대에 캐나다로 이주했고, 맥길 대학에서 컴퓨터 공학을 전공했습니다.",
        type: "background",
      },
      {
        year: "2017",
        title: "Binance 창업",
        body: "Blockchain.com과 OKCoin에서의 경험을 바탕으로 암호화폐 거래소 바이낸스를 창업했습니다.",
        type: "venture",
      },
      {
        year: "2019",
        title: "글로벌 확장과 규제 도전",
        body: "전 세계 180개국 이상에서 서비스를 제공하며 빠르게 성장했지만, 각국 규제 당국의 주목을 받기 시작했습니다.",
        type: "scale",
      },
      {
        year: "2023",
        title: "규제 합의와 사업 재편",
        body: "미국 규제 당국과의 합의로 벌금을 납부하고 경영 일선에서 물러났지만, 바이낸스의 지배력은 유지했습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "거래량 기반 수수료 모델",
        detail: "암호화폐 시장의 높은 변동성과 거래량을 활용해 거래 수수료 수익을 극대화했습니다.",
        weight: 91,
      },
      {
        label: "BNB 생태계 구축",
        detail: "자체 토큰 BNB를 발행해 거래 수수료 할인, DeFi, NFT 등 다양한 유틸리티를 제공하며 생태계를 확장했습니다.",
        weight: 87,
      },
      {
        label: "글로벌 유동성 허브",
        detail: "가장 많은 거래 쌍과 높은 유동성을 제공해 대규모 트레이더와 기관 투자자를 유치했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Binance 지분",
        detail: "비상장 거래소의 지분 가치가 순자산의 대부분을 차지하며 추정치의 변동성이 매우 큽니다.",
        source: "Private market estimates",
      },
      {
        label: "BNB 토큰 보유",
        detail: "바이낸스가 보유한 자체 토큰 BNB의 가치가 기업 가치 평가에 중요한 요소입니다.",
        source: "Public market data",
      },
      {
        label: "암호화폐 시장 변동성",
        detail: "암호화폐 가격과 거래량 변동이 기업 수익과 지분 가치에 직접적인 영향을 미칩니다.",
        source: "Market data",
      },
    ],
    sources: [
      {
        name: "Binance disclosures",
        grade: "report",
        usage: "거래량, 사용자 수, 수수료 수익 추정",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "michael-bloomberg",
    name: "Michael Bloomberg",
    koreanName: "마이클 블룸버그",
    headline: "금융 정보 단말기 독점과 미디어 제국을 동시에 구축한 기술 경영자",
    sector: "금융 정보 · 미디어 · 기술",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Bloomberg LP 지분 + 금융 단말기 구독 + 미디어 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Michael_Bloomberg_2016_%28cropped%29.jpg?width=640",
      alt: "Michael Bloomberg 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "Salomon Brothers에서 파트너에서 해고된 후 금융 정보 단말기 회사를 창업해 전 세계 금융 기관의 필수 인프라를 구축했습니다. 뉴욕 시장 역임 후에도 회사의 88% 지분을 보유하며 민간 기업 최고 가치를 유지하고 있습니다.",
    coreInsight:
      "금융 정보 단말기는 한 번 도입하면 교체가 거의 불가능한 락인(lock-in) 효과가 있어, 약 30만 대의 단말기 구독이 지속적인 현금 흐름을 보장합니다.",
    signalTags: ["금융 정보", "단말기", "미디어", "뉴욕 시장"],
    milestones: [
      {
        year: "1942",
        title: "미국 매사추세츠 출생",
        body: "회계사 아버지 아래에서 태어나 존스 홉킨스 대학에서 전기공학을 전공하고 하버드 MBA를 취득했습니다.",
        type: "background",
      },
      {
        year: "1981",
        title: "Bloomberg LP 창업",
        body: "Salomon Brothers에서 해고된 후 증권 업계의 정보 비효율성을 해결하는 금융 정보 단말기 사업을 시작했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "Bloomberg 단말기 시장 지배력 확보",
        body: "월스트리트의 표준 인프라로 자리잡으며 연간 구독료 수익 모델을 안정화했습니다.",
        type: "scale",
      },
      {
        year: "2002-2013",
        title: "뉴욕 시장 역임",
        body: "3선 뉴욕 시장으로 재임하며 공공 부문에서의 경력을 쌓았고, 이후 Bloomberg LP로 복귀했습니다.",
        type: "career",
      },
    ],
    strategy: [
      {
        label: "단말기 락인 효과",
        detail: "Bloomberg 단말기는 금융 데이터, 분석, 거래, 커뮤니케이션을 통합 제공해 고객의 전환 비용을 극도로 높였습니다.",
        weight: 92,
      },
      {
        label: "구독 수익 모델",
        detail: "연간 2만 달러 이상의 고정 구독료를 받는 모델로 예측 가능한 반복 수익을 창출했습니다.",
        weight: 89,
      },
      {
        label: "미디어 확장",
        detail: "Bloomberg News, Bloomberg TV, Bloomberg Terminal을 연계해 금융 정보 생태계를 완성했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "Bloomberg LP 지분",
        detail: "88%의 지분을 보유한 비상장 기업으로, 추정 기업 가치가 순자산의 거의 전부입니다.",
        source: "Media estimates",
      },
      {
        label: "단말기 설치 대수",
        detail: "약 30만 대 이상의 단말기 설치량과 유지율이 기업 가치의 핵심 지표입니다.",
        source: "Industry reports",
      },
      {
        label: "개인 투자 및 자선",
        detail: "Bloomberg Philanthropies를 통해 자선 활동을 수행하며 세금 효율성을 높이고 있습니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "기업 공시 자료",
        grade: "report",
        usage: "비상장 기업 구조, 수익 모델 이해",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "bill-gates",
    name: "Bill Gates",
    koreanName: "빌 게이츠",
    headline: "PC 운영체제 독점과 소프트웨어 산업의 표준을 만든 기술 선구자",
    sector: "기술 · 소프트웨어 · 자선",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Microsoft 지분 + Cascade Investment 포트폴리오 + 자선 재단",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bill_Gates_2017_%28cropped%29.jpg?width=640",
      alt: "Bill Gates 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "하버드 중퇴 후 폴 앨런과 함께 마이크로소프트를 창업해 PC 운영체제 시장을 장악하며 세계 최고 부호 자리에 올랐습니다. 현재는 Cascade Investment를 통해 자산을 다각화하고 빌 & 멜린다 게이츠 재단을 통해 자선 활동에 집중하고 있습니다.",
    coreInsight:
      "MS-DOS와 Windows의 PC 운영체제 독점이 소프트웨어 산업 전체를 지배하는 플랫폼 효과를 창출했으며, 이후 체계적인 자산 다각화와 자선 활동으로 부의 구조를 재편했습니다.",
    signalTags: ["Microsoft", "운영체제", "자선", "자산 다각화"],
    milestones: [
      {
        year: "1955",
        title: "미국 워싱턴 출생",
        body: "변호사 가정에서 태어나 레이크사이드 학교에서 컴퓨터 프로그래밍에 처음 접했고, 하버드 대학에 진학했으나 중퇴했습니다.",
        type: "background",
      },
      {
        year: "1975",
        title: "Microsoft 창업",
        body: "폴 앨런과 함께 BASIC 인터프리터 개발을 시작으로 소프트웨어 회사를 창업했습니다.",
        type: "venture",
      },
      {
        year: "1985",
        title: "Windows 출시와 PC 지배력",
        body: "Windows 운영체제를 출시하며 PC 시장의 표준 플랫폼으로 자리잡고 압도적인 시장 점유율을 확보했습니다.",
        type: "inflection",
      },
      {
        year: "2000s",
        title: "Cascade Investment와 자선 전환",
        body: "Microsoft 경영에서 물러나 Cascade Investment를 통해 자산을 다각화하고, 빌 & 멜린다 게이츠 재단을 통해 본격적인 자선 활동을 시작했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "플랫폼 독점",
        detail: "PC 운영체제 시장의 독점적 지위를 활용해 애플리케이션 생태계 전체에 대한 영향력을 행사했습니다.",
        weight: 92,
      },
      {
        label: "자산 다각화",
        detail: "Cascade Investment를 통해 Microsoft 지분을 매각하고 주식, 부동산, 인프라 등으로 자산을 분산 투자했습니다.",
        weight: 86,
      },
      {
        label: "자선 재단 운영",
        detail: "게이츠 재단을 통해 글로벌 보건, 교육, 빈곤 퇴치에 집중 투자하며 사회적 영향력과 세금 효율성을 동시에 추구했습니다.",
        weight: 75,
      },
    ],
    assetDrivers: [
      {
        label: "Cascade Investment 포트폴리오",
        detail: "Canadian National Railway, AutoNation, Ecolab 등 다양한 상장 기업 지분으로 구성된 다각화된 포트폴리오입니다.",
        source: "SEC filings",
      },
      {
        label: "Microsoft 잔여 지분",
        detail: "지속적인 매각에도 불구하고 남아 있는 Microsoft 지분이 여전히 순자산의 일부를 차지합니다.",
        source: "Company filings",
      },
      {
        label: "부동산 및 개인 자산",
        detail: "워싱턴주 레이크사이드 부동산, 개인 투자, 미술 컬렉션 등이 자산 다각화에 기여합니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "Microsoft annual reports",
        grade: "primary",
        usage: "지분 구조, 사업 부문 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "francoise-bettencourt-meyers",
    name: "Francoise Bettencourt Meyers & family",
    koreanName: "프랑수아즈 베탕쿠르 메이예",
    headline: "로레알 상속 3세대, 세계 최대 화장품 기업의 지분 가치를 이어받은 여성 상속자",
    sector: "화장품 · 소비재",
    region: "프랑스",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "L'Oreal 지분 + 배당 수익 + 가족 지배 구조",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Francoise_Bettencourt_Meyers_2011_%28cropped%29.jpg?width=640",
      alt: "Francoise Bettencourt Meyers 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "로레알 창업자 외젠 슈엘레르의 손녀이자 유일한 상속인으로, 2017년 어머니 릴리안 베탕쿠르 사망 후 로레알 지분을 승계했습니다. 세계 최고 여성 부호로 가족 지분 33%를 통해 로레알의 지배권을 유지하고 있습니다.",
    coreInsight:
      "글로벌 화장품 시장의 안정적인 성장과 로레알의 브랜드 포트폴리오 다양성이 장기 지분 가치를 지탱하며, 배당 수익이 지속적인 현금 흐름을 제공합니다.",
    signalTags: ["로레알", "여성 부호", "화장품", "상속"],
    milestones: [
      {
        year: "1953",
        title: "프랑스 파리 출생",
        body: "로레알 창업자 외젠 슈엘레르의 손녀로 태어나 어머니 릴리안 베탕쿠르 밑에서 성장했습니다.",
        type: "background",
      },
      {
        year: "1987",
        title: "가족 투자 회사 합류",
        body: "가족 지배 구조를 관리하는 투자 회사인 Tethys Invest에 합류해 경영 및 투자 경험을 쌓았습니다.",
        type: "career",
      },
      {
        year: "2017",
        title: "어머니 사망, 로레알 지분 승계",
        body: "릴리안 베탕쿠르 사망 후 로레알 지분 약 33%를 상속받으며 최대 개인 주주이자 이사회 멤버가 되었습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "로레알 지분 가치 지속 성장",
        body: "글로벌 화장품 시장의 견조한 성장과 로레알의 안정적인 실적으로 지분 가치가 꾸준히 증가했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "가족 지분 유지",
        detail: "로레알 지분을 매각하지 않고 장기 보유하며 배당 수익과 주가 상승의 혜택을 누리고 있습니다.",
        weight: 90,
      },
      {
        label: "Tethys Invest 운영",
        detail: "가족 투자 회사를 통해 화장품 외 부동산, 사모펀드 등으로 자산을 분산 투자합니다.",
        weight: 82,
      },
      {
        label: "자선 및 문화 활동",
        detail: "베탕쿠르 슈엘레르 재단을 통해 과학, 예술, 인문학 분야의 자선 활동을 체계적으로 운영합니다.",
        weight: 72,
      },
    ],
    assetDrivers: [
      {
        label: "L'Oreal 지분",
        detail: "로레알 지분 약 33%가 순자산의 대부분을 차지하며 글로벌 화장품 시장 성장의 혜택을 받습니다.",
        source: "Company filings",
      },
      {
        label: "L'Oreal 배당금",
        detail: "로레알의 안정적인 배당 정책이 연간 현금 흐름의 주요 원천입니다.",
        source: "Company earnings",
      },
      {
        label: "Tethys 투자 포트폴리오",
        detail: "가족 투자 회사를 통해 부동산, 사모펀드, 채권 등 다양한 자산군에 분산 투자합니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "L'Oreal annual reports",
        grade: "primary",
        usage: "지분 구조, 배당 정책, 부문별 실적 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "mukesh-ambani",
    name: "Mukesh Ambani",
    koreanName: "무케시 암바니",
    headline: "인도 재벌 2세대가 통신 혁명으로 전통 재벌을 기술 플랫폼 기업으로 전환시킨 사례",
    sector: "통신 · 에너지 · 소매 · 기술",
    region: "인도",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "Reliance Industries 지분 + Jio 플랫폼 + 통신·소매 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mukesh_Ambani_2015_%28cropped%29.jpg?width=640",
      alt: "Mukesh Ambani 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지 디루바이 암바니의 석유화학·에너지 기업을 물려받아 통신(Jio), 소매, 디지털 플랫폼으로 사업을 확장하며 인도 최대 재벌을 아시아 최고 부자 중 한 명으로 키웠습니다. 릴라이언스 인더스트리의 지분 가치가 순자산의 핵심입니다.",
    coreInsight:
      "전통 에너지 기업의 현금 흐름을 디지털 인프라 구축에 투자해 통신·소매·기술 플랫폼 기업으로 전환하며 기업 가치를 재평가받았습니다.",
    signalTags: ["인도", "통신 혁명", "Jio", "재벌"],
    milestones: [
      {
        year: "1957",
        title: "예멘 아덴 출생",
        body: "인도 재벌 디루바이 암바니의 장남으로 태어나 스탠퍼드 대학에서 경영학 석사 과정을 수료했습니다.",
        type: "background",
      },
      {
        year: "2002",
        title: "Reliance Industries 승계",
        body: "아버지 사망 후 동생 아닐 암바니와의 경영권 분쟁을 거쳐 Reliance Industries의 경영권을 확보했습니다.",
        type: "inflection",
      },
      {
        year: "2016",
        title: "Jio 통신 서비스 출시",
        body: "파격적인 저가 요금제와 대규모 4G 인프라 투자로 인도 통신 시장을 재편하며 시장 지배력을 확보했습니다.",
        type: "venture",
      },
      {
        year: "2020s",
        title: "디지털 플랫폼 확장",
        body: "Jio Platforms에 Facebook, Google 등 글로벌 빅테크의 대규모 투자를 유치하며 기술 기업으로의 전환을 가속화했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "에너지 현금 흐름의 디지털 전환 투자",
        detail: "석유화학·정제 사업에서 창출되는 안정적인 현금 흐름을 통신 인프라와 디지털 플랫폼에 대규모로 투자했습니다.",
        weight: 91,
      },
      {
        label: "파괴적 가격 전략",
        detail: "초저가 요금제와 무료 데이터 제공으로 인도 통신 시장의 기존 플레이어를 재편하고 빠르게 시장 점유율을 확보했습니다.",
        weight: 88,
      },
      {
        label: "글로벴 테크 파트너십",
        detail: "Facebook, Google, Qualcomm 등 글로벌 기술 기업의 전략적 투자를 유치해 Jio Platforms의 가치를 끌어올렸습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Reliance Industries 지분",
        detail: "릴라이언스 인더스트리의 약 50% 지분이 순자산의 중심이며, 주가 변동에 직접 영향을 받습니다.",
        source: "Company filings",
      },
      {
        label: "Jio Platforms 가치",
        detail: "인도 최대 통신사의 사용자 기반과 데이터 트래픽이 디지털 플랫폼 가치의 핵심입니다.",
        source: "Company reports",
      },
      {
        label: "Reliance Retail",
        detail: "인도 최대 소매 체인의 성장과 글로벌 투자 유치가 추가 자산 가치를 창출합니다.",
        source: "Company earnings",
      },
    ],
    sources: [
      {
        name: "Reliance Industries annual reports",
        grade: "primary",
        usage: "사업 부문별 실적, 지분 구조, 자본 지출 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "giancarlo-devasini",
    name: "Giancarlo Devasini",
    koreanName: "잔카를로 데바시니",
    headline: "테더의 파이낸스 책임자, 스테이블코인 발행을 통해 암호화폐 시장의 유동성을 독점한 금융 전략가",
    sector: "암호화폐 · 핀테크",
    region: "이탈리아",
    generation: "Capital allocator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Tether 지분 + USDT 발행 수익 + 암호화폐 보유",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giancarlo_Devasini_%28cropped%29.jpg?width=640",
      alt: "Giancarlo Devasini 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "이탈리아 출신의 전직 외과 의사가 암호화폐 업계로 전환해 테더(Tether)의 CFO이자 최대 주주가 되었습니다. USDT 스테이블코인의 글로벌 유통량이 증가할수록 테더의 이자 수익과 준비금 자산이 커지는 구조입니다.",
    coreInsight:
      "스테이블코인 발행사는 사실상의 중앙은행 역할을 하며, USDT 발행량 증가에 따라 준비금 자산에서 발생하는 이자 수익이 막대한 현금 흐름을 창출합니다.",
    signalTags: ["스테이블코인", "USDT", "암호화폐", "테더"],
    milestones: [
      {
        year: "1964",
        title: "이탈리아 출생, 의사 경력",
        body: "이탈리아에서 태어나 의사 자격을 취득하고 외과 의사로 일했으나, 이후 전자상거래와 암호화폐 업계로 전환했습니다.",
        type: "background",
      },
      {
        year: "2013",
        title: "Bitfinex 및 Tether 합류",
        body: "암호화폐 거래소 Bitfinex의 파트너가 되고 테더의 CFO로 합류해 스테이블코인 사업의 핵심 인물이 되었습니다.",
        type: "career",
      },
      {
        year: "2017",
        title: "USDT 발행 급증",
        body: "암호화폐 시장 성장과 함께 USDT 발행량이 폭발적으로 증가하며 테더의 시장 지배력이 확대되었습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "테더 준비금과 수익성 입증",
        body: "미국 국채 등 준비금에서 발생하는 이자 수익이 연간 수십억 달러에 달하며 테더의 수익성이 입증되었습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "스테이블코인 발행 독점",
        detail: "USDT는 암호화폐 시장의 사실상 거래·정산 수단으로 자리잡으며 발행량 증가에 따라 수익도 함께 증가합니다.",
        weight: 92,
      },
      {
        label: "준비금 운용 수익",
        detail: "발행된 USDT에 대응하는 준비금(미국 국채, 현금 등)에서 발생하는 이자 수익이 핵심 수익원입니다.",
        weight: 88,
      },
      {
        label: "규제 회피와 글로벌 운영",
        detail: "역외 규제 환경을 활용하며 전 세계 암호화폐 거래소와의 파트너십을 통해 USDT 유통 채널을 확장했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "Tether 지분",
        detail: "비상장사 테더의 지분 가치가 순자산의 대부분을 차지하며 추정치가 매우 유동적입니다.",
        source: "Private market estimates",
      },
      {
        label: "USDT 발행량",
        detail: "USDT 시가총액과 발행량 증가가 테더의 수익과 기업 가치에 직접적인 영향을 미칩니다.",
        source: "Public market data",
      },
      {
        label: "Bitfinex 거래소 지분",
        detail: "암호화폐 거래소 Bitfinex의 지분 가치도 추가 자산으로 작용합니다.",
        source: "Private market data",
      },
    ],
    sources: [
      {
        name: "Tether transparency reports",
        grade: "report",
        usage: "준비금 구성, 발행량, 감사 현황 확인",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "thomas-peterffy",
    name: "Thomas Peterffy",
    koreanName: "토마스 페터피",
    headline: "전자 거래 시스템 혁신으로 글로벌 중개업의 기준을 바꾼 헝가리 이민자 창업자",
    sector: "금융 · 중개 · 기술",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Interactive Brokers 지분 + 전자 거래 시스템 + 글로벌 중개 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_Peterffy_2016_%28cropped%29.jpg?width=640",
      alt: "Thomas Peterffy 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "헝가리 공산 정권을 피해 미국으로 이민한 엔지니어가 선물 거래 시스템을 개발해 글로벌 전자 중개 플랫폼을 구축했습니다. 인터랙티브 브로커스의 지분 80% 이상을 보유하며 낮은 수수료와 기술 중심의 중개 모델을 운영하고 있습니다.",
    coreInsight:
      "전자 거래 시스템을 직접 개발해 중개 수수료를 극단적으로 낮추는 동시에, 거래량 증가에 따라 수익이 비례하는 구조를 설계했습니다.",
    signalTags: ["전자 거래", "중개", "이민자 창업", "핀테크"],
    milestones: [
      {
        year: "1944",
        title: "헝가리 부다페스트 출생, 미국 이주",
        body: "헝가리에서 태어나 1956년 헝가리 혁명 이후 21세에 미국으로 이주했습니다.",
        type: "background",
      },
      {
        year: "1977",
        title: "최초의 전자 선물 거래 시스템 개발",
        body: "선물 거래를 자동화하는 소프트웨어를 개발해 전자 거래 시대를 열었습니다.",
        type: "venture",
      },
      {
        year: "1993",
        title: "Interactive Brokers 설립",
        body: "자체 개발한 거래 시스템을 기반으로 글로벌 전자 중개 플랫폼을 설립해 기관 및 개인 투자자에게 서비스를 제공했습니다.",
        type: "venture",
      },
      {
        year: "2007",
        title: "Interactive Brokers 상장",
        body: "나스닥 상장을 통해 지분 가치가 공개 시장에서 평가받기 시작했으며, 이후 꾸준한 성장을 이어갔습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "기술 기반 수수료 경쟁력",
        detail: "자체 구축한 거래 인프라를 통해 극도로 낮은 수수료를 제공하며 거래량 중심의 수익 모델을 운영합니다.",
        weight: 92,
      },
      {
        label: "글로벌 시장 접근성",
        detail: "135개 이상의 시장에서 거래 가능한 단일 플랫폼을 제공해 글로벌 투자자를 유치합니다.",
        weight: 86,
      },
      {
        label: "수직 통합 기술 스택",
        detail: "거래 엔진, 리스크 관리, 결제 시스템까지 자체 개발해 외부 의존도를 최소화하고 마진을 극대화했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Interactive Brokers 지분",
        detail: "약 80% 이상의 지분을 보유한 상장사로, 순자산의 대부분을 차지합니다.",
        source: "Company filings",
      },
      {
        label: "거래량 및 고객 자산",
        detail: "일일 거래량과 고객 예치 자산 증가가 중개 수수료와 이자 수익을 결정합니다.",
        source: "Company earnings",
      },
      {
        label: "이자 수익",
        detail: "고객 현금 잔고와 증권 대여에서 발생하는 이자 수익이 추가 수익원입니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Interactive Brokers annual reports",
        grade: "primary",
        usage: "거래량, 수익 구성, 지분 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "julia-koch",
    name: "Julia Koch & family",
    koreanName: "줄리아 코크",
    headline: "코크 인더스트리 상속 3세대, 미국 2위 사모 기업의 지분을 이어받은 여성 상속자",
    sector: "에너지 · 화학 · 인프라",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "Koch Industries 지분 + 미디어 자산 + 자선 재단",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Julia_Koch_2019_%28cropped%29.jpg?width=640",
      alt: "Julia Koch 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "2019년 남편 데이비드 코크 사망 후 코크 인더스트리의 지분 42%를 상속받아 세계 최고 여성 부호 중 한 명이 되었습니다. 코크 인더스트리는 미국 최대 비상장 기업 중 하나로 에너지, 화학, 인프라 등 다양한 사업을 운영하고 있습니다.",
    coreInsight:
      "비상장 기업 지분은 상장 주식보다 유동성이 낮지만, 장기 보유 시 경영권 프리미엄과 배당 효율성에서 이점을 가집니다.",
    signalTags: ["코크", "비상장 기업", "에너지", "상속"],
    milestones: [
      {
        year: "1962",
        title: "미국 아이오와 출생",
        body: "패션 디자이너로 경력을 시작했으며, 1996년 데이비드 코크와 결혼했습니다.",
        type: "background",
      },
      {
        year: "2019",
        title: "데이비드 코크 사망, 지분 상속",
        body: "데이비드 코크 사망 후 코크 인더스트리의 42% 지분을 상속받으며 회사의 주요 주주가 되었습니다.",
        type: "inflection",
      },
      {
        year: "2019",
        title: "이사회 합류",
        body: "코크 인더스트리 이사회에 합류해 비상장 기업의 지배 구조에 참여하기 시작했습니다.",
        type: "career",
      },
      {
        year: "2020s",
        title: "자선 활동 확대와 미디어 투자",
        body: "코크 재단을 통해 교육, 의료, 예술 분야에 자선 활동을 확대하고 뉴욕 부동산 등에 투자했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "비상장 기업 지분 유지",
        detail: "코크 인더스트리는 비상장 상태를 유지하며 장기적인 자본 배분과 경영권 안정성을 확보했습니다.",
        weight: 88,
      },
      {
        label: "자선 재단 운영",
        detail: "코크 재단을 통해 문화, 교육, 의료 분야에 체계적인 자선 활동을 펼치며 세금 효율성을 높였습니다.",
        weight: 78,
      },
      {
        label: "가족 오피스 투자",
        detail: "개인 투자 회사를 통해 부동산, 미디어, 사모펀드 등으로 자산을 다각화했습니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "Koch Industries 지분",
        detail: "비상장 복합 기업의 42% 지분이 순자산의 핵심이며 추정치는 외부 분석에 의존합니다.",
        source: "Private market estimates",
      },
      {
        label: "배당 및 분배금",
        detail: "비상장 기업의 정기적인 이익 분배가 안정적인 현금 흐름을 제공합니다.",
        source: "Media reports",
      },
      {
        label: "개인 투자 포트폴리오",
        detail: "부동산, 미술품, 사모펀드 등으로 구성된 개인 투자 포트폴리오가 추가 자산입니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "Koch Industries disclosures",
        grade: "report",
        usage: "비상장 기업 사업 구조, 수익성 추정",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "charles-koch",
    name: "Charles Koch & family",
    koreanName: "찰스 코크",
    headline: "아버지의 소규모 정유 공장을 미국 최대 비상장 제국으로 키운 경영 전략가",
    sector: "에너지 · 화학 · 인프라",
    region: "미국",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "Koch Industries 지분 + M&A 확장 + 비상장 기업 가치",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Koch_2014_%28cropped%29.jpg?width=640",
      alt: "Charles Koch 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지 프레드 코크가 설립한 정유 회사를 물려받아 공격적인 M&A와 재투자 전략으로 코크 인더스트리를 에너지, 화학, 폴리머, 소비재를 아우르는 거대 비상장 복합 기업으로 성장시켰습니다.",
    coreInsight:
      "비상장 기업의 장점인 단기 실적 압박에서 자유로워 장기적인 자본 배분과 재투자가 가능했고, 이것이 복리 효과의 핵심 동력이 되었습니다.",
    signalTags: ["비상장 기업", "에너지", "M&A", "복리"],
    milestones: [
      {
        year: "1935",
        title: "미국 캔자스 출생",
        body: "프레드 코크의 둘째 아들로 태어나 MIT에서 공학 학사 및 석사 학위를 취득했습니다.",
        type: "background",
      },
      {
        year: "1967",
        title: "Koch Industries 경영 승계",
        body: "아버지 사망 후 형제들과의 경영권 분쟁을 거쳐 코크 인더스트리의 경영권을 확보했습니다.",
        type: "inflection",
      },
      {
        year: "1980s-2000s",
        title: "M&A 기반 확장",
        body: "정유, 화학, 폴리머, 비료, 소비재 등 다양한 산업의 기업을 인수하며 사업 포트폴리오를 대폭 확장했습니다.",
        type: "scale",
      },
      {
        year: "2018",
        title: "형제 지분 매입",
        body: "데이비드 코크 지분을 포함한 형제들의 지분을 정리하며 경영권과 소유권을 안정화했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "비상장 복리 시스템",
        detail: "비상장 기업의 장점을 활용해 단기 이익 분배 대신 장기 재투자를 통해 가치를 복리로 성장시켰습니다.",
        weight: 92,
      },
      {
        label: "M&A를 통한 다각화",
        detail: "에너지에서 출발해 화학, 폴리머, 소비재, 소프트웨어(SAP)까지 다양한 산업의 기업을 인수하며 포트폴리오를 확장했습니다.",
        weight: 88,
      },
      {
        label: "MBM 경영 철학",
        detail: "시장 기반 경영(Market-Based Management) 철학을 도입해 분권화된 의사 결정과 인센티브 시스템을 구축했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Koch Industries 지분",
        detail: "비상장 기업의 지분 가치가 순자산의 거의 전부이며 외부 추정치에 의존합니다.",
        source: "Private market estimates",
      },
      {
        label: "사업 부문 다각화",
        detail: "에너지, 화학, 소비재, 소프트웨어 등 다양한 부문의 현금 흐름이 기업 가치를 지탱합니다.",
        source: "Industry reports",
      },
      {
        label: "자본 재투자",
        detail: "이익의 대부분을 사업 재투자에 사용하며 장기적인 기업 가치 성장을 추구합니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "Koch Industries disclosures",
        grade: "report",
        usage: "사업 구조, 성장 전략 이해",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "zhang-yiming",
    name: "Zhang Yiming",
    koreanName: "장이밍",
    headline: "AI 콘텐츠 추천 기술로 글로벌 소셜 미디어의 패러다임을 바꾼 중국 창업자",
    sector: "기술 · AI · 소셜 미디어",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "ByteDance 지분 + TikTok 글로벌 확장 + AI 추천 기술",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhang_Yiming_2018_%28cropped%29.jpg?width=640",
      alt: "Zhang Yiming 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "중국 소프트웨어 엔지니어가 AI 기반 콘텐츠 추천 기술로 ByteDance를 창업해 Toutiao와 TikTok을 글로벌 플랫폼으로 성장시켰습니다. TikTok의 전 세계적인 인기가 바이트댄스의 기업 가치와 그의 순자산을 급격히 상승시켰습니다.",
    coreInsight:
      "사용자 행동 데이터에 기반한 AI 추천 알고리즘은 참여 시간과 콘텐츠 소비를 극대화하며, 이는 광고 수익으로 직접 연결되는 강력한 비즈니스 모델입니다.",
    signalTags: ["TikTok", "AI 추천", "중국", "글로벌 플랫폼"],
    milestones: [
      {
        year: "1983",
        title: "중국 푸젠성 출생",
        body: "중국 푸젠성에서 태어나 난카이 대학에서 마이크로일렉트로닉스와 소프트웨어 공학을 전공했습니다.",
        type: "background",
      },
      {
        year: "2012",
        title: "ByteDance 창업",
        body: "AI 기반 개인화 콘텐츠 추천 플랫폼인 Toutiao(진르터우탸오)를 개발하기 위해 ByteDance를 창업했습니다.",
        type: "venture",
      },
      {
        year: "2016",
        title: "TikTok 출시와 글로벌 확장",
        body: "짧은 동영상 플랫폼 Douyin(TikTok)을 중국에 출시하고 이듬해 글로벌 버전을 출시하며 폭발적인 성장을 시작했습니다.",
        type: "inflection",
      },
      {
        year: "2021",
        title: "CEO 사임과 전략적 후퇴",
        body: "중국 규제 강화 속에서 CEO직에서 물러났지만, 바이트댄스의 의사 결정에 계속 영향력을 행사하며 지분 가치를 유지했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "AI 추천 알고리즘 우위",
        detail: "사용자 데이터를 기반으로 한 정교한 AI 추천 시스템이 참여 시간을 극대화하고 콘텐츠 소비 패턴을 최적화했습니다.",
        weight: 92,
      },
      {
        label: "글로벌 현지화 전략",
        detail: "각 국가별 콘텐츠 규제와 문화에 맞춘 현지화 전략으로 글로벌 시장에서 빠르게 사용자를 확보했습니다.",
        weight: 87,
      },
      {
        label: "제품 매트릭스 확장",
        detail: "뉴스(Toutiao), 동영상(TikTok), 게임, 교육 등 다양한 콘텐츠 영역으로 제품 라인을 확장했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "ByteDance 지분",
        detail: "비상장 기업 바이트댄스의 약 20% 지분이 순자산의 핵심이며 사모 시장 거래로 가치가 추정됩니다.",
        source: "Private market estimates",
      },
      {
        label: "TikTok 글로벌 가치",
        detail: "TikTok의 사용자 기반과 광고 수익 성장이 바이트댄스 기업 가치의 핵심 동력입니다.",
        source: "Media reports",
      },
      {
        label: "중국 사업 규제 리스크",
        detail: "중국 정부의 플랫폼 규제와 데이터 보안 정책이 기업 가치와 지분 평가에 중요한 변수입니다.",
        source: "Regulatory filings",
      },
    ],
    sources: [
      {
        name: "ByteDance disclosures",
        grade: "report",
        usage: "사용자 데이터, 수익 구조 추정",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "zhong-shanshan",
    name: "Zhong Shanshan",
    koreanName: "중산산",
    headline: "생수 시장의 브랜드 전략가에서 백신·제약으로 영역을 확장한 중국 자수성가형 부호",
    sector: "음료 · 제약",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Nongfu Spring 지분 + Wantai Biological 가치 + 브랜드 마케팅",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhong_Shanshan_2020_%28cropped%29.jpg?width=640",
      alt: "Zhong Shanshan 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "가난한 농민 가정에서 태어나 건설 노동자, 신문 기자 등 다양한 직업을 거친 후 생수 사업으로 성공했습니다. 농푸 스프링의 브랜드 전략과 완타이 바이오로지컬의 상장이 동시에 성공하며 단기간에 막대한 부를 창출했습니다.",
    coreInsight:
      "생수는 원가가 거의 들지 않는 제품을 브랜딩과 유통망으로 프리미엄 가격에 판매하는 대표적인 고마진 비즈니스이며, 여기에 백신 수익이 추가되면서 자산이 급증했습니다.",
    signalTags: ["생수", "브랜드 마케팅", "제약", "중국"],
    milestones: [
      {
        year: "1954",
        title: "중국 저장성 출생",
        body: "가난한 농민 가정에서 태어나 13세에 학교를 중퇴하고 건설 노동자, 신문 기자 등으로 일했습니다.",
        type: "background",
      },
      {
        year: "1996",
        title: "Nongfu Spring 창업",
        body: "자연수 브랜드 '농푸 스프링'을 창업하며 '우리는 물을 만들지 않는다, 자연의 운반자일 뿐이다'라는 카피로 유명해졌습니다.",
        type: "venture",
      },
      {
        year: "2001",
        title: "Wantai Biological 투자",
        body: "의료 진단 및 백신 기업인 완타이 바이오로지컬에 투자하며 제약 산업으로 영역을 확장했습니다.",
        type: "career",
      },
      {
        year: "2020",
        title: "Nongfu Spring IPO와 Wantai 상장",
        body: "농푸 스프링의 홍콩 상장과 완타이의 중국 A주 상장이 동시에 성공하며 순자산이 급격히 증가했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "브랜드 차별화 마케팅",
        detail: "자연수 이미지와 감성적 브랜딩을 통해 차별화된 포지셔닝을 구축하고 프리미엄 가격을 유지했습니다.",
        weight: 90,
      },
      {
        label: "유통 채널 장악",
        detail: "중국 전역의 소매점과 편의점 유통망을 장악해 경쟁사의 시장 진입을 어렵게 만들었습니다.",
        weight: 86,
      },
      {
        label: "백신과 음료의 두 축",
        detail: "안정적인 현금 흐름을 창출하는 음료 사업과 고성장 잠재력이 있는 제약 사업을 동시에 운영합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "Nongfu Spring 지분",
        detail: "약 84%의 지분을 보유한 상장사로, 중국 생수 시장 지배력이 주가의 핵심 요인입니다.",
        source: "Company filings",
      },
      {
        label: "Wantai Biological 지분",
        detail: "약 75% 지분을 보유한 백신 및 진단 기업으로, HPV 백신 수요 증가가 기업 가치를 높였습니다.",
        source: "Company filings",
      },
      {
        label: "배당 수익",
        detail: "농푸 스프링의 높은 배당 성향이 안정적인 현금 흐름을 제공합니다.",
        source: "Company earnings",
      },
    ],
    sources: [
      {
        name: "Nongfu Spring annual reports",
        grade: "primary",
        usage: "매출, 마진, 시장 점유율, 배당 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "jeff-yass",
    name: "Jeff Yass",
    koreanName: "제프 야스",
    headline: "옵션 시장의 마켓 메이커에서 시작해 글로벌 금융과 암호화폐까지 아우르는 트레이딩 제국을 구축한 투자가",
    sector: "금융 · 트레이딩 · 투자",
    region: "미국",
    generation: "Capital allocator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Susquehanna International 지분 + 트레이딩 수익 + 암호화폐 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeff_Yass_2019_%28cropped%29.jpg?width=640",
      alt: "Jeff Yass 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "펜실베이니아 대학 동기들과 함께 창업한 트레이딩 회사를 세계 최대의 옵션 마켓 메이커로 성장시켰습니다. 서스쿼해나 인터내셔널의 지분 외에도 ByteDance 조기 투자, 스포츠 베팅 등으로 투자 포트폴리오를 확장했습니다.",
    coreInsight:
      "옵션 마켓 메이킹은 통계적 우위와 기술 인프라를 기반으로 안정적인 수익을 창출하며, 이 현금을 ByteDance 같은 초기 단계 스타트업에 투자하는 전략이 성공을 가져왔습니다.",
    signalTags: ["옵션 트레이딩", "마켓 메이커", "ByteDance", "스포츠 베팅"],
    milestones: [
      {
        year: "1957",
        title: "미국 뉴욕 출생",
        body: "뉴욕시에서 태어나 펜실베이니아 대학에서 경영학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1987",
        title: "Susquehanna International 창업",
        body: "대학 동기들과 함께 옵션 마켓 메이킹 회사를 창업해 통계적 차익 거래와 리스크 관리 기술을 개발했습니다.",
        type: "venture",
      },
      {
        year: "2010s",
        title: "ByteDance 조기 투자",
        body: "바이트댄스의 초기 단계에 투자해 TikTok의 글로벌 성장에 힘입어 막대한 투자 수익을 실현했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "트레이딩 제국의 확장",
        body: "옵션, 주식, 암호화폐, 스포츠 베팅, 팬데믹 대비 상품 등으로 트레이딩 영역을 지속적으로 확장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "통계적 마켓 메이킹",
        detail: "데이터 분석과 알고리즘 트레이딩을 결합해 옵션 시장에서 안정적인 스프레드 수익을 창출합니다.",
        weight: 91,
      },
      {
        label: "초기 스타트업 투자",
        detail: "트레이딩 수익을 바탕으로 ByteDance 등 초기 단계 기술 기업에 전략적 투자를 단행했습니다.",
        weight: 86,
      },
      {
        label: "규제 차익 거래",
        detail: "글로벌 규제 환경의 차이를 활용해 스포츠 베팅, 암호화폐 등 신규 트레이딩 시장에 선제적으로 진출했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "Susquehanna 지분",
        detail: "파트너십 구조의 비상장 트레이딩 회사 지분이 순자산의 핵심입니다.",
        source: "Private market estimates",
      },
      {
        label: "ByteDance 투자",
        detail: "바이트댄스의 초기 투자 지분이 수십 배로 증가하며 순자산의 큰 축을 차지합니다.",
        source: "Media reports",
      },
      {
        label: "파트너십 분배금",
        detail: "서스쿼해나의 연간 트레이딩 수익 분배가 안정적인 현금 흐름을 제공합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Susquehanna International disclosures",
        grade: "report",
        usage: "트레이딩 전략, 규모 이해",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "dieter-schwarz",
    name: "Dieter Schwarz",
    koreanName: "디터 슈바르츠",
    headline: "할인 유통의 효율성 극대화로 유럽 최대 소매 제국을 세운 독일 유통업자",
    sector: "소매 · 유통",
    region: "독일",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "Schwarz Group 지분 + Lidl/Kaufland 수익 + 유통 효율성",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dieter_Schwarz_2018_%28cropped%29.jpg?width=640",
      alt: "Dieter Schwarz 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지가 설립한 과일 도매상을 물려받아 리들(Lidl)과 카우프란트(Kaufland) 체인으로 확장하며 유럽 최대 할인 유통 그룹을 구축했습니다. 슈바르츠 그룹은 비상장 기업으로 외부에 거의 알려지지 않은 경영 전략으로 운영되고 있습니다.",
    coreInsight:
      "할인 유통의 핵심은 극도로 효율화된 공급망과 재고 관리, 그리고 매장 운영의 표준화로, 이는 경쟁사가 따라올 수 없는 비용 구조의 차이를 만듭니다.",
    signalTags: ["할인 유통", "Lidl", "비상장", "독일"],
    milestones: [
      {
        year: "1939",
        title: "독일 출생",
        body: "독일에서 태어나 아버지 요제프 슈바르츠가 운영하는 과일 도매상에서 일하며 유통업을 배웠습니다.",
        type: "background",
      },
      {
        year: "1973",
        title: "Lidl 첫 매장 오픈",
        body: "기존 과일 도매점을 확장해 첫 번째 Lidl 할인 슈퍼마켓을 독일에서 오픈했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "유럽 전역 확장",
        body: "독일 통일과 유럽 통합을 기회로 삼아 중부·동부 유럽 전역으로 Lidl과 Kaufland 체인을 확장했습니다.",
        type: "scale",
      },
      {
        year: "2000s",
        title: "비상장 기업으로 성장",
        body: "철저한 비공개 경영으로 외부에 재무 정보를 공개하지 않으면서도 유럽 최대 소매 그룹 중 하나로 성장했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "할인 유통 효율성",
        detail: "극소수 SKU, 간소화된 매장 운영, 자체 브랜드 중심의 상품 구성으로 업계 최저 비용 구조를 달성했습니다.",
        weight: 92,
      },
      {
        label: "수직 통합 공급망",
        detail: "물류 센터, 운송, 생산 시설까지 자체 운영하며 공급망의 효율성과 안정성을 극대화했습니다.",
        weight: 88,
      },
      {
        label: "비상장 폐쇄 경영",
        detail: "주식 시장 상장 없이 가족 지분 100%를 유지하며 단기 실적 압박 없이 장기 전략에 집중했습니다.",
        weight: 85,
      },
    ],
    assetDrivers: [
      {
        label: "Schwarz Group 지분",
        detail: "100% 가족 소유 비상장 기업으로, 추정 기업 가치가 순자산의 전부입니다.",
        source: "Private market estimates",
      },
      {
        label: "Lidl 매출 성장",
        detail: "유럽 전역의 할인 슈퍼마켓 체인에서 발생하는 매출과 이익이 기업 가치의 핵심입니다.",
        source: "Industry reports",
      },
      {
        label: "부동산 자산",
        detail: "Lidl과 Kaufland 매장 부지를 직접 소유하며 상당한 부동산 자산 가치를 보유하고 있습니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "Schwarz Group disclosures",
        grade: "report",
        usage: "기업 구조, 유통 전략 이해",
        reliability: "제한적 공개",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "german-larrea",
    name: "German Larrea Mota Velasco & family",
    koreanName: "헤르만 라레아",
    headline: "광산 자산을 위기 때마다 매입해 멕시코 최대 광산 기업을 구축한 자본가",
    sector: "광업 · 인프라",
    region: "멕시코",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "Grupo Mexico 지분 + 광산 자산 + 인프라 독점",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Larrea_2018_%28cropped%29.jpg?width=640",
      alt: "German Larrea 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "멕시코의 경제 위기 시기에 헐값에 매입한 광산 자산을 기반으로 그루포 멕시코를 라틴아메리카 최대 구리 생산 기업으로 성장시켰습니다. 광산 외에도 철도 인프라 독점 사업을 통해 안정적인 현금 흐름을 확보하고 있습니다.",
    coreInsight:
      "구리 가격의 상승 사이클과 광산 자산의 희소성이 결합해 장기적인 자산 가치 상승을 이끌었고, 인프라 독점 사업이 경기 변동에 대한 방어막 역할을 합니다.",
    signalTags: ["광업", "구리", "멕시코", "인프라 독점"],
    milestones: [
      {
        year: "1941",
        title: "멕시코시티 출생",
        body: "멕시코시티에서 태어나 국립 자치 대학에서 회계학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1965",
        title: "아버지 사업 승계",
        body: "아버지가 설립한 광산 및 건설 회사의 경영권을 승계하며 광업 사업에 본격적으로 참여했습니다.",
        type: "career",
      },
      {
        year: "1990s",
        title: "멕시코 경제 위기 속 자산 매입",
        body: "멕시코 경제 위기와 민영화 과정에서 헐가에 매각된 광산 자산과 철도 인프라를 적극적으로 매입했습니다.",
        type: "inflection",
      },
      {
        year: "2007",
        title: "Grupo Mexico 상장과 글로벌 확장",
        body: "그루포 멕시코를 상장시키고 미국 남부 퍼시픽 철도, 페루 광산 등 글로벌 자산을 인수하며 사업을 확장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "위기 자산 매수",
        detail: "멕시코 경제 위기 시기에 정부와 기업들이 헐값에 매각한 광산과 인프라 자산을 집중적으로 매입했습니다.",
        weight: 91,
      },
      {
        label: "구리 생산 집중",
        detail: "라틴아메리카 최대 구리 생산업체로서 구리 가격 상승 사이클의 수혜를 직접적으로 받습니다.",
        weight: 87,
      },
      {
        label: "인프라 독점",
        detail: "멕시코 북서부 철도 노선 독점권을 보유해 광산 외 안정적인 현금 흐름을 확보했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "Grupo Mexico 지분",
        detail: "멕시코 최대 광산·인프라 기업의 지분이 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "구리 가격",
        detail: "글로벌 구리 가격 변동이 광산 부문 수익과 기업 가치에 직접적인 영향을 미칩니다.",
        source: "Public market data",
      },
      {
        label: "철도 독점 수익",
        detail: "멕시코 북서부 철도 노선의 독점적 운영권이 안정적인 인프라 수익을 창출합니다.",
        source: "Company earnings",
      },
    ],
    sources: [
      {
        name: "Grupo Mexico annual reports",
        grade: "primary",
        usage: "광산 생산량, 매출, 철도 수익 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "gautam-adani",
    name: "Gautam Adani",
    koreanName: "가우탐 아다니",
    headline: "인프라에서 신재생 에너지까지, 인도 성장을 자산으로 연결한 사업가",
    sector: "인프라 · 에너지 · 복합기업",
    region: "인도",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 계열사 지분 + 인프라 자산 + 에너지 전환 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gautam_Adani_2020_%28cropped%29.jpg?width=640",
      alt: "Gautam Adani 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "인도 구자라트 주에서 출발한 사업가가 항만, 에너지, 인프라, 미디어, 신재생 에너지에 이르는 복합기업을 구축하며 인도 경제 성장의 흐름을 자산 가치로 연결한 사례입니다.",
    coreInsight:
      "인도 정부의 인프라 투자 확대와 에너지 전환 정책이 아다니 그룹의 모든 사업 부문에 동시에 긍정적 영향을 주는 구조를 만들었습니다.",
    signalTags: ["인프라", "에너지 전환", "인도 성장", "복합기업"],
    milestones: [
      {
        year: "1962",
        title: "인도 구자라트 주 출생",
        body: "면직물 상인 가정의 8남매 중 하나로 태어나 대학을 중퇴하고 뭄바이로 건너가 다이아몬드 중개인으로 커리어를 시작했습니다.",
        type: "background",
      },
      {
        year: "1988",
        title: "Adani Enterprises 설립",
        body: "원자재 무역 회사로 시작해 점차 항만, 물류, 전력, 자원 개발로 사업 영역을 확장했습니다.",
        type: "venture",
      },
      {
        year: "1995",
        title: "민자 항만 운영권 획득",
        body: "구자라트 주 문드라 항만의 민자 운영권을 확보하며 인프라 사업의 핵심 경쟁력을 구축했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "재생 에너지와 디지털 전환 투자",
        body: "세계 최대 재생 에너지 단지 건설, 그린 수소, 데이터센터, 미디어로 사업을 확장하며 인도 성장 테마를 대표하는 기업가로 부상했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "인프라 레버리지",
        detail: "항만, 전력, 물류 등 핵심 인프라 자산을 선점해 후발 경쟁사의 진입 장벽을 높였습니다.",
        weight: 91,
      },
      {
        label: "정책 연계 성장",
        detail: "인도 정부의 인프라·에너지 정책 방향에 맞춰 사업을 확장하며 규제 리스크를 최소화했습니다.",
        weight: 86,
      },
      {
        label: "수직 계열 확장",
        detail: "무역에서 출발해 항만, 물류, 전력, 재생 에너지로 수직 계열을 확장하며 그룹 내 시너지를 극대화했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "상장 계열사 지분",
        detail: "Adani Enterprises, Adani Ports, Adani Green Energy 등 상장 계열사 지분 가치가 순자산의 중심입니다.",
        source: "Company filings",
      },
      {
        label: "인프라 자산 가치",
        detail: "항만, 공항, 데이터센터 등 실물 인프라 자산의 장기 가치 상승이 자산 기반을 강화합니다.",
        source: "Company reports",
      },
      {
        label: "에너지 전환 투자",
        detail: "재생 에너지와 그린 수소에 대한 조기 투자가 미래 기업 가치의 중요한 축입니다.",
        source: "Company reports and industry analysis",
      },
    ],
    sources: [
      {
        name: "Adani Group annual reports",
        grade: "primary",
        usage: "계열사별 실적, 지분 구조, 자본 지출 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "인수 및 규제 관련 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "tadashi-yanai",
    name: "Tadashi Yanai & family",
    koreanName: "야나이 다다시 일가",
    headline: "패스트 패션의 본질을 가격과 품질의 균형으로 재정의한 창업자",
    sector: "패션 · 소매",
    region: "일본",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Fast Retailing 지분 + 글로벌 소매 확장 + 브랜드 가치",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tadashi_Yanai_%28cropped%29.jpg?width=640",
      alt: "Tadashi Yanai 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지의 남성복 가게를 물려받아 글로벌 패션 브랜드 유니클로로 키우고, 'LifeWear'라는 새로운 패션 카테고리를 창조한 사례입니다.",
    coreInsight:
      "기본 아이템의 품질과 가격 혁신에 집중하고, 글로벌 공급망과 기술력을 결합해 패스트 패션과 프리미엄의 경계를 허물었습니다.",
    signalTags: ["패스트 패션", "유니클로", "공급망 혁신", "일본 소매"],
    milestones: [
      {
        year: "1949",
        title: "일본 야마구치 출생",
        body: "아버지가 운영하는 남성복 소매점에서 성장하며 소매업의 기초를 배웠고, 와세다 대학에서 경제학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1984",
        title: "유니클로 1호점 오픈",
        body: "히로시마에 첫 유니클로 매장을 열고 캐주얼 의류의 가격 혁신을 통해 일본 소비자의 니즈를 공략했습니다.",
        type: "venture",
      },
      {
        year: "1998",
        title: "플리스 열풍과 브랜드 전환점",
        body: "저렴한 플리스 재킷이 일본에서 대히트를 치며 유니클로의 브랜드 인지도가 폭발적으로 상승했습니다.",
        type: "inflection",
      },
      {
        year: "2000s-2020s",
        title: "글로벌 확장과 LifeWear 전략",
        body: "중국, 동남아, 유럽, 미국으로 매장을 확장하며 'LifeWear' 콘셉트를 통해 기술과 패션을 결합한 글로벌 브랜드로 자리 잡았습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "SPA 모델 수직 통합",
        detail: "기획, 디자인, 생산, 유통을 직접 통제하는 SPA(제조·소매 일괄) 모델로 비용과 품질을 동시에 관리했습니다.",
        weight: 92,
      },
      {
        label: "기본 아이템 집중",
        detail: "트렌드 중심이 아닌 누구나 입을 수 있는 기본 아이템에 집중해 재고 리스크를 줄이고 글로벌 확장성을 확보했습니다.",
        weight: 87,
      },
      {
        label: "기술 기반 소재 혁신",
        detail: "히트텍, 에어리즘 등 기능성 소재를 자체 개발해 패션에서 기술 브랜드로의 포지셔닝을 강화했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "Fast Retailing 지분",
        detail: "상장 지분 가치가 순자산의 핵심이며 야나이 개인이 약 20% 이상의 지분을 보유하고 있습니다.",
        source: "Company filings",
      },
      {
        label: "글로벌 매장 확장",
        detail: "중국과 동남아를 중심으로 한 해외 매장 확대가 매출 성장과 기업 가치의 주요 동력입니다.",
        source: "Company earnings",
      },
      {
        label: "배당 수익",
        detail: "안정적인 배당 정책이 장기 보유 지분의 현금 흐름을 창출합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Fast Retailing annual reports",
        grade: "primary",
        usage: "매출, 점포 수, 지역별 실적, 공급망 데이터 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "ma-huateng",
    name: "Ma Huateng",
    koreanName: "마화텅",
    headline: "소셜 플랫폼과 게임 생태계로 중국 디지털 경제를 이끄는 창업자",
    sector: "기술 · 게임 · 소셜 플랫폼",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Tencent 지분 + 게임·광고 수익 + 투자 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ma_Huateng_%28cropped%29.jpg?width=640",
      alt: "Ma Huateng 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "중국 최대 소셜 플랫폼 위챗과 QQ를 기반으로 게임, 광고, 클라우드, 핀테크로 사업을 확장하며 중국 디지털 경제의 인프라를 구축한 사례입니다.",
    coreInsight:
      "메신저 플랫폼이 단순한 소통 도구를 넘어 결제, 게임, 광고, 미니 프로그램까지 아우르는 슈퍼 앱으로 진화하며 자산 가치가 기하급수적으로 성장했습니다.",
    signalTags: ["위챗", "게임", "소셜 플랫폼", "중국 기술"],
    milestones: [
      {
        year: "1971",
        title: "중국 광둥성 출생",
        body: "선전에서 성장하며 컴퓨터 공학에 관심을 가졌고, 선전 대학에서 컴퓨터 과학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1998",
        title: "Tencent 공동 창업",
        body: "5명의 공동 창업자와 함께 Tencent를 설립하고 인터넷 메신저 서비스 OICQ(후일 QQ)를 출시했습니다.",
        type: "venture",
      },
      {
        year: "2011",
        title: "위챗(WeChat) 출시",
        body: "모바일 메신저 위챗을 출시해 10억 이상의 사용자를 확보하며 중국 디지털 생태계의 중심 플랫폼으로 자리 잡았습니다.",
        type: "inflection",
      },
      {
        year: "2010s-2020s",
        title: "게임·광고·핀테크 생태계 확장",
        body: "리그 오브 레전드, PUBG 등 글로벌 게임 지분 투자와 위챗 페이, 클라우드, 광고 사업을 통해 수익 구조를 다각화했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "슈퍼 앱 플랫폼",
        detail: "위챗을 단순 메신저가 아니라 결제, 쇼핑, 게임, 미니 프로그램을 모두 포함하는 플랫폼으로 진화시켰습니다.",
        weight: 92,
      },
      {
        label: "글로벌 게임 지분 투자",
        detail: "Riot Games, Epic Games, Supercell 등 글로벌 게임사에 전략적 지분 투자를 통해 게임 사업을 글로벌로 확장했습니다.",
        weight: 85,
      },
      {
        label: "데이터 기반 광고",
        detail: "위챗과 QQ의 방대한 사용자 데이터를 기반으로 타겟 광고 플랫폼을 구축해 광고 수익을 극대화했습니다.",
        weight: 79,
      },
    ],
    assetDrivers: [
      {
        label: "Tencent 지분",
        detail: "상장 지분 가치가 순자산의 대부분이며 마화텅이 약 8%의 지분을 보유하고 있습니다.",
        source: "Company filings",
      },
      {
        label: "게임 및 콘텐츠 수익",
        detail: "글로벌 게임 시장 지배력과 위챗 미니 프로그램 생태계가 Tencent의 핵심 수익 기반입니다.",
        source: "Company earnings",
      },
      {
        label: "투자 포트폴리오 가치",
        detail: "중국 및 글로벌 스타트업에 대한 광범위한 투자 포트폴리오가 부의 다각화에 기여합니다.",
        source: "Public market and private data",
      },
    ],
    sources: [
      {
        name: "Tencent annual reports",
        grade: "primary",
        usage: "사업 부문별 실적, 사용자 지표, 투자 내역 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "중국 규제 정책 및 시장 변동 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "robin-zeng",
    name: "Robin Zeng",
    koreanName: "로빈 쩡",
    headline: "배터리 기술과 제조 규모로 글로벌 에너지 전환을 선도하는 창업자",
    sector: "에너지 · 배터리 · 전기차",
    region: "홍콩",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "CATL 지분 + 배터리 제조 규모 + 글로벌 공급망 계약",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Zeng_Yuqun_2019_%28cropped%29.jpg?width=640",
      alt: "Robin Zeng 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "홍콩에서 시작한 전자 부품 유통 사업이 배터리 기술 혁신을 통해 글로벌 전기차 배터리 시장을 선도하는 기업으로 성장한 사례입니다.",
    coreInsight:
      "LFP(리튬인산철) 배터리의 기술적 한계를 극복하고 규모의 경제를 달성해, 글로벌 완성차 업체들의 필수 공급사로 자리 잡았습니다.",
    signalTags: ["배터리", "전기차", "에너지 전환", "제조 규모"],
    milestones: [
      {
        year: "1968",
        title: "중국 푸젠성 출생",
        body: "중국 푸젠성에서 태어나 화학과 물리학에 깊은 관심을 가지고 중산 대학에서 응용 화학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1999",
        title: "ATL(Amperex Technology) 공동 창업",
        body: "휴대폰 리튬이온 배터리 회사를 창업해 노트북, 휴대폰 배터리 시장에서 기술력을 입증했습니다.",
        type: "venture",
      },
      {
        year: "2011",
        title: "CATL 분사 설립",
        body: "ATL의 전기차 배터리 부문을 CATL(Contemporary Amperex Technology)로 분사해 전기차 배터리 시장에 집중했습니다.",
        type: "inflection",
      },
      {
        year: "2018-2020s",
        title: "글로벌 배터리 시장 지배력 확보",
        body: "상장 후 BMW, Tesla, Mercedes-Benz 등 글로벌 완성차 업체와 대규모 공급 계약을 체결하며 세계 1위 배터리 제조사로 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "기술 리더십과 LFP 혁신",
        detail: "LFP 배터리의 에너지 밀도와 안전성을 혁신해 기존 삼원계 배터리의 시장을 대체했습니다.",
        weight: 90,
      },
      {
        label: "초대규모 제조 역량",
        detail: "세계 최대 규모의 배터리 생산 시설을 구축해 단가 경쟁력과 공급 안정성을 동시에 확보했습니다.",
        weight: 88,
      },
      {
        label: "글로벌 완성차 파트너십",
        detail: "Tesla, BMW, Mercedes-Benz 등 주요 완성차 업체와 장기 공급 계약을 체결해 안정적인 수익 기반을 구축했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "CATL 지분",
        detail: "상장 지분 가치가 순자산의 핵심이며 글로벌 배터리 시장 성장에 직접 연동됩니다.",
        source: "Company filings",
      },
      {
        label: "배터리 공급 계약",
        detail: "글로벌 완성차 업체와의 장기 공급 계약이 미래 매출의 가시성을 높입니다.",
        source: "Company filings and press releases",
      },
      {
        label: "기술 라이선스와 R&D",
        detail: "배터리 셀 기술과 제조 공정 혁신이 장기 경쟁력과 마진을 결정합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "CATL annual reports",
        grade: "primary",
        usage: "매출, 생산 능력, 고객사, 기술 개발 현황 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Industry analysis reports",
        grade: "report",
        usage: "배터리 시장 점유율 및 기술 트렌드 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "iris-fontbona",
    name: "Iris Fontbona & family",
    koreanName: "이리스 폰트보나 일가",
    headline: "칠레 광업 제국의 상속자, 글로벌 자원 수요와 가족 지분의 복리 효과",
    sector: "광업 · 자원",
    region: "칠레",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "Antofagasta 지분 + 구리 가격 상승 + 가족 지배 구조",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Iris_Fontbona_%28cropped%29.jpg?width=640",
      alt: "Iris Fontbona 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "칠레의 광산 재벌 안드로니코 룩시치의 사망 후 상속받은 구리 광산 지분을 기반으로 글로벌 자원 수요와 연결해 가족의 부를 유지·확장한 사례입니다.",
    coreInsight:
      "전기차와 재생 에너지 인프라 수요가 구리 가격을 지지하는 구조적 흐름 속에서, 가족 지분 장기 보유가 자산 가치의 복리 효과를 만들어냅니다.",
    signalTags: ["광업", "구리", "상속", "자원 수요"],
    milestones: [
      {
        year: "1940s",
        title: "칠레 출생, 가정 배경",
        body: "칠레에서 태어나 사업가 안드로니코 룩시치와 결혼하며 광업 제국에 연결되었습니다.",
        type: "background",
      },
      {
        year: "2005",
        title: "안드로니코 룩시치 사망과 상속",
        body: "남편 사망 후 Antofagasta PLC의 지분을 비롯한 광산 자산을 상속받아 가족 재산의 관리자가 되었습니다.",
        type: "wealth",
      },
      {
        year: "2010s",
        title: "구리 가격 상승과 부의 확대",
        body: "중국의 산업화와 인프라 투자로 구리 수요가 급증하면서 Antofagasta의 기업 가치와 가족 자산이 크게 증가했습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "전기차·재생 에너지 수요와 구리",
        body: "탄소 중립 전환 과정에서 구리의 중요성이 재조명되며 자산 가치가 추가로 상승했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "장기 보유 가족 지분",
        detail: "Antofagasta의 지배 지분을 매각 없이 장기 보유하며 구리 가격 상승의 수혜를 온전히 누렸습니다.",
        weight: 90,
      },
      {
        label: "광산 자산 개발",
        detail: "칠레와 페루의 기존 광산을 확장하고 신규 광산을 개발해 생산량을 지속적으로 늘렸습니다.",
        weight: 85,
      },
      {
        label: "자원 수요 구조적 대응",
        detail: "전기차, 신재생 에너지, 전력 인프라 등 구리 수요 산업의 장기 성장 테마에 맞춰 투자와 생산 계획을 수립했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "Antofagasta 지분",
        detail: "런던 증시 상장사 Antofagasta PLC의 지분 가치가 순자산의 중심입니다.",
        source: "Company filings",
      },
      {
        label: "구리 가격",
        detail: "국제 구리 가격 변동이 기업 수익과 지분 가치에 직접적인 영향을 미칩니다.",
        source: "Commodity market data",
      },
      {
        label: "광산 생산량",
        detail: "칠레와 페루 광산의 생산 능력과 운영 효율성이 실적과 배당 규모를 결정합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Antofagasta annual reports",
        grade: "primary",
        usage: "생산량, 코스트, 자본 지출, 배당 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "masayoshi-son",
    name: "Masayoshi Son",
    koreanName: "손정의",
    headline: "기술 투자와 비전 펀드로 글로벌 스타트업 생태계를 움직이는 자본가",
    sector: "기술 투자 · 통신 · AI",
    region: "일본",
    generation: "Capital allocator",
    rankLabel: "Top wealth cohort",
    wealthModel: "SoftBank 지분 + Vision Fund 운용 + 글로벌 기술 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Masayoshi_Son_2023_%28cropped%29.jpg?width=640",
      alt: "Masayoshi Son 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "일본에서 태어난 한국계 기업가가 소프트웨어 유통에서 출발해 통신, 인터넷, AI 투자로 영역을 넓히며 글로벌 기술 자본 시장의 핵심 플레이어가 된 사례입니다.",
    coreInsight:
      "거대한 자본(Vision Fund)과 장기 비전의 결합은 대규모 수익을 창출할 수 있지만, 레버리지가 높은 투자 구조는 변동성을 크게 만듭니다.",
    signalTags: ["기술 투자", "비전 펀드", "AI", "통신"],
    milestones: [
      {
        year: "1957",
        title: "일본 사가현 출생, 한국계 배경",
        body: "재일 한국인 2세로 태어나 어린 시절부터 사업가 정신을 키웠고, 미국 캘리포니아 대학교 버클리에서 경제학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1981",
        title: "SoftBank 창업",
        body: "소프트웨어 유통 회사로 시작해 PC 소프트웨어, 인터넷, 통신 분야로 사업을 확장했습니다.",
        type: "venture",
      },
      {
        year: "2000",
        title: "Alibaba 초기 투자 성공",
        body: "당시 신생 기업이었던 알리바바에 2,000만 달러를 투자해 2014년 기업공개 당시 약 600억 달러의 가치로 성장했습니다.",
        type: "inflection",
      },
      {
        year: "2017",
        title: "Vision Fund 출범",
        body: "1,000억 달러 규모의 Vision Fund을 조성해 AI, 자율주행, 로보틱스 등 미래 기술 스타트업에 대규모 투자를 단행했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "대규모 자본 집중 투자",
        detail: "1,000억 달러 규모의 Vision Fund을 통해 AI와 기술 스타트업에 대규모 자본을 집중 투자합니다.",
        weight: 90,
      },
      {
        label: "포트폴리오 시너지 창출",
        detail: "투자 기업 간의 협업과 시너지를 유도해 포트폴리오 전체의 가치를 높이는 전략을 구사합니다.",
        weight: 82,
      },
      {
        label: "레버리지 활용",
        detail: "SoftBank의 상장 지분과 자산을 담보로 대규모 투자 자금을 조달하며 레버리지를 극대화합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "SoftBank 지분",
        detail: "SoftBank Group의 상장 지분과 비상장 투자 자산을 포함한 NAV가 순자산의 기준입니다.",
        source: "Company filings",
      },
      {
        label: "Vision Fund 포트폴리오",
        detail: "AI, 자율주행, 로보틱스 등 비상장 기술 기업의 평가가치가 순자산 변동성의 주요 원인입니다.",
        source: "Private market estimates",
      },
      {
        label: "Arm Holdings 지분",
        detail: "반도체 설계 기업 Arm의 지분 가치가 SoftBank의 핵심 자산 중 하나로 부상했습니다.",
        source: "Company filings",
      },
    ],
    sources: [
      {
        name: "SoftBank annual reports",
        grade: "primary",
        usage: "NAV, 부채 구조, 포트폴리오 평가 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "ken-griffin",
    name: "Ken Griffin",
    koreanName: "켄 그리핀",
    headline: "퀀트 트레이딩과 멀티스트래티지 헤지펀드로 금융 시장을 분석한 투자자",
    sector: "투자 · 헤지펀드 · 금융",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "Citadel 펀드 수익 + Citadel Securities 시장 점유율 + 운용 보수",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ken_Griffin_2024_%28cropped%29.jpg?width=640",
      alt: "Ken Griffin 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "대학 기숙사에서 시작한 채권 트레이딩이 세계 최대 헤지펀드 중 하나로 성장하며, 시장 중립 전략과 기술 기반 시장 조성(Market Making)으로 막대한 수익을 창출한 사례입니다.",
    coreInsight:
      "헤지펀드(Citadel)와 시장 조성 사업(Citadel Securities)의 이중 구조가 리스크 헤지와 안정적 수익 창출을 동시에 가능하게 했습니다.",
    signalTags: ["헤지펀드", "퀀트 트레이딩", "시장 조성", "멀티스트래티지"],
    milestones: [
      {
        year: "1969",
        title: "미국 플로리다 출생",
        body: "플로리다에서 태어나 하버드 대학에서 경제학과 컴퓨터 과학을 공부하며 퀀트 트레이딩에 관심을 갖기 시작했습니다.",
        type: "background",
      },
      {
        year: "1990",
        title: "Citadel 설립",
        body: "대학 기숙사에서 전환사채 트레이딩으로 시작한 자금을 바탕으로 헤지펀드 Citadel을 설립했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "멀티스트래티지 체제 구축",
        body: "단일 전략에서 벗어나 주식, 채권, 통화, 파생상품, 퀀트를 아우르는 멀티스트래티지 펀드 구조를 완성했습니다.",
        type: "inflection",
      },
      {
        year: "2010s-2020s",
        title: "Citadel Securities와 시장 지배력",
        body: "Citadel Securities가 미국 주식 시장 조성의 약 25%를 차지하며 막대한 수익을 창출하고, 두 회사 모두 글로벌 금융 시장의 핵심 플레이어로 자리 잡았습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "멀티스트래티지 리스크 관리",
        detail: "수십 개의 독립적인 트레이딩 팀이 다양한 전략과 자산군에서 운용되며 리스크를 분산합니다.",
        weight: 91,
      },
      {
        label: "기술 기반 시장 조성",
        detail: "Citadel Securities는 초저지연 트레이딩 인프라를 통해 시장 조성 부문에서 압도적인 점유율을 차지합니다.",
        weight: 87,
      },
      {
        label: "인재 중심 운용",
        detail: "최고의 트레이더와 퀀트를 높은 보상으로 유치하며 경쟁사 대비 우위를 유지합니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "Citadel 운용 수익",
        detail: "펀드 운용 수익률과 성과 보수가 켄 그리핀 개인 자산의 핵심 원천입니다.",
        source: "Fund reports",
      },
      {
        label: "Citadel Securities 시장 점유율",
        detail: "미국 주식 및 옵션 시장 조성 부문의 점유율이 회사 가치와 개인 자산에 직접 영향을 줍니다.",
        source: "Industry data and SEC filings",
      },
      {
        label: "개인 투자 포트폴리오",
        detail: "부동산, 미술품, 기술 스타트업 등 개인 자산이 부의 다각화에 기여합니다.",
        source: "Private market and media reports",
      },
    ],
    sources: [
      {
        name: "SEC filings",
        grade: "primary",
        usage: "펀드 포트폴리오, 13F 공시, 운용 규모 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "운용 전략, 인력 이동, 시장 점유율 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "jacqueline-mars",
    name: "Jacqueline Mars",
    koreanName: "재클린 마스",
    headline: "글로벌 식품·펫케어 제국의 상속자, 브랜드 포트폴리오와 가족 지배 구조의 수혜자",
    sector: "식품 · 펫케어 · 소비재",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "Mars Inc 비상장 지분 + 배당 수익 + 브랜드 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jacqueline_Mars_2024_%28cropped%29.jpg?width=640",
      alt: "Jacqueline Mars 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "포레스트 마스의 딸로 태어나 M&M's, 스니커즈, 페디그리, 로열캐닌 등 글로벌 브랜드를 보유한 Mars Inc의 주요 주주로서 비상장 가족 기업의 장기 가치를 누리는 사례입니다.",
    coreInsight:
      "비상장 가족 기업이기 때문에 단기 실적 압박 없이 장기 브랜드 투자와 사업 확장이 가능하며, 이는 지분 가치의 복리 성장으로 이어집니다.",
    signalTags: ["Mars Inc", "식품", "펫케어", "비상장 가족 기업"],
    milestones: [
      {
        year: "1939",
        title: "미국 출생",
        body: "포레스트 마스와 오드리 마스의 딸로 태어나 마스 가문의 사업 환경에서 성장했습니다.",
        type: "background",
      },
      {
        year: "1970s-1980s",
        title: "Mars Inc 경영 참여",
        body: "형제들과 함께 Mars Inc의 경영에 참여하며 글로벌 제과 및 펫케어 브랜드 포트폴리오 확장에 기여했습니다.",
        type: "career",
      },
      {
        year: "1990s-2000s",
        title: "Mars Inc의 글로벌 확장",
        body: "Mars Inc는 글로벌 브랜드 인수와 신제품 개발을 통해 매출과 시장 점유율을 지속적으로 확대했습니다.",
        type: "scale",
      },
      {
        year: "2008",
        title: "Mars Inc의 Wrigley 인수",
        body: "Mars Inc가 추잉검 브랜드 Wrigley를 230억 달러에 인수하며 글로벌 제과 시장 지배력을 더욱 강화했습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "비상장 가족 지분 구조",
        detail: "Mars Inc는 비상장 가족 기업으로서 단기 실적 압박 없이 장기적인 브랜드 투자와 R&D에 집중할 수 있습니다.",
        weight: 90,
      },
      {
        label: "브랜드 포트폴리오 다각화",
        detail: "제과, 펫푸드, 펫케어, 음료 등 다양한 소비재 카테고리에 걸쳐 브랜드를 보유하며 리스크를 분산합니다.",
        weight: 85,
      },
      {
        label: "글로벌 유통망",
        detail: "전 세계 80개국 이상에 제품을 유통하는 글로벌 네트워크가 브랜드 가치를 지탱합니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "Mars Inc 비상장 지분",
        detail: "비상장 기업이지만 안정적인 현금 흐름과 브랜드 가치에 기반해 높은 지분 가치를 유지합니다.",
        source: "Industry estimates",
      },
      {
        label: "브랜드 자산 가치",
        detail: "M&M's, 스니커즈, 페디그리 등 글로벌 브랜드의 가치가 지분 가치의 핵심입니다.",
        source: "Industry reports",
      },
      {
        label: "배당 수익",
        detail: "Mars Inc의 안정적인 배당 정책이 상속자들에게 꾸준한 현금 흐름을 제공합니다.",
        source: "Media reports",
      },
    ],
    sources: [
      {
        name: "Industry analysis reports",
        grade: "report",
        usage: "Mars Inc 사업 현황 및 시장 점유율 추정",
        reliability: "보조 출처",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "인수, 브랜드 전략, 가족 경영 관련 뉴스 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "john-mars",
    name: "John Mars",
    koreanName: "존 마스",
    headline: "Mars Inc의 2세대 상속자, 비상장 가족 기업의 지분 가치를 극대화한 사례",
    sector: "식품 · 펫케어 · 소비재",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "Mars Inc 비상장 지분 + 배당 수익 + 브랜드 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Forrest_Mars_Jr_%28cropped%29.jpg?width=640",
      alt: "John Mars 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "포레스트 마스의 아들로 태어나 형제자매와 함께 Mars Inc의 지배 지분을 보유하며, 글로벌 제과 및 펫케어 시장에서 비상장 가족 기업의 장기적 가치 성장을 누린 사례입니다.",
    coreInsight:
      "비상장 가족 기업은 공개 시장의 단기 압박에서 자유로워 장기적인 브랜드 투자와 인수 전략을 펼칠 수 있으며, 이는 지분 가치의 지속적 상승으로 이어집니다.",
    signalTags: ["Mars Inc", "비상장 기업", "가족 경영", "식품 산업"],
    milestones: [
      {
        year: "1935",
        title: "미국 출생",
        body: "포레스트 마스 시니어의 아들로 태어나 마스 가문의 전통과 사업 철학을 물려받았습니다.",
        type: "background",
      },
      {
        year: "1960s-1980s",
        title: "Mars Inc 경영 참여와 확장",
        body: "형제들과 함께 Mars Inc의 경영에 참여하며 제과, 펫푸드, 음료 등 다양한 분야로 사업을 확장했습니다.",
        type: "career",
      },
      {
        year: "1990s",
        title: "Mars Inc의 글로벌 펫케어 시장 진출",
        body: "페디그리, 휘스커스, 로열캐닌 등 펫케어 브랜드 인수와 육성을 통해 글로벌 펫푸드 시장 1위로 도약했습니다.",
        type: "scale",
      },
      {
        year: "2008",
        title: "Wrigley 인수와 제과 시장 지배력",
        body: "Mars Inc가 Wrigley를 인수해 글로벌 제과 시장에서 Mars, Wrigley의 강력한 브랜드 포트폴리오를 구축했습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "비상장 가족 기업 장기 전략",
        detail: "공개 시장의 분기 실적 압박 없이 장기적인 R&D, 브랜드 구축, 인수에 집중할 수 있는 구조를 유지합니다.",
        weight: 90,
      },
      {
        label: "카테고리 다각화",
        detail: "제과, 펫푸드, 펫케어, 음료, 라이스 등 다양한 소비재 카테고리에서 브랜드를 운영하며 안정적인 수익 기반을 확보했습니다.",
        weight: 84,
      },
      {
        label: "글로벌 브랜드 파워",
        detail: "M&M's, 스니커즈, 페디그리 등 세계적 브랜드의 글로벌 유통망과 마케팅 역량이 핵심 경쟁력입니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "Mars Inc 비상장 지분",
        detail: "비상장 기업의 안정적 현금 흐름과 브랜드 자산이 지분 가치의 핵심입니다.",
        source: "Industry estimates",
      },
      {
        label: "펫케어 시장 성장",
        detail: "반려동물 소비 증가와 프리미엄 펫푸드 수요가 Mars Inc의 펫케어 부문 가치를 높이고 있습니다.",
        source: "Industry analysis",
      },
      {
        label: "글로벌 제과 시장 지배력",
        detail: "Mars와 Wrigley 브랜드의 글로벌 시장 점유율이 안정적인 매출 기반을 제공합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Industry analysis reports",
        grade: "report",
        usage: "Mars Inc 사업 현황 및 브랜드 포트폴리오 추정",
        reliability: "보조 출처",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "인수, 경영 구조, 시장 전략 관련 뉴스 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "lukas-walton",
    name: "Lukas Walton",
    koreanName: "루카스 월튼",
    headline: "월마트 창업자 혈통의 3세대 상속자, 가족 지분과 ESG 투자로 부의 확장을 도모",
    sector: "소매 · 유통",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "월마트 상속 지분 + 지속가능 투자 + 가족 지배 구조",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sam_Walton_Portrait.jpg?width=640",
      alt: "Lukas Walton 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "월마트 창업자 샘 월튼의 손자이자 존 월튼의 아들로 태어나 상속받은 월마트 지분을 기반으로 환경·지속가능성 투자에 주력하며 3세대 부의 확장을 시도하는 사례입니다.",
    coreInsight:
      "가족 기업의 상속 지분이 단순한 소비 재원이 아니라 장기 자본으로 기능하며, 3세대는 이를 지속가능성 임팩트 투자와 연결해 부의 의미를 재정의하고 있습니다.",
    signalTags: ["월마트", "상속", "ESG 투자", "가족 지분"],
    milestones: [
      {
        year: "1986",
        title: "미국 출생",
        body: "존 월튼(샘 월튼의 둘째 아들)의 아들로 태어나 월튼 가문의 유산을 물려받았습니다.",
        type: "background",
      },
      {
        year: "2005",
        title: "아버지 존 월튼 사망과 상속",
        body: "아버지가 비행기 사고로 사망하며 월마트 지분을 상속받아 월튼 가문의 주요 주주로 부상했습니다.",
        type: "wealth",
      },
      {
        year: "2010s",
        title: "지속가능 투자와 임팩트 펀드",
        body: "환경·지속가능성에 중점을 둔 투자 펀드와 비영리 활동을 통해 기후 변화와 재생 에너지 분야에 자본을 배분하기 시작했습니다.",
        type: "career",
      },
      {
        year: "2020s",
        title: "가족 지분의 안정적 가치 유지",
        body: "월마트의 안정적인 실적과 배당 정책, 그리고 50%에 가까운 가족 지분율이 장기적인 자산 가치를 지탱하고 있습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "월마트 지분 장기 보유",
        detail: "월튼 가족의 대주주 지위를 유지하며 월마트의 장기 성장과 배당 수익을 통해 자산 가치를 유지합니다.",
        weight: 88,
      },
      {
        label: "ESG·임팩트 투자",
        detail: "기후 변화, 재생 에너지, 지속가능 농업 등 임팩트 투자에 집중하며 새로운 투자 영역을 개척하고 있습니다.",
        weight: 82,
      },
      {
        label: "다각화된 개인 포트폴리오",
        detail: "월마트 지분 외에도 지속가능 투자, 비영리 활동을 통해 자산을 다각화하고 영향력을 확대합니다.",
        weight: 72,
      },
    ],
    assetDrivers: [
      {
        label: "월마트 상속 지분",
        detail: "월마트의 상장 지분 가치가 순자산의 대부분을 차지하며, 가족 지분 약 50%의 일부를 보유합니다.",
        source: "Company filings",
      },
      {
        label: "월마트 배당 수익",
        detail: "안정적인 배당 정책이 매년 꾸준한 현금 흐름을 창출합니다.",
        source: "Company reports",
      },
      {
        label: "개인 투자 수익",
        detail: "ESG·지속가능 펀드와 개인 투자 포트폴리오의 수익이 부의 다각화에 기여합니다.",
        source: "Private market and media reports",
      },
    ],
    sources: [
      {
        name: "Walmart annual reports",
        grade: "primary",
        usage: "실적, 배당, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "상속 구조, 투자 활동, 가족 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "giovanni-ferrero",
    name: "Giovanni Ferrero",
    koreanName: "조반니 페레로",
    headline: "가족 기업의 글로벌 브랜드 전략으로 프리미엄 식품 시장을 선도한 경영자",
    sector: "식음료",
    region: "이탈리아",
    generation: "Family business",
    rankLabel: "Top wealth cohort",
    wealthModel: "가족기업 지분 + 글로벌 브랜드 포트폴리오 + 프리미엄 식품 시장",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giovanni_Ferrero_2011.jpg?width=640",
      alt: "Giovanni Ferrero 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "가족이 운영하던 제과 기업을 글로벌 거인으로 성장시키며 누텔라, 킨더, 틱택 등 세계적 브랜드 포트폴리오를 구축한 사례입니다.",
    coreInsight:
      "브랜드 정체성을 유지하면서 생산 시설을 글로벌로 확장하고 원자재 공급망을 장악한 점이 장기 경쟁력의 핵심입니다.",
    signalTags: ["제과", "브랜드 포트폴리오", "프리미엄 식품", "가족기업"],
    milestones: [
      {
        year: "1964",
        title: "이탈리아 알바 출생",
        body: "페레로 가문의 제과 기업에서 성장하며 어린 시절부터 비즈니스 감각과 제품 혁신을 접했습니다.",
        type: "background",
      },
      {
        year: "1997",
        title: "페레로 그룹 경영 승계",
        body: "아버지와 삼촌으로부터 회사를 인수받아 3세대 경영자로 취임했습니다.",
        type: "career",
      },
      {
        year: "2015",
        title: "글로벌 M&A를 통한 확장",
        body: "영국 제과 기업 선더를 인수하고 미국 시장 진출을 가속화하며 글로벌 입지를 강화했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "글로벌 제과 시장 지배력 강화",
        body: "킨더, 누텔라, 페레로 로셰 등 핵심 브랜드의 글로벌 수요가 지속 성장하며 매출과 기업 가치가 확대됐습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "브랜드 독립성과 현지화",
        detail: "글로벌 브랜드 체계 아래 각 지역 시장의 소비자 취향에 맞춘 현지화 전략을 병행했습니다.",
        weight: 88,
      },
      {
        label: "수직 통합 공급망",
        detail: "원재료 조달에서 완제품 유통까지 공급망을 직접 관리하며 품질과 비용을 통제합니다.",
        weight: 84,
      },
      {
        label: "프리미엄 포지셔닝",
        detail: "고품질 이미지를 유지하며 프리미엄 가격 정책으로 마진을 방어합니다.",
        weight: 79,
      },
    ],
    assetDrivers: [
      {
        label: "비상장 가족기업 지분",
        detail: "페레로 그룹은 비상장 기업으로 가족 지분 가치가 순자산의 대부분을 차지합니다.",
        source: "Company estimates",
      },
      {
        label: "글로벌 브랜드 가치",
        detail: "누텔라, 킨더 등 브랜드의 글로벌 인지도가 기업 가치 평가의 핵심 요소입니다.",
        source: "Brand valuation reports",
      },
      {
        label: "프리미엄 식품 수요",
        detail: "글로벌 프리미엄 스낵과 스프레드 시장의 성장이 지속적인 매출 성장을 견인합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Ferrero Group annual reports",
        grade: "primary",
        usage: "사업 부문, 지역별 실적, 브랜드 포트폴리오 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
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
    slug: "li-ka-shing",
    name: "Li Ka-shing",
    koreanName: "리카싱",
    headline: "항구에서 시작해 글로벌 복합 기업을 건설한 홍콩의 자본 전략가",
    sector: "복합 자산",
    region: "홍콩",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "지주회사 포트폴리오 + 글로벌 인프라 투자 + 부동산 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Li_Ka_Shing.jpg?width=640",
      alt: "Li Ka-shing 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "빈손에서 시작해 항만, 에너지, 통신, 부동산을 아우르는 글로벌 복합 기업을 일군 홍콩의 대표적인 창업가입니다.",
    coreInsight:
      "경기 순환에 민감하지 않은 인프라 자산을 중심으로 포트폴리오를 구성하고 안정적 현금 흐름을 기반으로 다각화한 점이 핵심입니다.",
    signalTags: ["복합 기업", "지주회사", "인프라 투자", "아시아 자본"],
    milestones: [
      {
        year: "1928",
        title: "중국 차오저우 출생",
        body: "일본 점령 시기에 홍콩으로 피난해 가난한 환경 속에서도 비즈니스에 대한 열정을 키웠습니다.",
        type: "background",
      },
      {
        year: "1950",
        title: "플라스틱 제조 창업",
        body: "플라스틱 꽃 제조 공장을 창업하며 사업가로서 첫 발을 내디뎠습니다.",
        type: "venture",
      },
      {
        year: "1979",
        title: "허치슨 왐포아 인수",
        body: "홍콩계 영국 기업인 허치슨 왐포아를 인수하며 복합 기업 성장의 전환점을 마련했습니다.",
        type: "inflection",
      },
      {
        year: "2015",
        title: "CK 그룹으로 재편 및 은퇴",
        body: "CK 허치슨과 CK 애셋으로 지배 구조를 재편하고 2세인 리처드 리에게 경영권을 넘겼습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "역사이클 투자",
        detail: "경기 침체기에 저평가된 자산을 매수하고 호황기에 매각하며 자본 배분을 최적화했습니다.",
        weight: 91,
      },
      {
        label: "인프라 포트폴리오",
        detail: "항만, 에너지, 통신 등 안정적 현금 흐름을 가진 인프라 자산에 집중 투자했습니다.",
        weight: 86,
      },
      {
        label: "글로벌 다각화",
        detail: "홍콩과 중국을 넘어 유럽, 북미, 호주 등으로 사업을 다각화해 지역 리스크를 분산했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "CK 지주회사 지분",
        detail: "CK 허치슨과 CK 애셋 등 상장 지주회사 지분 가치가 순자산의 중심입니다.",
        source: "Company filings",
      },
      {
        label: "글로벌 인프라 수익",
        detail: "전 세계 주요 항만 운영권과 에너지 인프라에서 발생하는 안정적 배당 수익이 현금 흐름을 뒷받침합니다.",
        source: "Company earnings",
      },
      {
        label: "부동산 자산",
        detail: "홍콩 및 글로벌 부동산 개발 자산이 포트폴리오 가치의 중요한 축을 형성합니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "CK Hutchison annual reports",
        grade: "primary",
        usage: "지주회사 구조, 부문별 실적, 지역별 투자 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "mark-mateschitz",
    name: "Mark Mateschitz",
    koreanName: "마크 마테시츠",
    headline: "레드불의 상속자로 글로벌 에너지 음료 제국의 차세대 경영자",
    sector: "식음료",
    region: "오스트리아",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "레드불 지분 + 스포츠 마케팅 자산 + 글로벌 유통망",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mark_Mateschitz.jpg?width=640",
      alt: "Mark Mateschitz 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지 디트리히 마테시츠가 창업한 레드불의 지분을 상속받아 글로벌 에너지 음료 시장의 지배력을 이어받은 차세대 경영자입니다.",
    coreInsight:
      "액티브 스포츠와 익스트림 문화에 기반한 마케팅 전략이 브랜드 가치를 지속적으로 높이고 있습니다.",
    signalTags: ["에너지 음료", "스포츠 마케팅", "상속", "글로벌 브랜드"],
    milestones: [
      {
        year: "1992",
        title: "오스트리아 출생",
        body: "레드불 창업가 디트리히 마테시츠의 아들로 태어나 어린 시절부터 기업 문화에 노출되었습니다.",
        type: "background",
      },
      {
        year: "2022",
        title: "아버지 사망 후 경영 승계",
        body: "디트리히 마테시츠 사망 후 레드불 지분 49%를 상속받아 그룹의 주요 의사결정자로 부상했습니다.",
        type: "career",
      },
      {
        year: "2023",
        title: "전략적 의사결정 참여 확대",
        body: "레드불의 스포츠 구단 운영, 미디어 사업 등 비핵심 자산에 대한 영향력을 확대했습니다.",
        type: "inflection",
      },
      {
        year: "2024",
        title: "글로벌 에너지 음료 시장 확장",
        body: "신흥 시장에서의 수요 증가와 F1, 축구 구단 등 스포츠 마케팅 자산의 가치 상승이 기업 가치를 끌어올렸습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "스포츠 마케팅 생태계",
        detail: "F1, 축구, 익스트림 스포츠 등 다양한 스포츠 자산을 활용해 브랜드 인지도를 극대화합니다.",
        weight: 90,
      },
      {
        label: "프리미엄 가격 전략",
        detail: "경쟁 제품 대비 높은 가격대를 유지하며 프리미엄 에너지 음료 시장을 선도합니다.",
        weight: 82,
      },
      {
        label: "글로벌 유통망 강화",
        detail: "기존 유통 파트너십을 확장하고 신규 시장에 직접 진출하며 글로벌 입지를 넓힙니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "레드불 지분",
        detail: "레드불의 비상장 지분 가치가 순자산의 대부분을 구성합니다.",
        source: "Private company estimates",
      },
      {
        label: "브랜드 가치",
        detail: "레드불의 글로벌 브랜드 가치가 지속적으로 성장하며 기업 가치를 견인합니다.",
        source: "Brand valuation reports",
      },
      {
        label: "스포츠 자산",
        detail: "F1 팀, 축구 구단 등 스포츠 마케팅 자산의 가치 상승이 자본 이익으로 연결됩니다.",
        source: "Sports business reports",
      },
    ],
    sources: [
      {
        name: "Red Bull company reports",
        grade: "primary",
        usage: "사업 구조, 매출 추이, 지분 구조 확인",
        reliability: "비상장 기업 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "스포츠 마케팅 및 경영 전략 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "gianluigi-aponte",
    name: "Gianluigi Aponte",
    koreanName: "잔루이지 아폰테",
    headline: "항해사에서 세계 최대 해운 기업 MSC를 창업한 물류 제국 건설자",
    sector: "물류",
    region: "스위스",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "선단 운영 수익 + 글로벌 물류 인프라 + 크루즈 사업",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diego_Aponte,_Louis_Sola_and_Capt_Gianluigi_Aponte_cropped.png?width=640",
      alt: "Gianluigi Aponte 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "한 척의 선박에서 시작해 MSC를 세계 최대 컨테이너 해운 기업으로 키우며 물류와 크루즈 사업을 아우르는 해운 제국을 건설한 사례입니다.",
    coreInsight:
      "가족 경영 아래 선단 규모를 지속적으로 확장하고 수직 계열화를 통해 물류 전 과정을 통제한 점이 핵심 경쟁력입니다.",
    signalTags: ["해운", "물류", "컨테이너", "크루즈"],
    milestones: [
      {
        year: "1940",
        title: "이탈리아 소렌토 출생",
        body: "항해사로 경력을 시작하며 해운 산업에 대한 깊은 이해를 쌓았습니다.",
        type: "background",
      },
      {
        year: "1970",
        title: "MSC 창업",
        body: "중고 선박 한 척으로 해운 사업을 시작해 점차 지중해 노선을 확장했습니다.",
        type: "venture",
      },
      {
        year: "1980s",
        title: "아프리카·미주 노선 확장",
        body: "지중해를 넘어 아프리카와 미주 대륙으로 항로를 확장하며 글로벌 네트워크를 구축했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "세계 1위 컨테이너 선사 등극",
        body: "메르스크를 제치고 세계 최대 컨테이너 해운사로 올라서며 해운 지배력을 강화했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "가족 경영과 장기 투자",
        detail: "비상장 가족 기업으로 단기 이익보다 선단 확장과 인프라 투자에 집중했습니다.",
        weight: 90,
      },
      {
        label: "수직 계열화",
        detail: "터미널 운영, 물류, 크루즈 등 해운 관련 사업을 수직 계열화해 시너지를 창출합니다.",
        weight: 85,
      },
      {
        label: "역사이클 확장",
        detail: "해운 불황기에 선대를 확장해 경쟁사 대비 비용 경쟁력을 확보했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "MSC 선단 가치",
        detail: "세계 최대 컨테이너 선단의 자산 가치가 순자산 추정의 핵심입니다.",
        source: "Industry estimates",
      },
      {
        label: "터미널 포트폴리오",
        detail: "전 세계 주요 항만의 터미널 운영권이 안정적인 수익원을 제공합니다.",
        source: "Company reports",
      },
      {
        label: "크루즈 사업",
        detail: "MSC 크루즈의 선단과 브랜드 가치가 포트폴리오 다각화에 기여합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "MSC Group reports",
        grade: "primary",
        usage: "선단 규모, 노선, 사업 부문 확인",
        reliability: "비상장 기업 자료",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Shipping industry reports",
        grade: "report",
        usage: "해운 시장 점유율 및 선단 비교",
        reliability: "업계 분석",
      },
    ],
  },
  {
    slug: "rafaela-aponte-diamant",
    name: "Rafaela Aponte-Diamant",
    koreanName: "라파엘라 아폰테-디아만트",
    headline: "MSC의 공동 창업자이자 글로벌 해운 제국의 핵심 지분 보유자",
    sector: "물류",
    region: "스위스",
    generation: "Co-founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "MSC 지분 + 선단 자산 + 물류 인프라",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rafaela_Aponte-Diamant.jpg?width=640",
      alt: "Rafaela Aponte-Diamant 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "남편 잔루이지 아폰테와 함께 MSC를 공동 창업하고 세계 최대 해운 기업의 성장 과정에서 핵심적인 지분을 유지한 여성 기업가입니다.",
    coreInsight:
      "가족 지분율을 유지하며 기업 지배력을 안정적으로 관리한 점이 장기적 기업 가치 성장의 기반이 됐습니다.",
    signalTags: ["해운", "물류", "가족 기업", "여성 기업가"],
    milestones: [
      {
        year: "1945",
        title: "이탈리아 출생",
        body: "해운 가문에서 태어나 물류와 해운 산업에 대한 이해를 바탕으로 성장했습니다.",
        type: "background",
      },
      {
        year: "1970",
        title: "MSC 공동 창업",
        body: "남편과 함께 MSC를 창업하고 초기 경영과 선단 확장에 함께 참여했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "글로벌 확장과 지분 유지",
        body: "MSC의 글로벌 확장 과정에서 가족 지분율을 안정적으로 유지하며 의사결정권을 보존했습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "세계 1위 해운사 지분 가치 실현",
        body: "MSC가 세계 최대 컨테이너 선사로 성장하며 보유 지분의 가치가 크게 상승했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "지분 안정성",
        detail: "가족 내 지분을 안정적으로 유지하며 장기적 기업 운영의 기반을 마련했습니다.",
        weight: 88,
      },
      {
        label: "공동 의사결정",
        detail: "남편과 함께 전략적 의사결정에 참여하며 일관된 방향성을 유지했습니다.",
        weight: 80,
      },
      {
        label: "수익 재투자",
        detail: "해운 수익을 지속적으로 선대 확장과 인프라 투자에 재투자했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "MSC 지분",
        detail: "MSC 그룹 지분이 순자산의 거의 전부를 차지합니다.",
        source: "Private company estimates",
      },
      {
        label: "선단 자산 가치",
        detail: "세계 최대 컨테이너 선단의 장부 가치와 시장 가치가 지분 가치를 결정합니다.",
        source: "Industry estimates",
      },
      {
        label: "배당 및 수익",
        detail: "MSC의 연간 영업 이익에서 발생하는 배당 수익이 개인 자산 증가에 기여합니다.",
        source: "Company estimates",
      },
    ],
    sources: [
      {
        name: "MSC Group reports",
        grade: "primary",
        usage: "지분 구조, 사업 현황 확인",
        reliability: "비상장 기업 자료",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "해운 업계 분석 및 경영 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "andrea-pignataro",
    name: "Andrea Pignataro",
    koreanName: "안드레아 피냐타로",
    headline: "금융 기술과 인수 통합으로 글로벌 소프트웨어 제국을 건설한 창업자",
    sector: "금융/투자",
    region: "이탈리아",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "ION Group 지분 + M&A 포트폴리오 + 금융 인프라",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Andrea_Pignataro.jpg?width=640",
      alt: "Andrea Pignataro 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "금융 거래 처리 소프트웨어 기업 ION Group을 창업하고 공격적인 인수합병을 통해 글로벌 금융 인프라 기업으로 성장시킨 사례입니다.",
    coreInsight:
      "금융 업계의 필수 소프트웨어 인프라를 구축하며 고객 전환 비용을 높이고 인수한 기업을 통합해 규모의 경제를 실현했습니다.",
    signalTags: ["핀테크", "M&A", "금융 인프라", "소프트웨어"],
    milestones: [
      {
        year: "1969",
        title: "이탈리아 출생",
        body: "컴퓨터 공학과 금융에 관심을 가지고 소프트웨어 엔지니어로 커리어를 시작했습니다.",
        type: "background",
      },
      {
        year: "1999",
        title: "ION Group 창업",
        body: "금융 거래 처리 및 분석 소프트웨어 기업을 창업하며 금융 기술 시장에 진출했습니다.",
        type: "venture",
      },
      {
        year: "2010s",
        title: "공격적 M&A 전환",
        body: "금융 기술, 데이터 분석, 리스크 관리 기업을 잇달아 인수하며 사업 영역을 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "글로벌 금융 인프라 기업으로 성장",
        body: "ION Group은 글로벌 금융 기관의 핵심 인프라로 자리잡으며 기업 가치가 급상승했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "인수 통합 플랫폼",
        detail: "금융 기술 기업을 인수해 ION 플랫폼에 통합하며 제품 포트폴리오를 확장했습니다.",
        weight: 92,
      },
      {
        label: "필수 인프라 구축",
        detail: "금융 거래 처리, 리스크 관리 등 금융 기관의 필수 운영 소프트웨어 시장을 장악했습니다.",
        weight: 86,
      },
      {
        label: "부채를 활용한 자본 효율",
        detail: "인수 자금을 효율적으로 조달하며 자기 자본 대비 수익률을 극대화했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "ION Group 지분",
        detail: "비상장 기업인 ION Group의 지분 가치가 순자산의 대부분을 차지합니다.",
        source: "Private company estimates",
      },
      {
        label: "M&A 포트폴리오",
        detail: "인수한 기업들의 통합 시너지와 수익성 개선이 기업 전체 가치를 높입니다.",
        source: "Company reports",
      },
      {
        label: "금융 시장 의존도",
        detail: "글로벌 금융 시장의 거래량과 규제 환경이 매출과 이익에 직접적인 영향을 미칩니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "ION Group reports",
        grade: "primary",
        usage: "사업 구조, 제품 포트폴리오 확인",
        reliability: "비상장 기업 자료",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "M&A 내역 및 평가 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "klaus-michael-kuehne",
    name: "Klaus-Michael Kuehne",
    koreanName: "클라우스-미하엘 퀴네",
    headline: "물류 가문의 3세 경영자로 글로벌 포워딩 제국을 키운 전략가",
    sector: "물류",
    region: "독일",
    generation: "Family business",
    rankLabel: "Top wealth cohort",
    wealthModel: "Kuehne+Nagel 지분 + 물류 인프라 + 글로벌 포워딩 네트워크",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuehne_Taufe.jpg?width=640",
      alt: "Klaus-Michael Kuehne 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "19세기에 설립된 물류 가문의 3세 경영자로 Kuehne+Nagel을 글로벌 탑 티어 물류 기업으로 성장시킨 사례입니다.",
    coreInsight:
      "디지털 전환과 글로벌 네트워크 확장을 통해 전통 물류 기업을 현대적 물류 솔루션 기업으로 탈바꿈시켰습니다.",
    signalTags: ["물류", "포워딩", "가족 기업", "글로벌 네트워크"],
    milestones: [
      {
        year: "1937",
        title: "독일 함부르크 출생",
        body: "물류 기업을 운영하는 가문에서 태어나 어린 시절부터 물류 산업을 접했습니다.",
        type: "background",
      },
      {
        year: "1960s",
        title: "가족 기업 합류",
        body: "경영학을 전공하고 가족 기업인 Kuehne+Nagel에 합류해 경영 수업을 받았습니다.",
        type: "career",
      },
      {
        year: "1980s",
        title: "경영권 승계와 글로벌 확장",
        body: "회사의 경영권을 승계받고 글로벌 네트워크 확장과 해상 포워딩 사업 강화에 나섰습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "글로벌 물류 리더로 도약",
        body: "코로나 팬데믹 이후 글로벌 물류 수요 급증과 디지털 전환으로 기업 가치가 크게 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "글로벌 네트워크 확장",
        detail: "전 세계 주요 물류 거점에 현지 법인과 물류 센터를 구축하며 글로벌 커버리지를 확대했습니다.",
        weight: 88,
      },
      {
        label: "디지털 물류 전환",
        detail: "물류 IT 시스템에 선제적으로 투자해 운영 효율성과 고객 서비스 품질을 개선했습니다.",
        weight: 84,
      },
      {
        label: "해상·항공 포워딩 집중",
        detail: "수익성 높은 해상 및 항공 포워딩에 집중하며 안정적인 매출 구조를 구축했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "Kuehne+Nagel 지분",
        detail: "상장 기업인 Kuehne+Nagel의 대주주 지분 가치가 순자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "물류 인프라",
        detail: "전 세계 물류 창고, 터미널, IT 시스템 등 인프라 자산이 기업 가치를 지탱합니다.",
        source: "Company filings",
      },
      {
        label: "글로벌 무역 성장",
        detail: "세계 교역량 증가와 복잡해지는 공급망이 물류 서비스 수요를 지속적으로 확대합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Kuehne+Nagel annual reports",
        grade: "primary",
        usage: "사업 부문, 지역별 실적, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Logistics industry reports",
        grade: "report",
        usage: "물류 시장 점유율 및 성장률 비교",
        reliability: "업계 분석",
      },
    ],
  },
  {
    slug: "thomas-frist-jr",
    name: "Thomas Frist Jr & family",
    koreanName: "토머스 프리스트 주니어 일가",
    headline: "의료 서비스 산업을 개척하며 HCA 헬스케어를 세운 의사 출신 기업가",
    sector: "헬스케어",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "HCA 헬스케어 지분 + 병원 운영 수익 + 의료 부동산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_F._Frist_Jr._May,_2010.jpg?width=640",
      alt: "Thomas Frist Jr 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "의사 출신으로 병원 체인 HCA 헬스케어를 창업해 미국 민간 의료 서비스의 새로운 기준을 세우고 의료 산업의 대표 기업으로 성장시킨 사례입니다.",
    coreInsight:
      "민간 의료 서비스를 표준화하고 규모의 경제를 통해 비용 효율성을 극대화하는 운영 모델을 구축했습니다.",
    signalTags: ["헬스케어", "병원 체인", "민간 의료", "의사 창업가"],
    milestones: [
      {
        year: "1938",
        title: "미국 테네시 출생",
        body: "의사 가정에서 태어나 의대를 졸업하고 공군 의무병으로 복무했습니다.",
        type: "background",
      },
      {
        year: "1968",
        title: "HCA 공동 창업",
        body: "아버지 토머스 프리스트 시니어와 함께 병원 체인 HCA를 창업했습니다.",
        type: "venture",
      },
      {
        year: "1994",
        title: "컬럼비아 병원과 합병",
        body: "컬럼비아 병원과 합병해 컬럼비아/HCA를 설립하며 규모를 대폭 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2006",
        title: "사모 펀드 인수와 재상장",
        body: "HCA가 사모 펀드에 인수된 후 2011년 재상장하며 기업 가치가 크게 상승했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "병원 체인 표준화",
        detail: "전국 병원의 운영 프로세스를 표준화해 비용 효율성과 의료 서비스 품질을 동시에 개선했습니다.",
        weight: 89,
      },
      {
        label: "규모의 경제",
        detail: "대규모 병원 포트폴리오를 기반으로 의료 장비 조달, 보험 협상 등에서 비용 우위를 확보했습니다.",
        weight: 85,
      },
      {
        label: "자본 시장 활용",
        detail: "상장과 사모 인수를 번갈아 활용하며 자본 시장의 기회를 최대한 활용했습니다.",
        weight: 75,
      },
    ],
    assetDrivers: [
      {
        label: "HCA 지분",
        detail: "HCA 헬스케어의 상장 지분 가치가 프리스트 가문 자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "병원 운영 수익",
        detail: "전국 180개 이상의 병원과 외래 수술 센터에서 발생하는 운영 수익이 기업 가치의 기반입니다.",
        source: "Company earnings",
      },
      {
        label: "의료 부동산",
        detail: "병원 부지와 의료 시설 부동산 자산이 포트폴리오 가치를 보강합니다.",
        source: "Company filings",
      },
    ],
    sources: [
      {
        name: "HCA Healthcare annual reports",
        grade: "primary",
        usage: "병원 운영 현황, 재무 성과, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Healthcare industry reports",
        grade: "report",
        usage: "미국 병원 산업 동향 분석",
        reliability: "업계 분석",
      },
    ],
  },
  {
    slug: "alain-wertheimer",
    name: "Alain Wertheimer",
    koreanName: "알랭 베르트하이머",
    headline: "샤넬의 상속자로 글로벌 명품 브랜드의 독립성과 가치를 지켜온 경영자",
    sector: "패션/리테일",
    region: "프랑스",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "샤넬 지분 + 명품 브랜드 가치 + 글로벌 유통망",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alain_Wertheimer.jpg?width=640",
      alt: "Alain Wertheimer 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "코코 샤넬의 비즈니스 파트너였던 조부 피에르 베르트하이머로부터 샤넬을 상속받아 세계에서 가장 가치 있는 명품 브랜드 중 하나로 성장시킨 사례입니다.",
    coreInsight:
      "비상장 기업으로 독립성을 유지하며 장기적 브랜드 가치 중심의 경영을 통해 희소성과 프리미엄 이미지를 지속적으로 강화했습니다.",
    signalTags: ["명품", "샤넬", "브랜드 자산", "가족 기업"],
    milestones: [
      {
        year: "1949",
        title: "프랑스 파리 출생",
        body: "샤넬의 공동 소유주 가문에서 태어나 명품 산업에 대한 깊은 이해를 키웠습니다.",
        type: "background",
      },
      {
        year: "1970s",
        title: "샤넬 경영 참여",
        body: "형 제라드와 함께 샤넬의 경영에 참여하며 브랜드 현대화 작업을 시작했습니다.",
        type: "career",
      },
      {
        year: "1980s",
        title: "칼 라거펠트 영입",
        body: "칼 라거펠트를 크리에이티브 디렉터로 영입해 샤넬의 현대적 아이덴티티를 확립했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "글로벌 명품 시장 확대",
        body: "아시아를 중심으로 한 글로벌 명품 수요 증가가 샤넬의 브랜드 가치와 매출을 크게 성장시켰습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "브랜드 희소성 유지",
        detail: "생산량과 유통 채널을 엄격히 통제해 브랜드의 희소성과 프리미엄 이미지를 유지합니다.",
        weight: 91,
      },
      {
        label: "독립 경영 유지",
        detail: "비상장 기업 구조를 유지하며 단기 실적 압박 없이 장기 브랜드 가치에 집중합니다.",
        weight: 86,
      },
      {
        label: "가격 결정력",
        detail: "매년 일관된 가격 인상을 통해 브랜드의 프리미엄 포지셔닝을 강화합니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "샤넬 비상장 지분",
        detail: "샤넬의 비상장 지분 가치가 형제 자산의 절대적 부분을 차지합니다.",
        source: "Private company estimates",
      },
      {
        label: "브랜드 자산 가치",
        detail: "샤넬의 글로벌 브랜드 가치와 미래 수익 전망이 기업 가치 평가의 핵심입니다.",
        source: "Brand valuation reports",
      },
      {
        label: "명품 시장 성장",
        detail: "글로벌 명품 소비 시장의 성장, 특히 아시아 시장에서의 수요 확대가 기업 가치를 견인합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Chanel financial reports",
        grade: "primary",
        usage: "사업 부문, 지역별 실적, 브랜드 포트폴리오 확인",
        reliability: "비상장 기업 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "명품 산업 동향 및 브랜드 전략 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "gerard-wertheimer",
    name: "Gerard Wertheimer",
    koreanName: "제라드 베르트하이머",
    headline: "샤넬의 공동 소유주로 동생과 함께 명품 브랜드 제국을 이끄는 경영자",
    sector: "패션/리테일",
    region: "프랑스",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "샤넬 지분 + 명품 브랜드 가치 + 글로벌 유통망",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gerard_Wertheimer.jpg?width=640",
      alt: "Gerard Wertheimer 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "형 알랭과 함께 샤넬을 공동 소유하며 세계 최고의 명품 브랜드 중 하나를 가족 기업으로 유지해온 경영자입니다.",
    coreInsight:
      "비상장 가족 기업의 안정적 지배 구조 아래 브랜드의 독창성과 장기적 가치를 동시에 유지하는 경영 방식이 핵심입니다.",
    signalTags: ["명품", "샤넬", "브랜드 자산", "가족 경영"],
    milestones: [
      {
        year: "1950",
        title: "프랑스 파리 출생",
        body: "샤넬 지분을 보유한 가문에서 태어나 형과 함께 명품 비즈니스를 배웠습니다.",
        type: "background",
      },
      {
        year: "1970s",
        title: "샤넬 경영 참여",
        body: "형 알랭과 함께 샤넬의 경영에 참여하며 브랜드 확장 전략을 수립했습니다.",
        type: "career",
      },
      {
        year: "1990s",
        title: "글로벌 확장 가속화",
        body: "샤넬의 글로벌 부티크 네트워크를 확장하고 제품 카테고리를 다각화했습니다.",
        type: "inflection",
      },
      {
        year: "2018",
        title: "샤넬 재무 정보 최초 공개",
        body: "비상장 기업임에도 불구하고 사상 최초로 재무 정보를 공개하며 투명성을 높였습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "브랜드 독립성 수호",
        detail: "대기업 그룹에 편입되지 않고 독립 경영을 고수하며 브랜드 정체성을 유지합니다.",
        weight: 90,
      },
      {
        label: "제품 다각화",
        detail: "패션, 향수, 화장품, 주얼리 등으로 제품 라인을 확장하며 수익 기반을 다각화했습니다.",
        weight: 83,
      },
      {
        label: "선별적 유통",
        detail: "백화점과 온라인 채널을 선별적으로 운영하며 브랜드 위상을 유지합니다.",
        weight: 77,
      },
    ],
    assetDrivers: [
      {
        label: "샤넬 지분",
        detail: "형제가 공동 소유한 샤넬 지분이 전체 자산의 핵심입니다.",
        source: "Private company estimates",
      },
      {
        label: "명품 산업 성장",
        detail: "글로벌 명품 시장의 지속적 성장과 샤넬의 시장 지위가 자산 가치를 높입니다.",
        source: "Industry reports",
      },
      {
        label: "부동산 포트폴리오",
        detail: "샤넬이 소유한 글로벌 부티크 부동산 자산이 기업 가치에 기여합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Chanel financial reports",
        grade: "primary",
        usage: "사업 부문, 지역별 실적, 브랜드 포트폴리오 확인",
        reliability: "비상장 기업 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "명품 산업 동향 및 브랜드 전략 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "savitri-jindal",
    name: "Savitri Jindal & family",
    koreanName: "사비트리 진달 일가",
    headline: "철강 제국을 물려받아 아시아의 대표 금속·광업 재벌로 성장시킨 여성 기업가",
    sector: "금속/광업",
    region: "인도",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "JSW 그룹 지분 + 철강·광업 자산 + 복합 기업 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Savitri_Jindal.jpg?width=640",
      alt: "Savitri Jindal 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "남편 오엠 프라카시 진달 사망 후 철강, 전력, 시멘트를 아우르는 JSW 그룹을 물려받아 아들들과 함께 인도 대표 재벌로 성장시킨 사례입니다.",
    coreInsight:
      "아들들에게 각 사업부를 나누어 맡기는 분산형 가족 경영 구조가 그룹의 빠른 의사결정과 확장에 기여했습니다.",
    signalTags: ["철강", "광업", "인도 재벌", "가족 기업"],
    milestones: [
      {
        year: "1950",
        title: "인도 아삼 주 출생",
        body: "중류층 가정에서 태어나 결혼 후 진달 가문의 사업에 참여하게 됐습니다.",
        type: "background",
      },
      {
        year: "2005",
        title: "남편 사망 후 그룹 승계",
        body: "오엠 프라카시 진달 사망 후 JSW 그룹의 의장직을 맡아 경영을 주도했습니다.",
        type: "career",
      },
      {
        year: "2010s",
        title: "아들 중심 경영 체제 전환",
        body: "네 아들에게 각 사업부를 분할해 맡기며 체계적인 승계 계획을 실행했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "그룹 사업 확장과 가치 상승",
        body: "철강, 전력, 시멘트 등 핵심 사업의 확장과 인도 인프라 투자 붐으로 그룹 가치가 크게 상승했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "분산형 가족 경영",
        detail: "각 아들이 특정 사업부를 전담하며 책임 경영과 전문성을 동시에 확보했습니다.",
        weight: 86,
      },
      {
        label: "수직 통합",
        detail: "철강, 광산, 전력, 항만으로 이어지는 수직 계열화로 비용 경쟁력을 강화했습니다.",
        weight: 84,
      },
      {
        label: "인도 성장 수혜",
        detail: "인도의 인프라 투자와 제조업 성장이 JSW 그룹의 전 사업 부문에 긍정적 영향을 미쳤습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "JSW 그룹 지분",
        detail: "상장 계열사인 JSW 스틸, JSW 에너지의 지분 가치가 가문 자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "철강 가격 사이클",
        detail: "글로벌 철강 가격과 원자재 비용 변동이 그룹의 수익성과 기업 가치에 직접적 영향을 미칩니다.",
        source: "Company earnings",
      },
      {
        label: "인도 인프라 투자",
        detail: "인도 정부의 인프라 투자 확대가 철강 및 전력 수요를 지속적으로 견인합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "JSW Group annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "가족 경영 및 승계 계획 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "stephen-schwarzman",
    name: "Stephen Schwarzman",
    koreanName: "스티븐 슈워츠먼",
    headline: "월가의 사모펀드 제왕으로 블랙스톤을 글로벌 최대 대체투자 기업으로 키운 창업자",
    sector: "금융/투자",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "블랙스톤 지분 + 운용 수수료 + GP 투자 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/DBT_Magdalen_College,_Oxford_&_Stephen_Schwarzman_19_March_2024-5_-_53600715712_(cropped).jpg?width=640",
      alt: "Stephen Schwarzman 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "월가의 투자은행에서 경력을 시작해 블랙스톤을 창업하고 글로벌 최대 대체투자 운용사로 성장시킨 사모펀드 업계의 전설적인 인물입니다.",
    coreInsight:
      "높은 수수료 수익과 GP 자본을 통한 투자 수익이 결합된 수익 모델이 장기적인 자산 성장의 핵심 동력입니다.",
    signalTags: ["사모펀드", "대체투자", "M&A", "운용 수수료"],
    milestones: [
      {
        year: "1947",
        title: "미국 펜실베이니아 출생",
        body: "예일대와 하버드 경영대학원을 졸업하고 레먼 브라더스에서 투자은행가로 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1985",
        title: "블랙스톤 공동 창업",
        body: "피터 피터슨과 함께 블랙스톤을 창업하며 사모펀드 업계에 첫발을 내디뎠습니다.",
        type: "venture",
      },
      {
        year: "2007",
        title: "블랙스톤 IPO",
        body: "블랙스톤을 사모펀드 운용사 최초로 뉴욕 증시에 상장시키며 자본력을 대폭 확충했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "글로벌 대체투자 1위 등극",
        body: "부동산, 사모펀드, 신용, 헤지펀드 등 모든 대체투자 부문에서 글로벌 리더로 자리잡았습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "수수료 수익 극대화",
        detail: "운용 자산(AUM) 규모 확대와 높은 성과 수수료를 통해 안정적인 수익 구조를 구축했습니다.",
        weight: 90,
      },
      {
        label: "사업 다각화",
        detail: "사모펀드 외 부동산, 사모 신용, 인프라, 보험 등으로 투자 영역을 확장했습니다.",
        weight: 87,
      },
      {
        label: "인재와 네트워크",
        detail: "업계 최고 인재를 영입하고 정부·기업과의 네트워크를 활용해 딜 소싱 경쟁력을 유지합니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "블랙스톤 지분",
        detail: "IPO 이후에도 유지한 블랙스톤의 대규모 지분 가치가 개인 자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "운용 자산 성장",
        detail: "운용 자산(AUM)의 지속적 증가가 수수료 수익과 기업 가치를 동시에 높입니다.",
        source: "Company earnings",
      },
      {
        label: "GP 투자 수익",
        detail: "블랙스톤 펀드에 GP로 투자한 자본의 수익률이 추가 자산 증가 요인입니다.",
        source: "Company filings",
      },
    ],
    sources: [
      {
        name: "Blackstone annual reports",
        grade: "primary",
        usage: "AUM, 부문별 실적, 지분 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "paolo-ardoino",
    name: "Paolo Ardoino",
    koreanName: "파올로 아르도이노",
    headline: "테더의 핵심 경영자로 스테이블코인 시장을 선도하는 암호화폐 인물",
    sector: "금융/투자",
    region: "이탈리아",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "테더 지분 + USDT 유통 수익 + 암호화폐 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Paolo_Ardoino_by_Gage_Skidmore.jpg?width=640",
      alt: "Paolo Ardoino 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "테더(USDT)의 핵심 경영자로서 세계 최대 스테이블코인을 운영하며 암호화폐 거래와 결제 생태계의 기반 인프라를 제공하는 인물입니다.",
    coreInsight:
      "스테이블코인의 네트워크 효과와 유동성 풀의 규모가 경쟁력을 결정하는 암호화폐 시장에서 선발 주자로서의 이점을 활용했습니다.",
    signalTags: ["스테이블코인", "암호화폐", "테더", "블록체인"],
    milestones: [
      {
        year: "1984",
        title: "이탈리아 출생",
        body: "컴퓨터 공학을 전공하고 소프트웨어 엔지니어로 커리어를 시작했습니다.",
        type: "background",
      },
      {
        year: "2014",
        title: "비트파이넥스 합류",
        body: "암호화폐 거래소 비트파이넥스의 기술 책임자로 합류하며 암호화폐 업계에 발을 들였습니다.",
        type: "career",
      },
      {
        year: "2020",
        title: "테더 최고기술책임자(CTO) 취임",
        body: "테더의 CTO로 임명되며 USDT 스테이블코인의 기술적 안정성과 확장성을 책임졌습니다.",
        type: "inflection",
      },
      {
        year: "2023",
        title: "테더 CEO 승진",
        body: "테더의 CEO로 승진하며 USDT의 글로벌 확장과 규제 대응을 주도했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "스테이블코인 네트워크 효과",
        detail: "가장 많은 유통량과 거래 쌍을 가진 스테이블코인으로서의 네트워크 효과를 활용했습니다.",
        weight: 91,
      },
      {
        label: "유동성 인프라 구축",
        detail: "USDT를 다양한 블록체인과 거래소에 통합해 암호화폐 생태계의 필수 유동성 인프라로 자리잡았습니다.",
        weight: 85,
      },
      {
        label: "규제 대응과 투명성",
        detail: "국제 규제 환경에 선제적으로 대응하며 준법 경영을 강화하고 예비력 증명을 지속적으로 공개합니다.",
        weight: 72,
      },
    ],
    assetDrivers: [
      {
        label: "테더 지분",
        detail: "테더와 비트파이넥스의 지분 가치가 주요 자산입니다.",
        source: "Private company estimates",
      },
      {
        label: "USDT 유통 수익",
        detail: "USDT 발행에 따른 예비 자산 운용 수익과 거래 수수료가 주요 수익원입니다.",
        source: "Company reports",
      },
      {
        label: "암호화폐 시가총액",
        detail: "전체 암호화폐 시장의 성장과 스테이블코인 수요가 기업 가치에 직접적 영향을 미칩니다.",
        source: "Market data",
      },
    ],
    sources: [
      {
        name: "Tether attestation reports",
        grade: "primary",
        usage: "예비 자산 구성, 발행량, 재무 상태 확인",
        reliability: "회계 감사",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Cryptocurrency market data",
        grade: "report",
        usage: "USDT 유통량 및 시장 점유율 확인",
        reliability: "시장 데이터",
      },
    ],
  },
  {
    slug: "jean-louis-van-der-velde",
    name: "Jean-Louis van der Velde",
    koreanName: "장-루이 반 데르 벨데",
    headline: "테더와 비트파이넥스의 공동 창업자로서 암호화폐 금융 인프라를 구축한 기업가",
    sector: "금융/투자",
    region: "네덜란드",
    generation: "Co-founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "테더 및 비트파이넥스 지분 + USDT 생태계 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Louis_van_der_Velde.jpg?width=640",
      alt: "Jean-Louis van der Velde 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "암호화폐 거래소 비트파이넥스와 세계 최대 스테이블코인 USDT를 발행하는 테더의 공동 창업자로서 디지털 자산 금융 인프라를 구축한 인물입니다.",
    coreInsight:
      "스테이블코인과 거래소를 결합한 수직 통합형 비즈니스 모델이 암호화폐 생태계 내에서 강력한 경쟁 우위를 창출했습니다.",
    signalTags: ["암호화폐", "스테이블코인", "비트파이넥스", "테더"],
    milestones: [
      {
        year: "1963",
        title: "네덜란드 출생",
        body: "금융과 기술에 관심을 가지고 소프트웨어 및 금융 서비스 분야에서 경력을 쌓았습니다.",
        type: "background",
      },
      {
        year: "2012",
        title: "비트파이넥스 설립",
        body: "암호화폐 거래소 비트파이넥스를 설립하며 디지털 자산 거래 인프라를 구축했습니다.",
        type: "venture",
      },
      {
        year: "2014",
        title: "테더(USDT) 출시",
        body: "비트파이넥스와 함께 USDT 스테이블코인을 출시해 암호화폐 시장의 유동성 혁신을 주도했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "USDT 글로벌 지배력 확대",
        body: "USDT가 세계에서 가장 널리 사용되는 스테이블코인으로 자리잡으며 기업 가치가 크게 상승했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "수직 통합 생태계",
        detail: "거래소와 스테이블코인 발행을 함께 운영하며 암호화폐 생태계 내에서 시너지를 창출합니다.",
        weight: 88,
      },
      {
        label: "글로벌 유동성 공급",
        detail: "USDT를 전 세계 거래소와 플랫폼에 공급해 암호화폐 거래의 기본 유동성 인프라를 제공합니다.",
        weight: 84,
      },
      {
        label: "규제 리스크 관리",
        detail: "여러 국가의 규제 환경에 대응하며 사업 구조를 유연하게 조정합니다.",
        weight: 73,
      },
    ],
    assetDrivers: [
      {
        label: "테더·비트파이넥스 지분",
        detail: "테더와 비트파이넥스의 비상장 지분 가치가 순자산의 핵심입니다.",
        source: "Private company estimates",
      },
      {
        label: "USDT 예비 자산 수익",
        detail: "USDT 발행량에 상응하는 예비 자산(국채 등)에서 발생하는 운용 수익이 핵심 수익원입니다.",
        source: "Company reports",
      },
      {
        label: "암호화폐 시장 성장",
        detail: "전체 암호화폐 시가총액과 거래량 증가가 USDT 수요와 기업 가치에 긍정적 영향을 미칩니다.",
        source: "Market data",
      },
    ],
    sources: [
      {
        name: "Tether attestation reports",
        grade: "primary",
        usage: "예비 자산, 발행 규모, 재무 건전성 확인",
        reliability: "회계 감사",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "암호화폐 규제 및 업계 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "william-ding",
    name: "William Ding",
    koreanName: "윌리엄 딩",
    headline: "중국 인터넷 초기부터 넷이즈를 창업해 게임과 기술로 성장시킨 창업자",
    sector: "기술",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "넷이즈 지분 + 게임 수익 + 클라우드·음악 플랫폼",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ding_Lei_-_Founder_of_NetEase_-_12_-_12_-_2025.jpg?width=640",
      alt: "William Ding 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "중국 인터넷 초기 붐 시기에 넷이즈를 창업해 게임, 이메일, 음악, 교육 등 다양한 온라인 서비스로 확장한 기술 창업가입니다.",
    coreInsight:
      "게임 개발과 퍼블리싱에서 시작한 역량을 클라우드, 음악, 교육 등으로 확장하며 안정적인 매출 포트폴리오를 구축했습니다.",
    signalTags: ["게임", "인터넷", "넷이즈", "중국 기술"],
    milestones: [
      {
        year: "1971",
        title: "중국 저장성 출생",
        body: "중국 전자과학기술대학에서 통신 공학을 전공하고 중국 최대 통신 기업에서 엔지니어로 근무했습니다.",
        type: "background",
      },
      {
        year: "1997",
        title: "넷이즈 창업",
        body: "중국 최초의 무료 이메일 서비스인 163.net을 출시하며 인터넷 기업을 창업했습니다.",
        type: "venture",
      },
      {
        year: "2001",
        title: "게임 사업 전환",
        body: "광고 수익 감소로 위기를 겪은 후 온라인 게임 사업으로 방향을 전환해 대규모 성공을 거두었습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "다각화된 포트폴리오 구축",
        body: "게임, 음악 스트리밍(클라우드 뮤직), 교육(유다오), 전자상거래 등으로 사업을 다각화했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "게임 IP 장기 운영",
        detail: "자체 개발 게임 IP를 장기간 운영하며 안정적인 게임 수익 기반을 구축했습니다.",
        weight: 88,
      },
      {
        label: "사업 다각화",
        detail: "게임 수익을 기반으로 음악, 교육, 전자상거래 등 신규 사업에 투자하며 포트폴리오를 확장했습니다.",
        weight: 82,
      },
      {
        label: "기술 중심 혁신",
        detail: "AI, 클라우드 컴퓨팅 등 신기술을 서비스에 통합하며 경쟁력을 유지합니다.",
        weight: 75,
      },
    ],
    assetDrivers: [
      {
        label: "넷이즈 지분",
        detail: "나스닥 상장사 넷이즈의 대주주 지분 가치가 순자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "게임 라이선스 수익",
        detail: "자체 개발 및 퍼블리싱 게임의 라이선스와 아이템 판매 수익이 주요 현금 흐름입니다.",
        source: "Company earnings",
      },
      {
        label: "신규 사업 밸류에이션",
        detail: "클라우드 뮤직, 유다오 등 자회사의 기업 가치가 전체 포트폴리오 가치에 기여합니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "NetEase annual reports",
        grade: "primary",
        usage: "게임 부문, 신규 사업, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "중국 게임 규제 및 업계 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "miriam-adelson",
    name: "Miriam Adelson & family",
    koreanName: "미리엄 애덜슨 일가",
    headline: "라스베이거스 샌즈를 물려받아 글로벌 카지노 제국을 이끄는 여성 경영자",
    sector: "카지노/게이밍",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "라스베이거스 샌즈 지분 + 카지노·리조트 수익 + 마카오 사업권",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Miriam_Adelson_2023.jpg?width=640",
      alt: "Miriam Adelson 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "남편 셀던 애덜슨 사후 라스베이거스 샌즈의 지배 지분을 물려받아 글로벌 카지노·리조트 제국을 이끌고 있는 의사 출신 기업가입니다.",
    coreInsight:
      "마카오와 싱가포르의 통합 리조트 사업권이 글로벌 경쟁사 대비 차별화된 수익 구조를 제공합니다.",
    signalTags: ["카지노", "리조트", "마카오", "라스베이거스 샌즈"],
    milestones: [
      {
        year: "1945",
        title: "이스라엘 텔아비브 출생",
        body: "의대를 졸업하고 내과 의사로 활동하며 의학 경력을 쌓았습니다.",
        type: "background",
      },
      {
        year: "1990s",
        title: "셀던 애덜슨과 결합",
        body: "셀던 애덜슨과 결혼한 후 라스베이거스 샌즈의 성장 과정에서 조언자 역할을 했습니다.",
        type: "career",
      },
      {
        year: "2021",
        title: "남편 사망 후 경영 승계",
        body: "셀던 애덜슨 사망 후 라스베이거스 샌즈의 의결권 있는 지분 대부분을 상속받았습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "라스베이거스 자산 매각과 아시아 집중",
        body: "라스베이거스 베네치안 리조트를 매각하고 마카오와 싱가포르 사업에 집중하는 전략적 전환을 단행했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "아시아 프리미엄 리조트 집중",
        detail: "마카오와 싱가포르의 통합 리조트 사업에 집중하며 높은 수익성을 유지합니다.",
        weight: 89,
      },
      {
        label: "자산 경량화",
        detail: "미국 자산을 매각하고 아시아 중심으로 포트폴리오를 재편하며 자본 효율을 개선했습니다.",
        weight: 80,
      },
      {
        label: "정치적 영향력",
        detail: "미국과 이스라엘 정치에 적극적으로 참여하며 사업 환경에 유리한 네트워크를 구축했습니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "라스베이거스 샌즈 지분",
        detail: "상장사 라스베이거스 샌즈의 대주주 지분 가치가 순자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "마카오 카지노 라이선스",
        detail: "마카오 정부의 카지노 라이선스 갱신과 운영 조건이 기업 가치에 중요한 변수입니다.",
        source: "Company filings",
      },
      {
        label: "아시아 관광 수요",
        detail: "마카오와 싱가포르의 관광 수요와 VIP 고객 지출이 리조트 수익을 결정합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Las Vegas Sands annual reports",
        grade: "primary",
        usage: "카지노 운영, 지역별 실적, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "카지노 라이선스 및 규제 환경 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "alexey-mordashov",
    name: "Alexey Mordashov & family",
    koreanName: "알렉세이 모르다쇼프 일가",
    headline: "소련 붕괴 후 철강 기업을 인수해 러시아 최대 재벌 중 하나로 성장시킨 기업가",
    sector: "금속/광업",
    region: "러시아",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "세베르스탈 지분 + 철강·광업 자산 + 관광·소매 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexey_Mordashov,_2018.jpg?width=640",
      alt: "Alexey Mordashov 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소련 붕괴 이후 국영 철강 기업을 인수해 세베르스탈을 러시아 최대 철강·광업 기업으로 키우고 다양한 분야로 사업을 확장한 사례입니다.",
    coreInsight:
      "철강 사업에서 창출한 현금 흐름을 관광, 소매, IT 등 신규 사업에 재투자하며 포트폴리오를 다각화했습니다.",
    signalTags: ["철강", "러시아 재벌", "금속/광업", "사업 다각화"],
    milestones: [
      {
        year: "1965",
        title: "러시아 체레포베츠 출생",
        body: "철강 도시에서 태어나 레닌그라드 공과대학에서 경제학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1992",
        title: "세베르스탈 경영 참여",
        body: "소련 붕괴 후 세베르스탈의 재무 책임자로 합류해 민영화 과정을 주도했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "지분 확보와 경영권 장악",
        body: "세베르스탈의 지분을 점차 확보하며 최대 주주이자 CEO로 경영권을 장악했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "사업 다각화와 글로벌 진출",
        body: "관광(TUI 지분), 소매, IT 등으로 사업을 확장하고 유럽 시장 진출을 추진했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "민영화를 통한 자산 확보",
        detail: "소련 붕괴 후 철강 국영 기업의 민영화 과정에서 주요 지분을 확보했습니다.",
        weight: 88,
      },
      {
        label: "수직 계열화",
        detail: "철광석, 석탄 등 원자재부터 철강 제품까지 수직 계열화를 통해 비용 경쟁력을 확보했습니다.",
        weight: 85,
      },
      {
        label: "비철강 부문 다각화",
        detail: "철강 수익을 관광, 소매, IT 등 비철강 부문에 투자하며 포트폴리오 리스크를 분산했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "세베르스탈 지분",
        detail: "러시아 상장사 세베르스탈의 대주주 지분 가치가 핵심 자산입니다.",
        source: "Public market data",
      },
      {
        label: "철강 가격 변동",
        detail: "글로벌 철강 가격과 원자재 비용 변동이 기업 수익성과 자산 가치에 직접적 영향을 미칩니다.",
        source: "Company earnings",
      },
      {
        label: "다각화된 포트폴리오",
        detail: "TUI 관광, 소매 등 비철강 자산의 가치가 전체 자산 포트폴리오에 기여합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Severstal annual reports",
        grade: "primary",
        usage: "철강 생산, 재무 성과, 지분 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "러시아 경제 및 재벌 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "colin-huang",
    name: "Colin Huang",
    koreanName: "콜린 황",
    headline: "소셜 커머스 혁신으로 중국 전자상거래의 새로운 지평을 연 창업자",
    sector: "기술",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "PDD Holdings 지분 + 전자상거래 수익 + 테크 기업 가치",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Colin_Huang.jpg?width=640",
      alt: "Colin Huang 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "구글 엔지니어 출신으로 핀둬둬를 창업해 소셜 커머스라는 혁신적인 모델로 중국 전자상거래 시장에 새로운 패러다임을 제시한 사례입니다.",
    coreInsight:
      "기존 전자상거래와 달리 소셜 네트워크와 게임 요소를 결합한 쇼핑 경험으로 저가 시장에서 폭발적 성장을 이끌어냈습니다.",
    signalTags: ["전자상거래", "소셜 커머스", "핀둬둬", "중국 기술"],
    milestones: [
      {
        year: "1980",
        title: "중국 항저우 출생",
        body: "중국 저장대학에서 컴퓨터 공학을 전공하고 구글에서 소프트웨어 엔지니어로 근무했습니다.",
        type: "background",
      },
      {
        year: "2015",
        title: "핀둬둬 창업",
        body: "그룹 구매와 소셜 공유를 결합한 혁신적인 전자상거래 플랫폼 핀둬둬를 창업했습니다.",
        type: "venture",
      },
      {
        year: "2018",
        title: "나스닥 상장",
        body: "PDD Holdings를 나스닥에 상장하며 국제 자본 시장에서 대규모 자금을 조달했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "글로벌 확장과 지속 성장",
        body: "테무(Temu)를 통해 글로벌 시장에 진출하며 북미와 유럽에서 빠른 성장을 이뤘습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "소셜 커머스 혁신",
        detail: "위챗 생태계를 활용한 그룹 구매 모델로 저비용 고객 확보와 바이럴 성장을 실현했습니다.",
        weight: 92,
      },
      {
        label: "C2M(소비자-제조사) 직결",
        detail: "소비자 수요를 제조사에 직접 연결해 중간 유통 비용을 없애고 초저가를 실현했습니다.",
        weight: 86,
      },
      {
        label: "데이터 기반 추천",
        detail: "소셜 그래프와 구매 데이터를 기반으로 한 개인화 추천 시스템이 구매 전환율을 높입니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "PDD Holdings 지분",
        detail: "나스닥 상장사 PDD Holdings의 지분 가치가 순자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "전자상거래 거래액(GMV)",
        detail: "핀둬둬와 테무의 연간 거래액 성장이 기업 가치 평가의 주요 지표입니다.",
        source: "Company earnings",
      },
      {
        label: "글로벌 확장 성과",
        detail: "테무의 글로벌 시장 진출 성과와 신규 시장 점유율이 미래 기업 가치를 결정합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "PDD Holdings annual reports",
        grade: "primary",
        usage: "GMV, 사용자 지표, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "중국 전자상거래 규제 및 시장 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "eduardo-saverin",
    name: "Eduardo Saverin",
    koreanName: "에두아르도 세이버린",
    headline: "페이스북의 초기 투자자이자 공동 창업자로서 희귀 지분을 보유한 천재 투자자",
    sector: "기술",
    region: "브라질",
    generation: "Co-founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "메타 지분 + 초기 투자 수익 + 벤처 투자 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eduardo_Saverin_CHINICT.JPG?width=640",
      alt: "Eduardo Saverin 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "하버드 대학에서 마크 저커버그와 함께 페이스북을 공동 창업하고 소송과 합의를 통해 상당한 지분을 확보해 막대한 부를 축적한 사례입니다.",
    coreInsight:
      "초기 창업팀의 지분을 포기하지 않고 법적 분쟁을 통해 보호한 점이 장기적으로 막대한 자산 가치를 창출하는 결정적 요인이었습니다.",
    signalTags: ["페이스북", "소셜 미디어", "초기 투자", "벤처 캐피탈"],
    milestones: [
      {
        year: "1982",
        title: "브라질 상파울루 출생",
        body: "부유한 가정에서 태어나 하버드 대학에서 경제학을 전공하며 창업에 대한 관심을 키웠습니다.",
        type: "background",
      },
      {
        year: "2004",
        title: "페이스북 공동 창업",
        body: "마크 저커버그, 더스틴 모스코비츠와 함께 하버드 기숙사에서 페이스북을 창업했습니다.",
        type: "venture",
      },
      {
        year: "2005",
        title: "지분 분쟁과 합의",
        body: "저커버그와의 경영 분쟁 끝에 소송을 제기하고 약 5%의 지분과 현금 합의를 이끌어냈습니다.",
        type: "inflection",
      },
      {
        year: "2012",
        title: "페이스북 IPO와 자산 급증",
        body: "페이스북의 기업 공개로 보유 지분의 가치가 급등하며 억만장자 대열에 합류했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "지분 보호와 장기 보유",
        detail: "법적 분쟁을 통해 지분을 보호하고 IPO 이후에도 지분을 장기 보유하며 자산 가치를 극대화했습니다.",
        weight: 90,
      },
      {
        label: "세금 최적화",
        detail: "미국 시민권을 포기하고 싱가포르로 이주하며 자본 이득세를 최적화했습니다.",
        weight: 78,
      },
      {
        label: "벤처 투자 다각화",
        detail: "메타 지분 외에도 다양한 스타트업과 핀테크 기업에 투자하며 포트폴리오를 다각화했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "메타 플랫폼스 지분",
        detail: "페이스북의 상장 지분 가치가 순자산의 절대적 부분을 차지합니다.",
        source: "Public market data",
      },
      {
        label: "초기 투자 포트폴리오",
        detail: "메타 외 다양한 스타트업에 대한 초기 투자 자산이 부의 다각화에 기여합니다.",
        source: "Private market estimates",
      },
      {
        label: "광고 시장 성장",
        detail: "메타의 디지털 광고 수익 성장이 주가와 지분 가치에 직접적 영향을 미칩니다.",
        source: "Company earnings",
      },
    ],
    sources: [
      {
        name: "Meta Platforms annual reports",
        grade: "primary",
        usage: "광고 수익, 사용자 지표, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "eric-schmidt",
    name: "Eric Schmidt",
    koreanName: "에릭 슈밋",
    headline: "구글을 세계 최대 기술 기업으로 성장시킨 경영자이자 기술 투자가",
    sector: "기술",
    region: "미국",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "알파벳 지분 + 기술 투자 포트폴리오 + 벤처 기부",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eric_Schmidt_at_the_37th_G8_Summit_in_Deauville_037_(cropped).jpg?width=640",
      alt: "Eric Schmidt 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "썬 마이크로시스템즈와 노벨의 경영 경험을 바탕으로 구글의 초기 CEO로 합류해 검색 스타트업을 글로벌 기술 대기업으로 성장시킨 경영자입니다.",
    coreInsight:
      "기술적 비전과 경영 경험을 결합해 창업자들의 혁신적 아이디어를 체계적인 비즈니스 모델로 전환한 점이 핵심 역할이었습니다.",
    signalTags: ["구글", "기술 경영", "AI", "벤처 투자"],
    milestones: [
      {
        year: "1955",
        title: "미국 워싱턴 D.C. 출생",
        body: "프린스턴 대학에서 전기공학을, UC 버클리에서 컴퓨터 공학 박사를 취득했습니다.",
        type: "background",
      },
      {
        year: "2001",
        title: "구글 CEO 취임",
        body: "레이리 페이지와 세르게이 브린의 요청으로 구글의 CEO로 합류해 경영 시스템을 구축했습니다.",
        type: "career",
      },
      {
        year: "2004",
        title: "구글 IPO 주도",
        body: "더치 옥션 방식의 혁신적인 IPO를 주도하며 구글의 공개 시장 데뷔를 성공적으로 이끌었습니다.",
        type: "inflection",
      },
      {
        year: "2015",
        title: "알파벳 회장으로 전환",
        body: "구글이 알파벳으로 재편되면서 회장직을 맡고 AI와 신기술 투자에 집중했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "기술과 경영의 균형",
        detail: "창업자들의 기술적 비전을 체계적인 경영 시스템과 수익 모델로 전환했습니다.",
        weight: 88,
      },
      {
        label: "인수합병을 통한 확장",
        detail: "유튜브, 안드로이드, 딥마인드 등 전략적 인수를 통해 구글의 생태계를 확장했습니다.",
        weight: 85,
      },
      {
        label: "AI 우선 전략",
        detail: "딥마인드 인수와 AI 연구 투자를 통해 인공지능 분야에서 선도적 위치를 확보했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "알파벳 지분",
        detail: "구글 초기 직원으로 획득한 알파벳 지분 가치가 주요 자산입니다.",
        source: "Public market data",
      },
      {
        label: "벤처 투자 포트폴리오",
        detail: "개인 및 벤처 펀드를 통한 기술 스타트업 투자 자산이 부의 다각화에 기여합니다.",
        source: "Private market estimates",
      },
      {
        label: "AI 시장 성장",
        detail: "AI 기술 발전과 구글의 시장 지위가 알파벳 기업 가치와 개인 지분 가치에 긍정적 영향을 미칩니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Alphabet annual reports",
        grade: "primary",
        usage: "광고 수익, AI 투자, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "기술 산업 동향 및 AI 규제 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "idan-ofer",
    name: "Idan Ofer",
    koreanName: "이단 오퍼",
    headline: "해운 제국을 물려받아 글로벌 물류와 에너지로 확장한 이스라엘 재벌",
    sector: "복합 자산",
    region: "이스라엘",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "해운·에너지 지분 + 부동산·기술 투자 포트폴리오",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Idan_offer.webp.png?width=640",
      alt: "Idan Ofer 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지 새미 오퍼가 세운 해운 제국을 물려받아 친환경 에너지, 기술 투자 등으로 포트폴리오를 확장한 이스라엘의 대표적인 재벌입니다.",
    coreInsight:
      "전통 해운 사업에서 창출한 현금 흐름을 신재생 에너지, 첨단 기술 등 성장 산업에 재투자하며 자산 구조를 현대화했습니다.",
    signalTags: ["해운", "에너지", "이스라엘 재벌", "투자 다각화"],
    milestones: [
      {
        year: "1955",
        title: "이스라엘 출생",
        body: "해운 기업가 새미 오퍼의 아들로 태어나 영국에서 경제학과 해운 경영을 공부했습니다.",
        type: "background",
      },
      {
        year: "1980s",
        title: "가족 사업 합류",
        body: "아버지의 해운 사업에 합류해 이스턴 퍼시픽 쉬핑의 성장을 주도했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "형제와 사업 분할",
        body: "형 에얄과 사업을 분할하며 이스턴 퍼시픽 쉬핑과 퀀텀 퍼시픽을 각각 맡았습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "에너지·기술 투자 확대",
        body: "해운 수익을 바탕으로 배터리 재활용, 전기차, 신재생 에너지 등에 투자하며 포트폴리오를 확장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "전통 산업과 신기술 결합",
        detail: "해운 사업에서 얻은 현금 흐름을 친환경 기술과 첨단 산업에 재투자합니다.",
        weight: 86,
      },
      {
        label: "글로벌 투자 다각화",
        detail: "이스라엘, 유럽, 북미, 아시아에 걸친 다양한 자산 포트폴리오를 구축했습니다.",
        weight: 82,
      },
      {
        label: "친환경 전환 선도",
        detail: "해운 업계의 탈탄소 규제에 대비해 친환경 연료와 기술에 선제적으로 투자합니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "해운 지분",
        detail: "이스턴 퍼시픽 쉬핑 등 해운 기업의 지분 가치가 핵심 자산입니다.",
        source: "Private company estimates",
      },
      {
        label: "에너지 및 기술 투자",
        detail: "신재생 에너지, 배터리 기술, 전기차 등에 대한 투자 자산이 포트폴리오의 성장 동력입니다.",
        source: "Industry reports",
      },
      {
        label: "해운 시장 사이클",
        detail: "글로벌 해운 운임과 선박 수급이 핵심 해운 자산의 가치를 결정합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Eastern Pacific Shipping reports",
        grade: "primary",
        usage: "선단 규모, 친환경 투자, 사업 현황 확인",
        reliability: "비상장 기업 자료",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "해운 및 에너지 투자 현황 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "eyal-ofer",
    name: "Eyal Ofer",
    koreanName: "에얄 오퍼",
    headline: "조디악 그룹을 이끌며 해운과 부동산으로 글로벌 포트폴리오를 구축한 이스라엘 재벌",
    sector: "복합 자산",
    region: "이스라엘",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "조디악 그룹 지분 + 해운 선단 + 글로벌 부동산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eyal_Ofer_2020.jpg?width=640",
      alt: "Eyal Ofer 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지 새미 오퍼가 설립한 해운 제국에서 조디악 그룹을 물려받아 해운, 부동산, 기술 투자로 글로벌 포트폴리오를 확장한 기업가입니다.",
    coreInsight:
      "해운에서 창출한 현금을 뉴욕, 런던 등 글로벌 프라임 부동산에 투자해 안정적인 현금 흐름과 자본 이득을 동시에 확보했습니다.",
    signalTags: ["해운", "부동산", "이스라엘 재벌", "글로벌 투자"],
    milestones: [
      {
        year: "1949",
        title: "이스라엘 출생",
        body: "해운 기업가 새미 오퍼의 장남으로 태어나 해운과 금융에 대한 조기 교육을 받았습니다.",
        type: "background",
      },
      {
        year: "1970s",
        title: "가족 사업 합류",
        body: "아버지의 해운 사업에 합류해 선대 확장과 신규 시장 개척에 참여했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "형제와 사업 분할",
        body: "동생 이단과 사업을 분할하며 조디악 그룹과 글로벌 홀딩스를 맡아 운영했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "부동산 포트폴리오 확대",
        body: "뉴욕, 런던, 텔아비브 등 글로벌 주요 도시의 프라임 부동산에 대규모 투자했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "해운-부동산 결합",
        detail: "해운 수익을 글로벌 프라임 부동산에 재투자하며 안정적 현금 흐름과 자본 이득을 동시에 추구합니다.",
        weight: 88,
      },
      {
        label: "조디악 선단 최신화",
        detail: "최신 친환경 선박으로 선단을 지속적으로 교체하며 운영 효율성과 규제 대응력을 강화합니다.",
        weight: 82,
      },
      {
        label: "기술 투자",
        detail: "해운 기술, 친환경 에너지, 핀테크 등 유망 기술 분야에 전략적 투자를 진행합니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "조디악 그룹 지분",
        detail: "조디악 그룹의 해운 선단과 운영 수익이 핵심 자산입니다.",
        source: "Private company estimates",
      },
      {
        label: "글로벌 부동산",
        detail: "뉴욕, 런던 등 글로벌 주요 도시의 프라임 부동산 자산이 포트폴리오의 중요한 축입니다.",
        source: "Public market data",
      },
      {
        label: "해운 운임 변동",
        detail: "글로벌 해운 운임과 선박 가치 변동이 핵심 해운 자산의 가치에 영향을 미칩니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Zodiac Group reports",
        grade: "primary",
        usage: "선단 규모, 사업 부문, 투자 현황 확인",
        reliability: "비상장 기업 자료",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "부동산 및 해운 투자 현황 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "he-xiangjian",
    name: "He Xiangjian & family",
    koreanName: "허샹젠 일가",
    headline: "플라스틱 병뚜껑에서 시작해 중국 최대 가전 기업을 건설한 창업자",
    sector: "제조",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "미디어 그룹 지분 + 가전 제조 수익 + 글로벌 확장",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/He_Xiangjian.jpg?width=640",
      alt: "He Xiangjian 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "플라스틱 병뚜껑 제조업에서 시작해 미디어 그룹을 중국 최대 가전 기업으로 성장시키고 로봇, 자동차 부품 등으로 확장한 창업가입니다.",
    coreInsight:
      "제조업의 규모의 경제와 저비용 생산을 기반으로 글로벌 가전 시장에서 가격 경쟁력을 확보하고 자동화·로봇으로 사업을 고도화했습니다.",
    signalTags: ["가전", "제조", "중국 기업", "글로벌 확장"],
    milestones: [
      {
        year: "1942",
        title: "중국 광둥성 출생",
        body: "가난한 농촌 가정에서 태어나 어린 시절부터 다양한 노동을 경험했습니다.",
        type: "background",
      },
      {
        year: "1968",
        title: "플라스틱 병뚜껑 제조 창업",
        body: "23명의 동료 마을 주민들과 함께 5,000위안을 모아 플라스틱 병뚜껑 제조 공장을 설립했습니다.",
        type: "venture",
      },
      {
        year: "1980s",
        title: "가전 사업 진출",
        body: "전기 팬, 에어컨 등 가전 제품 생산에 진출하며 미디어 브랜드를 구축하기 시작했습니다.",
        type: "inflection",
      },
      {
        year: "2000s",
        title: "글로벌 확장과 후계 구축",
        body: "미디어 그룹을 중국 1위 가전 기업으로 성장시키고 2012년 전문 경영인에게 경영권을 이양했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "저비용 대량 생산",
        detail: "중국의 저렴한 제조 비용을 기반으로 대량 생산 체제를 구축해 가격 경쟁력을 확보했습니다.",
        weight: 87,
      },
      {
        label: "제품 다각화",
        detail: "에어컨, 냉장고, 세탁기, 로봇, 자동차 부품으로 사업을 확장하며 리스크를 분산했습니다.",
        weight: 83,
      },
      {
        label: "전문 경영 체제",
        detail: "가족 기업에서 전문 경영인 체제로 전환하며 기업 지배 구조를 선진화했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "미디어 그룹 지분",
        detail: "선전 증시 상장사 미디어 그룹의 대주주 지분 가치가 핵심 자산입니다.",
        source: "Public market data",
      },
      {
        label: "가전 시장 점유율",
        detail: "중국 및 글로벌 가전 시장에서의 점유율과 브랜드 인지도가 기업 가치를 결정합니다.",
        source: "Company earnings",
      },
      {
        label: "로봇·자동화 사업",
        detail: "산업용 로봇과 자동화 설비 사업의 성장이 미래 기업 가치의 성장 동력입니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Midea Group annual reports",
        grade: "primary",
        usage: "사업 부문, 지역별 실적, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "중국 제조업 및 가전 시장 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "abigail-johnson",
    name: "Abigail Johnson",
    koreanName: "애비게일 존슨",
    headline: "피델리티 인베스트먼트를 이끄는 3세 경영자로 글로벌 자산운용의 지평을 넓힌 여성 CEO",
    sector: "금융/투자",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "피델리티 지분 + 자산운용 수수료 + 투자 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Abigail_Johnson_at_Village_Global_(cropped).jpg?width=640",
      alt: "Abigail Johnson 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "할아버지와 아버지에 이어 피델리티 인베스트먼트의 CEO가 되어 글로벌 자산운용사로서의 입지를 강화하고 디지털 자산과 기술 혁신을 주도한 3세 경영자입니다.",
    coreInsight:
      "가족 기업의 안정적 지배 구조 아래 디지털 전환, 암호화폐, 데이터 분석 등 신기술 투자를 통해 전통 자산운용사의 경쟁력을 현대화했습니다.",
    signalTags: ["자산운용", "피델리티", "가족 기업", "디지털 혁신"],
    milestones: [
      {
        year: "1961",
        title: "미국 매사추세츠 출생",
        body: "피델리티 창업자 에드워드 존슨 2세의 손녀로 태어나 경영학을 전공하고 MBA를 취득했습니다.",
        type: "background",
      },
      {
        year: "1988",
        title: "피델리티 합류",
        body: "MBA 졸업 후 피델리티에 애널리스트로 합류해 펀드 매니저로 경력을 쌓았습니다.",
        type: "career",
      },
      {
        year: "2014",
        title: "피델리티 CEO 취임",
        body: "아버지 에드워드 존슨 3세로부터 CEO직을 승계받아 피델리티의 3세 경영자로 취임했습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "디지털 자산과 기술 혁신",
        body: "비트코인, 암호화폐 거래, 디지털 자산 서비스를 도입하고 AI 기반 투자 플랫폼을 구축했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "디지털 전환 선도",
        detail: "전통 자산운용사로서는 선구적으로 암호화폐와 블록체인 기술을 도입하며 미래 투자 트렌드를 선점했습니다.",
        weight: 88,
      },
      {
        label: "비상장 기업의 장기 투자",
        detail: "비상장 가족 기업의 장점을 살려 단기 실적 압박 없이 기술과 인프라에 장기 투자합니다.",
        weight: 84,
      },
      {
        label: "소매 투자자 중심",
        detail: "401(k)와 개인 투자자 중심의 비즈니스 모델로 안정적인 운용 자산 기반을 유지합니다.",
        weight: 79,
      },
    ],
    assetDrivers: [
      {
        label: "피델리티 지분",
        detail: "존슨 가문이 소유한 피델리티의 비상장 지분 가치가 순자산의 핵심입니다.",
        source: "Private company estimates",
      },
      {
        label: "운용 자산(AUM) 규모",
        detail: "피델리티의 운용 자산 규모와 수수료 수익이 기업 가치를 결정합니다.",
        source: "Company reports",
      },
      {
        label: "디지털 자산 사업",
        detail: "암호화폐 거래 및 수탁 서비스 등 신규 디지털 자산 사업의 성장이 기업 가치에 기여합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Fidelity Investments reports",
        grade: "primary",
        usage: "운용 자산, 사업 부문, 디지털 자산 전략 확인",
        reliability: "비상장 기업 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "자산운용 업계 동향 및 디지털 혁신 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "zheng-shuliang",
    name: "Zheng Shuliang & family",
    koreanName: "정수량 일가",
    headline: "알루미늄 제조에서 시작해 중국 최대 비철금속 기업을 일군 기업가",
    sector: "금속/광업",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "중국 훙차오 그룹 지분 + 알루미늄 제조 + 전력 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Zheng_Shuliang.jpg?width=640",
      alt: "Zheng Shuliang 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "중국 산둥성에서 알루미늄 제조업으로 시작해 홍차오 그룹을 세계 최대 알루미늄 기업 중 하나로 성장시킨 전형적인 중국식 제조 창업가입니다.",
    coreInsight:
      "수직 통합 생산 체계와 자체 전력 공급을 통한 비용 우위가 글로벌 알루미늄 시장에서의 경쟁력 핵심입니다.",
    signalTags: ["알루미늄", "제조", "중국 기업", "비철금속"],
    milestones: [
      {
        year: "1945",
        title: "중국 산둥성 출생",
        body: "농촌에서 태어나 제조업에 관심을 가지고 작은 규모의 제조 사업을 시작했습니다.",
        type: "background",
      },
      {
        year: "1994",
        title: "훙차오 그룹 창업",
        body: "알루미늄 제조 기업을 창업하며 중국의 급속한 산업화 수요에 대응했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "규모 확장과 수직 통합",
        body: "알루미늄 제련, 발전소, 원자재 공급을 수직 통합하며 규모의 경제를 구축했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "글로벌 알루미늄 시장 진출",
        body: "세계 최대 알루미늄 생산 기업 중 하나로 성장하며 글로벌 시장에 진출했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "수직 통합 생산",
        detail: "보크사이트, 알루미나, 알루미늄 제련, 발전소를 수직 통합해 생산 비용을 최소화했습니다.",
        weight: 90,
      },
      {
        label: "자체 전력 공급",
        detail: "자체 발전소를 건설해 전력 비용을 낮추며 알루미늄 제련의 핵심 경쟁력을 확보했습니다.",
        weight: 86,
      },
      {
        label: "규모의 경제",
        detail: "대규모 생산 능력을 기반으로 글로벌 시장에서 원가 경쟁력을 유지합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "훙차오 그룹 지분",
        detail: "홍콩 증시 상장사 중국 훙차오 그룹의 대주주 지분 가치가 핵심 자산입니다.",
        source: "Public market data",
      },
      {
        label: "알루미늄 가격",
        detail: "글로벌 알루미늄 가격과 공급망 변동이 기업 수익성에 직접적 영향을 미칩니다.",
        source: "Company earnings",
      },
      {
        label: "중국 제조업 수요",
        detail: "중국의 인프라 투자와 제조업 성장이 알루미늄 수요를 지속적으로 견인합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "China Hongqiao Group annual reports",
        grade: "primary",
        usage: "생산 능력, 재무 성과, 사업 부문 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Metals industry reports",
        grade: "report",
        usage: "알루미늄 시장 공급 및 수요 분석",
        reliability: "업계 분석",
      },
    ],
  },
  {
    slug: "marilyn-simons",
    name: "Marilyn Simons & family",
    koreanName: "메릴린 사이먼스 일가",
    headline: "르네상스 테크놀로지스의 계량 투자 제국을 이어받은 후계자",
    sector: "금융/투자",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "르네상스 테크놀로지스 지분 + 헤지펀드 운용 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Marilyn_Simons.jpg?width=640",
      alt: "Marilyn Simons 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "남편 제임스 사이먼스가 창업한 르네상스 테크놀로지스의 지분을 상속받아 세계에서 가장 성공적인 계량 헤지펀드의 후계자가 된 사례입니다.",
    coreInsight:
      "수학과 과학 기반의 체계적 투자 전략과 엄격한 데이터 중심 접근법이 장기간 초과 수익을 창출하는 핵심 경쟁력입니다.",
    signalTags: ["헤지펀드", "계량 투자", "르네상스", "데이터 중심"],
    milestones: [
      {
        year: "1949",
        title: "미국 출생",
        body: "경제학을 전공하고 학계에서 연구 경력을 쌓은 후 제임스 사이먼스와 결혼했습니다.",
        type: "background",
      },
      {
        year: "1982",
        title: "르네상스 테크놀로지스 설립",
        body: "남편 제임스 사이먼스가 수학자 출신으로 계량 헤지펀드 르네상스 테크놀로지스를 창업했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "메달리언 펀드의 성공",
        body: "메달리언 펀드가 연평균 66%의 수익률을 기록하며 월가의 전설적인 펀드로 자리잡았습니다.",
        type: "inflection",
      },
      {
        year: "2024",
        title: "제임스 사이먼스 사망과 상속",
        body: "제임스 사이먼스 사망 후 가족이 르네상스 테크놀로지스의 지분을 상속받아 경영에 참여했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "계량 투자 철학",
        detail: "인간의 판단보다 수학적 모델과 빅데이터 분석에 기반한 체계적 투자 전략을 고수합니다.",
        weight: 92,
      },
      {
        label: "기밀 유지와 독점성",
        detail: "핵심 투자 전략을 철저히 기밀로 유지하며 펀드의 경쟁 우위를 보호합니다.",
        weight: 85,
      },
      {
        label: "최고 인재 영입",
        detail: "수학자, 물리학자, 암호학자 등 최고 과학 인재를 영입해 연구 중심 문화를 유지합니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "르네상스 지분",
        detail: "르네상스 테크놀로지스의 지분 가치가 가족 자산의 핵심입니다.",
        source: "Private company estimates",
      },
      {
        label: "메달리언 펀드 수익",
        detail: "메달리언 펀드의 지속적 초과 수익이 운용사 전체 가치를 높입니다.",
        source: "Industry reports",
      },
      {
        label: "개인 투자 포트폴리오",
        detail: "헤지펀드 수익을 바탕으로 한 개인 투자 포트폴리오가 자산 다각화에 기여합니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "Renaissance Technologies reports",
        grade: "primary",
        usage: "운용 전략, 펀드 구조, 지분 현황 확인",
        reliability: "비상장 기업 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "헤지펀드 성과 및 계량 투자 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "robert-pera",
    name: "Robert Pera",
    koreanName: "로버트 페라",
    headline: "와이파이 장비 시장의 숨은 강자로 유비퀴티를 창업한 기술 엔지니어",
    sector: "기술",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "유비퀴티 지분 + 통신 장비 수익 + 글로벌 유통망",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Robert_Pera.jpg?width=640",
      alt: "Robert Pera 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "애플 엔지니어 출신으로 와이파이 통신 장비 기업 유비퀴티를 창업해 무선 네트워크 인프라 시장에서 글로벌 리더로 성장시킨 사례입니다.",
    coreInsight:
      "고성능 저가 제품 전략으로 기존 통신 장비 시장의 판도를 바꾸고, 온라인 직판 모델로 유통 비용을 극도로 낮춘 점이 핵심 성공 요인입니다.",
    signalTags: ["네트워크", "통신 장비", "와이파이", "유비퀴티"],
    milestones: [
      {
        year: "1978",
        title: "미국 출생",
        body: "엔지니어링에 관심을 가지고 애플에서 와이파이 엔지니어로 근무하며 통신 기술을 깊이 있게 학습했습니다.",
        type: "background",
      },
      {
        year: "2005",
        title: "유비퀴티 창업",
        body: "애플을 퇴사하고 무선 광대역 장비 전문 기업 유비퀴티 네트웍스를 창업했습니다.",
        type: "venture",
      },
      {
        year: "2011",
        title: "뉴욕 증시 상장",
        body: "유비퀴티를 나스닥에 상장시키며 자본 시장에서 기업 가치를 인정받았습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "글로벌 네트워크 장비 시장 확장",
        body: "원격 근무 수요 증가와 디지털 전환으로 네트워크 장비 수요가 급증하며 기업 가치가 크게 상승했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "고성능 저가 전략",
        detail: "기존 통신 장비 대비 혁신적으로 낮은 가격에 고성능 제품을 제공해 시장 점유율을 확대했습니다.",
        weight: 90,
      },
      {
        label: "온라인 직판 모델",
        detail: "전통적인 유통 채널을 배제하고 온라인 직판을 통해 유통 비용을 극도로 절감했습니다.",
        weight: 86,
      },
      {
        label: "지속적 기술 혁신",
        detail: "와이파이, UWB, IoT 등 차세대 무선 통신 기술에 지속적으로 투자하며 제품 포트폴리오를 확장합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "유비퀴티 지분",
        detail: "나스닥 상장사 유비퀴티의 대주주 지분 가치가 순자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "네트워크 장비 수요",
        detail: "글로벌 인터넷 인프라 확대와 원격 근무 수요 증가가 제품 수요를 지속적으로 견인합니다.",
        source: "Company earnings",
      },
      {
        label: "신규 시장 진출",
        detail: "기업용 네트워크, IoT 등 신규 시장 진출 성과가 미래 기업 가치의 성장 동력입니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Ubiquiti annual reports",
        grade: "primary",
        usage: "제품 부문, 지역별 매출, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "네트워크 장비 시장 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "phil-knight",
    name: "Phil Knight & family",
    koreanName: "필 나이트 일가",
    headline: "일본 신발을 미국에 수입해 세계 최대 스포츠 브랜드를 창조한 전설적 기업가",
    sector: "패션/리테일",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "나이키 지분 + 글로벌 브랜드 가치 + 스포츠 마케팅 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Phil_Knight_with_Tom_Matthyssens_in_Universal_Studios_Orlando_1999_(cropped).jpg?width=640",
      alt: "Phil Knight 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "회계사 겸 대학 육상 선수 출신으로 일본 운동화를 수입해 나이키를 창립하고 세계에서 가장 영향력 있는 스포츠 브랜드로 성장시킨 전설적인 기업가입니다.",
    coreInsight:
      "운동선수와의 엔드로스먼트 계약과 스토리텔링 마케팅으로 제품 이상의 문화적 영향력을 가진 브랜드를 구축했습니다.",
    signalTags: ["스포츠", "브랜드", "마케팅", "글로벌 패션"],
    milestones: [
      {
        year: "1938",
        title: "미국 오리건 출생",
        body: "대학에서 육상 선수로 활동하고 스탠퍼드 MBA를 취득한 후 비즈니스 감각을 키웠습니다.",
        type: "background",
      },
      {
        year: "1964",
        title: "블루 리본 스포츠 설립",
        body: "일본의 오니츠카 타이거 신발을 미국에 수입하는 블루 리본 스포츠를 설립했습니다.",
        type: "venture",
      },
      {
        year: "1971",
        title: "나이키 브랜드 론칭",
        body: "자체 브랜드 나이키를 론칭하고 스우시 로고와 '저스트 두 잇'이라는 브랜드 아이덴티티를 확립했습니다.",
        type: "inflection",
      },
      {
        year: "1980",
        title: "나이키 IPO와 글로벌 확장",
        body: "나이키를 뉴욕 증시에 상장하며 글로벌 스포츠 브랜드로의 도약을 시작했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "선수 엔드로스먼트",
        detail: "마이클 조던, 타이거 우즈 등 스포츠 아이콘과의 장기 계약으로 브랜드 스토리를 구축했습니다.",
        weight: 92,
      },
      {
        label: "아웃소싱 생산",
        detail: "생산을 아시아 국가에 아웃소싱해 비용을 최적화하고 마케팅과 디자인에 집중했습니다.",
        weight: 84,
      },
      {
        label: "브랜드 스토리텔링",
        detail: "제품 판매를 넘어 도전과 극복의 스토리를 전달하는 브랜드 마케팅으로 문화적 영향력을 확대했습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "나이키 지분",
        detail: "나이키의 상장 지분 가치가 필 나이트 가족 자산의 대부분을 차지합니다.",
        source: "Public market data",
      },
      {
        label: "글로벌 브랜드 가치",
        detail: "나이키의 세계적 브랜드 인지도와 충성도가 지속적인 매출과 마진을 뒷받침합니다.",
        source: "Brand valuation reports",
      },
      {
        label: "스포츠웨어 시장 성장",
        detail: "글로벌 스포츠웨어와 라이프스타일 신발 시장의 지속적 성장이 기업 가치를 견인합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Nike annual reports",
        grade: "primary",
        usage: "브랜드 부문, 지역별 실적, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "스포츠 산업 및 브랜드 마케팅 동향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "michal-strnad",
    name: "Michal Strnad",
    koreanName: "미할 스트르나드",
    headline: "무기 제조 기업을 물려받아 유럽 방위 산업의 핵심 기업으로 성장시킨 젊은 CEO",
    sector: "제조",
    region: "체코",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "체코슬로바크 그룹 지분 + 방위 산업 수익 + 군수·제조 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Michal_Strnad.jpg?width=640",
      alt: "Michal Strnad 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지가 세운 체코슬로바크 그룹을 물려받아 유럽 방위·군수 산업에서 급성장한 젊은 CEO로, 지정학적 긴장 속에서 기업 가치를 크게 높인 사례입니다.",
    coreInsight:
      "우크라이나 전쟁 이후 유럽 국가들의 국방비 증액이 방위 산업 수요를 폭발적으로 증가시키며 기업 가치가 급상승했습니다.",
    signalTags: ["방위 산업", "군수", "유럽", "가족 기업"],
    milestones: [
      {
        year: "1993",
        title: "체코 출생",
        body: "아버지 야로슬라프 스트르나드가 창업한 체코슬로바크 그룹에서 성장하며 사업을 배웠습니다.",
        type: "background",
      },
      {
        year: "2010s",
        title: "경영 승계와 확장",
        body: "아버지로부터 체코슬로바크 그룹의 경영권을 승계받아 방위 산업 포트폴리오를 확장했습니다.",
        type: "career",
      },
      {
        year: "2022",
        title: "우크라이나 전쟁과 방위 수요 급증",
        body: "우크라이나 전쟁 이후 유럽 국가들의 군비 증강으로 방위 산업 수요가 폭발적으로 증가했습니다.",
        type: "inflection",
      },
      {
        year: "2023",
        title: "글로벌 방위 기업으로 도약",
        body: "체코슬로바크 그룹이 유럽 주요 방위 기업으로 인정받으며 기업 가치와 개인 자산이 크게 상승했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "방위 산업 집중",
        detail: "소형 무기, 탄약, 군용 차량 등 방위 산업에 특화된 제품 포트폴리오를 구축했습니다.",
        weight: 88,
      },
      {
        label: "인수합병을 통한 성장",
        detail: "관련 기업을 인수합병하며 생산 능력과 제품 범위를 지속적으로 확장했습니다.",
        weight: 84,
      },
      {
        label: "유럽 방위 시장 집중",
        detail: "NATO 및 유럽 연합의 방위비 증액 추세를 활용해 유럽 시장에 집중했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "체코슬로바크 그룹 지분",
        detail: "비상장 기업인 체코슬로바크 그룹의 지분 가치가 순자산의 핵심입니다.",
        source: "Private company estimates",
      },
      {
        label: "방위 산업 수요",
        detail: "유럽의 지정학적 긴장과 국방비 증액이 방위 산업 제품 수요를 지속적으로 증가시킵니다.",
        source: "Industry reports",
      },
      {
        label: "정부 계약",
        detail: "유럽 각국 정부와의 방위 물품 공급 계약이 안정적인 수익 기반을 제공합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Czechoslovak Group reports",
        grade: "primary",
        usage: "사업 부문, 방위 계약, 재무 현황 확인",
        reliability: "비상장 기업 자료",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Defense industry reports",
        grade: "report",
        usage: "유럽 방위 산업 동향 및 시장 분석",
        reliability: "업계 분석",
      },
    ],
  },
  {
    slug: "lakshmi-mittal",
    name: "Lakshmi Mittal",
    koreanName: "락슈미 미탈",
    headline: "철강 산업의 글로벌 통합을 주도하며 아르셀로미탈을 창조한 철강의 제왕",
    sector: "금속/광업",
    region: "인도",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "아르셀로미탈 지분 + 철강 제조 수익 + 글로벌 통합 시너지",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshmi_Mittal_LM.jpg?width=640",
      alt: "Lakshmi Mittal 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "인도 가족 철강 사업에서 시작해 공격적인 인수합병을 통해 세계 최대 철강 기업 아르셀로미탈을 창조한 글로벌 철강 산업의 상징적 인물입니다.",
    coreInsight:
      "불황기에 저평가된 철강 자산을 인수하고 통합 시너지를 창출하는 인수 후 통합 능력이 글로벌 철강 지배력의 핵심이었습니다.",
    signalTags: ["철강", "제조", "M&A", "글로벌 통합"],
    milestones: [
      {
        year: "1950",
        title: "인도 라자스탄 출생",
        body: "철강 사업을 운영하는 가문에서 태어나 캘커타 대학에서 상업학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1976",
        title: "가족 사업 합류",
        body: "가족이 운영하는 철강 사업에 합류해 인도네시아에 첫 해외 철강 공장을 설립하며 국제화를 시작했습니다.",
        type: "career",
      },
      {
        year: "2004",
        title: "악토르 사에 인수",
        body: "유럽 철강 기업 악토르 사에(LNM 그룹)를 인수하며 글로벌 철강 기업으로 도약했습니다.",
        type: "inflection",
      },
      {
        year: "2006",
        title: "아르셀로 합병으로 세계 1위 등극",
        body: "룩셈부르크의 아르셀로를 적대적 M&A로 합병하며 아르셀로미탈을 창립, 세계 최대 철강 기업으로 올라섰습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "역사이클 인수 전략",
        detail: "철강 업계 불황기에 저평가된 자산을 인수해 경기 회복 시 높은 수익을 창출했습니다.",
        weight: 92,
      },
      {
        label: "글로벌 통합 시너지",
        detail: "인수한 기업들을 단일 글로벌 운영 체계로 통합해 구매, 생산, 판매의 효율성을 극대화했습니다.",
        weight: 86,
      },
      {
        label: "원가 경쟁력 확보",
        detail: "철광석, 석탄 등 원자재 공급망을 통합하고 신흥국의 저렴한 생산 기지를 활용했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "아르셀로미탈 지분",
        detail: "글로벌 철강 기업 아르셀로미탈의 상장 지분 가치가 순자산의 핵심입니다.",
        source: "Public market data",
      },
      {
        label: "철강 가격 사이클",
        detail: "글로벌 철강 가격 변동이 기업 수익성과 주가에 직접적 영향을 미칩니다.",
        source: "Company earnings",
      },
      {
        label: "글로벌 수요",
        detail: "중국, 인도 등 신흥국의 인프라 투자와 건설 수요가 철강 수요를 견인합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "ArcelorMittal annual reports",
        grade: "primary",
        usage: "철강 생산, 지역별 실적, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "글로벌 금융 데이터",
        grade: "index",
        usage: "일일 자산 변동 보조 확인",
        reliability: "외부 추정치",
      },
    ],
  },
  {
    slug: "elaine-marshall",
    name: "Elaine Marshall & family",
    koreanName: "일레인 마셜 일가",
    headline: "코크 인더스트리의 대주주로서 다각화된 자산 포트폴리오를 보유한 상속자",
    sector: "복합 자산",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "상속 지분 + 복합기업 배당 + 장기 보유 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Elaine_Marshall.jpg?width=640",
      alt: "Elaine Marshall 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "코크 인더스트리의 대주주로서 프레드릭 코크의 상속 재산을 기반으로 다각화된 자산 포트폴리오를 구축한 사례입니다.",
    coreInsight:
      "비상장 복합기업의 지분을 장기 보유하며 안정적인 배당 수익과 자본 이득을 동시에 누리는 구조가 부의 핵심입니다.",
    signalTags: ["상속", "코크 인더스트리", "복합기업", "장기 보유"],
    milestones: [
      {
        year: "1942",
        title: "미국 캔자스 출생",
        body: "프레드릭 코크의 딸로 태어나 코크 가문의 일원으로 성장했습니다.",
        type: "background",
      },
      {
        year: "1967",
        title: "에너지 기업 상속",
        body: "아버지의 사업 자산을 상속받아 코크 인더스트리의 주요 주주가 되었습니다.",
        type: "wealth",
      },
      {
        year: "1980s",
        title: "코크 인더스트리 지분 확대",
        body: "형제들과 함께 코크 인더스트리의 지배 구조를 공고히 하며 비상장 기업의 장기 가치 성장에 집중했습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "안정적 부의 유지",
        body: "코크 인더스트리의 지속적 성장과 다각화된 사업 포트폴리오가 자산 가치를 안정적으로 유지하게 했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "비상장 지분 장기 보유",
        detail: "코크 인더스트리의 비상장 지분을 매각 없이 장기 보유하며 안정적인 수익을 창출합니다.",
        weight: 90,
      },
      {
        label: "자산 다각화",
        detail: "에너지, 화학, 원자재 등 다양한 산업에 걸친 사업 포트폴리오가 리스크를 분산합니다.",
        weight: 82,
      },
      {
        label: "재투자 문화",
        detail: "코크 인더스트리의 전통인 이익 재투자 전략이 장기적 성장의 기반이 되고 있습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "코크 인더스트리 지분",
        detail: "비상장 복합기업의 지분 가치가 순자산의 핵심을 이룹니다.",
        source: "Company estimates",
      },
      {
        label: "배당 수익",
        detail: "코크 인더스트리의 안정적 배당 정책이 지속적인 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
      {
        label: "민간 자산 가치",
        detail: "비상장 기업의 회계 가치와 시장 추정치가 자산 가치 변동의 주요 요인입니다.",
        source: "Private market data",
      },
    ],
    sources: [
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Koch Industries reports",
        grade: "primary",
        usage: "사업 부문 및 재무 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "상속 구조와 자산 흐름 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "shiv-nadar",
    name: "Shiv Nadar",
    koreanName: "시브 나다르",
    headline: "인도 IT 서비스 산업의 선구자로 HCL을 글로벌 기술 기업으로 성장시킨 창업자",
    sector: "기술",
    region: "인도",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + IT 서비스 수익 + 교육·자선 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiv_Nadar.png?width=640",
      alt: "Shiv Nadar 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "인도 IT 산업의 태동기에 마이크로컴퓨터 제조로 시작해 글로벌 IT 서비스 및 컨설팅 기업으로 성장시킨 창업 사례입니다.",
    coreInsight:
      "제품 중심에서 서비스와 솔루션 중심으로 비즈니스 모델을 전환하며 글로벌 IT 아웃소싱 물결에 편승한 점이 성장의 핵심입니다.",
    signalTags: ["IT 서비스", "인도 기술", "HCL", "교육 투자"],
    milestones: [
      {
        year: "1945",
        title: "인도 타밀나두주 출생",
        body: "엔지니어링 교육을 마치고 초기 경력을 쌓은 후 기술 창업의 길을 선택했습니다.",
        type: "background",
      },
      {
        year: "1976",
        title: "HCL 창업",
        body: "6명의 엔지니어와 함께 마이크로컴퓨터 제조 회사로 HCL을 설립했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "글로벌 IT 서비스로 전환",
        body: "하드웨어 중심에서 IT 서비스와 컨설팅 중심으로 비즈니스 모델을 전환하며 글로벌 시장에 진출했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "글로벌 IT 기업으로 성장",
        body: "HCL은 글로벌 IT 서비스 기업으로 자리매김하며 시가총액과 창업자 지분 가치가 크게 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "비즈니스 모델 전환",
        detail: "하드웨어 제조에서 IT 서비스, 소프트웨어 솔루션으로 사업 영역을 확장했습니다.",
        weight: 88,
      },
      {
        label: "글로벌 인력 활용",
        detail: "인도의 엔지니어링 인재를 글로벌 시장에 연결하는 비용 효율적 인력 구조를 구축했습니다.",
        weight: 85,
      },
      {
        label: "R&D 투자",
        detail: "지속적인 연구개발 투자로 새로운 기술 영역에서의 경쟁력을 유지했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "HCL 테크놀로지스 지분",
        detail: "상장 기업인 HCL의 지분 가치가 순자산의 핵심 축입니다.",
        source: "Company filings",
      },
      {
        label: "IT 서비스 수익",
        detail: "글로벌 IT 아웃소싱과 디지털 전환 수요가 기업 가치 성장을 견인합니다.",
        source: "Company earnings",
      },
      {
        label: "교육·자선 자산",
        detail: "설립한 교육 기관과 자선 재단의 자산이 부의 다각화에 기여합니다.",
        source: "Public records",
      },
    ],
    sources: [
      {
        name: "HCL Technologies annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Business media",
        grade: "media",
        usage: "창업 스토리와 기업 전환 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "henry-samueli",
    name: "Henry Samueli",
    koreanName: "헨리 새뮤얼리",
    headline: "반도체 설계 혁신으로 브로드컴을 글로벌 칩 제국으로 만든 공동 창업자",
    sector: "기술",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 반도체 로열티 + M&A 자본 이득",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Henry_Samueli%2C_Bush_and_Anaheim_Ducks_%28cropped%29.jpg?width=640",
      alt: "Henry Samueli 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "통신용 반도체 기술을 기반으로 브로드컴을 설립하고 M&A를 통해 글로벌 반도체 기업으로 성장시킨 엔지니어 출신 창업자 사례입니다.",
    coreInsight:
      "핵심 통신 반도체 IP를 기반으로 공격적인 M&A를 통해 제품 포트폴리오를 확장하며 규모의 경제를 달성한 점이 핵심입니다.",
    signalTags: ["반도체", "통신칩", "M&A", "브로드컴"],
    milestones: [
      {
        year: "1954",
        title: "캐나다 출생, 미국 성장",
        body: "유대인 가정에서 태어나 UCLA에서 전기공학 박사 학위를 받고 반도체 연구자로 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1991",
        title: "브로드컴 공동 창업",
        body: "헨리 니콜라스 3세와 함께 통신용 고속 반도체 설계 회사를 창업했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "광범위한 M&A 전략",
        body: "수많은 반도체 기업을 인수하며 제품 포트폴리오를 통신, 네트워킹, 모바일로 확장했습니다.",
        type: "scale",
      },
      {
        year: "2018",
        title: "아바고와의 대형 합병",
        body: "브로드컴은 아바고 테크놀로지스에 인수합병되어 글로벌 반도체 5위권 기업으로 재편됐습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "IP 기반 설계 우위",
        detail: "핵심 통신 반도체 IP를 자체 개발하여 기술 장벽을 구축했습니다.",
        weight: 90,
      },
      {
        label: "M&A를 통한 확장",
        detail: "자금력을 바탕으로 경쟁사와 보완 기술 기업을 인수하며 시장 지배력을 강화했습니다.",
        weight: 86,
      },
      {
        label: "장기 보유와 재투자",
        detail: "상장 이후에도 창업자 지분을 매각하지 않고 장기 보유하며 자산 가치를 극대화했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "브로드컴 지분",
        detail: "공동 창업자로서 보유한 브로드컴 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "반도체 수요 사이클",
        detail: "데이터센터, 통신 인프라 수요가 반도체 기업 가치에 직접적 영향을 미칩니다.",
        source: "Company earnings",
      },
      {
        label: "스포츠 구단 자산",
        detail: "아나하임 덕스(NHL) 구단주로서 보유한 스포츠 자산이 부의 다각화에 기여합니다.",
        source: "Public records",
      },
    ],
    sources: [
      {
        name: "Broadcom annual reports",
        grade: "primary",
        usage: "사업 부문, 지분 구조, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "M&A 전략과 기업 성장 역사 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "melinda-french-gates",
    name: "Melinda French Gates",
    koreanName: "멀린다 프렌치 게이츠",
    headline: "마이크로소프트 지분과 자선 활동으로 글로벌 영향력을 확장한 여성 리더",
    sector: "기술",
    region: "미국",
    generation: "Heir-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "이혼 분할 지분 + 자선 투자 + 자본 이득",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Melinda_Gates_2014.jpg?width=640",
      alt: "Melinda French Gates 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "마이크로소프트 초기 직원에서 빌 게이츠와의 결혼을 통해 확보한 지분을 기반으로 자선과 투자 활동을 통해 독자적 자산을 구축한 사례입니다.",
    coreInsight:
      "이혼 후에도 분할 지분을 효과적으로 관리하며 피보탈 벤처스를 통해 여성 권리와 건강 분야에 전략적 투자를 이어가고 있습니다.",
    signalTags: ["마이크로소프트", "자선", "성평등", "투자"],
    milestones: [
      {
        year: "1964",
        title: "미국 텍사스 출생",
        body: "듀크 대학에서 컴퓨터 공학과 경제학을 전공하고 마이크로소프트에 입사했습니다.",
        type: "background",
      },
      {
        year: "1994",
        title: "빌 게이츠와 결혼",
        body: "마이크로소프트에서 제품 매니저로 근무하던 중 빌 게이츠와 결혼했습니다.",
        type: "career",
      },
      {
        year: "2000",
        title: "빌&멀린다 게이츠 재단 설립",
        body: "세계 최대 규모의 자선 재단을 공동 설립하며 글로벌 건강과 교육에 집중 투자했습니다.",
        type: "inflection",
      },
      {
        year: "2021",
        title: "이혼과 자산 분할",
        body: "빌 게이츠와의 이혼 과정에서 상당한 마이크로소프트 지분과 투자 포트폴리오를 분할받았습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "자선 중심 자본 배분",
        detail: "재단을 통해 사회 문제 해결에 자금을 배분하며 동시에 세금 효율성을 확보했습니다.",
        weight: 88,
      },
      {
        label: "다각화된 투자",
        detail: "피보탈 벤처스를 통해 기술, 여성 권리, 건강 분야에 전략적 투자를 진행합니다.",
        weight: 80,
      },
      {
        label: "지분 장기 보유",
        detail: "마이크로소프트 지분의 일부를 장기 보유하며 기술 기업의 가치 성장에 참여했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "마이크로소프트 지분",
        detail: "이혼 분할로 취득한 마이크로소프트 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "투자 포트폴리오",
        detail: "피보탈 벤처스를 통한 다양한 스타트업 투자와 자선 활동이 자산 배분에 영향을 미칩니다.",
        source: "Public records",
      },
      {
        label: "주식 시장 변동",
        detail: "기술주 시장의 변동이 지분 가치 평가에 직접적 영향을 미칩니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "Microsoft filings",
        grade: "primary",
        usage: "지분 규모와 변동 사항 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Gates Foundation reports",
        grade: "primary",
        usage: "자선 활동 규모와 방향성 확인",
        reliability: "공식 자료",
      },
    ],
  },
  {
    slug: "stefan-quandt",
    name: "Stefan Quandt",
    koreanName: "슈테판 크반트",
    headline: "BMW의 주요 주주로서 자동차 산업의 장기 가치에 베팅한 3세대 상속자",
    sector: "자동차",
    region: "독일",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "상속 지분 + BMW 배당 + 민간 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blickachsen-10-Eroeffnung-Stefan-Quandt-2015-HG-789_%28cropped%29.jpg?width=640",
      alt: "Stefan Quandt 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "크반트 가문의 3세대 상속자로 BMW 그룹의 주요 주주이자 감독위원회 위원으로 활동하며 자동차 산업의 장기 가치를 축적하고 있습니다.",
    coreInsight:
      "BMW 지분의 장기 보유와 안정적인 배당 수익을 기반으로 독일 제조업의 가치를 개인 자산으로 연결한 사례입니다.",
    signalTags: ["BMW", "자동차", "상속", "독일 제조업"],
    milestones: [
      {
        year: "1966",
        title: "독일 출생",
        body: "크반트 가문의 일원으로 태어나 경제학을 전공하고 가문의 사업에 참여했습니다.",
        type: "background",
      },
      {
        year: "1990s",
        title: "BMW 지분 상속",
        body: "아버지 헤르베르트 크반트로부터 BMW의 주요 지분을 상속받았습니다.",
        type: "wealth",
      },
      {
        year: "2000s",
        title: "BMW 감독위원회 활동",
        body: "BMW 그룹의 감독위원회 위원으로 경영 감독과 장기 전략 수립에 참여했습니다.",
        type: "career",
      },
      {
        year: "2020s",
        title: "전기차 전환과 배당 성장",
        body: "BMW의 전기차 전환 전략이 성공을 거두며 배당 수익과 지분 가치가 지속 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "장기 지분 보유",
        detail: "BMW 지분을 수십년간 매각 없이 유지하며 배당과 자본 이득을 동시에 누리고 있습니다.",
        weight: 90,
      },
      {
        label: "감독위원회 영향력",
        detail: "감독위원회 위원으로서 경영 의사결정에 간접적 영향을 행사합니다.",
        weight: 82,
      },
      {
        label: "민간 자산 다각화",
        detail: "BMW 외에 다양한 민간 투자와 자선 활동을 통해 자산 포트폴리오를 다각화했습니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "BMW 지분",
        detail: "BMW 그룹의 상당한 지분 가치가 순자산의 절대적 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "배당 수익",
        detail: "BMW의 안정적인 배당 정책이 지속적인 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
      {
        label: "자동차 시장 순환",
        detail: "글로벌 자동차 수요와 전기차 전환이 기업 가치 평가에 영향을 미칩니다.",
        source: "Industry data",
      },
    ],
    sources: [
      {
        name: "BMW annual reports",
        grade: "primary",
        usage: "지배 구조, 지분 현황, 배당 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "German business media",
        grade: "media",
        usage: "크반트 가문과 경영 참여 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "reinhold-wuerth",
    name: "Reinhold Wuerth & family",
    koreanName: "라인홀트 뷔르트 일가",
    headline: "볼트 하나로 글로벌 제국을 세운 독일 제조업의 아이콘",
    sector: "제조",
    region: "독일",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "비상장 가족기업 지분 + 제조업 마진 + 글로벌 유통망",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Reinhold_W%C3%BCrth.jpg?width=640",
      alt: "Reinhold Wuerth 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "2인 기업에서 출발해 조립·체결 기술 전문 글로벌 기업으로 성장시키며 비상장 가족기업의 가치를 극대화한 사례입니다.",
    coreInsight:
      "전문성과 틈새 시장 장악, 그리고 글로벌 유통망 구축을 통해 단순 제조업에서 높은 마진과 안정적 성장을 동시에 달성했습니다.",
    signalTags: ["제조", "가족기업", "틈새 시장", "독일 중공업"],
    milestones: [
      {
        year: "1935",
        title: "독일 뷔르템베르크 출생",
        body: "기계 공학을 전공하고 아버지의 작은 나사 도매 회사에서 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1954",
        title: "뷔르트 그룹 인수",
        body: "2명의 직원만 있던 아버지의 회사를 인수해 본격적인 사업 확장을 시작했습니다.",
        type: "career",
      },
      {
        year: "1960s-1980s",
        title: "글로벌 확장",
        body: "유럽 전역으로 유통망을 확장하고 조립·체결 기술 분야의 시장 리더로 자리잡았습니다.",
        type: "scale",
      },
      {
        year: "2000s",
        title: "글로벌 체결 기술 리더",
        body: "80개국 이상에 진출한 글로벌 기업으로 성장하며 비상장 가족기업의 모범 사례로 평가받습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "틈새 시장 집중",
        detail: "조립·체결 기술이라는 특화 분야에 집중하여 글로벌 시장 지배력을 확보했습니다.",
        weight: 91,
      },
      {
        label: "글로벌 유통망",
        detail: "직접 유통망을 구축하여 고객 접점과 서비스 품질을 동시에 관리합니다.",
        weight: 86,
      },
      {
        label: "비상장 가족 경영",
        detail: "비상장 상태를 유지하며 장기적 투자와 안정적 경영을 지속할 수 있는 구조를 만들었습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "뷔르트 그룹 지분",
        detail: "비상장 가족기업의 지분 가치가 순자산의 대부분을 차지합니다.",
        source: "Company estimates",
      },
      {
        label: "글로벌 유통 수익",
        detail: "80개국 이상의 유통망에서 발생하는 안정적인 매출과 마진이 핵심 수익원입니다.",
        source: "Company reports",
      },
      {
        label: "자체 부동산 자산",
        detail: "글로벌 물류 센터와 사무실 등 보유 부동산이 자산 가치의 보조 요소입니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Wuerth Group reports",
        grade: "primary",
        usage: "사업 구조, 재무 성과, 글로벌 확장 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "German business media",
        grade: "media",
        usage: "가족기업 경영 철학과 역사 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "lyndal-stephens-greth",
    name: "Lyndal Stephens Greth & family",
    koreanName: "린달 스티븐스 그레스 일가",
    headline: "미국 셰일 혁명의 수혜자로 엔데버 에너지 자원을 상속받은 에너지 재벌",
    sector: "에너지",
    region: "미국",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "상속 지분 + 에너지 자원 로열티 + M&A 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lyndal_Stephens_Greth.jpg?width=640",
      alt: "Lyndal Stephens Greth 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아버지가 설립한 엔데버 에너지 리소스를 상속받아 미국 셰일 혁명의 핵심 자산을 보유하게 된 에너지 재벌 사례입니다.",
    coreInsight:
      "퍼미안 분지의 핵심 자산을 상속받아 셰일 혁명의 수혜자가 되었으며, 장기 보유 전략으로 자산 가치를 극대화했습니다.",
    signalTags: ["에너지", "셰일가스", "상속", "미국 에너지"],
    milestones: [
      {
        year: "1973",
        title: "미국 출생",
        body: "에너지 기업가인 아버지 스티븐스의 가정에서 태어나 에너지 산업에 대한 이해를 키웠습니다.",
        type: "background",
      },
      {
        year: "2013",
        title: "엔데버 에너지 상속",
        body: "아버지의 사망 후 엔데버 에너지 리소스의 경영권과 지분을 상속받았습니다.",
        type: "wealth",
      },
      {
        year: "2020s",
        title: "셰일 혁명의 수혜",
        body: "퍼미안 분지의 셰일가스 생산 증가와 에너지 가격 상승이 자산 가치를 크게 끌어올렸습니다.",
        type: "scale",
      },
      {
        year: "2024",
        title: "전략적 기업 매각",
        body: "엔데버 에너지 리소스의 일부 지분을 전략적으로 매각하며 자산 유동화를 진행했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "핵심 자산 장기 보유",
        detail: "퍼미안 분지의 핵심 에너지 자산을 장기 보유하며 가치 상승을 기다렸습니다.",
        weight: 88,
      },
      {
        label: "전략적 유동화",
        detail: "적절한 시점에 자산 일부를 매각하여 유동성을 확보하고 리스크를 분산했습니다.",
        weight: 80,
      },
      {
        label: "에너지 가격 헤지",
        detail: "원유 및 가스 가격 변동성에 대비한 헤지 전략으로 수익 안정성을 확보했습니다.",
        weight: 72,
      },
    ],
    assetDrivers: [
      {
        label: "엔데버 에너지 지분",
        detail: "퍼미안 분지 핵심 자산을 보유한 엔데버 에너지의 지분 가치가 핵심입니다.",
        source: "Company reports",
      },
      {
        label: "원유 및 가스 가격",
        detail: "글로벌 에너지 가격 변동이 자산 가치에 직접적 영향을 미칩니다.",
        source: "Commodity markets",
      },
      {
        label: "생산량 증대",
        detail: "셰일가스 생산 기술 발전과 생산량 증가가 수익성에 긍정적 영향을 줍니다.",
        source: "Industry data",
      },
    ],
    sources: [
      {
        name: "Endeavor Energy Resources reports",
        grade: "primary",
        usage: "자산 규모, 생산량, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Energy industry media",
        grade: "media",
        usage: "셰일 산업 동향과 자산 가치 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "len-blavatnik",
    name: "Len Blavatnik",
    koreanName: "렌 블라바트닉",
    headline: "소련 출신 이민자가 미국 산업 자산을 재편하며 만든 복합기업 제국",
    sector: "복합 자산",
    region: "미국",
    generation: "Builder-acquirer",
    rankLabel: "Top wealth cohort",
    wealthModel: "민간 기업 지분 + 에너지·미디어 자산 + 투자 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Len_Blavatnik.png?width=640",
      alt: "Len Blavatnik 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소련에서 미국으로 이민와 액세스 인더스트리를 설립하고 에너지, 미디어, 화학 등 다양한 산업 자산을 인수하며 부를 축적한 사례입니다.",
    coreInsight:
      "경제적 변혁기에 저평가된 산업 자산을 인수하고 가치를 재평가받는 전략이 부의 핵심 성장 동력이었습니다.",
    signalTags: ["복합기업", "에너지", "미디어", "이민자 창업"],
    milestones: [
      {
        year: "1957",
        title: "소련 우크라이나 출생",
        body: "모스크바 대학에서 토목공학을 전공하고 미국으로 이민했습니다.",
        type: "background",
      },
      {
        year: "1986",
        title: "액세스 인더스트리 설립",
        body: "미국에서 다양한 산업에 투자하는 지주회사를 설립했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "러시아 에너지 자산 투자",
        body: "소련 붕괴 이후 러시아의 에너지와 화학 자산을 저가에 인수하며 기하급수적 수익을 올렸습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "미디어·엔터테인먼트 확장",
        body: "워너 뮤직 그룹을 인수하며 미디어 산업으로 포트폴리오를 다각화했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "저평가 자산 발굴",
        detail: "경제적 변혁기의 저평가된 산업 자산을 식별하고 선제적으로 투자했습니다.",
        weight: 90,
      },
      {
        label: "산업 간 자본 배분",
        detail: "에너지, 화학, 미디어 등 서로 다른 산업 간 자본을 유연하게 이동시켰습니다.",
        weight: 84,
      },
      {
        label: "비상장 지분 전략",
        detail: "핵심 자산을 비상장으로 유지하며 시장 변동성에서 자유로운 장기 투자를 추구했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "액세스 인더스트리 지분",
        detail: "민간 지주회사의 다양한 자산 포트폴리오가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "워너 뮤직 그룹",
        detail: "상장된 워너 뮤직의 지분 가치가 공개 시장에서 평가받는 주요 자산입니다.",
        source: "Public market data",
      },
      {
        label: "에너지·화학 자산",
        detail: "역사적으로 축적한 에너지와 화학 분야 자산이 안정적 현금 흐름을 창출합니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Access Industries reports",
        grade: "primary",
        usage: "투자 포트폴리오와 자산 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "기업 인수 이력과 투자 전략 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "susanne-klatten",
    name: "Susanne Klatten",
    koreanName: "수잔 클라텐",
    headline: "BMW의 최대 개인 주주이자 독일 제약·화학 산업의 여성 경영자",
    sector: "자동차",
    region: "독일",
    generation: "Heir-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "상속 지분 + BMW 배당 + 알타나 그룹 경영 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Susanne_Klatten_2017.jpg?width=640",
      alt: "Susanne Klatten 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "크반트 가문의 상속녀로 BMW 지분과 알타나 그룹의 경영을 통해 독일 제조업과 화학 산업에 걸쳐 자산을 운영하고 있습니다.",
    coreInsight:
      "상속받은 자산을 수동적으로 보유하지 않고 알타나 그룹을 통해 직접 경영에 참여하며 기업 가치를 높이고 있습니다.",
    signalTags: ["BMW", "화학", "가족기업", "여성 경영자"],
    milestones: [
      {
        year: "1962",
        title: "독일 출생",
        body: "크반트 가문의 일원으로 태어나 경제학과 경영학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1990s",
        title: "BMW 지분 상속",
        body: "아버지 헤르베르트 크반트로부터 BMW의 상당한 지분을 상속받았습니다.",
        type: "wealth",
      },
      {
        year: "1990s",
        title: "알타나 그룹 경영 참여",
        body: "화학·제약 기업인 알타나 그룹의 감독위원회에 참여하며 직접 경영에 나섰습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "경영권 확대와 자산 성장",
        body: "알타나 그룹의 지배력을 강화하고 BMW의 장기 성장에 힘입어 자산 규모가 크게 확대됐습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "직접 경영 참여",
        detail: "상속받은 자산에 대해 감독위원회 활동을 통해 직접 경영에 참여하며 가치를 높입니다.",
        weight: 88,
      },
      {
        label: "산업 다각화",
        detail: "자동차(BMW)와 화학·제약(알타나)의 서로 다른 산업에 자산을 분산했습니다.",
        weight: 84,
      },
      {
        label: "장기 배당 재투자",
        detail: "BMW의 배당 수익을 알타나 그룹의 성장에 재투자하며 복리 효과를 창출했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "BMW 지분",
        detail: "BMW 그룹의 최대 개인 주주로서 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "알타나 그룹 지분",
        detail: "화학·제약 기업 알타나의 경영권과 지분 가치가 주요 자산입니다.",
        source: "Company filings",
      },
      {
        label: "배당 수익",
        detail: "BMW와 알타나의 배당 정책이 안정적인 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "BMW annual reports",
        grade: "primary",
        usage: "지분 구조, 배당 정책, 경영 참여 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "German business media",
        grade: "media",
        usage: "크반트 가문과 경영 활동 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "vladimir-potanin",
    name: "Vladimir Potanin",
    koreanName: "블라디미르 포타닌",
    headline: "러시아 금속 산업의 민영화 수혜자에서 노릴스크 니켈의 지배자로",
    sector: "금속/광업",
    region: "러시아",
    generation: "Privatization beneficiary",
    rankLabel: "Top wealth cohort",
    wealthModel: "민영화 취득 지분 + 광물 자원 로열티 + 배당 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Vladimir_Potanin.jpg?width=640",
      alt: "Vladimir Potanin 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소련 붕괴 후 러시아 금속·광업 자산을 민영화 과정에서 확보하고 노릴스크 니켈을 세계 최대 니켈·팔라듐 생산 기업으로 성장시킨 사례입니다.",
    coreInsight:
      "국영 자산의 민영화 시점에 핵심 광물 자원을 확보하고, 이후 글로벌 원자재 수요 증가에 힘입어 자산 가치를 극대화했습니다.",
    signalTags: ["금속/광업", "러시아", "민영화", "니켈"],
    milestones: [
      {
        year: "1961",
        title: "러시아 모스크바 출생",
        body: "소련 외교관 가정에서 태어나 국제 경제학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1990s",
        title: "노릴스크 니켈 민영화 참여",
        body: "러시아 정부의 대출-주식 프로그램을 통해 노릴스크 니켈의 지배권을 확보했습니다.",
        type: "inflection",
      },
      {
        year: "2000s",
        title: "글로벌 광업 기업으로 성장",
        body: "노릴스크 니켈을 현대화하고 글로벌 광업 시장의 주요 플레이어로 성장시켰습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "제재 환경 속 자산 방어",
        body: "국제 제재 속에서도 노릴스크 니켈의 글로벌 시장 지위를 유지하며 배당 수익을 창출했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "핵심 광물 자원 독점",
        detail: "세계 최대 니켈·팔라듐 광산의 지배권을 유지하며 희소성 프리미엄을 누립니다.",
        weight: 92,
      },
      {
        label: "정부 관계 활용",
        detail: "러시아 정부와의 긴밀한 관계를 유지하며 자원 산업 규제 환경에 대응합니다.",
        weight: 82,
      },
      {
        label: "배당 중심 주주 환원",
        detail: "높은 배당 성향으로 주주 가치를 환원하며 지분 가치를 유지합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "노릴스크 니켈 지분",
        detail: "러시아 최대 광업 기업의 지배적 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "원자재 가격",
        detail: "니켈, 팔라듐, 구리 등 주요 금속 가격 변동이 기업 가치에 직접적 영향을 미칩니다.",
        source: "Commodity markets",
      },
      {
        label: "배당 수익",
        detail: "노릴스크 니켈의 높은 배당 정책이 현금 흐름의 주요 원천입니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Norilsk Nickel annual reports",
        grade: "primary",
        usage: "지분 구조, 생산량, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "International business media",
        grade: "media",
        usage: "러시아 민영화 과정과 제재 영향 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "vagit-alekperov",
    name: "Vagit Alekperov",
    koreanName: "바기트 알렉페로프",
    headline: "루코일을 설립하며 러시아 석유 산업의 민영화를 주도한 에너지 거물",
    sector: "에너지",
    region: "러시아",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 석유 생산·정제 수익 + 배당",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%92%D0%B0%D0%B3%D0%B8%D1%82_%D0%90%D0%BB%D0%B5%D0%BA%D0%BF%D0%B5%D1%80%D0%BE%D0%B2.jpg?width=640",
      alt: "Vagit Alekperov 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소련 석유 산업에서 경력을 쌓은 후 루코일을 설립하며 러시아 최초의 수직 통합 석유 기업을 창업한 사례입니다.",
    coreInsight:
      "국영 석유 산업의 경험을 바탕으로 민영화 과정에서 수직 통합 석유 기업을 구축, 생산에서 정제·유통까지 전 과정을 통제했습니다.",
    signalTags: ["에너지", "석유", "러시아", "수직 통합"],
    milestones: [
      {
        year: "1950",
        title: "아제르바이잔 바쿠 출생",
        body: "석유 산업의 중심지에서 태어나 아제르바이잔 석유화학연구소에서 공학을 전공했습니다.",
        type: "background",
      },
      {
        year: "1991",
        title: "루코일 공동 창업",
        body: "소련 석유 산업의 핵심 자산을 모아 러시아 최초의 수직 통합 석유 회사를 설립했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "민영화와 자산 확보",
        body: "러시아 정부의 민영화 정책 아래 서부 시베리아의 핵심 유전 지분을 확보했습니다.",
        type: "inflection",
      },
      {
        year: "2000s",
        title: "글로벌 에너지 기업으로 성장",
        body: "루코일을 러시아 최대 석유 기업 중 하나로 성장시키며 해외 자산도 확장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "수직 통합 구조",
        detail: "원유 생산에서 정제, 유통까지 전 과정을 직접 통제하며 비용 효율성을 극대화했습니다.",
        weight: 90,
      },
      {
        label: "정부 관계와 제도적 우위",
        detail: "러시아 정부와의 협력을 통해 원유 수출 허가와 세제 혜택 등 제도적 이점을 확보했습니다.",
        weight: 84,
      },
      {
        label: "국제 확장",
        detail: "러시아 외에도 중동, 남미 등으로 탐사·생산 자산을 확장하며 리스크를 분산했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "루코일 지분",
        detail: "러시아 최대 민간 석유 기업의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "국제 유가",
        detail: "글로벌 원유 가격 변동이 석유 기업의 수익과 지분 가치에 직접적 영향을 미칩니다.",
        source: "Commodity markets",
      },
      {
        label: "배당 정책",
        detail: "루코일의 배당 정책이 주요 주주로서 안정적인 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Lukoil annual reports",
        grade: "primary",
        usage: "사업 구조, 재무 성과, 배당 정책 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "International business media",
        grade: "media",
        usage: "러시아 석유 산업과 창업 역사 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "francois-pinault",
    name: "François Pinault & family",
    koreanName: "프랑수아 피노 일가",
    headline: "목재 무역에서 글로벌 럭셔리 그룹 케링을 일군 프랑스의 대표 기업가",
    sector: "패션/리테일",
    region: "프랑스",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "지주회사 지분 + 브랜드 포트폴리오 + 예술품 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Francois_Pinault.jpg?width=640",
      alt: "François Pinault 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "목재와 건자재 무역으로 시작해 프랑스 최대 소매·럭셔리 그룹을 구축하며 구찌, 생로랑 등 명품 브랜드 포트폴리오를 만든 사례입니다.",
    coreInsight:
      "전통 산업에서 자금을 축적한 후 럭셔리 브랜드 M&A로 사업의 본질을 전환하며 가장 높은 가치를 창출했습니다.",
    signalTags: ["럭셔리", "M&A", "브랜드 포트폴리오", "프랑스"],
    milestones: [
      {
        year: "1936",
        title: "프랑스 브르타뉴 출생",
        body: "소규모 농가에서 태어나 어린 시절부터 기업가 정신을 키웠습니다.",
        type: "background",
      },
      {
        year: "1962",
        title: "목재 무역 회사 창업",
        body: "소규모 목재 및 건자재 무역 회사를 설립하며 사업을 시작했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "럭셔리 브랜드 인수",
        body: "구찌, 생로랑 등 고급 브랜드를 인수하며 피노-프랭탕-르두트 그룹을 럭셔리 중심으로 재편했습니다.",
        type: "inflection",
      },
      {
        year: "2013",
        title: "케링 그룹으로 재탄생",
        body: "그룹명을 케링으로 변경하고 럭셔리 브랜드 포트폴리오에 집중하는 구조로 재편했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "산업 전환과 M&A",
        detail: "저성장 전통 산업에서 고성장 럭셔리 산업으로 사업의 핵심을 전환하며 가치를 극대화했습니다.",
        weight: 90,
      },
      {
        label: "브랜드 자율성 유지",
        detail: "인수한 브랜드의 정체성과 창의성을 유지하며 그룹 차원의 시너지를 추구했습니다.",
        weight: 86,
      },
      {
        label: "예술품 투자",
        detail: "예술 컬렉션과 문화 자산에 투자하며 자산 다각화와 브랜드 가치 제고를 동시에 추구했습니다.",
        weight: 74,
      },
    ],
    assetDrivers: [
      {
        label: "케링 그룹 지분",
        detail: "가족 지주회사인 아르테미스를 통한 케링 지분이 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "브랜드 포트폴리오 가치",
        detail: "구찌, 생로랑, 보테가베네타 등 브랜드의 시장 가치가 그룹 가치를 결정합니다.",
        source: "Company reports",
      },
      {
        label: "예술품 컬렉션",
        detail: "피노 컬렉션으로 유명한 현대 미술품 자산이 부의 다각화에 기여합니다.",
        source: "Public records",
      },
    ],
    sources: [
      {
        name: "Kering annual reports",
        grade: "primary",
        usage: "브랜드 포트폴리오, 부문별 실적, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "기업 인수 이력과 사업 전환 과정 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "jack-ma",
    name: "Jack Ma",
    koreanName: "마윈",
    headline: "중국 인터넷 상거래의 개척자로 알리바바 제국을 세운 창업가",
    sector: "기술",
    region: "중국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "알리바바 지분 + 핀테크 지분 + 벤처 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg?width=640",
      alt: "Jack Ma 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "영어 교사 출신이 중국 인터넷 상거래 시장의 가능성을 꿰뚫어 보며 전자상거래, 핀테크, 클라우드로 이어지는 알리바바 생태계를 창조한 사례입니다.",
    coreInsight:
      "중국의 제조업 강점과 소비자 수요를 인터넷 플랫폼으로 연결하며 기존 유통 구조를 혁신적으로 재편했습니다.",
    signalTags: ["전자상거래", "핀테크", "알리바바", "중국 기술"],
    milestones: [
      {
        year: "1964",
        title: "중국 항저우 출생",
        body: "영어 교사 출신으로 1990년대 초 인터넷을 접하며 창업의 꿈을 키웠습니다.",
        type: "background",
      },
      {
        year: "1999",
        title: "알리바바 창업",
        body: "자택에서 18명의 공동 창업자와 함께 B2B 전자상거래 플랫폼을 시작했습니다.",
        type: "venture",
      },
      {
        year: "2004",
        title: "알리페이 출시",
        body: "전자상거래의 결제 인프라를 해결하기 위해 알리페이를 출시하며 핀테크 생태계의 기반을 마련했습니다.",
        type: "inflection",
      },
      {
        year: "2014",
        title: "알리바바 그룹 IPO",
        body: "뉴욕 증권거래소에 상장하며 역사상 최대 규모의 IPO를 기록했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "생태계 구축",
        detail: "전자상거래, 결제, 클라우드, 물류를 하나의 생태계로 연결하며 시장 지배력을 강화했습니다.",
        weight: 91,
      },
      {
        label: "중국 시장 집중",
        detail: "중국 내수 시장의 성장 잠재력을 최대한 활용하며 글로벌 플랫폼으로 확장했습니다.",
        weight: 85,
      },
      {
        label: "플랫폼 네트워크 효과",
        detail: "구매자와 판매자 간 네트워크 효과를 극대화하여 경쟁사의 진입을 어렵게 만들었습니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "알리바바 지분",
        detail: "알리바바 그룹의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "앤트 그룹 지분",
        detail: "알리페이를 운영하는 앤트 그룹의 비상장 지분 가치가 중요한 자산 축입니다.",
        source: "Private market estimates",
      },
      {
        label: "벤처 투자 포트폴리오",
        detail: "개인 투자와 자선 활동을 통한 다양한 벤처 투자가 부의 다각화에 기여합니다.",
        source: "Public records",
      },
    ],
    sources: [
      {
        name: "Alibaba Group annual reports",
        grade: "primary",
        usage: "사업 부문, 지분 구조, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "창업 스토리와 중국 규제 환경 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "prajogo-pangestu",
    name: "Prajogo Pangestu",
    koreanName: "프라조고 팡에스투",
    headline: "인도네시아 천연자원과 석유화학 산업을 연결한 복합기업의 창업자",
    sector: "복합 자산",
    region: "인도네시아",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "비상장 기업 지분 + 천연자원 + 석유화학 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Prajogo_Pangestu.jpg?width=640",
      alt: "Prajogo Pangestu 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "인도네시아의 풍부한 천연자원을 기반으로 목재, 석유화학, 에너지로 사업을 확장하며 복합기업을 일군 창업 사례입니다.",
    coreInsight:
      "천연자원 사업에서 시작해 석유화학과 에너지 분야로 수직 계열화를 이루며 부가가치를 높였습니다.",
    signalTags: ["천연자원", "석유화학", "인도네시아", "복합기업"],
    milestones: [
      {
        year: "1944",
        title: "인도네시아 출생",
        body: "어린 시절부터 사업가로서의 재능을 보이며 목재 무역으로 사업을 시작했습니다.",
        type: "background",
      },
      {
        year: "1970s",
        title: "바리토 퍼시픽 목재 설립",
        body: "인도네시아의 풍부한 목재 자원을 활용해 바리토 퍼시픽을 설립했습니다.",
        type: "venture",
      },
      {
        year: "1990s",
        title: "찬드라 아스리 석유화학 인수",
        body: "목재 사업의 수익을 바탕으로 석유화학 기업을 인수하며 사업 영역을 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "에너지·인프라로 확장",
        body: "석탄, 에너지, 인프라 사업으로 포트폴리오를 확장하며 복합기업으로 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "천연자원 기반 확장",
        detail: "인도네시아의 풍부한 천연자원을 바탕으로 목재에서 석유화학, 에너지로 영역을 확장했습니다.",
        weight: 88,
      },
      {
        label: "수직 계열화",
        detail: "원자재 조달에서 가공, 유통까지 수직 계열화를 통해 비용 경쟁력을 확보했습니다.",
        weight: 84,
      },
      {
        label: "정부 관계 네트워크",
        detail: "인도네시아 정부와의 긴밀한 관계를 바탕으로 천연자원 사업 허가와 규제 이점을 확보했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "바리토 퍼시픽 지분",
        detail: "목재·석유화학 복합기업의 비상장 지분 가치가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "찬드라 아스리 자산",
        detail: "석유화학 사업의 수익성과 성장이 기업 가치에 중요한 영향을 미칩니다.",
        source: "Industry reports",
      },
      {
        label: "원자재 가격",
        detail: "목재, 석탄, 석유화학 제품의 가격 변동이 사업 수익성에 직접적 영향을 미칩니다.",
        source: "Commodity markets",
      },
    ],
    sources: [
      {
        name: "Barito Pacific reports",
        grade: "primary",
        usage: "사업 구조, 재무 성과, 자산 현황 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Indonesian business media",
        grade: "media",
        usage: "천연자원 산업과 기업 확장 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "mackenzie-scott",
    name: "MacKenzie Scott",
    koreanName: "매켄지 스콧",
    headline: "거대 자산을 급진적 자선으로 사회에 환원하며 새로운 기부 패러다임을 연 작가",
    sector: "기술",
    region: "미국",
    generation: "Heir-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "이혼 분할 지분 + 자선 기부 + 주식 매각 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/MacKenzie_Scott_2013.jpg?width=640",
      alt: "MacKenzie Scott 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "아마존의 초기 직원이자 제프 베이조스의 전 배우자로 이혼시 분할받은 아마존 지분을 기반으로 파격적인 자선 활동을 펼치는 사례입니다.",
    coreInsight:
      "전통적 자선과 달리 제한 없는 신속 기부를 통해 사회 문제에 즉각적인 자금을 투입하며 기부 문화의 패러다임을 바꾸고 있습니다.",
    signalTags: ["아마존", "자선", "기부", "여성 리더"],
    milestones: [
      {
        year: "1970",
        title: "미국 샌프란시스코 출생",
        body: "프린스턴 대학에서 문학을 전공하고 소설가로서 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1993",
        title: "아마존 초기 합류",
        body: "제프 베이조스와 결혼 후 아마존의 초기 직원으로 합류해 회사 성장에 기여했습니다.",
        type: "career",
      },
      {
        year: "2019",
        title: "이혼과 지분 분할",
        body: "제프 베이조스와의 이혼으로 아마존 지분 4%를 분할받아 거대 자산을 보유하게 됐습니다.",
        type: "wealth",
      },
      {
        year: "2020-2025",
        title: "역대급 자선 기부",
        body: "수백억 달러에 달하는 자산을 수많은 비영리 단체에 신속하게 기부하며 새로운 자선 모델을 제시했습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "신속 무제한 기부",
        detail: "전통 재단 설립 대신 직접적이고 신속한 기부를 통해 사회 문제에 즉각 대응합니다.",
        weight: 88,
      },
      {
        label: "소수자 중심 자선",
        detail: "인종 평등, 성평등, LGBTQ+ 권리 등 소외된 커뮤니티에 집중적으로 자금을 지원합니다.",
        weight: 84,
      },
      {
        label: "주식 매각 자금 조달",
        detail: "아마존 주식을 매각하여 기부 자금을 조달하며 자산 규모를 축소합니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "아마존 지분",
        detail: "이혼 분할로 취득한 아마존 지분이 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "주식 매각 수익",
        detail: "지속적인 주식 매각을 통해 기부 자금을 확보합니다.",
        source: "Public market data",
      },
      {
        label: "기부와 자산 감소",
        detail: "적극적인 기부 활동이 순자산 규모에 직접적 영향을 미치는 특이한 사례입니다.",
        source: "Giving records",
      },
    ],
    sources: [
      {
        name: "Amazon filings",
        grade: "primary",
        usage: "지분 규모와 변동 사항 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Giving Pledge and philanthropy reports",
        grade: "primary",
        usage: "기부 규모와 방향성 확인",
        reliability: "공식 자료",
      },
    ],
  },
  {
    slug: "aliko-dangote",
    name: "Aliko Dangote",
    koreanName: "알리코 단고테",
    headline: "아프리카 자급자족 산업화를 이끄는 나이지리아의 대표 재벌",
    sector: "제조",
    region: "나이지리아",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "비상장 기업 지분 + 시멘트·식품·석유화학 제조 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aliko_Dangote_2023.jpg?width=640",
      alt: "Aliko Dangote 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소규모 상품 무역에서 시작해 시멘트, 설탕, 밀가루, 석유화학으로 영역을 확장하며 아프리카 최대 제조 기업을 일군 사례입니다.",
    coreInsight:
      "아프리카의 부족한 제조 인프라에 선제적으로 투자하며 수입 의존도가 높은 품목의 국산화를 통해 거대 시장을 장악했습니다.",
    signalTags: ["제조", "시멘트", "아프리카", "산업화"],
    milestones: [
      {
        year: "1957",
        title: "나이지리아 카노 출생",
        body: "부유한 상인 가정에서 태어나 이집트 알아즈하르 대학에서 경영학을 공부했습니다.",
        type: "background",
      },
      {
        year: "1977",
        title: "단고테 그룹 창업",
        body: "삼촌으로부터 빌린 자금으로 시멘트, 설탕, 밀가루 등 상품 무역 회사를 설립했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "시멘트 제조업 진출",
        body: "무역에서 제조로 전환하며 나이지리아 최대 시멘트 생산 시설을 구축했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "석유화학·정유 산업 진출",
        body: "대규모 정유 공장 건설에 투자하며 아프리카 산업화의 상징으로 자리잡았습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "수입 대체 산업화",
        detail: "나이지리아가 수입에 의존하는 핵심 품목을 국내 생산으로 대체하며 시장을 장악했습니다.",
        weight: 90,
      },
      {
        label: "수직 통합",
        detail: "원자재에서 완제품까지 생산 과정을 직접 통제하며 비용과 품질을 관리합니다.",
        weight: 86,
      },
      {
        label: "아프리카 시장 집중",
        detail: "아프리카 대륙의 인프라 부족과 인구 성장을 기회로 삼아 장기 투자를 지속합니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "단고테 그룹 지분",
        detail: "아프리카 최대 제조 기업의 비상장 지분 가치가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "시멘트 사업 수익",
        detail: "아프리카 시멘트 시장 지배력을 바탕으로 한 안정적 현금 흐름이 핵심 수익원입니다.",
        source: "Company reports",
      },
      {
        label: "정유 공장 가치",
        detail: "초대형 정유 공장의 완공과 가동이 기업 가치 평가에 중요한 변수입니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Dangote Group reports",
        grade: "primary",
        usage: "사업 부문, 생산 능력, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "African business media",
        grade: "media",
        usage: "나이지리아 산업화와 사업 확장 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "peter-thiel",
    name: "Peter Thiel",
    koreanName: "피터 틸",
    headline: "페이팔에서 팔란티어까지, 실리콘밸리의 가장 논쟁적인 벤처 투자자",
    sector: "금융/투자",
    region: "미국",
    generation: "Serial founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + 비상장 기업 가치 + 벤처 투자 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_Thiel_by_Gage_Skidmore.jpg?width=640",
      alt: "Peter Thiel 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "페이팔 공동 창업, 페이스북 초기 투자, 팔란티어 설립으로 이어지는 실리콘밸리의 대표적 창업자-투자자 사례입니다.",
    coreInsight:
      "기술 창업, 초기 투자, 정부 계약 비즈니스라는 세 가지 축을 통해 부를 다각화하며 실리콘밸리에서 가장 독특한 포지션을 구축했습니다.",
    signalTags: ["핀테크", "데이터 분석", "벤처 투자", "팔란티어"],
    milestones: [
      {
        year: "1967",
        title: "독일 프랑크푸르트 출생",
        body: "미국으로 이주하여 스탠퍼드 대학에서 법학을 전공하고 변호사로 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1998",
        title: "페이팔 공동 창업",
        body: "엘론 머스크 등과 함께 온라인 결제 기업 페이팔을 창업하고 2002년 이베이에 매각했습니다.",
        type: "venture",
      },
      {
        year: "2004",
        title: "페이스북 초기 투자",
        body: "페이스북의 초기 외부 투자자로 50만 달러를 투자해 수백억 달러의 수익을 올렸습니다.",
        type: "inflection",
      },
      {
        year: "2003",
        title: "팔란티어 테크놀로지스 설립",
        body: "데이터 분석 기업 팔란티어를 설립하며 정부 및 금융 기관 대상 빅데이터 분석 시장을 개척했습니다.",
        type: "venture",
      },
    ],
    strategy: [
      {
        label: "초기 단계 투자",
        detail: "페이스북, 에어비앤비 등 초기 스타트업에 소액 투자하여 큰 수익을 창출했습니다.",
        weight: 90,
      },
      {
        label: "정부 시장 개척",
        detail: "팔란티어를 통해 정부 기관과의 장기 계약을 확보하며 안정적 수익 기반을 구축했습니다.",
        weight: 86,
      },
      {
        label: "차별화된 포트폴리오",
        detail: "기술, 금융, 정치, 미디어에 걸친 다양한 투자로 리스크를 분산했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "팔란티어 지분",
        detail: "상장된 팔란티어의 지분 가치가 순자산의 핵심 축입니다.",
        source: "Company filings",
      },
      {
        label: "페이스북 초기 투자 수익",
        detail: "과거 페이스북 초기 투자로 얻은 지분 매각 수익이 부의 기반이 됐습니다.",
        source: "Public market data",
      },
      {
        label: "벤처 투자 포트폴리오",
        detail: "파운더스 펀드를 통한 다양한 스타트업 투자 포트폴리오가 추가 자산입니다.",
        source: "Private market estimates",
      },
    ],
    sources: [
      {
        name: "Palantir annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 지분 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "투자 이력과 창업 활동 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "emmanuel-besnier",
    name: "Emmanuel Besnier",
    koreanName: "에마뉘엘 베스니에",
    headline: "가족 유제품 기업을 글로벌 치즈 제국으로 키운 프랑스의 경영자",
    sector: "식음료",
    region: "프랑스",
    generation: "Family business",
    rankLabel: "Top wealth cohort",
    wealthModel: "비상장 가족기업 지분 + 유제품 글로벌 유통 + 브랜드 가치",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Emmanuel_Besnier.jpg?width=640",
      alt: "Emmanuel Besnier 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "프랑스 서부의 소규모 유제품 회사를 글로벌 No.1 유제품 기업으로 성장시키며 가족기업의 가치를 극대화한 사례입니다.",
    coreInsight:
      "M&A를 통한 글로벌 확장과 프리미엄 브랜드 전략을 결합하여 유제품 산업의 거인으로 성장했습니다.",
    signalTags: ["유제품", "가족기업", "프랑스", "M&A"],
    milestones: [
      {
        year: "1969",
        title: "프랑스 출생",
        body: "베스니에 가문의 유제품 회사에서 성장하며 경영과 제품에 대한 이해를 키웠습니다.",
        type: "background",
      },
      {
        year: "1995",
        title: "락탈리스 경영 승계",
        body: "아버지로부터 락탈리스 그룹의 경영권을 인수받아 3세대 경영자로 취임했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "적극적인 M&A 확장",
        body: "갈보니, 이탈리아 유제품 기업 등 대규모 M&A를 통해 글로벌 시장으로 사업을 확장했습니다.",
        type: "scale",
      },
      {
        year: "2010s",
        title: "글로벌 No.1 유제품 기업",
        body: "락탈리스를 세계 최대 유제품 기업으로 성장시키며 프레지덩, 브리 등 글로벌 브랜드 포트폴리오를 구축했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "M&A를 통한 글로벌 확장",
        detail: "적극적인 인수 합병을 통해 글로벌 유제품 시장에서 규모의 경제를 달성했습니다.",
        weight: 90,
      },
      {
        label: "프리미엄 브랜드 전략",
        detail: "프레지덩, 브리, 카마베르 등 프리미엄 치즈 브랜드를 앞세워 높은 마진을 유지합니다.",
        weight: 84,
      },
      {
        label: "비상장 가족 경영",
        detail: "비상장 가족기업 구조를 유지하며 단기 실적 압박 없이 장기 전략을 추구합니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "락탈리스 그룹 지분",
        detail: "비상장 가족기업의 지분 가치가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "글로벌 유제품 시장",
        detail: "세계 유제품 소비 증가와 신흥 시장 성장이 기업 가치에 긍정적 영향을 미칩니다.",
        source: "Industry reports",
      },
      {
        label: "프리미엄 브랜드 포트폴리오",
        detail: "프레지덩, 브리 등 프리미엄 브랜드의 시장 지위가 기업 가치를 뒷받침합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Lactalis Group reports",
        grade: "primary",
        usage: "사업 구조, 브랜드 포트폴리오, 글로벌 확장 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "French business media",
        grade: "media",
        usage: "M&A 전략과 가족 경영 철학 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "leonid-mikhelson",
    name: "Leonid Mikhelson & family",
    koreanName: "레오니드 미켈손 일가",
    headline: "러시아 천연가스 시장의 민영화를 주도한 노바텍의 창업자",
    sector: "에너지",
    region: "러시아",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 천연가스 생산·수출 + 배당 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/11-03-2020_Leonid_Mikhelson.png?width=640",
      alt: "Leonid Mikhelson 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소련 건설 엔지니어 출신이 러시아 천연가스 시장의 민영화 과정에서 노바텍을 설립해 세계 최대 LNG 생산 기업 중 하나로 성장시킨 사례입니다.",
    coreInsight:
      "러시아의 풍부한 천연가스 자원을 민영화 시점에 확보하고, 액화천연가스(LNG) 기술 투자로 글로벌 에너지 시장에 진출했습니다.",
    signalTags: ["에너지", "천연가스", "LNG", "러시아"],
    milestones: [
      {
        year: "1955",
        title: "소련 카스피해 지역 출생",
        body: "건설 엔지니어로 경력을 시작하며 소련 건설 산업에서 실무 경험을 쌓았습니다.",
        type: "background",
      },
      {
        year: "1994",
        title: "노바텍 설립",
        body: "러시아 천연가스 산업의 민영화 과정에서 노바텍을 설립했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "야말 LNG 프로젝트",
        body: "북극 지역의 대규모 LNG 프로젝트인 야말 LNG에 투자하며 글로벌 LNG 시장 진출을 가속화했습니다.",
        type: "inflection",
      },
      {
        year: "2010s-2020s",
        title: "글로벌 LNG 플레이어로 성장",
        body: "노바텍은 러시아 최대 민간 천연가스 기업으로 성장하며 글로벌 LNG 시장의 주요 공급자가 됐습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "천연가스 자원 확보",
        detail: "러시아 북부와 극동의 풍부한 천연가스 매장지를 선제적으로 확보했습니다.",
        weight: 90,
      },
      {
        label: "LNG 기술 투자",
        detail: "액화천연가스 기술에 선제 투자하여 러시아 가스를 글로벌 시장에 수출할 수 있는 기반을 마련했습니다.",
        weight: 86,
      },
      {
        label: "정부 협력 관계",
        detail: "러시아 정부와의 협력을 통해 수출 허가와 인프라 투자 지원을 확보했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "노바텍 지분",
        detail: "러시아 최대 민간 천연가스 기업의 지분이 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "국제 LNG 가격",
        detail: "글로벌 LNG 수요와 가격 변동이 기업 가치에 직접적 영향을 미칩니다.",
        source: "Commodity markets",
      },
      {
        label: "배당 수익",
        detail: "노바텍의 배당 정책이 주요 주주로서 안정적인 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Novatek annual reports",
        grade: "primary",
        usage: "생산량, 재무 성과, 프로젝트 현황 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "International energy media",
        grade: "media",
        usage: "LNG 시장 동향과 러시아 에너지 정책 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "daniel-gilbert",
    name: "Daniel Gilbert",
    koreanName: "대니얼 길버트",
    headline: "모기지 기술 혁신으로 미국 주택 금융 시장을 재편한 창업자",
    sector: "금융/투자",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + 모기지 기술 + 스포츠 구단 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Daniel_Gilbert_2018.jpg?width=640",
      alt: "Daniel Gilbert 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소규모 모기지 회사에서 시작해 기술 기반 모기지 플랫폼으로 혁신하며 로켓 컴퍼니즈를 미국 최대 모기지 대출 기관으로 성장시킨 사례입니다.",
    coreInsight:
      "전통적인 모기지 산업에 기술을 접목해 대출 신청과 승인 과정을 디지털화하며 비용 효율성을 극대화했습니다.",
    signalTags: ["모기지", "핀테크", "스포츠", "미국 금융"],
    milestones: [
      {
        year: "1962",
        title: "미국 미시간 출생",
        body: "미시간 주립대에서 경영학을 전공하고 부동산과 모기지 업계에서 경력을 쌓았습니다.",
        type: "background",
      },
      {
        year: "1985",
        title: "락 파이낸셜 설립",
        body: "소규모 모기지 회사를 설립하며 주택 금융 시장에 진출했습니다.",
        type: "venture",
      },
      {
        year: "2015",
        title: "로켓 모기지 출시",
        body: "완전 디지털 모기지 플랫폼인 로켓 모기지를 출시하며 기술 혁신을 주도했습니다.",
        type: "inflection",
      },
      {
        year: "2020",
        title: "로켓 컴퍼니즈 IPO",
        body: "로켓 컴퍼니즈를 뉴욕증권거래소에 상장하며 기업 가치를 공개 시장에서 인정받았습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "기술 기반 효율성",
        detail: "모기지 대출 과정을 디지털화하여 전통 업체 대비 훨씬 낮은 비용 구조를 구축했습니다.",
        weight: 90,
      },
      {
        label: "대규모 마케팅",
        detail: "공격적인 광고와 브랜드 마케팅으로 소비자 인지도를 높이고 시장 점유율을 확대했습니다.",
        weight: 84,
      },
      {
        label: "부동산 생태계 확장",
        detail: "주택 매매, 보험, 타이틀 등 부동산 관련 서비스로 사업 영역을 확장했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "로켓 컴퍼니즈 지분",
        detail: "상장 기업인 로켓 컴퍼니즈의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "주택 시장 사이클",
        detail: "미국 주택 시장의 금리 환경과 거래량이 모기지 사업 수익에 직접적 영향을 미칩니다.",
        source: "Industry data",
      },
      {
        label: "스포츠 구단 가치",
        detail: "클리블랜드 캐벌리어스(NBA) 구단주로서 보유한 스포츠 자산이 부의 다각화에 기여합니다.",
        source: "Public records",
      },
    ],
    sources: [
      {
        name: "Rocket Companies annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 시장 점유율 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "모기지 산업 혁신과 창업 스토리 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "lei-jun",
    name: "Lei Jun",
    koreanName: "레이쥔",
    headline: "소프트웨어 기업가에서 스마트폰과 전기차 제왕으로 변신한 중국의 연쇄 창업가",
    sector: "기술",
    region: "중국",
    generation: "Serial founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + 스마트폰·전기차 제조 + 벤처 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lei_Jun_%282026%29_01.jpg?width=640",
      alt: "Lei Jun 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "중국의 소프트웨어 산업에서 경력을 쌓고 샤오미를 창업해 스마트폰과 IoT 생태계를 구축한 후 전기차 시장에 도전하는 연쇄 창업가 사례입니다.",
    coreInsight:
      "고성능-저가격 전략으로 스마트폰 시장을 장악하고, IoT 생태계로 확장한 후 전기차로 영역을 넓히며 새로운 성장 동력을 지속 창출했습니다.",
    signalTags: ["스마트폰", "IoT", "전기차", "중국 제조"],
    milestones: [
      {
        year: "1969",
        title: "중국 후베이 출생",
        body: "우한 대학에서 컴퓨터 과학을 전공하고 소프트웨어 엔지니어로 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1992",
        title: "킹소프트 합류",
        body: "중국 소프트웨어 기업 킹소프트에 합류해 CEO까지 역임하며 소프트웨어 산업 경험을 쌓았습니다.",
        type: "career",
      },
      {
        year: "2010",
        title: "샤오미 창업",
        body: "고성능 스마트폰을 저렴한 가격에 제공하는 샤오미를 공동 창업했습니다.",
        type: "venture",
      },
      {
        year: "2021",
        title: "전기차 시장 진출",
        body: "샤오미 전기차 사업에 100억 위안을 투자하며 스마트폰에서 전기차로 영역을 확장했습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "고성능-저가격 전략",
        detail: "하드웨어 마진을 낮추고 소프트웨어 및 서비스 수익으로 보완하는 전략으로 시장 점유율을 확대했습니다.",
        weight: 90,
      },
      {
        label: "IoT 생태계 구축",
        detail: "스마트폰을 중심으로 가전, 웨어러블 등 다양한 IoT 제품으로 생태계를 확장했습니다.",
        weight: 86,
      },
      {
        label: "팬 커뮤니티 마케팅",
        detail: "MIUI 팬 커뮤니티를 중심으로 한 마케팅 전략으로 충성도를 높이고 마케팅 비용을 절감했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "샤오미 지분",
        detail: "상장 기업 샤오미의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "스마트폰 판매",
        detail: "글로벌 스마트폰 시장에서의 점유율과 판매량이 기업 수익의 핵심입니다.",
        source: "Company earnings",
      },
      {
        label: "전기차 사업 가치",
        detail: "샤오미 전기차 사업의 시장 기대가 미래 기업 가치에 중요한 변수입니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Xiaomi annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 시장 현황 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "창업 스토리와 전기차 전환 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "andreas-von-bechtolsheim",
    name: "Andreas von Bechtolsheim & family",
    koreanName: "안드레아스 폰 베히톨스하임 일가",
    headline: "워크스테이션과 네트워킹 혁신으로 실리콘밸리의 기반을 만든 기술 천재",
    sector: "기술",
    region: "독일",
    generation: "Serial founder",
    rankLabel: "Top wealth cohort",
    wealthModel: "창업자 지분 + 기술 로열티 + 네트워킹 장비 수익",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Andreas_bechtolsheim_%28cropped%29.jpg?width=640",
      alt: "Andreas von Bechtolsheim 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "스탠퍼드 대학원생 시절 워크스테이션을 설계해 선 마이크로시스템즈를 창업하고, 이후 아리스타 네트웍스를 창업하며 네트워킹 혁신을 주도한 연쇄 창업가 사례입니다.",
    coreInsight:
      "최고의 기술력으로 두 개의 주요 기술 기업을 창업하고 초기 구글 투자로도 큰 수익을 올린 실리콘밸리에서 가장 성공적인 엔지니어-창업자 중 하나입니다.",
    signalTags: ["네트워킹", "워크스테이션", "클라우드 인프라", "초기 투자"],
    milestones: [
      {
        year: "1955",
        title: "독일 출생",
        body: "독일에서 태어나 스탠퍼드 대학에서 전기공학 박사 과정을 밟으며 기술 창업의 꿈을 키웠습니다.",
        type: "background",
      },
      {
        year: "1982",
        title: "선 마이크로시스템즈 공동 창업",
        body: "연구실에서 설계한 워크스테이션을 기반으로 스콧 맥닐리 등과 함께 선 마이크로시스템즈를 창업했습니다.",
        type: "venture",
      },
      {
        year: "1998",
        title: "구글 초기 투자",
        body: "래리 페이지와 세르게이 브린에게 10만 달러 수표를 발행하며 구글의 첫 번째 외부 투자자가 됐습니다.",
        type: "inflection",
      },
      {
        year: "2008",
        title: "아리스타 네트웍스 창업",
        body: "데이터센터용 고성능 네트워킹 장비 회사 아리스타 네트웍스를 창업하며 클라우드 시대의 인프라 기업으로 성장시켰습니다.",
        type: "venture",
      },
    ],
    strategy: [
      {
        label: "기술 선도력",
        detail: "최고 사양의 기술을 시장에 가장 먼저 도입하며 프리미엄 시장을 선점했습니다.",
        weight: 92,
      },
      {
        label: "초기 투자 안목",
        detail: "구글 등 초기 스타트업에 투자해 큰 수익률을 기록하며 자산을 다각화했습니다.",
        weight: 85,
      },
      {
        label: "틈새 시장 지배",
        detail: "데이터센터 네트워킹이라는 고성장 틈새 시장에 집중하며 높은 마진을 유지했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "아리스타 네트웍스 지분",
        detail: "데이터센터 네트워킹 선두 기업의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "구글 초기 투자 수익",
        detail: "구글의 초기 투자자로서 보유한 지분 매각 수익이 부의 중요한 축입니다.",
        source: "Public market data",
      },
      {
        label: "클라우드 인프라 수요",
        detail: "데이터센터 투자 확대가 아리스타의 매출과 기업 가치에 직접적 영향을 미칩니다.",
        source: "Industry reports",
      },
    ],
    sources: [
      {
        name: "Arista Networks annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 시장 점유율 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "창업 이력과 기술 혁신 과정 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "pham-nhat-vuong",
    name: "Pham Nhat Vuong",
    koreanName: "팜녓브엉",
    headline: "우크라이나에서 라면을 팔다 베트남 최대 복합기업을 일군 창업자",
    sector: "복합 자산",
    region: "베트남",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + 부동산·제조·자동차 수익 + 비상장 가치",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ph%E1%BA%A1m_Nh%E1%BA%ADt_V%C6%B0%E1%BB%A3ng.jpg?width=640",
      alt: "Pham Nhat Vuong 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "동유럽에서 즉석 식품 사업으로 첫 자본을 축적하고 베트남으로 돌아와 부동산, 자동차 제조로 영역을 확장한 베트남 최초의 억만장자 사례입니다.",
    coreInsight:
      "베트남의 급속한 경제 성장에 맞춰 부동산, 소비재, 자동차 등 성장 산업에 선제 투자하며 복합기업의 가치를 극대화했습니다.",
    signalTags: ["베트남", "부동산", "자동차", "복합기업"],
    milestones: [
      {
        year: "1968",
        title: "베트남 하노이 출생",
        body: "러시아에서 지질학을 공부하고 우크라이나로 이주해 즉석 식품 사업을 시작했습니다.",
        type: "background",
      },
      {
        year: "1993",
        title: "테크노컴 유나이티드 창업",
        body: "우크라이나에서 즉석 라면과 식품을 생산하는 회사를 설립해 첫 자본을 축적했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "베트남 귀환과 빈그룹 설립",
        body: "우크라이나 사업을 매각하고 베트남으로 돌아와 빈그룹을 설립하며 부동산과 리조트 사업을 시작했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "빈패스트 자동차 출시",
        body: "베트남 최초의 국산 자동차 브랜드 빈패스트를 론칭하며 제조업에 진출했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "베트남 성장 수혜",
        detail: "베트남의 급속한 경제 성장과 도시화에 맞춰 부동산과 소비재 시장에 투자했습니다.",
        weight: 90,
      },
      {
        label: "고위험-고수익 투자",
        detail: "자동차, 전기차 등 초기 투자 비용이 큰 산업에도 과감하게 진출했습니다.",
        weight: 84,
      },
      {
        label: "수직 계열화",
        detail: "부동산, 리조트, 교육, 의료, 자동차 등 다양한 분야를 하나의 그룹 안에서 수직 계열화했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "빈그룹 지분",
        detail: "상장된 빈그룹의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "부동산 자산",
        detail: "베트남 주요 도시의 대규모 부동산 개발 프로젝트가 핵심 사업입니다.",
        source: "Company reports",
      },
      {
        label: "빈패스트 가치",
        detail: "전기차 사업인 빈패스트의 비상장 기업 가치가 중요한 자산 평가 요소입니다.",
        source: "Private market estimates",
      },
    ],
    sources: [
      {
        name: "Vingroup annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 자산 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "베트남 경제 성장과 창업 스토리 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "vicky-safra",
    name: "Vicky Safra & family",
    koreanName: "비키 사프라 일가",
    headline: "세계적 은행가 사프라 가문의 유산을 지키는 브라질계 상속자",
    sector: "금융/투자",
    region: "그리스",
    generation: "Heir",
    rankLabel: "Top wealth cohort",
    wealthModel: "상속 지분 + 은행업 수익 + 글로벌 투자 자산",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vicky_Safra_2023.jpg?width=640",
      alt: "Vicky Safra 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "레바논계 유대인 은행가 집안인 사프라 가문의 상속녀로서 J. 사프라 그룹의 지분을 통해 글로벌 은행과 투자 자산을 관리하고 있습니다.",
    coreInsight:
      "전통적인 프라이빗 뱅킹과 금융 서비스를 기반으로 축적된 가문의 자산을 장기 보유하며 안정적인 부를 유지하고 있습니다.",
    signalTags: ["은행", "금융", "상속", "사프라 가문"],
    milestones: [
      {
        year: "1952",
        title: "브라질 출생",
        body: "사프라 은행 가문의 일원으로 태어나 가문의 금융 전통을 이어받았습니다.",
        type: "background",
      },
      {
        year: "1999",
        title: "사프라 가문 자산 상속",
        body: "남편 에드먼드 사프라의 사망 후 사프라 가문의 금융·투자 자산을 상속받았습니다.",
        type: "wealth",
      },
      {
        year: "2000s",
        title: "J. 사프라 그룹 관리",
        body: "사프라 가문의 지주회사인 J. 사프라 그룹의 주요 자산과 투자를 관리하며 가문의 부를 유지했습니다.",
        type: "career",
      },
      {
        year: "2020s",
        title: "글로벌 자산 다각화",
        body: "사프라 은행 외에도 부동산, 헤지펀드 등 다양한 자산으로 포트폴리오를 확장했습니다.",
        type: "wealth",
      },
    ],
    strategy: [
      {
        label: "은행업 기반 자산",
        detail: "전통적인 프라이빗 뱅킹과 금융 서비스를 핵심 사업으로 유지하며 안정적 수익을 창출합니다.",
        weight: 88,
      },
      {
        label: "보수적 자산 관리",
        detail: "과도한 위험을 피하고 장기 보유를 원칙으로 하는 보수적 자산 관리 전략을 따릅니다.",
        weight: 84,
      },
      {
        label: "글로벌 분산 투자",
        detail: "지리적으로 분산된 금융·부동산 자산을 통해 지역별 리스크를 분산했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "J. 사프라 그룹 지분",
        detail: "글로벌 은행·투자 지주회사의 지분 가치가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "사프라 은행 가치",
        detail: "스위스와 브라질에 기반을 둔 프라이빗 뱅킹 자산이 안정적 수익을 창출합니다.",
        source: "Industry reports",
      },
      {
        label: "글로벌 부동산",
        detail: "미국, 유럽 등지의 고급 부동산 투자가 자산 포트폴리오의 일부를 구성합니다.",
        source: "Public records",
      },
    ],
    sources: [
      {
        name: "J. Safra Group reports",
        grade: "primary",
        usage: "자산 구조, 금융 서비스, 투자 내역 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "International business media",
        grade: "media",
        usage: "사프라 가문의 역사와 자산 관리 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "jay-y-lee",
    name: "Jay Y. Lee",
    koreanName: "이재용",
    headline: "삼성전자의 3세대 경영자로서 글로벌 반도체 리더십을 강화한 한국 대표 기업인",
    sector: "기술",
    region: "대한민국",
    generation: "Heir-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "상속 지분 + 삼성전자 배당 + 그룹 지배 구조",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lee_Jae-yong_in_2016.jpg?width=640",
      alt: "Jay Y. Lee 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "삼성의 3세대 경영자로서 반도체, 스마트폰, 디스플레이 등 핵심 사업을 글로벌 리더로 이끌며 삼성그룹의 지배력을 강화한 사례입니다.",
    coreInsight:
      "글로벌 경제 환경의 불확실성 속에서도 반도체와 IT 제조의 핵심 경쟁력을 유지하며 지분 가치와 배당 수익을 안정적으로 관리하고 있습니다.",
    signalTags: ["반도체", "삼성", "한국 경제", "스마트폰"],
    milestones: [
      {
        year: "1968",
        title: "대한민국 서울 출생",
        body: "이건희 삼성 회장의 아들로 태어나 서울대학교와 일본 게이오대학에서 경영학을 공부했습니다.",
        type: "background",
      },
      {
        year: "1991",
        title: "삼성전자 입사",
        body: "삼성전자에 입사해 현장 경험을 쌓으며 그룹의 주요 사업에 대한 이해를 넓혔습니다.",
        type: "career",
      },
      {
        year: "2014",
        title: "삼성전자 부회장 취임",
        body: "삼성전자의 실질적 경영권을 승계받으며 글로벌 IT 기업의 리더로 자리잡았습니다.",
        type: "inflection",
      },
      {
        year: "2020s",
        title: "반도체 슈퍼사이클과 AI 수요",
        body: "메모리 반도체 시장의 호황과 AI 반도체 수요 증가가 삼성전자의 실적과 지분 가치를 견인했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "반도체 중심 사업 구조",
        detail: "메모리 반도체의 글로벌 리더십을 유지하며 AI, HBM 등 차세대 반도체 수요에 대응합니다.",
        weight: 90,
      },
      {
        label: "수직 통합 제조 경쟁력",
        detail: "부품, 제조, 완제품에 이르는 수직 통합 구조로 비용과 품질을 동시에 관리합니다.",
        weight: 86,
      },
      {
        label: "지배 구조 안정화",
        detail: "삼성물산-삼성전자-삼성생명으로 이어지는 순환 출자 구조를 통해 안정적인 경영권을 유지합니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "삼성전자 지분",
        detail: "삼성그룹 핵심 계열사의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "반도체 시장 사이클",
        detail: "메모리 반도체 가격과 수요 변동이 기업 실적과 지분 가치에 큰 영향을 미칩니다.",
        source: "Industry data",
      },
      {
        label: "배당 수익",
        detail: "삼성전자의 안정적인 배당 정책이 주요 주주로서 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Samsung Electronics annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 지배 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Korean business media",
        grade: "media",
        usage: "삼성 그룹 경영 승계와 사업 전략 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "cyrus-poonawalla",
    name: "Cyrus Poonawalla",
    koreanName: "사이러스 푸나왈라",
    headline: "백신으로 세계를 구한 인도 세럼 연구소의 창업자",
    sector: "헬스케어",
    region: "인도",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "비상장 기업 지분 + 백신 생산·수출 + 글로벌 보건 기여",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus_Poonawalla.jpg?width=640",
      alt: "Cyrus Poonawalla 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "인도에서 백신 연구소를 창업해 세계 최대 규모의 백신 생산 기업으로 성장시키며 글로벌 보건에 기여한 창업 사례입니다.",
    coreInsight:
      "저비용 대량 생산 시스템을 구축해 개발도상국에도 affordable한 백신을 공급하며 글로벌 백신 시장의 지배력을 확보했습니다.",
    signalTags: ["백신", "헬스케어", "인도 제약", "글로벌 보건"],
    milestones: [
      {
        year: "1940",
        title: "인도 푸네 출생",
        body: "수의사 집안에서 태어나 수의학을 전공하고 가족의 백신 사업을 물려받았습니다.",
        type: "background",
      },
      {
        year: "1966",
        title: "세럼 연구소 설립",
        body: "푸네에 소규모 백신 생산 연구소를 설립하며 백신 사업을 시작했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "글로벌 백신 허브로 성장",
        body: "세계보건기구(WHO) 인증을 받으며 전 세계로 백신을 수출하는 글로벌 공급자로 성장했습니다.",
        type: "scale",
      },
      {
        year: "2020s",
        title: "코로나19 백신 대량 생산",
        body: "코로나19 팬데믹 기간 아스트라제네카 백신을 대량 생산하며 세계적 주목을 받았습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "대량 생산 규모의 경제",
        detail: "세계 최대 규모의 백신 생산 시설을 바탕으로 단위당 생산 비용을 최소화했습니다.",
        weight: 92,
      },
      {
        label: "글로벌 보건 네트워크",
        detail: "WHO, 유니세프 등 글로벌 보건 기관과의 협력을 통해 안정적인 수출 채널을 확보했습니다.",
        weight: 86,
      },
      {
        label: "연구개발 투자",
        detail: "다양한 전염병 백신의 연구개발에 꾸준히 투자하며 제품 포트폴리오를 확장했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "세럼 연구소 지분",
        detail: "비상장 기업인 세럼 연구소의 지분 가치가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "글로벌 백신 수요",
        detail: "팬데믹 대비와 정기 접종 수요가 백신 기업의 안정적인 수익 기반이 됩니다.",
        source: "Industry reports",
      },
      {
        label: "WHO 사전적격성 인증",
        detail: "WHO 인증 제품 포트폴리오가 글로벌 입찰 시장에서 경쟁 우위를 제공합니다.",
        source: "WHO data",
      },
    ],
    sources: [
      {
        name: "Serum Institute of India reports",
        grade: "primary",
        usage: "생산 능력, 제품 포트폴리오, 수출 현황 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "WHO and global health reports",
        grade: "report",
        usage: "백신 공급과 글로벌 보건 기여도 확인",
        reliability: "공식 국제 기구 자료",
      },
    ],
  },
  {
    slug: "rick-cohen",
    name: "Rick Cohen & family",
    koreanName: "릭 코언 일가",
    headline: "식품 유통의 숨은 거인, C&S 도매식품의 지배자",
    sector: "기술",
    region: "미국",
    generation: "Heir-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "비상장 기업 지분 + 식품 유통망 + 로보틱스 투자",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rick_Cohen.jpg?width=640",
      alt: "Rick Cohen 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "가족이 운영하던 식품 도매 기업을 미국 최대 규모로 성장시키고, 로보틱스 기업 심보틱에 투자하며 기술과 유통을 융합한 사례입니다.",
    coreInsight:
      "전통적인 식품 유통업에서 규모의 경제와 물류 효율성을 극대화하고, 로보틱스 기술을 활용해 차세대 물류 혁신을 주도하고 있습니다.",
    signalTags: ["식품 유통", "도매", "로보틱스", "물류"],
    milestones: [
      {
        year: "1952",
        title: "미국 출생",
        body: "코헨 가문의 식품 도매 회사에서 성장하며 유통 업계의 경험을 쌓았습니다.",
        type: "background",
      },
      {
        year: "1980s",
        title: "C&S 도매식품 경영 승계",
        body: "가족 기업을 인수받아 미국 동부 지역에서 식품 도매 사업을 확장했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "미국 최대 식품 도매 기업으로 성장",
        body: "M&A와 유통망 확장을 통해 미국 최대 규모의 식품 도매 기업으로 성장시켰습니다.",
        type: "scale",
      },
      {
        year: "2010s",
        title: "심보틱 로보틱스 투자",
        body: "물류 로보틱스 기업 심보틱에 투자하고 상장시켜 기술 기반 물류 혁신에 참여했습니다.",
        type: "inflection",
      },
    ],
    strategy: [
      {
        label: "규모의 경제",
        detail: "미국 최대 규모의 식품 도매 유통망을 바탕으로 공급사와의 협상력을 극대화했습니다.",
        weight: 90,
      },
      {
        label: "기술 투자를 통한 다각화",
        detail: "심보틱 로보틱스를 통해 물류 자동화 기술에 투자하며 새로운 수익원을 창출했습니다.",
        weight: 84,
      },
      {
        label: "비상장 기업 장기 경영",
        detail: "기업을 비상장으로 유지하며 단기 실적 압박 없이 장기 전략에 집중할 수 있는 구조를 유지했습니다.",
        weight: 78,
      },
    ],
    assetDrivers: [
      {
        label: "C&S 도매식품 지분",
        detail: "미국 최대 식품 도매 기업의 비상장 지분 가치가 순자산의 핵심입니다.",
        source: "Company estimates",
      },
      {
        label: "심보틱 지분",
        detail: "상장 로보틱스 기업 심보틱의 지분 가치가 기술 투자 수익의 주요 요소입니다.",
        source: "Public market data",
      },
      {
        label: "식품 유통 마진",
        detail: "대규모 유통망을 통한 안정적인 도매 마진이 지속적인 현금 흐름을 창출합니다.",
        source: "Industry data",
      },
    ],
    sources: [
      {
        name: "C&S Wholesale Grocers reports",
        grade: "primary",
        usage: "유통망 규모, 사업 구조, 재무 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "유통업 구조와 기술 투자 맥락 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "israel-englander",
    name: "Israel Englander",
    koreanName: "이스라엘 잉글랜더",
    headline: "밀레니엄 매니지먼트로 헤지펀드 업계의 전설이 된 월가의 투자자",
    sector: "금융/투자",
    region: "미국",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "펀드 운용 수익 + 자체 투자 지분 + 다중 전략 수수료",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Israel_Englander.jpg?width=640",
      alt: "Israel Englander 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "증권 트레이더에서 시작해 밀레니엄 매니지먼트를 세계 최대 다중 전략 헤지펀드로 성장시키며 월가의 전설이 된 투자자 사례입니다.",
    coreInsight:
      "단일 전략 펀드가 아닌 다중 전략, 다중 매니저 모델을 도입해 안정적인 수익과 위험 분산을 동시에 달성했습니다.",
    signalTags: ["헤지펀드", "월가", "투자", "다중 전략"],
    milestones: [
      {
        year: "1948",
        title: "미국 뉴욕 출생",
        body: "증권 회사에서 경력을 시작하며 주식 분석과 트레이딩 전문성을 쌓았습니다.",
        type: "background",
      },
      {
        year: "1989",
        title: "밀레니엄 매니지먼트 설립",
        body: "다중 전략을 결합한 헤지펀드 회사를 설립하며 월가의 새로운 투자 방식을 개척했습니다.",
        type: "venture",
      },
      {
        year: "2000s",
        title: "다중 전략 모델 성공",
        body: "여러 투자 전략과 독립적인 포트폴리오 매니저를 동시에 운영하는 모델이 성공을 거두며 자산 규모가 급성장했습니다.",
        type: "inflection",
      },
      {
        year: "2010s-2020s",
        title: "세계 최대 헤지펀드 중 하나로 성장",
        body: "밀레니엄 매니지먼트는 약 600억 달러 규모의 운용 자산을 보유한 글로벌 헤지펀드로 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "다중 전략 분산",
        detail: "150개 이상의 독립적인 트레이딩 팀이 다양한 전략을 동시에 운영하며 위험을 분산합니다.",
        weight: 92,
      },
      {
        label: "위험 관리 우선",
        detail: "엄격한 위험 관리 시스템과 포지션 한도를 통해 하방 리스크를 철저히 통제합니다.",
        weight: 88,
      },
      {
        label: "인재 유치와 보상",
        detail: "최고의 포트폴리오 매니저를 유치할 수 있는 경쟁력 있는 보상 체계를 운영합니다.",
        weight: 82,
      },
    ],
    assetDrivers: [
      {
        label: "밀레니엄 매니지먼트 자본",
        detail: "헤지펀드 회사의 운용 수익과 자체 투자 자본이 순자산의 핵심입니다.",
        source: "Company reports",
      },
      {
        label: "운용 수수료",
        detail: "대규모 운용 자산(AUM)에서 발생하는 관리 수수료와 성과 수수료가 주요 수익원입니다.",
        source: "Company reports",
      },
      {
        label: "자체 투자 포트폴리오",
        detail: "개인 자산을 다양한 자산군에 분산 투자하며 추가 수익을 창출합니다.",
        source: "Public market data",
      },
    ],
    sources: [
      {
        name: "Millennium Management reports",
        grade: "primary",
        usage: "운용 전략, 자산 규모, 수익 성과 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Financial media",
        grade: "media",
        usage: "헤지펀드 산업 동향과 투자 성과 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "suleiman-kerimov",
    name: "Suleiman Kerimov & family",
    koreanName: "술레이만 케리모프 일가",
    headline: "러시아 금융과 금광의 거인, 다각화된 자산의 지배자",
    sector: "금융/투자",
    region: "러시아",
    generation: "Privatization beneficiary",
    rankLabel: "Top wealth cohort",
    wealthModel: "민영화 취득 지분 + 광업·금융 수익 + 배당",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Suleyman_Kerimov_%28cropped%29.jpg?width=640",
      alt: "Suleiman Kerimov 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "러시아 금융·광업 자산의 민영화를 통해 부를 축적하고 폴리우스 금광 등을 보유하며 다각화된 자산 포트폴리오를 구축한 사례입니다.",
    coreInsight:
      "러시아 경제 전환기에 은행과 금융 자산을 확보하고 이후 광업, 금광 등 실물 자산으로 포트폴리오를 전환하며 장기 가치를 창출했습니다.",
    signalTags: ["금융", "금광", "러시아", "민영화"],
    milestones: [
      {
        year: "1966",
        title: "러시아 다게스탄 출생",
        body: "경제학을 전공하고 소련 붕괴 후 금융업에 뛰어들었습니다.",
        type: "background",
      },
      {
        year: "1990s",
        title: "금융 자산 확보",
        body: "러시아 은행과 금융 자산을 인수하며 제정 러시아 시장에서 영향력을 확대했습니다.",
        type: "career",
      },
      {
        year: "2000s",
        title: "폴리우스 금광 지분 확보",
        body: "러시아 최대 금광 기업인 폴리우스의 지분을 확보하며 광업으로 사업 영역을 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2010s-2020s",
        title: "자산 재편과 안정화",
        body: "금융 자산 일부를 정리하고 광업 중심으로 포트폴리오를 재편하며 안정적 자산 구조를 구축했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "실물 자산 중심 전환",
        detail: "금융 자산에서 금광, 광업 등 실물 자산으로 투자 중심축을 이동하며 가치 안정성을 높였습니다.",
        weight: 88,
      },
      {
        label: "자원 민영화 참여",
        detail: "러시아 천연자원 민영화 과정에서 핵심 자산을 확보하며 자본 이득을 극대화했습니다.",
        weight: 84,
      },
      {
        label: "국제 분산 투자",
        detail: "러시아 외에도 해외 부동산과 금융 자산에 투자하며 지정학적 리스크를 분산했습니다.",
        weight: 76,
      },
    ],
    assetDrivers: [
      {
        label: "폴리우스 지분",
        detail: "러시아 최대 금광 기업의 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "금 가격",
        detail: "글로벌 금 가격 변동이 광산 기업의 수익성과 지분 가치에 직접적 영향을 미칩니다.",
        source: "Commodity markets",
      },
      {
        label: "배당 수익",
        detail: "폴리우스 등 보유 기업의 배당 정책이 주요 주주로서 안정적인 현금 흐름을 제공합니다.",
        source: "Company reports",
      },
    ],
    sources: [
      {
        name: "Polyus annual reports",
        grade: "primary",
        usage: "생산량, 재무 성과, 지분 구조 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "International business media",
        grade: "media",
        usage: "러시아 금융·광업 산업과 자산 이력 확인",
        reliability: "보조 출처",
      },
    ],
  },
  {
    slug: "dilip-shanghvi",
    name: "Dilip Shanghvi",
    koreanName: "딜립 샹비",
    headline: "제네릭 의약품 시장의 혁신가로 선 파마슈티컬을 글로벌 제약 기업으로 키운 창업자",
    sector: "헬스케어",
    region: "인도",
    generation: "Founder-operator",
    rankLabel: "Top wealth cohort",
    wealthModel: "상장 지분 + 제네릭 의약품 수익 + 글로벌 유통망",
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dilip_Shanghvi.jpg?width=640",
      alt: "Dilip Shanghvi 인물 사진",
      credit: "Wikimedia Commons",
    },
    summary:
      "소규모 제약 도매상에서 시작해 선 파마슈티컬을 인도 최대이자 세계적 제네릭 의약품 기업으로 성장시킨 창업 사례입니다.",
    coreInsight:
      "제네릭 의약품 시장에서 연구개발 효율성과 대량 생산 능력을 결합해 저비용 고품질 전략으로 글로벌 시장을 장악했습니다.",
    signalTags: ["제약", "제네릭", "인도", "헬스케어"],
    milestones: [
      {
        year: "1955",
        title: "인도 구자라트 출생",
        body: "칼커타 대학에서 상업학을 전공하고 가족의 제약 도매 사업에서 경력을 시작했습니다.",
        type: "background",
      },
      {
        year: "1983",
        title: "선 파마슈티컬 창업",
        body: "소규모 제약 제조 회사를 설립하며 정신과·신경과 전문 의약품 생산을 시작했습니다.",
        type: "venture",
      },
      {
        year: "1994",
        title: "미국 시장 진출",
        body: "미국 식품의약국(FDA) 승인을 획득하며 선 파마슈티컬을 글로벌 시장으로 확장했습니다.",
        type: "inflection",
      },
      {
        year: "2010s",
        title: "인도 최대 제약 기업으로 성장",
        body: "인도 제약 시장 1위이자 글로벌 제네릭 시장의 선두 기업으로 성장했습니다.",
        type: "scale",
      },
    ],
    strategy: [
      {
        label: "제네릭 집중 전략",
        detail: "고난이도 제네릭과 전문 치료 분야에 집중하여 상대적으로 높은 마진을 유지했습니다.",
        weight: 90,
      },
      {
        label: "글로벌 규제 승인 확보",
        detail: "미국 FDA, 유럽 EMA 등 선진국 규제 기관의 승인을 적극적으로 획득했습니다.",
        weight: 86,
      },
      {
        label: "R&D 효율성",
        detail: "연구개발 효율성을 극대화하며 신속한 제네릭 출시로 퍼스트-투-마켓 이점을 확보했습니다.",
        weight: 80,
      },
    ],
    assetDrivers: [
      {
        label: "선 파마슈티컬 지분",
        detail: "인도 최대 제약 기업의 상장 지분 가치가 순자산의 핵심입니다.",
        source: "Company filings",
      },
      {
        label: "제네릭 의약품 시장",
        detail: "글로벌 제네릭 시장의 성장과 특허 만료 약물 증가가 지속적인 매출 성장을 견인합니다.",
        source: "Industry reports",
      },
      {
        label: "FDA 승인 포트폴리오",
        detail: "미국 시장에서의 제품 승인 건수와 독점 기간이 수익성에 중요한 영향을 미칩니다.",
        source: "Regulatory filings",
      },
    ],
    sources: [
      {
        name: "Sun Pharmaceutical annual reports",
        grade: "primary",
        usage: "사업 부문, 재무 성과, 제품 포트폴리오 확인",
        reliability: "공식 공시",
      },
      {
        name: "Global Billionaires List",
        grade: "index",
        usage: "순자산 추정과 순위 기준점",
        reliability: "외부 추정치",
      },
      {
        name: "Major business media",
        grade: "media",
        usage: "창업 스토리와 글로벌 확장 전략 확인",
        reliability: "보조 출처",
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
