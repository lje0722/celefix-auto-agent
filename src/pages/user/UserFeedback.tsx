import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const UserFeedback = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "피드백 감사합니다", description: "더 나은 서비스에 반영하겠습니다." });
      setLoading(false);
    }, 800);
  };

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
      <SEO title="사용자 피드백 | Celefix" description="서비스 개선을 위한 의견 남기기" />
      <h1 className="text-2xl font-bold">사용자 피드백</h1>
      <p className="text-muted-foreground mt-2">서비스에 대한 의견을 자유롭게 남겨주세요.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 max-w-2xl">
        <div className="space-y-2">
          <Label htmlFor="feedback">피드백</Label>
          <Textarea id="feedback" rows={6} placeholder="사용 경험, 개선 아이디어 등" required />
        </div>
        <Button type="submit" disabled={loading}>{loading ? "전송 중..." : "피드백 보내기"}</Button>
      </form>
    </div>
  );
};

export default UserFeedback;
