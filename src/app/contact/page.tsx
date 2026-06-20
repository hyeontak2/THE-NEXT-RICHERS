import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#111411]">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <h1 className="font-display text-3xl leading-tight sm:text-5xl">문의하기</h1>
        <p className="mt-3 text-base leading-7 text-[#5d625b]">
          서비스 이용 관련 문의나 제안이 있으시면 아래 방법으로 연락해 주세요.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href="mailto:hello@thenextrichers.com"
            className="group flex items-center gap-5 rounded-[12px] border border-[#e2ded2] bg-white p-6 transition hover:border-[#d8a24f]/40 hover:shadow-md"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-[10px] bg-[#f1eee6]">
              <Mail className="size-5 text-[#9a6a20]" />
            </div>
            <div>
              <p className="font-semibold">이메일</p>
              <p className="mt-1 text-sm text-[#6a6f66]">hello@thenextrichers.com</p>
            </div>
          </a>

          <a
            href="https://t.me/thenextrichers"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-[12px] border border-[#e2ded2] bg-white p-6 transition hover:border-[#d8a24f]/40 hover:shadow-md"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-[10px] bg-[#f1eee6]">
              <MessageCircle className="size-5 text-[#9a6a20]" />
            </div>
            <div>
              <p className="font-semibold">텔레그램</p>
              <p className="mt-1 text-sm text-[#6a6f66]">@thenextrichers</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
