import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { createClient } from "@/lib/supabase/server";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/dashboard",
          isActive: true,
        },
      ],
    },
    {
      title: "Transaksi",
      url: "#",
      items: [
        {
          title: "Seserahan",
          url: "/seserahan",
          isActive: false,
        },
        {
          title: "Emas",
          url: "#",
        },
        {
          title: "Budgeting",
          url: "#",
        },
        {
          title: "Rekening",
          url: "#",
        },
      ],
    },
  ],
}

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const supabase = await createClient();
  const { data: dataUser } = await supabase.auth.getUser();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <NavUser user={{ name: "John Doe", email: dataUser?.user?.email || "", avatar: "https://placehold.co/64x64" }} />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
