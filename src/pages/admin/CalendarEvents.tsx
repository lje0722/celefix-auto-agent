import SEO from "@/components/SEO";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CalendarEvents = () => {
  return (
    <div>
      <SEO title="캘린더(행사) | Celefix" description="행사 일정 캘린더" />
      <h1 className="text-2xl font-bold">행사 스케줄 캘린더</h1>
      <p className="text-muted-foreground mt-2">개최 예정 및 예측 행사를 표시합니다.</p>
      <div className="mt-6 border rounded-lg p-4">
        <DayPicker mode="single" />
      </div>
    </div>
  );
};

export default CalendarEvents;
