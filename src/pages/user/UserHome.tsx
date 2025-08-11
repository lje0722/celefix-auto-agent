import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

const UserHome = () => {
  return (
    <div className="container mx-auto px-6 py-10 relative">
      <Link
        to="/admin/notifications"
        aria-label="알림"
        className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
      >
        <Bell className="h-4 w-4" />
        <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--urgent))]" />
      </Link>
      <SEO title="사용자 홈 | Celefix" description="기관·학교·축제 담당자 포털" />
      <h1 className="text-2xl font-bold">사용자 홈</h1>
      <p className="text-muted-foreground mt-2">제안 요청서 작성 및 진행 현황을 확인할 수 있습니다.</p>
    </div>
  );
};

export default UserHome;
