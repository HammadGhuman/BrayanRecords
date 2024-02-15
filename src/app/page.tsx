import HeroPage from "@/components/HeroPage";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Artist1 from "../../public/Artist1.jpg";
import prisma from "@/lib/prisma";

export default async function Home() {
  const data = await prisma.landingPage.findMany();
  console.log(data);
  return (
    <main className="flex flex-col items-center justify-between ">
      <HeroPage />
      <h1 className="text-3xl font-medium my-10">
        Here are our top Instructors
      </h1>
      <div className="w-[80%]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="min-w-xl h-96"
        >
          <CarouselContent>
            {data &&
              data.map((landing) => (
                <CarouselItem
                  key={landing.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    href={`/artist/landing-page/${landing.id}`}
                    className="p-1"
                  >
                    <Card className="group relative">
                      <CardContent className="group-hover:sepia duration-300 transition-all  w-full flex items-center justify-center p-6 -z-10">
                        <Image
                          src={Artist1}
                          alt="Artist"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                      <div className="hidden duration-300 transition-all group-hover:block absolute w-0 group-hover:w-full group-hover:bottom-10 left-24 z-50">
                        <h1 className="text-2xl font-bold">{landing.name}</h1>
                        <p className="text-xl mt-2 w-2/3">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Minus asperiores dolor quaerat cum quis, ex
                          optio molestias quae ad beatae.
                        </p>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
