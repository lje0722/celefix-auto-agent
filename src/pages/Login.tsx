import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, Star, User, Shield } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Next.js 의 next/link 대신 react-router-dom 사용

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"user" | "admin">("user");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: `${activeTab === "user" ? "사용자" : "관리자"} 로그인 시도`,
      description: `email=${email}, remember=${remember}`,
    });
  };

  const Tab = ({ id, label, Icon }: { id: "user" | "admin"; label: string; Icon: any }) => (
    <button
      type="button"
      onClick={() => setActiveTab(id)}
      className={
        "flex-1 border-b-2 px-4 py-3 font-semibold transition-colors flex items-center justify-center gap-2 " +
        (activeTab === id ? "border-pink-400 text-pink-400" : "border-transparent text-zinc-300 hover:text-zinc-100")
      }
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );

  return (
    <main className="min-h-screen bg-[#0f0f19] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-[#12121e] shadow-2xl p-6">
        {/* 로고 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center text-4xl font-bold text-pink-400">
            <Star className="mr-2 h-8 w-8" />
            Celefix
          </div>
          <p className="text-zinc-400 mt-2">연예인 섭외의 모든 것</p>
        </div>

        {/* 탭 */}
        <div className="flex border-b border-zinc-800 mb-6">
          <Tab id="user" label="사용자 로그인" Icon={User} />
          <Tab id="admin" label="관리자 로그인" Icon={Shield} />
        </div>

        {/* 폼 */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="mb-2 block text-sm">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="이메일 주소 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1a1a2a] border-white/10 text-white placeholder:text-white/40"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="mb-2 block text-sm">비밀번호</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 bg-[#1a1a2a] border-white/10 text-white placeholder:text-white/40"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-zinc-200"
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보이기"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border border-white/30 bg-transparent accent-pink-400"
              />
              로그인 유지
            </label>
            {/* 내부 라우팅: react-router-dom 사용 */}
            <Link to="/forgot" className="text-sm text-zinc-300 hover:text-pink-400">비밀번호 찾기</Link>
          </div>

          <Button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 font-semibold">
            로그인
          </Button>

          {/* 구분선 */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-zinc-800" />
            <span className="mx-4 text-sm text-zinc-400">또는</span>
            <div className="flex-1 border-t border-zinc-800" />
          </div>

          {/* 소셜 로그인 */}
          <div className="grid grid-cols-2 gap-3">
            <Button type="button" variant="outline" className="w-full bg-[#1a1a2a] border-white/10 text-white hover:bg-[#2a2a3a]">
              <span className="mr-2">G</span>Google
            </Button>
            <Button type="button" variant="outline" className="w-full bg-[#1a1a2a] border-white/10 text-white hover:bg-[#2a2a3a]">
              <span className="mr-2"></span>Apple
            </Button>
          </div>

          {/* 가입 */}
          <p className="text-center text-sm mt-6 text-zinc-300">
            계정이 없으신가요? <Link to="/signup" className="font-medium text-pink-400">가입하기</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
