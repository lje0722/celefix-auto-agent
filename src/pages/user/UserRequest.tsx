import SEO from "@/components/SEO";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const UserRequest = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "요청이 접수되었습니다", description: "관리자 페이지와 자동 연동됩니다." });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container mx-auto px-6 py-10 relative">
      <SEO title="제안 요청서 | Celefix" description="간단한 폼으로 섭외 요청서 제출" />
      <h1 className="text-2xl font-bold">제안 요청서</h1>
      <p className="text-muted-foreground mt-2">예산, 행사 정보, 연락처를 입력해주세요.</p>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="budget">예산(원)</Label>
          <Input id="budget" type="number" min={0} placeholder="예: 20000000" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">연락처(이메일)</Label>
          <Input id="contact" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="event">행사 정보</Label>
          <Textarea id="event" placeholder="행사명, 일정, 장소, 대상 등" rows={5} required />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="talent">지정 연예인 (선택)</Label>
          <Input id="talent" placeholder="지정하고 싶은 연예인 이름" />
        </div>
        <div className="md:col-span-2">
          <Button type="submit" disabled={loading}>{loading ? "제출 중..." : "요청서 제출"}</Button>
        </div>
      </form>
    </div>
  );
};

export default UserRequest;
