import SEO from "@/components/SEO";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CalendarContracts = () => {
  return (
    <div>
      <SEO title="캘린더(계약관리) | Celefix" description="계약 상태 캘린더" />
      <h1 className="text-2xl font-bold">계약 관리 캘린더</h1>
      <p className="text-muted-foreground mt-2">확정/협의 중/충돌 상태를 확인합니다.</p>
      <div className="mt-6 border rounded-lg p-4">
        <DayPicker mode="single" />
      </div>
    </div>
  );
};

export default CalendarContracts;
