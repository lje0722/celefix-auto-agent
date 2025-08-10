import SEO from "@/components/SEO";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Bot, MessageSquarePlus, Send } from "lucide-react";

interface ChatMsg {
  role: "user" | "model";
  content: string;
}

export default function ChatNew() {
  const [apiKey, setApiKey] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "model",
      content:
        "새 챗이 시작되었습니다. 제안서를 준비하거나 라인업을 추천해드릴게요. 메시지를 입력해보세요!",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("GEMINI_API_KEY") || "";
    setApiKey(saved);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages.length]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const send = async () => {
    if (!canSend) return;
    if (!apiKey) {
      toast({
        title: "Gemini API 키가 필요합니다",
        description: "상단 입력란에 키를 입력하고 저장하세요.",
        variant: "destructive",
      });
      return;
    }

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userText }]);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: userText }] },
            ],
          }),
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("\n") ||
        "죄송합니다. 응답을 생성하지 못했습니다.";
      setMessages((prev) => [...prev, { role: "model", content: text }]);
    } catch (err: any) {
      console.error(err);
      toast({ title: "요청 실패", description: String(err), variant: "destructive" });
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "요청 중 오류가 발생했습니다. API 키 및 네트워크 상태를 확인해주세요." },
      ]);
    }
  };

  const saveKey = () => {
    localStorage.setItem("GEMINI_API_KEY", apiKey);
    toast({ title: "Gemini API 키 저장됨" });
  };

  return (
    <div className="flex h-full flex-col space-y-4">
      <SEO title="새 챗 - Gemini 연결 | Celefix" description="Gemini와 연결된 신규 채팅" />

      {/* 안내 영역: 키 입력 */}
      <section className="rounded-lg border border-border bg-card p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="text-sm text-muted-foreground">
            Gemini API 키를 입력하면 바로 대화할 수 있어요. 보안상 키는 브라우저 로컬에만 저장됩니다. (권장: Supabase 비밀 사용)
          </div>
          <div className="flex w-full gap-2 sm:w-auto sm:flex-1">
            <Input
              placeholder="AIza..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono"
            />
            <Button onClick={saveKey} variant="outline">저장</Button>
          </div>
        </div>
      </section>

      {/* 채팅 박스 */}
      <section className="flex grow overflow-hidden rounded-xl border border-border bg-card">
        {/* 좌측(간단 버전) */}
        <aside className="hidden w-1/4 min-w-[260px] border-r border-border bg-muted/30 p-4 lg:block">
          <Button variant="outline" className="mb-4 w-full justify-center gap-2">
            <MessageSquarePlus className="h-4 w-4" /> 새 채팅
          </Button>
          <Separator className="my-3" />
          <div className="text-sm text-muted-foreground">최근 대화가 여기에 표시됩니다.</div>
        </aside>

        {/* 메인 대화 */}
        <div className="flex w-full flex-col">
          <header className="flex items-center gap-2 border-b border-border p-4">
            <Bot className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">새 채팅</h2>
          </header>

          <div ref={listRef} className="flex grow flex-col gap-4 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "ml-auto max-w-3xl" : "max-w-3xl"}>
                <div
                  className={
                    m.role === "user"
                      ? "rounded-md bg-primary/10 p-4"
                      : "rounded-md bg-muted/40 p-4"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <footer className="border-t border-border p-4">
            <div className="relative">
              <Input
                placeholder="메시지 입력…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                className="pr-11"
                aria-label="메시지 입력"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={send}
                disabled={!canSend}
              >
                <Send className="h-5 w-5 text-primary" />
              </Button>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
