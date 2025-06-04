import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/AlertDialog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/Separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { CitiesEnum } from "@/enum/CitiesEnum";
import { SportsEnum } from "@/enum/SportsEnum";
import { CITIES } from "@/mocks/Cities";
import { SPORTS } from "@/mocks/Sports";
import Fade from "embla-carousel-fade";
import { CalendarPlus } from "lucide-react";
import { useRef, useState } from "react";
import { ptBR } from "date-fns/locale";

/* COMPONENT */
const Inicio = () => {
  /* HOOKS */

  /* DATA */
  const MOCK_CITIES = [...CITIES];
  const MOCK_SPORTS = [...SPORTS];

  /* STATES */
  const [ selectedDay, setSelectedDay ] = useState<Date>();
  const [ selectedSport, setSelectedSport ] = useState<string>(SportsEnum.TODOS);
  const [ selectedCity, setSelectedCity ] = useState<string>(CitiesEnum.TODAS);

  /* FUNCTIONS */

  /* STRUCTURE */
  return (
    <section className="inicio">
      <div className="bg-neutral-800 relative shadow-xl outline-1">
        <div className="w-full p-8 flex items-center justify-between">

          <div>
            <p className="font-thin text-white text-2xl">mov<span className="font-normal text-primary">ing</span></p>
          </div>

          <AlertDialog>
            <Tooltip>
              <AlertDialogTrigger asChild>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    className="text-white font-normal text-xs rounded-none"
                  >
                    <CalendarPlus /> Indicar evento
                  </Button>
                </TooltipTrigger>
              </AlertDialogTrigger>
              <TooltipContent>
                <p className="text-xs">Indique um evento na sua cidade</p>
              </TooltipContent>
            </Tooltip>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Indicar evento esportivo</AlertDialogTitle>
                <AlertDialogDescription>
                  Eu vou te redirecionar para o WhatsApp, tudo bem?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="font-normal text-sm">Cancelar</AlertDialogCancel>
                <AlertDialogAction className="text-white font-normal text-sm">Sim, continuar indicação</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="min-w-[150px] border-none p-0 m-0 min-h-0 h-auto bg-transparent text-white">
                  <SelectValue placeholder="Selecionar esporte" />
                </SelectTrigger>
                <SelectContent className="min-w-[180px]">
                  <SelectGroup>
                    <SelectLabel className="px-3">Esportes</SelectLabel>
                    {
                      MOCK_SPORTS?.map((sport) => (
                        <SelectItem
                        onClick={() => setSelectedSport(sport.value)}
                        value={sport.value}
                        className={`px-3 ${selectedSport === sport.value ? 'text-white bg-primary/80 focus:bg-primary/80 focus:text-white pointer-events-none' : null}`}
                        key={sport.value}>
                          { sport.text }
                        </SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 pl-3 pb-2 pr-3 sm:pr-0">
              <Label className="text-xs text-primary font-bold">Cidade</Label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="border-none p-0 m-0 min-h-0 h-auto bg-transparent">
                  <SelectValue placeholder="Selecionar cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="px-3">Cidades</SelectLabel>
                    {
                      MOCK_CITIES?.map((city) => (
                        <SelectItem
                        value={city.value}
                        className={`px-3 ${selectedCity === city.value ? 'text-white bg-primary/80 focus:bg-primary/80 focus:text-white pointer-events-none' : null}`}
                        key={city.value}
                        onClick={() => setSelectedCity(city.value)}>
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

        <div className="w-full">
          <div className="city-container m-auto max-w-md pt-4 px-6">
            <h1 className="font-bold text-lg">Programação</h1>
            <p className="text-xs">Escolha um dia</p>
          </div>
        </div>
      </div>

      <div className="w-full px-5 pb-8">
        <div className="w-full max-w-md m-auto flex pt-6 flex-col">
          <Calendar
            locale={ptBR}
            selected={selectedDay}
            onSelect={setSelectedDay}
            className="w-full p-1 pt-3"
            mode="single"
          />
        </div>
      </div>

      <div className="w-full px-0 pb-8">
        <div className="w-full max-w-md m-auto flex p-6 pt-1 flex-col">
          <h1 className="text-xl mb-1"><b>Dúvidas</b></h1>
          <p className="text-xs">Algumas das dúvidas mais frequentes dos usuários.</p>

          <div className="accordion-wrapper">
            <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="border-slate-300">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500">
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-slate-300">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500">
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;