import SEO from "@/components/SEO";
import { NavLink } from "react-router-dom";
import { AlertTriangle, Bell, Calendar as CalendarIcon, CheckCircle2, ChevronLeft, ChevronRight, Filter, Plus, RefreshCcw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import * as React from "react";
import { useToast } from "@/hooks/use-toast";

type Status = "available" | "booked" | "pending" | "conflict";

type CalendarEvent = {
  label: string;
  status: Status;
};

const statusStyles: Record<Status, string> = {
  available: "bg-success/15 border-l-2 border-success text-foreground/90",
  booked: "bg-success/15 border-l-2 border-success text-foreground/90",
  pending: "bg-warning/20 border-l-2 border-warning text-foreground/90",
  conflict: "bg-destructive/15 border-l-2 border-destructive text-foreground/90",
};

function getMonthGrid(year: number, monthIndex0: number) {
  // monthIndex0: 0-based month index
  const firstOfMonth = new Date(year, monthIndex0, 1);
  const startDay = firstOfMonth.getDay(); // 0 = Sun
  const daysInMonth = new Date(year, monthIndex0 + 1, 0).getDate();

  const prevMonthDays = new Date(year, monthIndex0, 0).getDate();

  const cells: { date: Date; inCurrentMonth: boolean }[] = [];

  // Leading days from previous month
  for (let i = 0; i < startDay; i++) {
    cells.push({
      date: new Date(year, monthIndex0 - 1, prevMonthDays - startDay + i + 1),
      inCurrentMonth: false,
    });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, monthIndex0, d), inCurrentMonth: true });
  }

  // Trailing days to fill 6 weeks (42 cells)
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const last = cells[cells.length - 1].date;
    const next = new Date(last);
    next.setDate(last.getDate() + 1);
    cells.push({ date: next, inCurrentMonth: false });
  }

  return cells;
}

const eventsMap: Record<string, CalendarEvent[]> = {
  "2025-07-01": [{ label: "아이유 - 뮤직뱅크 출연", status: "booked" }],
  "2025-07-02": [
    { label: "뉴진스 - 가용", status: "available" },
    { label: "에스파 - 가용", status: "available" },
  ],
  "2025-07-03": [{ label: "BTS - 미정", status: "pending" }],
  "2025-07-04": [
    { label: "아이유 - 스케줄 충돌", status: "conflict" },
    { label: "아이유 - KBS 음악 특집 (19:00)", status: "conflict" },
    { label: "아이유 - 대학 축제 출연 (18:30)", status: "conflict" },
  ],
  "2025-07-07": [{ label: "에스파 - 공연", status: "booked" }],
  "2025-07-08": [{ label: "아이브 - 팬미팅", status: "booked" }],
  "2025-07-09": [
    { label: "적재 - 협의중", status: "pending" },
    { label: "에픽하이 - 가용", status: "available" },
  ],
  "2025-07-10": [{ label: "아이유 - 가용", status: "available" }],
  "2025-07-11": [
    { label: "아이유 - 가용", status: "available" },
    { label: "뉴진스 - 가용", status: "available" },
  ],
  "2025-07-14": [{ label: "에픽하이 - 페스티벌", status: "booked" }],
  "2025-07-15": [{ label: "적재 - 가용", status: "available" }],
  "2025-07-16": [{ label: "뉴진스 - 가용", status: "available" }],
  "2025-07-17": [{ label: "아이브 - 가용", status: "available" }],
  "2025-07-21": [{ label: "에스파 - 협의중", status: "pending" }],
  "2025-07-22": [
    { label: "아이유 - 가용", status: "available" },
    { label: "에픽하이 - 가용", status: "available" },
  ],
  "2025-07-23": [{ label: "적재 - 가용", status: "available" }],
  "2025-07-25": [{ label: "적재 - 일정 조율중", status: "pending" }],
  "2025-07-28": [{ label: "에픽하이 - 협의중", status: "pending" }],
  "2025-07-29": [{ label: "BTS - 페스티벌 출연", status: "booked" }],
  "2025-07-31": [
    { label: "아이유 - 대학 축제 출연", status: "booked" },
    { label: "에픽하이 - 대학 축제 출연", status: "booked" },
  ],
};

