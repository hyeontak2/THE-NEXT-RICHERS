import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE NEXT RICHERS | 글로벌 부자 인사이트 플랫폼",
  description:
    "Forbes, Bloomberg, 기업 공식 자료와 공시를 바탕으로 글로벌 부자들의 성장 과정, 사업 전략, 자산 형성 구조를 학습 가능한 콘텐츠로 제공하는 플랫폼입니다.",
  metadataBase: new URL("https://the-next-richers.local"),
  openGraph: {
    title: "THE NEXT RICHERS",
    description:
      "부자 랭킹 너머의 성장 과정과 자산 형성 구조를 배우는 글로벌 비즈니스 인사이트 플랫폼.",
    images: ["/images/the-next-richers-page-concept.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
