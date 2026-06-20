import {
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  FileSearch,
  Globe2,
  LineChart,
  LucideIcon,
  Milestone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Source = {
  name: string;
  detail: string;
  strength: "공식" | "보고서" | "데이터" | "시장 근거";
};

export type ProfilePreview = {
  name: string;
  field: string;
  thesis: string;
  netWorthLabel: string;
  signals: string[];
  portrait: {
    src: string;
    alt: string;
    credit: string;
  };
};

export type TimelineStep = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "성장 스토리",
    description:
      "출생과 학력, 초기 커리어, 첫 사업, 실패와 전환점을 인물별 학습 흐름으로 정리합니다.",
    icon: BookOpenCheck,
  },
  {
    title: "전략 타임라인",
    description:
      "핵심 선택이 제품, 시장, 지분, 자산 변화로 이어지는 과정을 시간순으로 비교합니다.",
    icon: Milestone,
  },
  {
    title: "검증 출처",
    description:
      "글로벌 금융 정보, Bloomberg, 기업 공식 자료, 공시, 주요 언론을 함께 표기해 신뢰도를 분리합니다.",
    icon: ShieldCheck,
  },
  {
    title: "자산 흐름",
    description:
      "지분, 상장, 배당, 인수합병, 산업 사이클이 추정 순자산에 미친 영향을 해설합니다.",
    icon: CircleDollarSign,
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    label: "01",
    title: "배경",
    description: "가족, 교육, 초기 커리어에서 반복되는 성장 조건을 봅니다.",
    icon: Sparkles,
  },
  {
    label: "02",
    title: "첫 전환",
    description: "첫 사업, 첫 고객, 시장 진입 방식의 차이를 비교합니다.",
    icon: TrendingUp,
  },
  {
    label: "03",
    title: "사업 전략",
    description: "제품, 유통, M&A, 가격 결정력 같은 핵심 전략을 분해합니다.",
    icon: Building2,
  },
  {
    label: "04",
    title: "자산 구조",
    description: "지분과 기업 가치가 어떻게 부의 규모로 연결되는지 보여줍니다.",
    icon: BarChart3,
  },
];

export const profilePreviews: ProfilePreview[] = [
  {
    name: "Jensen Huang",
    field: "AI · Semiconductors",
    thesis: "기술 사이클과 지분 가치가 자산 변화를 이끈 대표 사례",
    netWorthLabel: "추정 자산 변동 추적",
    signals: ["창업자 지분", "AI 수요", "반도체 공급망"],
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jensen_Huang_%28cropped%29.jpg?width=320",
      alt: "Jensen Huang portrait",
      credit: "Wikimedia Commons",
    },
  },
  {
    name: "Bernard Arnault",
    field: "Luxury · Brand Portfolio",
    thesis: "브랜드 포트폴리오와 M&A가 장기 복리 구조를 만든 사례",
    netWorthLabel: "브랜드 자산 구조 분석",
    signals: ["M&A", "가격 결정력", "럭셔리 수요"],
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg?width=320",
      alt: "Bernard Arnault portrait",
      credit: "Wikimedia Commons",
    },
  },
  {
    name: "Elon Musk",
    field: "Mobility · Space · AI",
    thesis: "상장사 지분, 비상장 기업 가치, 시장 기대가 동시에 움직이는 사례",
    netWorthLabel: "복합 지분 흐름 해설",
    signals: ["상장 지분", "비상장 가치", "시장 변동성"],
    portrait: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Elon_Musk_Royal_Society_crop.jpg?width=320",
      alt: "Elon Musk portrait",
      credit: "Wikimedia Commons",
    },
  },
];

export const sources: Source[] = [
  {
    name: "Global Billionaires Ranking",
    detail: "글로벌 억만장자 순위와 추정 순자산의 기준점",
    strength: "데이터",
  },
  {
    name: "Bloomberg Billionaires Index",
    detail: "일일 자산 변동과 산정 근거를 확인하는 보조 기준",
    strength: "데이터",
  },
  {
    name: "KB 2025 한국 부자 보고서",
    detail: "국내 부자 시장과 자산관리 관심사에 대한 보고서 근거",
    strength: "보고서",
  },
  {
    name: "NAVER 프리미엄콘텐츠",
    detail: "경제·비즈니스 유료 지식 콘텐츠 시장의 간접 수요 근거",
    strength: "시장 근거",
  },
];

export const proofStats = [
  {
    value: "3,428명",
    label: "2026 글로벌 억만장자",
    icon: Globe2,
  },
  {
    value: "$20.1T",
    label: "글로벌 집계 총자산 규모",
    icon: LineChart,
  },
  {
    value: "47.6만명",
    label: "KB 2025 한국 부자 수",
    icon: FileSearch,
  },
  {
    value: "600만 MAU",
    label: "네이버 프리미엄콘텐츠 발표 기준",
    icon: CheckCircle2,
  },
];
