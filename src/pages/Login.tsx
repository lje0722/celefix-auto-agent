import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "로그인 준비 중", description: "Supabase 연동 후 활성화됩니다." });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SEO title="로그인 | Celefix" description="관리자/고객 로그인" />
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 p-6 rounded-lg border bg-card shadow-sm">
        <div>
          <h1 className="text-2xl font-bold">로그인</h1>
          <p className="text-sm text-muted-foreground mt-1">계정으로 계속하기</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>{loading ? "확인 중..." : "로그인"}</Button>
        <p className="text-xs text-muted-foreground">아직 계정이 없나요? Supabase 연동 후 회원가입이 활성화됩니다.</p>
      </form>
    </div>
  );
};

export default Login;
