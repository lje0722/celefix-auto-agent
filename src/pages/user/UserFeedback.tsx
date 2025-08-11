import SEO from "@/components/SEO";


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
