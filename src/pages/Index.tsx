import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <div
      className="min-h-screen bg-background"
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;
        setPos({
          x: Math.round((e.clientX / innerWidth) * 100),
          y: Math.round((e.clientY / innerHeight) * 100),
        });
      }}
    >
      <SEO
        title="Celefix | 연예 섭외 제안 자동화 플랫폼"
        description="기관·학교·축제 담당자를 위한 섭외 요청, 추천, 계약 자동화."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Celefix",
          url: window.location.origin,
        }}
      />

      <header className="container mx-auto flex items-center justify-between py-6 px-6">
        <Link to="/" className="font-bold">Celefix</Link>
        <nav className="flex items-center gap-3">
          <Button asChild variant="ghost"><a href="/user">고객 홈</a></Button>
          <Button asChild variant="ghost"><a href="/admin">관리자</a></Button>
          <Button asChild variant="premium"><a href="/login">로그인</a></Button>
        </nav>
      </header>

      <main
        className="relative overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--accent)) 0%, transparent 50%)`,
          transition: "background-position 0.2s ease-out",
        }}
      >
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            연예 에이전시 섭외 제안 자동화, <span className="text-primary">Celefix</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            제안 요청부터 라인업 추천, 계약서까지 한 번에. 데이터 기반으로 더 빠르고 정확하게.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="/user/request">제안 요청서 작성</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/admin">관리자 콘솔 보기</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Celefix
      </footer>
    </div>
  );
};

export default Index;
