import SEO from "@/components/SEO";

const UserHome = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <SEO title="사용자 홈 | Celefix" description="기관·학교·축제 담당자 포털" />
      <h1 className="text-2xl font-bold">사용자 홈</h1>
      <p className="text-muted-foreground mt-2">제안 요청서 작성 및 진행 현황을 확인할 수 있습니다.</p>
    </div>
  );
};

export default UserHome;
