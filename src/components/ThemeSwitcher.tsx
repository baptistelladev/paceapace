import { Moon, Sun } from "lucide-react";


import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/Tooltip";
import { useTheme } from "@/providers/ThemeProvider";

/* COMPONENT */
export function ThemeSwitcher() {
  /* HOOKS */
  const { setTheme, theme } = useTheme();

  /* FUNCTIONS */
  const setCurrentTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  /* STRUCTURE */
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          className="h-7 w-7 bg-blue-marine text-white"
          onClick={() => setCurrentTheme()}>
            {
              theme === 'dark' ? (
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              )
            }
            
            <span className="sr-only">Toggle theme</span>
          </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p className="text-xs">Trocar tema</p>
      </TooltipContent>
    </Tooltip>
  )
}
