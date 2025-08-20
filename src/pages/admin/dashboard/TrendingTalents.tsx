import { Lightbulb, TrendingUp } from "lucide-react";

export default function TrendingTalents() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-md border bg-muted/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--warning))]/20 text-[hsl(var(--warning))] text-sm font-bold">JJ</div>
              <div>
                <div className="text-lg font-semibold">적재</div>
                <div className="text-sm text-muted-foreground">싱어송라이터</div>
              </div>
            </div>
            <div className="text-[hsl(var(--success))] text-lg font-semibold"><TrendingUp className="mr-1 inline h-5 w-5" /> 36%</div>
          </div>
          <div className="mb-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border bg-background px-3 py-1 text-muted-foreground">잠재력 높음</span>
            <span className="rounded-full border bg-background px-3 py-1 text-muted-foreground">SNS 화제성</span>
            <span className="rounded-full border bg-background px-3 py-1 text-muted-foreground">MZ세대 인기</span>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            최근 음원 차트 상위권 진입으로 주목도 상승 중. 다양한 콜라보레이션 참여로 인지도 확장세.
          </div>
        </div>

        <div className="rounded-md border bg-muted/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--info))]/20 text-[hsl(var(--info))] text-sm font-bold">MI</div>
              <div>
                <div className="text-lg font-semibold">미노이 (MINOI)</div>
                <div className="text-sm text-muted-foreground">신인 솔로가수</div>
              </div>
            </div>
            <div className="text-[hsl(var(--success))] text-lg font-semibold"><TrendingUp className="mr-1 inline h-5 w-5" /> 52%</div>
          </div>
          <div className="mb-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border bg-background px-3 py-1 text-muted-foreground">급상승</span>
            <span className="rounded-full border bg-background px-3 py-1 text-muted-foreground">신인 유망주</span>
            <span className="rounded-full border bg-background px-3 py-1 text-muted-foreground">화제성</span>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            신규 데뷔 3개월 만에 팬층 급증. 독특한 음색과 퍼포먼스로 SNS에서 바이럴 콘텐츠 지속 생산.
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 text-base font-semibold flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-[hsl(var(--warning))]" />
          2025년 상반기 주목할 트렌드
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-md border bg-muted/40 p-4">
            <div className="mb-2 text-base font-semibold">인디/어쿠스틱 장르 인기 상승</div>
            <div className="text-sm text-muted-foreground">전년 대비 계약 건수 38% 증가, 수익성 27% 상승</div>
          </div>
          <div className="rounded-md border bg-muted/40 p-4">
            <div className="mb-2 text-base font-semibold">기업 행사 수요 확대</div>
            <div className="text-sm text-muted-foreground">IT, 금융권을 중심으로 연예인 브랜드 행사 42% 증가</div>
          </div>
          <div className="rounded-md border bg-muted/40 p-4">
            <div className="mb-2 text-base font-semibold">4세대 아이돌 수요 급증</div>
            <div className="text-sm text-muted-foreground">MZ세대 타겟 행사에서 선호도 58% 기록</div>
          </div>
        </div>
      </div>
    </div>
  );
}
