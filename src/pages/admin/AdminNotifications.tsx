import SEO from "@/components/SEO";

const AdminNotifications = () => {
  return (
    <div>
      <SEO title="관리자 알림 | Celefix" description="시스템 및 작업 알림" />
      <h1 className="text-2xl font-bold">관리자 알림</h1>
      <p className="text-muted-foreground mt-2">요청/계약 관련 최신 알림을 확인합니다.</p>
    </div>
  );
};

export default AdminNotifications;
