import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import Fade from "embla-carousel-fade";
import { useRef } from "react";

/* COMPONENT */
const Inicio = () => {
  /* HOOKS */
  const pluginFade = useRef(
    Fade({  })
  )

  /* STATES */

  /* FUNCTIONS */

  /* STRUCTURE */
  return (
    <section className="inicio bg-neutral-800 relative">
      <div className="w-full p-8">

      </div>

      <div className="hero w-full flex items-center justify-center">
        <div className="hero-container relative w-full overflow-hidden hero-effect max-h-screen">
          <img src="/bg.jpg" alt="" className="flex-none filter grayscale w-full max-h-[600px] object-cover object-top" />
        </div>
      </div>

      <div className="w-full border-b-[0.5px] border-primary">
        <div className="w-full max-w-md flex justify-center items-center flex-col m-auto ">
          <div className="w-full pb-6 pl-6 pr-6">
            <Badge className="default uppercase text-[9px] h-4 py-1 px-1 text-white rounded-none font-normal mb-3">Acompanhe o calendário</Badge>
            <p className="text-neutral-100 text-sm font-light">Confira as próximas corridas</p>
            <h1 className="text-neutral-100 text-lg font-light flex items-start justify-start">na <span className="text-white font-bold ml-1 text-xl mr-2">Baixada Santista</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="shadow-lg">
        diajiodajda
      </div>
    </section>
  );
};

export default Inicio;