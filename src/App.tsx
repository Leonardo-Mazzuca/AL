import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import images from "@/data/images";
import { Heart } from "lucide-react";
import { launchHearts } from "./lib/confetti";

dayjs.extend(duration);

const App = () => {
  const [time, setTime] = useState("");

  const INITIAL_TIME = dayjs("2025-04-12T00:00:00");


  useEffect(() => {
    launchHearts(); 
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = dayjs.duration(now.diff(INITIAL_TIME));

      const years = diff.years();
      const months = diff.months();
      const days = diff.days();
      const hours = diff.hours();
      const minutes = diff.minutes();
      const seconds = diff.seconds();

      const yearStr =
        years > 0 ? `${years} ano${years !== 1 ? "s" : ""}, ` : "";

      const timeString =
        yearStr +
        `${months} mês${months !== 1 ? "es" : ""}, ${days} dia${
          days !== 1 ? "s" : ""
        }\n` +
        `${hours} hora${hours !== 1 ? "s" : ""}, ${minutes} minuto${
          minutes !== 1 ? "s" : ""
        } e ${seconds} segundo${seconds !== 1 ? "s" : ""}`;

      setTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, [INITIAL_TIME]);

  

  return (
    <section className="bg-[#140114] flex-col h-screen w-full overflow-auto p-3 flex items-center justify-center">
      <div className="flex gap-2 items-center mt-[30px]">
        <h2 className="text-white text-2xl font-semibold">OI ANINHAAAA</h2>
        <Heart color="pink" />
      </div>

      <div className="px-3">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="p-0 bg-transparent border-transparent">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img 
                        src={img}
                        alt={`Img ${index}`}
                        className="w-full rounded-3xl"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-300 font-normal my-3">Juntos:</p>
        <span className="text-2xl text-center font-semibold text-gray-100">{time}</span>
      </div>

      <div className="my-8 max-w-[500px]">
        <h2 className="text-white text-center font-semibold text-sm">
          Oii <span className="text-pink-500">coisa linda!</span>. Só queria dizer que sou grato por todos esses momentos contigo, e que sou <span className="text-pink-500">muito feliz</span>  por ter você em minha vida,
          você fez e sempre faz toda diferença na minha vida, espero ainda poder ter mais momentos incríveis, dar muitas risadas e realizar muitos 
          sonhos com você ao meu lado. <span className="text-pink-500">EU TE AMO ANINHAAAAA!</span>
          
        </h2>
      </div>
            
    </section>
  );
};

export default App;
