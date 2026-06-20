export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#111411]">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <h1 className="font-display text-3xl leading-tight sm:text-5xl">이용약관</h1>
        <p className="mt-3 text-sm text-[#6a6f66]">최종 업데이트: 2026년 6월 16일</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#3d423b]">
          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제1조 (목적)</h2>
            <p className="mt-3">
              본 약관은 THE NEXT RICHERS(이하 "회사")가 제공하는 글로벌 부자 인사이트 플랫폼
              서비스(이하 "서비스")의 이용 조건과 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제2조 (서비스의 내용)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>글로벌 부자 랭킹 및 순자산 정보 제공</li>
              <li>인물별 성장 과정, 사업 전략, 자산 형성 구조 콘텐츠</li>
              <li>시장 인사이트 및 전략 타임라인 정보</li>
              <li>기타 회사가 추가로 개발하거나 제휴를 통해 제공하는 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제3조 (콘텐츠의 출처와 신뢰도)</h2>
            <p className="mt-3">
              회사가 제공하는 모든 순자산, 순위, 재무 정보는 외부 기관의 공개 추정치를 기반으로 하며,
              회사는 정보의 정확성이나 완전성을 보증하지 않습니다. 투자 결정은 이용자 본인의 판단에 따라
              이루어져야 하며, 이로 인한 손실에 대해 회사는 책임을 지지 않습니다.
            </p>
            <p className="mt-3">
              각 콘텐츠의 출처 등급(primary/index/media/report)은 정보의 신뢰도 평가를 위한 참고 자료이며,
              절대적인 사실 확인을 의미하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제4조 (이용자의 의무)</h2>
            <p className="mt-3">
              이용자는 서비스를 이용할 때 다음 행위를 해서는 안 됩니다:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>타인의 개인정보를 도용하거나 부정하게 사용하는 행위</li>
              <li>서비스의 콘텐츠를 무단으로 복제, 배포, 전시하는 행위</li>
              <li>서비스의 운영을 방해하거나 비정상적인 트래픽을 유발하는 행위</li>
              <li>관련 법령에 위배되는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제5조 (면책 조항)</h2>
            <p className="mt-3">
              회사는 천재지변, 시스템 장애, 통신 서비스 중단 등 불가항력적인 사유로 서비스를
              일시적으로 제공할 수 없는 경우 책임을 면합니다. 회사는 이용자의 귀책 사유로 인한
              서비스 이용 장애에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제6조 (약관의 개정)</h2>
            <p className="mt-3">
              회사는 관련 법령을 위반하지 않는 범위에서 본 약관을 개정할 수 있습니다.
              약관 개정 시 적용 일자와 개정 사유를 명시하여 서비스 내 공지사항에 7일 전 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">제7조 (준거법 및 관할)</h2>
            <p className="mt-3">
              본 약관은 대한민국 법률에 따라 규율됩니다. 서비스 이용으로 발생한 분쟁에 대해
              회사의 본사 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
