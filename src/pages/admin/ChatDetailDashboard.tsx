import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Handshake,
  Crown,
  Heart,
  CalendarCheck,
  Download,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

export default function ChatDetailDashboard() {
  return (
    <div className="flex h-[calc(100vh-5.5rem)] flex-col space-y-4 overflow-hidden">
      <SEO
        title="챗봇 내 세부 대시보드 | Celefix"
        description="챗봇 내에서 아티스트 지표와 출연 히스토리, 활동 분포를 한눈에 확인하세요."
      />

      <header className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold">챗봇 내 세부 대시보드</h1>
          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            실시간 업데이트
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> 저장하기
          </Button>
          <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary/10">
            <RefreshCw className="h-4 w-4" /> 새로고침
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto rounded-xl border border-border bg-card p-4">
        {/* 아티스트 탭 */}
        <nav className="mb-4 flex items-center gap-4 border-b border-border pb-2 text-sm">
          <button className="relative pb-2 font-medium text-primary after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-primary">
            아이유 (IU)
          </button>
          <button className="pb-2 text-muted-foreground hover:text-foreground">적재 (Jukjae)</button>
          <button className="pb-2 text-muted-foreground hover:text-foreground">에픽하이 (Epik High)</button>
        </nav>

        {/* 핵심 지표 4칸 */}
        <section className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
            <div>
              <div className="text-xs text-muted-foreground">총 팔로워</div>
              <div className="text-xl font-bold">1.2M</div>
              <div className="text-xs text-green-500">+5.3%</div>
            </div>
            <Users className="h-6 w-6 text-primary" />
          </article>
          <article className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
            <div>
              <div className="text-xs text-muted-foreground">월 평균 수입</div>
              <div className="text-xl font-bold">₩85.6M</div>
              <div className="text-xs text-green-500">+12.7%</div>
            </div>
            <Handshake className="h-6 w-6 text-primary" />
          </article>
          <article className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
            <div>
              <div className="text-xs text-muted-foreground">연간 행사</div>
              <div className="text-xl font-bold">42</div>
              <div className="text-xs text-red-500">-3.1%</div>
            </div>
            <CalendarCheck className="h-6 w-6 text-primary" />
          </article>
          <article className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
            <div>
              <div className="text-xs text-muted-foreground">브랜드 가치</div>
              <div className="text-xl font-bold">₩5.7B</div>
              <div className="text-xs text-green-500">+8.2%</div>
            </div>
            <Crown className="h-6 w-6 text-primary" />
          </article>
        </section>

        {/* 대시보드 상단 그리드 */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* 좌: SNS 반응 추이 */}
          <article className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">SNS 반응 추이</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary/60" /> 실시간
                </div>
                <div className="rounded border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
                  최근 7개월
                </div>
              </div>
            </div>
            <div className="mb-3 flex gap-4 text-sm">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-primary" />좋아요</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-500" />댓글</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-cyan-400" />공유</div>
            </div>
            <div className="h-56 w-full rounded-md border border-dashed border-border" />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded bg-background p-2">
                <div className="text-xs text-muted-foreground">총 좋아요</div>
                <div className="text-lg font-bold">172.8K</div>
              </div>
              <div className="rounded bg-background p-2">
                <div className="text-xs text-muted-foreground">평균 댓글</div>
                <div className="text-lg font-bold">68.3K</div>
              </div>
              <div className="rounded bg-background p-2">
                <div className="text-xs text-muted-foreground">공유 전환율</div>
                <div className="text-lg font-bold">4.8%</div>
              </div>
            </div>
          </article>

          {/* 우: 통계 + 히스토리 (2행) */}
          <div className="grid grid-rows-2 gap-4">
            <article className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-semibold">실시간 통계</h2>
                <span className="flex items-center gap-1 rounded-full bg-background px-2 py-0.5 text-xs text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" /> LIVE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded bg-background p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">현재 계약 가치</div>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-xl font-bold">₩2.4B</div>
                  <div className="mt-1 text-xs text-green-500">+18% YoY</div>
                </div>
                <div className="rounded bg-background p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">팬덤 성장률</div>
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-xl font-bold">+32.6%</div>
                  <div className="mt-1 text-xs text-green-500">MoM +5.2%</div>
                </div>
                <div className="rounded bg-background p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">브랜드 협업</div>
                    <Handshake className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-xl font-bold">8</div>
                  <div className="mt-1 text-xs">활성 계약</div>
                </div>
                <div className="rounded bg-background p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">출연료 지수</div>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-xl font-bold">8.7/10</div>
                  <div className="mt-1 text-xs text-green-500">상위 5%</div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-border bg-muted/30 p-4">
              <h2 className="mb-3 text-lg font-semibold">출연 히스토리</h2>
              <div className="h-48 space-y-3 overflow-y-auto pr-1">
                {[
                  { title: "서울대학교 여름 축제", meta: "2025년 7월 20일 · 5,200명" },
                  { title: "뮤직뱅크 컴백 스페셜", meta: "2025년 7월 3일 · 전국 방송" },
                  { title: "삼성전자 신제품 런칭쇼", meta: "2025년 6월 15일 · 1,200명" },
                  { title: "서울 재즈 페스티벌", meta: "2025년 5월 27-28일 · 8,500명" },
                  { title: "LG전자 신기술 발표회", meta: "2025년 5월 10일 · 850명" },
                ].map((it, idx) => (
                  <div key={idx} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                      {idx < 4 && <span className="my-1 h-6 w-[2px] bg-primary/30" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">{it.title}</div>
                      <div className="text-xs text-muted-foreground">{it.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <Separator className="my-4" />

        {/* 하단 그리드 */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* 좌: 활동 유형 분포 */}
          <article className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold">활동 유형별 분포</h2>
              <div className="rounded border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
                2025년
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 rounded-md border border-dashed border-border" />
              <div className="space-y-3">
                {[
                  { label: "페스티벌", percent: 35, meta: "총 14건 · 수익 ₩560M" },
                  { label: "대학축제", percent: 25, meta: "총 10건 · 수익 ₩280M" },
                  { label: "기업행사", percent: 20, meta: "총 8건 · 수익 ₩420M" },
                  { label: "TV출연", percent: 20, meta: "총 8건 · 수익 ₩640M" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{row.label}</span>
                      <span className="font-semibold">{row.percent}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-background">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{row.meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 우: 지역 선호도 + 성과 지표 */}
          <div className="grid grid-rows-2 gap-4">
            <article className="rounded-lg border border-border bg-muted/30 p-4">
              <h2 className="mb-3 text-lg font-semibold">지역별 선호도</h2>
              <div className="space-y-3">
                {[
                  { label: "서울", percent: 52 },
                  { label: "부산", percent: 18 },
                  { label: "대구", percent: 12 },
                  { label: "인천", percent: 10 },
                  { label: "기타", percent: 8 },
                ].map(({ label, percent }) => (
                  <div key={label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-background">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-border bg-muted/30 p-4">
              <h2 className="mb-3 text-lg font-semibold">성과 지표 & 최근 활동</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded bg-background p-3 text-center">
                  <div className="text-xs text-muted-foreground">갤럭시 지수</div>
                  <div className="text-lg font-bold text-primary">8.7/10</div>
                </div>
                <div className="rounded bg-background p-3 text-center">
                  <div className="text-xs text-muted-foreground">유효 접촉</div>
                  <div className="text-lg font-bold text-primary">12</div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
