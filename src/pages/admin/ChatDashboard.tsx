import SEO from "@/components/SEO";

const ChatDashboard = () => {
  return (
    <div>
      <SEO title="챗봇 세부 대시보드 | Celefix" description="SNS 반응·출연 이력 시각화" />
      <h1 className="text-2xl font-bold">챗봇 내 세부 대시보드</h1>
      <p className="text-muted-foreground mt-2">추천 근거로 사용되는 지표를 상황별로 시각화합니다.</p>
    </div>
  );
};

export default ChatDashboard;
