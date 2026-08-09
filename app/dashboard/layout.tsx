import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";
import  DashboardSidebar  from "@/modules/dashboard/components/dashboard-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default async function DashboardLayout({children,}: {children: React.ReactNode;}) {
    const playgroundData = await getAllPlaygroundForUser();

    const technologyIconMap: Record<string, string> = {
      REACT:"Zap",
      NEXTJS:"Lightbulb",
      VUE:"Compass",
      EXPRESS:"Terminal",
      ANGULAR:"Terminal",
      HONO:"FlameIcon",
    }

    const formattedPlaygroundData = playgroundData?.map((item) => ({
      id:item.id,
      name: item.title,
      description: item.description,
      //  TODO: Star
      starred: false,
      icon: technologyIconMap[item.template] || "Code2",
    }))

    return(
      <SidebarProvider>
          <TooltipProvider>
            <div className="flex min-h-screen w-full overflow-x-hidden">
              {/*Dashboard sidebar */}
              {/* @ts-ignore */}
              <DashboardSidebar initialPlaygroundData = {formattedPlaygroundData} />
              <main className="flex-1 overflow-y-auto">
                  {children}
              </main>
            </div>
          </TooltipProvider>
      </SidebarProvider>
    );
}