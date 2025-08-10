import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import AdminHome from "./pages/admin/AdminHome";
import ChatForecast from "./pages/admin/ChatForecast";
import ChatLineup from "./pages/admin/ChatLineup";
import ChatDashboard from "./pages/admin/ChatDashboard";
import ChatProposal from "./pages/admin/ChatProposal";
import ChatContract from "./pages/admin/ChatContract";
import CalendarTalents from "./pages/admin/CalendarTalents";
import CalendarEvents from "./pages/admin/CalendarEvents";
import CalendarContracts from "./pages/admin/CalendarContracts";
import MainDashboard from "./pages/admin/MainDashboard";
import AdminNotifications from "./pages/admin/AdminNotifications";
import UserHome from "./pages/user/UserHome";
import UserRequest from "./pages/user/UserRequest";
import UserFeedback from "./pages/user/UserFeedback";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Global fixed theme toggle (top-right) */}
            <div className="fixed right-4 top-4 z-50">
              <ThemeToggle />
            </div>

            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />

              {/* Admin routes with layout */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="chat/forecast" element={<ChatForecast />} />
                <Route path="chat/lineup" element={<ChatLineup />} />
                <Route path="chat/dashboard" element={<ChatDashboard />} />
                <Route path="chat/proposal" element={<ChatProposal />} />
                <Route path="chat/contract" element={<ChatContract />} />
                <Route path="calendar/talents" element={<CalendarTalents />} />
                <Route path="calendar/events" element={<CalendarEvents />} />
                <Route path="calendar/contracts" element={<CalendarContracts />} />
                <Route path="dashboard" element={<MainDashboard />} />
                <Route path="notifications" element={<AdminNotifications />} />
              </Route>

              {/* User routes */}
              <Route path="/user" element={<UserHome />} />
              <Route path="/user/request" element={<UserRequest />} />
              <Route path="/user/feedback" element={<UserFeedback />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
