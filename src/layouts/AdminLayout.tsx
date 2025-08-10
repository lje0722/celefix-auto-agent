import { PropsWithChildren } from "react";
import { Outlet, Link } from "react-router-dom";

import { AppSidebar } from "@/components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function AdminLayout() {
  return (
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset>
            <header className="h-14 flex items-center border-b px-4 gap-3">
              <SidebarTrigger />
              <Link to="/" className="text-sm font-semibold">Celefix Admin</Link>
              <div className="ml-auto">
                <Button asChild variant="secondary" size="sm">
                  <a href="/user/request">고객 제안 요청</a>
                </Button>
              </div>
            </header>
            <main className="p-6">
              <Outlet />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
  );
}
