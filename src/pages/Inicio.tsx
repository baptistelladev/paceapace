import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/Separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { CITIES } from "@/mocks/CITIES";
import { SPORTS } from "@/mocks/Sports";
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

  /* DATA */
  const MOCK_CITIES = [...CITIES];
  const MOCK_SPORTS = [...SPORTS];

  /* STRUCTURE */
  return (
    <section className="inicio">
      <div className="bg-neutral-800 relative shadow-xl outline-1">
        <div className="w-full p-8">

        </div>

        <div className="hero w-full flex items-center justify-center">
          <div className="hero-container relative w-full overflow-hidden hero-effect max-h-screen">
            <img src="/bg.jpg" alt="" className="flex-none filter grayscale w-full max-h-[450px] object-cover object-top" />
          </div>
        </div>

        <div className="w-full border-b-[2px] border-primary">
          <div className="w-full max-w-md flex justify-center items-center flex-col m-auto ">
            <div className="w-full pb-6 pl-6 pr-6">
              <p className="font-normal mb-3 bg-transparent text-primary text-xs">Acompanhe o calendário</p>
              <p className="text-neutral-100 text-sm font-light">Próximos eventos esportivos</p>
              <h1 className="text-neutral-100 text-lg font-light flex items-start justify-start">na <span className="text-white font-bold ml-1 text-xl mr-2">Baixada Santista</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full">
          <div className="city-container m-auto max-w-md sm:px-6 flex">
            <div className="bg-primary px-3 flex justify-center items-center">
              <Select>
                <SelectTrigger className="min-w-[150px] border-none p-0 m-0 min-h-0 h-auto bg-transparent text-white">
                  <SelectValue placeholder="Selecionar esporte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="px-3">Esportes</SelectLabel>
                    {
                      MOCK_SPORTS?.map((city) => (
                        <SelectItem value={city.value} className="px-3">
                          { city.text }
                        </SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 pl-3 pb-2 pr-3 sm:pr-0">
              <Label className="text-xs text-primary font-bold">Cidade</Label>
              <Select>
                <SelectTrigger className="border-none p-0 m-0 min-h-0 h-auto bg-transparent">
                  <SelectValue placeholder="Selecionar cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="px-3">Cidades</SelectLabel>
                    {
                      MOCK_CITIES?.map((city) => (
                        <SelectItem value={city.value} className="px-3">
                          { city.text }
                        </SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator></Separator>
      </div>

      <div className="w-full px-5 pb-8">
        <div className="w-full max-w-md m-auto flex pt-6">
          <Calendar
            className="w-full p-0"
            mode="single"
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;