import { ArrowRight, KeyRound, Mail } from "lucide-react";
import { AppShell, PageIntro } from "../app-chrome";
import { LocalizedText } from "../i18n-provider";

export default function LoginPage() {
  return (
    <AppShell active="home">
      <PageIntro
        icon={KeyRound}
        eyebrow="계정"
        eyebrowToken="login.eyebrow"
        title="THE NEXT RICHERS에 로그인합니다."
        titleToken="login.title"
        description="저장한 인물과 비교 흐름을 계정 기준으로 이어갑니다."
        descriptionToken="login.description"
      />

      <section className="px-4 py-8 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="border border-[#ded8ca] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3 border-b border-[#ebe5d8] pb-5">
              <span className="grid size-11 place-items-center rounded-[8px] bg-[#111411] text-[#f3c56f]">
                <KeyRound className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#9a6a20]">
                  THE NEXT RICHERS
                </p>
                <h2 className="mt-1 text-xl font-semibold text-[#111411]">
                  <LocalizedText token="login.submit" fallback="로그인" />
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-[#343a34]">
                  <LocalizedText token="login.email" fallback="이메일" />
                </span>
                <span className="mt-2 flex min-h-12 items-center gap-3 rounded-[8px] border border-[#ded8ca] bg-[#faf8f2] px-3">
                  <Mail className="size-4 shrink-0 text-[#73786f]" aria-hidden="true" />
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm text-[#111411] outline-none placeholder:text-[#9aa096]"
                    placeholder="name@example.com"
                    type="email"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#343a34]">
                  <LocalizedText token="login.password" fallback="비밀번호" />
                </span>
                <span className="mt-2 flex min-h-12 items-center gap-3 rounded-[8px] border border-[#ded8ca] bg-[#faf8f2] px-3">
                  <KeyRound className="size-4 shrink-0 text-[#73786f]" aria-hidden="true" />
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm text-[#111411] outline-none placeholder:text-[#9aa096]"
                    placeholder="••••••••"
                    type="password"
                  />
                </span>
              </label>

              <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-[#111411] px-4 text-sm font-semibold text-[#ffffff] transition hover:bg-[#2b302b]"
                type="button"
              >
                <LocalizedText token="login.submit" fallback="로그인" />
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>

              <button
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-[#ded8ca] bg-white px-4 text-sm font-semibold text-[#111411] transition hover:border-[#c8923d] hover:bg-[#f8f4ec]"
                type="button"
              >
                <LocalizedText token="login.google" fallback="구글로 계속" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
