import SEO from "@/components/SEO";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CalendarTalents = () => {
  return (
    <div>
      <SEO title="캘린더(연예인) | Celefix" description="연예인 가용 여부 캘린더" />
      <h1 className="text-2xl font-bold">연예인 스케줄 캘린더</h1>
      <p className="text-muted-foreground mt-2">가용/확정/협의 중 상태를 확인합니다.</p>
      <div className="mt-6 border rounded-lg p-4">
        <DayPicker mode="single" />
      </div>
    </div>
  );
};

export default CalendarTalents;
