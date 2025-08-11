import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Bell, Plus, ArrowRight, Star, Home, FileSignature, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserHome = () => {
  return (
    <div className="container mx-auto px-6 py-10 relative">
      {/* SEO */}
      <SEO title="사용자 홈 | Celefix" description="기관·학교·축제 담당자 포털" />

      {/* Top nav */}
      <header className="mb-6">
        <nav aria-label="사용자 내비게이션" className="grid grid-cols-3 items-center rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3 shadow">
          {/* Left: logo + icon shortcuts */}
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center font-bold text-primary">
              <Star className="mr-2 h-5 w-5" />
              Celefix
            </Link>
            <div className="hidden sm:flex items-center gap-1 ml-2">
              <Link to="/user" aria-label="홈" className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted">
                <Home className="h-4 w-4" />
              </Link>
              <Link to="/user/request" aria-label="요청서" className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted">
                <FileSignature className="h-4 w-4" />
              </Link>
              <Link to="/user/feedback" aria-label="피드백" className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted">
                <MessageSquare className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Center: main nav */}
          <div className="hidden sm:flex items-center justify-center gap-6">
            <Link to="/user" aria-current="page" className="text-primary font-medium">홈</Link>
            <Link to="/user/request" className="text-muted-foreground hover:text-foreground">요청서</Link>
            <Link to="/user/feedback" className="text-muted-foreground hover:text-foreground">피드백</Link>
          </div>

          {/* Right: notifications + profile */}
          <div className="flex items-center justify-end gap-3">
            <Link
              to="/admin/notifications"
              aria-label="알림"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--urgent))]" />
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-1.5">
              <div className="h-6 w-6 rounded-full bg-primary/60 text-primary-foreground flex items-center justify-center text-[10px]">서</div>
              <span className="hidden sm:inline text-sm">서울대학교 축제준비위원회</span>
            </div>
          </div>
        </nav>
      </header>

      <section className="mb-6">
        <h1 className="text-2xl font-bold">안녕하세요, 서울대학교 축제준비위원회님!</h1>
        <p className="text-muted-foreground mt-2">연예인 섭외 요청과 진행 상황을 확인해보세요.</p>
      </section>

      {/* Quick CTA */}
      <div className="flex items-center justify-between mb-6">
        <div />
        <Button asChild size="lg" className="font-semibold">
          <Link to="/user/request">
            <Plus className="mr-2 h-4 w-4" /> 새 섭외 요청하기
          </Link>
        </Button>
      </div>

      {/* Status summary */}
      <section aria-labelledby="status-summary" className="mb-6">
        <h2 id="status-summary" className="sr-only">요청 상태 요약</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">전체 요청</div>
              <div className="text-2xl font-bold">8건</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">승인됨</div>
              <div className="text-2xl font-bold text-success">3건</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">진행중</div>
              <div className="text-2xl font-bold text-warning">2건</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">완료</div>
              <div className="text-2xl font-bold text-info">3건</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Promo banner */}
      <section className="mb-6">
        <div className="w-full rounded-xl border border-accent/50 bg-accent/20 p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1">여름 축제 특별 패키지</h3>
            <p className="text-sm text-muted-foreground">3팀 이상 섭외 시 20% 할인! 7월 31일까지 유효합니다.</p>
          </div>
          <Button variant="secondary" className="text-sm">자세히 보기</Button>
        </div>
      </section>

      {/* Recent requests + History */}
      <section className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Recent */}
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">최근 요청</h2>
            <Link to="#" className="text-sm text-primary hover:underline">모두 보기</Link>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">여름 정기 축제 섭외</h3>
                  <span className="inline-flex rounded-full px-2.5 py-1 text-xs border border-success/50 text-success">승인됨</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-3 text-muted-foreground">
                  <span>예산: 6,500만원</span>
                  <span>요청일: 2025-07-15</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-muted px-3 py-1">아이유</span>
                  <span className="rounded-full bg-muted px-3 py-1">에스파</span>
                  <span className="rounded-full bg-muted px-3 py-1">적재</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">공대 축제 라인업</h3>
                  <span className="inline-flex rounded-full px-2.5 py-1 text-xs border border-warning/50 text-warning">검토중</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-3 text-muted-foreground">
                  <span>예산: 3,200만원</span>
                  <span>요청일: 2025-07-20</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-muted px-3 py-1">에픽하이</span>
                  <span className="rounded-full bg-muted px-3 py-1">아이브</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* History */}
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">섭외 히스토리</h2>
            <Link to="#" className="text-sm text-primary hover:underline">모두 보기</Link>
          </div>
          <div className="space-y-6 pl-4">
            <div className="relative border-l-2 border-primary/40 pl-6 pb-6">
              <span className="absolute -left-2 top-0 h-3.5 w-3.5 rounded-full bg-primary" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium">2025 신입생 OT</h3>
                <span className="inline-flex rounded-full px-2.5 py-1 text-xs border border-info/50 text-info">완료</span>
              </div>
              <div className="text-sm text-primary mt-1 mb-1">2025-03-15</div>
              <div className="text-sm text-muted-foreground mb-2">
                출연진: 뉴진스, 엑소, 에픽하이<br />
                참석자: 2,500명+
              </div>
              <Button variant="outline" size="sm" className="text-xs">피드백 보기</Button>
            </div>
            <div className="relative border-l-2 border-primary/20 pl-6">
              <span className="absolute -left-2 top-0 h-3.5 w-3.5 rounded-full bg-primary/70" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium">2025 봄 축제</h3>
                <span className="inline-flex rounded-full px-2.5 py-1 text-xs border border-info/50 text-info">완료</span>
              </div>
              <div className="text-sm text-primary mt-1 mb-1">2025-05-10</div>
              <div className="text-sm text-muted-foreground mb-2">
                출연진: 아이유, 세븐틴<br />
                참석자: 4,800명+
              </div>
              <Button variant="outline" size="sm" className="text-xs">피드백 보기</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick request form preview */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">빠른 섭외 요청</h2>
          <Link to="/user/request" className="text-sm text-primary inline-flex items-center">양식 전체보기 <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </div>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <Label htmlFor="budget" className="mb-2 block text-sm">예산 (단위: 만원)</Label>
                  <Input id="budget" type="number" placeholder="예산 입력 (예: 5000)" />
                </div>
                <div className="mb-4">
                  <Label className="mb-2 block text-sm">원하는 아티스트</Label>
                  <div className="relative">
                    <Input placeholder="아티스트 검색..." />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">⌘K</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <Label htmlFor="event_name" className="mb-2 block text-sm">행사명</Label>
                  <Input id="event_name" placeholder="행사명 입력" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="event_date" className="mb-2 block text-sm">행사 날짜</Label>
                  <Input id="event_date" type="date" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button asChild>
                <Link to="/user/request">요청서 작성 완료하기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recommended artists */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">이런 아티스트는 어떠세요?</h2>
          <Link to="#" className="text-sm text-primary hover:underline">더보기</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{name:'에스파 (aespa)',tag:'걸그룹',price:'4,700만원'},{name:'투모로우바이투게더',tag:'보이그룹',price:'5,200만원'},{name:'아이브 (IVE)',tag:'걸그룹',price:'4,800만원'},{name:'적재',tag:'솔로',price:'2,800만원'}].map((a,i)=> (
            <Card key={i} className="overflow-hidden">
              <div className="h-32 bg-muted" aria-hidden="true" />
              <CardContent className="p-3">
                <h3 className="font-medium">{a.name}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{a.tag}</span>
                  <span>{a.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserHome;
