import { useSidebar } from "@/components/ui/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}