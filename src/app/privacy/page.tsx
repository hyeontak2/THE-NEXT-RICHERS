export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#111411]">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <h1 className="font-display text-3xl leading-tight sm:text-5xl">개인정보 처리방침</h1>
        <p className="mt-3 text-sm text-[#6a6f66]">최종 업데이트: 2026년 6월 16일</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#3d423b]">
          <section>
            <h2 className="text-lg font-semibold text-[#111411]">1. 수집하는 개인정보 항목</h2>
            <p className="mt-3">
              THE NEXT RICHERS(이하 "회사")는 서비스 제공을 위해 다음과 같은 최소한의 개인정보를 수집합니다:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong>필수 항목:</strong> 이메일 주소(뉴스레터 구독 시), 서비스 이용 기록</li>
              <li><strong>선택 항목:</strong> 프로필 이미지, 닉네임(향후 로그인 기능 도입 시)</li>
              <li><strong>자동 수집 항목:</strong> 접속 로그, 기기 정보, 브라우저 종류, IP 주소</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">2. 개인정보의 수집 및 이용 목적</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>서비스 제공 및 운영</li>
              <li>뉴스레터 발송 (구독자에 한함)</li>
              <li>서비스 개선 및 사용자 경험 분석</li>
              <li>문의 응대 및 고객 지원</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="mt-3">
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 지체 없이 해당 정보를 파기합니다.
              단, 관련 법령에 의해 보존할 필요가 있는 경우 법령에서 정한 기간 동안 보관합니다:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>서비스 이용 기록: 3개월 (통신비밀보호법)</li>
              <li>뉴스레터 구독 정보: 구독 해지 시까지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">4. 개인정보의 제3자 제공</h2>
            <p className="mt-3">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우는 예외로 합니다:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의하거나, 법 집행 기관의 요청이 있는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">5. 이용자의 권리</h2>
            <p className="mt-3">
              이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다.
              개인정보 관련 문의는 아래 연락처로 해주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">6. 쿠키 사용</h2>
            <p className="mt-3">
              회사는 서비스 제공을 위해 쿠키를 사용할 수 있습니다. 이용자는 브라우저 설정을 통해
              쿠키 저장을 거부할 수 있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">7. 개인정보 보호 책임자</h2>
            <p className="mt-3">
              회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 개인정보 관련 문의를 처리하기 위해
              개인정보 보호 책임자를 지정하고 있습니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong>책임자:</strong> THE NEXT RICHERS 운영팀</li>
              <li><strong>이메일:</strong> privacy@thenextrichers.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111411]">8. 고지 의무</h2>
            <p className="mt-3">
              본 개인정보 처리방침은 2026년 6월 16일부터 적용됩니다. 내용 변경 시 서비스 내 공지사항을 통해 고지합니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
