import React from "react";
import { Sidebar, SidebarProvider } from "../ui/Sidebar";

/* INTERFACE */
interface ILayoutProps {
  children: React.ReactNode
}

/* COMPONENT */
const Layout = ({ children }: ILayoutProps) => {
  /* HOOKS */

  /* STATES */

  /* FUNCTIONS */

  /* STRUCTURE */
  return (
    <SidebarProvider open={false} className="">
      {/* SIDEBAR */}
      <Sidebar />

      {/* HEADER */}
      

      {/* CONTEÚDO */}
      <section className="paceapace-section w-full bg-neutral-300">
        <div className="w-full">
          { children }
        </div>
      </section>
    </SidebarProvider>
  );
};

export default Layout;
