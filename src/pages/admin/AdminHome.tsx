import SEO from "@/components/SEO";

const AdminHome = () => {
  return (
    <div>
      <SEO title="관리자 홈 | Celefix" description="요청·추천·계약 현황 요약" />
      <h1 className="text-2xl font-bold">관리자 홈</h1>
      <p className="text-muted-foreground mt-2">최근 요청서, 추천 라인업, 계약 상태를 요약해서 보여줍니다.</p>
    </div>
  );
};

export default AdminHome;
