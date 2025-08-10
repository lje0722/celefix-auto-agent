import SEO from "@/components/SEO";

const MainDashboard = () => {
  return (
    <div>
      <SEO title="메인 대시보드 | Celefix" description="전체 데이터 탐색" />
      <h1 className="text-2xl font-bold">메인 대시보드</h1>
      <p className="text-muted-foreground mt-2">연예인 데이터 탐색과 필터링/정렬을 위한 허브입니다.</p>
    </div>
  );
};

export default MainDashboard;