const CalendarTalents: React.FC = () => {
  const { toast } = useToast();
  const [year] = React.useState(2025);
  const [monthIndex0] = React.useState(6); // 0-based -> 6 = July

  const cells = React.useMemo(() => getMonthGrid(year, monthIndex0), [year, monthIndex0]);

  const onPrev = () => {
    toast({ description: "월 이동은 곧 제공됩니다." });
  };
  const onNext = () => {
    toast({ description: "월 이동은 곧 제공됩니다." });
  };
  const onRefresh = () => {
    toast({ description: "새로고침 완료" });
  };

  const fmtKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  return (
    <div>
      <SEO title="캘린더(연예인) | Celefix" description="연예인 가용 여부 캘린더" />
      <header className="mb-4">
        <h1 className="text-2xl font-bold flex items-center"><Users className="h-5 w-5 mr-2 text-primary" />연예인 스케줄 캘린더</h1>
        <p className="text-muted-foreground mt-1">가용/확정/협의 중/충돌 상태를 한눈에 확인하세요.</p>
      </header>

      <section aria-label="상태 및 동기화" className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2">
          <CheckCircle2 className="h-4 w-4 text-accent" />
          <span className="text-sm">Google Calendar 연동됨</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={onRefresh} aria-label="새로고침">
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <Button variant="secondary" className="gap-2 text-sm">
            <CalendarIcon className="h-4 w-4" /> 일정 추가 빠르게
          </Button>
        </div>
      </section>

      <section aria-label="충돌 알림" className="mb-4">
        <div className="flex items-center justify-between rounded-md border border-destructive bg-destructive/10 px-3 py-2">
          <div className="flex items-center text-sm">
            <AlertTriangle className="h-4 w-4 text-destructive mr-2" />
            <span className="font-medium">스케줄 충돌 감지!</span>
            <span className="ml-2 text-muted-foreground">아이유님의 7월 4일 일정이 중복되어 있습니다. (2건의 스케줄 충돌)</span>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Bell className="h-4 w-4" /> 알림 보내기
          </Button>
        </div>
      </section>

      <nav aria-label="캘린더 유형 탭" className="border-b mb-4">
        <ul className="flex gap-1">
          <li>
            <NavLink
              to="/admin/calendar/talents"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium border-b-2 ${isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`
              }
            >
              연예인 스케줄
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/calendar/events"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium border-b-2 ${isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`
              }
            >
              행사 스케줄
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/calendar/contracts"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium border-b-2 ${isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`
              }
            >
              계약 관리
            </NavLink>
          </li>
        </ul>
      </nav>

      <section aria-label="필터" className="rounded-lg border bg-card p-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium text-sm">연예인 필터</div>
          <div className="text-xs">
            <button className="text-primary hover:underline">모두 선택</button>
            <span className="text-muted-foreground mx-2">|</span>
            <button className="text-primary hover:underline">선택 해제</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "아이유", dot: "bg-primary", active: true },
            { name: "적재", dot: "bg-success", active: true },
            { name: "에픽하이", dot: "bg-info", active: true },
            { name: "뉴진스", dot: "bg-warning", active: true },
            { name: "에스파", dot: "bg-accent-foreground", active: true },
            { name: "아이브", dot: "bg-urgent", active: true },
            { name: "BTS", dot: "bg-muted-foreground", active: false },
          ].map((a) => (
            <span
              key={a.name}
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs border ${
                a.active
                  ? "bg-primary/20 border-primary/50 text-foreground"
                  : "bg-muted/40 border-border text-muted-foreground"
              }`}
            >
              <span className={`w-2 h-2 rounded-full inline-block mr-1 ${a.dot}`} />
              {a.name}
            </span>
          ))}
        </div>
      </section>

      <section aria-label="캘린더 컨트롤" className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Button variant="outline" size="icon" className="mr-2" onClick={onPrev} aria-label="이전 달">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-bold">2025년 7월</h2>
          <Button variant="outline" size="icon" className="ml-2" onClick={onNext} aria-label="다음 달">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1 rounded-full border-accent text-accent bg-accent/10 hover:bg-accent/20 transition-shadow hover:shadow-[0_0_16px_hsl(var(--accent)/0.6)] focus:shadow-[0_0_18px_hsl(var(--accent)/0.7)]"><CalendarIcon className="h-4 w-4" /> 일</Button>
            <Button variant="outline" size="sm" className="gap-1 rounded-full border-accent text-accent bg-accent/10 hover:bg-accent/20 transition-shadow hover:shadow-[0_0_16px_hsl(var(--accent)/0.6)] focus:shadow-[0_0_18px_hsl(var(--accent)/0.7)]"><CalendarIcon className="h-4 w-4" /> 주</Button>
            <Button variant="secondary" size="sm" className="gap-1 rounded-full border border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-shadow hover:shadow-[0_0_16px_hsl(var(--accent)/0.6)] focus:shadow-[0_0_18px_hsl(var(--accent)/0.7)] shadow"><CalendarIcon className="h-4 w-4" /> 월</Button>
          </div>
      </section>

      <section aria-label="연예인 스케줄 캘린더" className="rounded-lg overflow-hidden border">
        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 bg-muted px-2 py-2">
          {"일월화수목금토".split("").map((d, i) => (
            <div key={d} className={`text-center text-sm ${i === 0 ? "text-destructive" : i === 6 ? "text-accent" : "text-foreground"}`}>{d}</div>
          ))}
        </div>
        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7">
          {cells.map(({ date, inCurrentMonth }) => {
            const key = fmtKey(date);
            const evts = eventsMap[key] || [];
            const isConflictDay = evts.some((e) => e.status === "conflict");
            return (
              <div
                key={key}
                className={`min-h-28 border p-2 ${inCurrentMonth ? "" : "opacity-50"} ${isConflictDay ? "bg-destructive/10 border-destructive animate-pulse" : ""}`}
              >
                <div className="text-right text-sm mb-1">{date.getDate()}</div>
                <div className="space-y-1">
                  {evts.map((e, idx) => (
                    <div key={idx} className={`truncate px-2 py-0.5 text-xs rounded ${statusStyles[e.status]}`}>{e.label}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-label="범례 및 액션" className="flex items-center justify-between text-sm mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-success/60 inline-block" /> 가용</div>
          <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-warning/60 inline-block" /> 협의중</div>
          <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-destructive/60 inline-block" /> 충돌</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="gap-1 rounded-full border border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-shadow hover:shadow-[0_0_16px_hsl(var(--accent)/0.6)] focus:shadow-[0_0_18px_hsl(var(--accent)/0.7)] shadow"><Filter className="h-4 w-4" /> 필터</Button>
          <Button variant="secondary" size="sm" className="gap-1 rounded-full border border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-shadow hover:shadow-[0_0_16px_hsl(var(--accent)/0.6)] focus:shadow-[0_0_18px_hsl(var(--accent)/0.7)] shadow"><Plus className="h-4 w-4" /> 일정 추가</Button>
        </div>
      </section>

      <section aria-label="충돌 해결 제안" className="mt-4 rounded-lg border bg-card p-3">
        <h3 className="text-sm font-medium flex items-center mb-2"><AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />충돌 해결 제안</h3>
        <div className="flex items-start gap-2">
          <div className="flex-1 text-xs text-muted-foreground">
            <p className="mb-1"><span className="text-destructive">충돌 감지:</span> 아이유 - 7월 4일 (목) KBS 음악 특집과 대학 축제 출연 시간 중복</p>
            <p className="mb-1"><span className="text-yellow-500">제안 1:</span> 대학 축제 출연 시간을 20:30으로 변경 (현재 18:30)</p>
            <p><span className="text-yellow-500">제안 2:</span> KBS 음악 특집 녹화 참여로 변경 (7월 3일 오전)</p>
          </div>
          <Button variant="secondary" size="sm">적용하기</Button>
        </div>
      </section>
    </div>
  );
};

export default CalendarTalents;
