import {
  ArrowRight,
  ChevronRight,
  Database,
  ExternalLink,
  Globe2,
  Menu,
  Search,
} from "lucide-react";
import {
  features,
  profilePreviews,
  proofStats,
  sources,
  timelineSteps,
} from "@/lib/landing-data";

const navItems = ["성장 스토리", "전략 타임라인", "검증 출처", "자산 흐름"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e8] text-[#111411]">
      <Hero />
      <ValueProps />
      <ProductPreview />
      <MarketProof />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-[#080a09] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#080a09_0%,#1a1f1d_35%,#2a322c_55%,#1a1f1d_75%,#080a09_100%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-[#d8a24f]/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-[#65b981]/8 blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,9,0.92)_0%,rgba(8,10,9,0.72)_38%,rgba(8,10,9,0.44)_62%,rgba(8,10,9,0.66)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080a09] to-transparent" />

      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#" aria-label="THE NEXT RICHERS 홈">
            <span className="grid size-11 place-items-center border border-[#d8a24f] text-sm font-semibold text-[#e7b864]">
              TNR
            </span>
            <span className="font-display text-lg tracking-normal text-white">
              THE NEXT RICHERS
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/78 lg:flex">
            {navItems.map((item) => (
              <a key={item} className="transition hover:text-white" href="#product">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="grid size-10 place-items-center rounded-[8px] border border-white/14 text-white/80 transition hover:border-white/32 hover:text-white"
              type="button"
              aria-label="검색"
            >
              <Search className="size-4" />
            </button>
            <button
              className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-white/14 px-3 text-sm text-white/82"
              type="button"
            >
              <Globe2 className="size-4" aria-hidden="true" />
              KO
            </button>
            <a
              className="rounded-[8px] bg-[#d8a24f] px-5 py-2.5 text-sm font-semibold text-[#111009] transition hover:bg-[#efbd6a]"
              href="/app"
            >
              앱 열기
            </a>
          </div>
          <button
            className="grid size-10 place-items-center rounded-[8px] border border-white/14 text-white lg:hidden"
            type="button"
            aria-label="메뉴"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pb-20 pt-16 lg:min-h-[calc(92vh-74px)] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#d8a24f]/42 bg-[#d8a24f]/10 px-3 py-2 text-xs font-semibold uppercase tracking-normal text-[#f0c77d]">
            <Database className="size-4" aria-hidden="true" />
            검증된 부의 성장 스토리
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-balance text-white sm:text-7xl lg:text-8xl">
            THE NEXT
            <span className="block text-[#e2aa58]">RICHERS</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-pretty text-white/78 sm:text-xl">
            부자 랭킹 너머로, 글로벌 부자들이 어떤 성장 과정과 사업 전략,
            자산 형성 구조를 통해 다음 단계로 올라갔는지 배우는 비즈니스
            인사이트 플랫폼.
          </p>
          <div className="mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-[#d9a557] px-5 text-sm font-semibold text-[#111009] transition hover:bg-[#efbd6a] focus:outline-none focus:ring-2 focus:ring-[#f0c77d] focus:ring-offset-2 focus:ring-offset-[#111411]"
              href="/app"
            >
              앱 열기
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-semibold text-white transition hover:border-white/36 hover:bg-white/14 focus:outline-none focus:ring-2 focus:ring-white/36 focus:ring-offset-2 focus:ring-offset-[#111411]"
              href="#sources"
            >
              검증 출처 보기
            </a>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["Forbes", "Bloomberg", "공식 자료", "공시 기반"].map((item) => (
              <div
                key={item}
                className="border-l border-[#d8a24f]/46 px-3 py-2 text-sm text-white/74"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section id="value" className="bg-[#080a09] px-5 pb-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="bg-[#0e1411] p-6">
                <div className="mb-7 grid size-12 place-items-center rounded-[8px] border border-[#65b981]/34 bg-[#12382c] text-[#79d894]">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section id="product" className="bg-[#f5f1e8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#743b46]">
              Product Preview
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance text-[#111411] sm:text-5xl">
              성공담이 아니라, 부가 만들어진 구조를 보여줍니다.
            </h2>
          </div>
          <p className="text-lg leading-8 text-pretty text-[#4a504a]">
            각 인물의 배경, 창업, 실패, 전환점, 기업 이벤트, 지분 구조를 한
            화면에서 연결합니다. 추정 자산과 검증된 사건은 분리해 표시해
            학습과 비교가 쉬운 형태로 설계합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="border border-[#d8d0bf] bg-[#fffaf0] p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8d0bf] pb-5">
              <div>
                <p className="text-sm font-semibold text-[#743b46]">Strategy Timeline</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#111411]">
                  From signal to wealth formation
                </h3>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#cbbfaa] px-3 py-2 text-sm font-semibold text-[#12382c] transition hover:border-[#12382c]"
                href="#sources"
              >
                출처 기준 보기
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {timelineSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.label} className="relative">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-[8px] bg-[#12382c] text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-[#c8923d]">
                        {step.label}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-[#111411]">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-[#5f655d]">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="border border-[#d8d0bf] bg-[#111411] p-5 text-white shadow-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-[#d8a24f]">인물 탐색</p>
                <h3 className="mt-1 text-2xl font-semibold">인물 탐색</h3>
              </div>
              <ChevronRight className="size-5 text-white/50" aria-hidden="true" />
            </div>
            <div className="mt-5 space-y-4">
              {profilePreviews.map((profile, index) => (
                <article
                  key={profile.name}
                  className="grid gap-4 border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[96px_1fr]"
                >
                  <div
                    className="relative min-h-28 overflow-hidden rounded-[8px] border border-white/12 bg-[#1d2d27] bg-cover bg-center sm:min-h-full"
                    role="img"
                    aria-label={profile.portrait.alt}
                    style={{ backgroundImage: `url(${profile.portrait.src})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080a09]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 rounded-[8px] bg-black/45 px-2 py-1 text-[10px] font-semibold uppercase tracking-normal text-white/78">
                      {profile.portrait.credit}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-[#d8a24f]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h4 className="text-lg font-semibold">{profile.name}</h4>
                        </div>
                        <p className="mt-1 text-sm text-white/54">{profile.field}</p>
                      </div>
                      <span className="rounded-[8px] bg-[#12382c] px-3 py-1 text-xs text-[#a8e7b5]">
                        {profile.netWorthLabel}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/70">{profile.thesis}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.signals.map((signal) => (
                        <span
                          key={signal}
                          className="rounded-[8px] border border-white/12 px-2.5 py-1 text-xs text-white/62"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-5">
          <section className="border border-[#d8d0bf] bg-[#12382c] p-6 text-white">
            <p className="text-sm font-semibold text-[#d8a24f]">순위 변동</p>
            <h3 className="mt-2 text-2xl font-semibold">자산 변화는 학습의 실마리입니다.</h3>
            <div className="mt-8 space-y-4">
              {["기업 이벤트", "지분 가치", "산업 사이클", "환율·시장 변동"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="grid size-9 place-items-center rounded-[8px] bg-white/10 text-sm text-[#d8a24f]">
                      {index + 1}
                    </span>
                    <div className="h-2 flex-1 bg-white/10">
                      <div
                        className="h-2 bg-[#d8a24f]"
                        style={{ width: `${76 - index * 12}%` }}
                      />
                    </div>
                    <span className="w-28 text-sm text-white/76">{item}</span>
                  </div>
                ),
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function MarketProof() {
  return (
    <section id="sources" className="bg-[#fffaf0] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#3f6073]">
              검증 출처
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance sm:text-5xl">
              근거가 있는 인사이트만 오래 갑니다.
            </h2>
            <p className="mt-6 text-lg leading-8 text-pretty text-[#4f564f]">
              시장 규모, 랭킹 데이터, 경제·비즈니스 콘텐츠 수요를 분리해서
              제시합니다. 서비스 안에서도 추정치와 확정 사실을 명확히 구분합니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="border border-[#d8d0bf] bg-white p-5">
                  <Icon className="size-6 text-[#743b46]" aria-hidden="true" />
                  <p className="mt-6 text-3xl font-semibold text-[#111411]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5f655d]">{stat.label}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[#d8d0bf] bg-[#d8d0bf] lg:grid-cols-4">
          {sources.map((source) => (
            <article key={source.name} className="bg-[#f5f1e8] p-5">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-[8px] bg-[#dfe8df] px-3 py-1 text-xs font-semibold text-[#12382c]">
                  {source.strength}
                </span>
                <ExternalLink className="size-4 text-[#7a7468]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#111411]">{source.name}</h3>
              <p className="mt-4 text-sm leading-6 text-[#5f655d]">{source.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-[#686f68]">
          THE NEXT RICHERS는 투자 자문이나 종목 추천 서비스가 아닙니다. 순자산은
          외부 랭킹 기관의 추정치를 바탕으로 해설하며, 기업 이벤트와 출처 기반
          사실을 구분해 학습 콘텐츠로 제공합니다.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d8d0bf] bg-[#080a09] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a className="flex items-center gap-3" href="#" aria-label="THE NEXT RICHERS 홈">
              <span className="grid size-11 place-items-center border border-[#d8a24f] text-sm font-semibold text-[#e7b864]">
                TNR
              </span>
              <span className="font-display text-lg tracking-normal text-white">
                THE NEXT RICHERS
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/56">
              Forbes TOP 100 부자들의 성장 과정, 사업 전략, 자산 형성 구조를
              배우는 글로벌 비즈니스 인사이트 플랫폼.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* Twitter/X */}
              <a href="#" className="text-white/46 transition hover:text-[#d8a24f]" aria-label="Twitter">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.5 4.5l5.5 7.5-5.5 7.5h2l4-5.5 4 5.5h5l-5.5-7.5 5.5-7.5h-2l-4 5.5-4-5.5h-5z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-white/46 transition hover:text-[#d8a24f]" aria-label="YouTube">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21.543 6.498A2.5 2.5 0 0019.5 4.5C17.5 4 12 4 12 4s-5.5 0-7.5.5A2.5 2.5 0 002.45 6.5 26.6 26.6 0 002 12c0 1.98.16 3.96.45 5.5A2.5 2.5 0 004.5 19.5c2 .5 7.5.5 7.5.5s5.5 0 7.5-.5a2.5 2.5 0 002.043-2.002A26.6 26.6 0 0022 12a26.6 26.6 0 00-.457-5.502z" />
                  <path d="M10 15.5v-7l5.5 3.5-5.5 3.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-white/46 transition hover:text-[#d8a24f]" aria-label="Instagram">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-white/46 transition hover:text-[#d8a24f]" aria-label="LinkedIn">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                  <path d="M7 10v7M7 7v0M11 13v4M11 13a4 4 0 018 0v4" strokeLinecap="round" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="text-white/46 transition hover:text-[#d8a24f]" aria-label="GitHub">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.236-.009-.864-.013-1.695-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#d8a24f]">서비스</h4>
            <ul className="mt-5 space-y-3">
              {["인물 탐색", "순위 보기", "전략 타임라인", "시장 인사이트"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/56 transition hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#d8a24f]">리소스</h4>
            <ul className="mt-5 space-y-3">
              {["출처 기준", "이용약관", "개인정보처리방침", "문의하기"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/56 transition hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#d8a24f]">뉴스레터</h4>
            <p className="mt-5 text-sm leading-6 text-white/56">
              TOP 100 부자들의 최신 순위 변동과 인사이트를 이메일로 받아보세요.
            </p>
            <form className="mt-4 flex gap-2" action="#">
              <input
                type="email"
                placeholder="이메일 주소"
                className="min-h-10 flex-1 rounded-[8px] border border-white/18 bg-white/8 px-3 text-sm text-white placeholder-white/36 outline-none focus:border-[#d8a24f]/60"
              />
              <button
                type="submit"
                className="rounded-[8px] bg-[#d8a24f] px-4 text-sm font-semibold text-[#111009] transition hover:bg-[#efbd6a]"
              >
                구독
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} THE NEXT RICHERS. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              순자산은 Forbes, Bloomberg 등 외부 기관의 추정치를 기반으로 합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
