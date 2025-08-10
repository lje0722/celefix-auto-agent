import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Bell, Star, Home, MessageSquare, Calendar, BarChart3 } from "lucide-react";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="h-14 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" aria-hidden="true" />
            <Link to="/" className="text-sm font-semibold">Celefix</Link>
          </div>

          {/* Center: Nav */}
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <Link to="/admin" className="flex items-center gap-2 hover:text-foreground">
              <Home className="h-4 w-4" /> 홈
            </Link>
            <Link to="/admin/chat/dashboard" className="flex items-center gap-2 hover:text-foreground">
              <MessageSquare className="h-4 w-4" /> 챗봇
            </Link>
            <Link to="/admin/calendar/events" className="flex items-center gap-2 hover:text-foreground">
              <Calendar className="h-4 w-4" /> 캘린더
            </Link>
            <Link to="/admin/dashboard" className="flex items-center gap-2 hover:text-foreground">
              <BarChart3 className="h-4 w-4" /> 대시보드
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle to the LEFT of the button (as requested) */}
            <ThemeToggle />

            <Button asChild variant="secondary" size="sm">
              <a href="/user/request">고객 제안 요청</a>
            </Button>

            <button
              aria-label="알림"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--urgent))]" />
            </button>

            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                김
              </div>
              <span className="hidden text-sm sm:inline">김희연 관리자</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-screen-2xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
