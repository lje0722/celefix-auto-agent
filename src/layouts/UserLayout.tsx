import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Bell, Star, Home, FileSignature, MessageSquare } from "lucide-react";

export default function UserLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 h-14 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" aria-hidden="true" />
            <Link to="/" className="text-sm font-semibold">Celefix</Link>
          </div>

          {/* Center: Nav */}
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <NavLink
              to="/user"
              end
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }
            >
              <span className="inline-flex items-center gap-2"><Home className="h-4 w-4" /> 홈</span>
            </NavLink>
            <NavLink
              to="/user/request"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }
            >
              <span className="inline-flex items-center gap-2"><FileSignature className="h-4 w-4" /> 요청서</span>
            </NavLink>
            <NavLink
              to="/user/feedback"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }
            >
              <span className="inline-flex items-center gap-2"><MessageSquare className="h-4 w-4" /> 피드백</span>
            </NavLink>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/admin/notifications"
              aria-label="알림"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
              role="button"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--urgent))]" />
            </Link>
            <div className="hidden sm:flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                서
              </div>
              <span className="text-sm">서울대학교 축제준비위원회</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-screen-2xl p-6 flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
