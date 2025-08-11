import SEO from "@/components/SEO";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { NavLink } from "react-router-dom";

const CalendarEvents = () => {
  return (
    <div>
      <SEO title="캘린더(행사) | Celefix" description="행사 일정 캘린더" />

      <nav aria-label="캘린더 탭" className="border-b mb-4">
        <ul className="flex gap-1">
          <li>
            <NavLink to="/admin/calendar/talents" className={({ isActive }) => `px-4 py-2 text-sm font-medium border-b-2 ${isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>연예인 스케줄</NavLink>
          </li>
          <li>
            <NavLink to="/admin/calendar/events" className={({ isActive }) => `px-4 py-2 text-sm font-medium border-b-2 ${isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>행사 스케줄</NavLink>
          </li>
          <li>
            <NavLink to="/admin/calendar/contracts" className={({ isActive }) => `px-4 py-2 text-sm font-medium border-b-2 ${isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>계약 관리</NavLink>
          </li>
        </ul>
      </nav>

      <h1 className="text-2xl font-bold">행사 스케줄 캘린더</h1>
      <p className="text-muted-foreground mt-2">개최 예정 및 예측 행사를 표시합니다.</p>
      <div className="mt-6 border rounded-lg p-4">
        <DayPicker mode="single" />
      </div>
    </div>
  );
};

export default CalendarEvents;
