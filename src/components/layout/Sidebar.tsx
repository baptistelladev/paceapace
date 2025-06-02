"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar
} from "@/components/ui/Sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Phone
} from "lucide-react"
import * as React from "react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  /* DATA */

  /* HOOKS */
  const { open: sidebarIsOpen, toggleSidebar } = useSidebar();
  const appIsMobile = useIsMobile();

  /* FUNCTIONS */
  const closeMenuOnMobile = async () => {
    if (appIsMobile) {
      toggleSidebar();
    }
  }

  /* STRUCTURE */
  return (
    <Sidebar collapsible="icon" id="sanmell-sidebar" {...props}>
      <SidebarContent>
        dada
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={'a'}>
              <div>
                <Phone className="h-4 w-4" />
                <span>{'dada'}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
