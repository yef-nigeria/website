import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { SPONSOR_NAME, THEMATIC_AREAS } from "@/utils/constants";

const YEFImpact = () => {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <div className="grid grid-cols-2 md:flex w-full">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="h-48 sm:h-64 md:h-[400px] md:flex-1 relative">
            <Image
              src={`/assets/images/impact-${i + 1}.png`}
              alt={`impact-${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-500">
            Our Impact
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">
            Empowering vulnerable children and young people in Nigeria to live
            <br />
            safe, healthy, and purposeful lives.
          </p>

          <Button>Support Our Work</Button>
        </div>
        <Link
          className="text-xs sm:text-sm text-blue-500 uppercase font-semibold flex items-center gap-3 p-2 hover:bg-blue-100 transition-all w-fit mt-4 hover:rotate-1 rounded-md"
          href={"#"}
        >
          Download our 2025 Impact Evaluation report
          <ArrowRight strokeWidth={1.25} />
        </Link>

        {/* <div className="">
          <p className="font-cab text-3xl font-semibold">
            Inspiring, equipping, and empowering young Nigerians with tools and
            skills for purposeful and fulfilling lives.
          </p>
        </div> */}
      </section>
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div>
            <p className="font-medium text-gray-100 text-right text-xl sm:text-2xl lg:text-3xl font-cab z-20 relative bg-gray-500 p-3 rounded-xl rotate-2 w-fit">
              Impact Stats
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-4 text-white">
              <div className="w-full space-y-4 ">
                <div className="w-full h-full rounded-md bg-secondary-base p-6 hover:rotate-2 transition-all flex justify-between gap-4 flex-col">
                  <p className="text-lg sm:text-2xl font-medium z-20 relative">
                    Workshops Conducted
                  </p>
                  <p className="text-4xl sm:text-6xl lg:text-7xl font-medium opacity-70 ">
                    2,000
                  </p>
                </div>
              </div>
              <div className="w-full space-y-4 relative">
                <div className="w-full h-full rounded-md bg-secondary-base p-6 hover:rotate-2 transition-all flex justify-between gap-4 flex-col">
                  <p className="text-lg sm:text-2xl font-medium z-20 relative">
                    Female Apprentices
                  </p>
                  <p className="text-4xl sm:text-6xl lg:text-7xl font-medium opacity-70 z-20 relative">
                    5,000
                  </p>
                </div>
              </div>
              <div className="w-full space-y-4 relative">
                <div className="w-full h-full rounded-md bg-secondary-base p-6 hover:rotate-2 transition-all flex justify-between gap-4 flex-col">
                  <p className="text-lg sm:text-2xl font-medium z-20 relative">
                    HIV hotline reach
                  </p>
                  <p className="text-4xl sm:text-6xl lg:text-7xl font-medium opacity-70 z-20 relative ">
                    2 m
                  </p>
                </div>
              </div>
              <div className="w-full space-y-4 relative">
                <div className="w-full h-full rounded-md bg-secondary-base p-6 hover:rotate-2 transition-all flex justify-between gap-4 flex-col">
                  <p className="text-lg sm:text-2xl font-medium z-20 relative">
                    Project Beneficiaries
                  </p>
                  <p className="text-4xl sm:text-6xl lg:text-7xl font-medium opacity-70 z-20 relative">
                    100k
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6 w-full">
              {/* <p className="font-bold text-gray-400">The YEF Impact</p> */}
              <p className="text-sm sm:text-base">
                For over two decades, YEF has worked at the frontline of youth
                development in Nigeria; protecting vulnerable children,
                preventing disease, expanding access to education, and equipping
                young people with life skills.
              </p>
            </div>
            <Link
              href={"who-we-are#history"}
              className="flex justify-between items-center p-3 border-t border-gray-100 w-full hover:bg-gray-100 h-fit font-bold text-sm sm:text-base"
            >
              Learn more about YEF&apos;s History
              <ArrowRight strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
        <div className="space-y-6 w-full">
          <p className="font-bold text-gray-400">Thematic Areas</p>
          <p className="max-w-xl">
            YEF’s work is structured around key thematic areas that address the
            most pressing challenges facing vulnerable children and young people
            in Nigeria.
          </p>
        </div>
        <Carousel opts={{ loop: true }} className="mt-10 lg:mt-0">
          <CarouselContent>
            {THEMATIC_AREAS.map(({ title, subthemes, description }, index) => (
              <CarouselItem
                className="space-y-4 w-full text-white h-full"
                key={index}
              >
                <div className="rounded-md bg-blue-500 p-6 transition-all flex justify-between gap-4 flex-col">
                  <p className="text-lg sm:text-2xl font-medium z-20 relative">
                    {title}
                  </p>
                  <p className="text-blue-200 text-sm sm:text-base">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {subthemes.map((text, i) => (
                      <p
                        className="border border-blue-300 p-1 w-fit text-xs rounded"
                        key={i}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
        <div className="space-y-8 md:col-span-3">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">
              Testimonials from some of our beneficiaries
            </p>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8 bg-blue-100 p-5 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-blue-500 font-semibold">
              Emmanuel Chiamaka
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            I benefited from the SCB (School-Based) Goal project few years ago.
            Recently I was selected for Skills for Life project (S4L) project. I
            learned Make-Up and Gele at Rullion capacity Builders in Surulere,
            Lagos. It took me 3 months to complete my training. This opportunity
            has exposed me to lots of people who in turn have become my
            customers. I train interested apprentices on the vocation and have a
            fan base of over 100 on Facebook. Every week I make at least 10000
            (ten thousand) Naira and render home service almost every weekend. I
            can now boast of a good amount of money in my savings account which
            I will be using to register my Jamb exams very soon. However, I am
            also making a frantic effort to register my business brand with CAC
            (Cooperate Affairs Commission) as soon as possible. I am so grateful
            to SCB and YEF for changing my life for best. Honestly, I can’t
            thank them enough!
          </p>
        </div>
        <div className="space-y-6 sm:space-y-8 bg-blue-100 p-5 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-blue-500 font-semibold">
              Idiah Jah&apos;swill
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            With gladness and a heart filled with appreciation, I say thank You
            YEF and #FCMB for making my life more interesting and most
            importantly adding value to it.  Looking back, I can only smile with
            joy in my heart, knowing the decision I took to join the empowerment
            training program to master my chosen vocation (tailoring) was not in
            vain.  Now, I am confident that I have learned so well to stand out
            amongst millions out there.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-8 bg-blue-100 p-5 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-blue-500 font-semibold">
              Miss. Ahuchaogu C.
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            Well, before I was picked by the Youth Empowerment Foundation (YEF),
            I would say I have been in the dark, so naïve. But thanks to YEF and
            Standard Chartered Bank who sponsored me in computer training and
            other skills for life. I feel like I have just been born into the
            present world. So far, my experience with Youth Empowerment
            Foundation and Standard Chartered Bank has been great and sometimes
            I wish it would never end and for that I am grateful.
          </p>
        </div>
      </section>
      <section className="bg-blue-100 py-16 sm:py-24 lg:py-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 items-end space-y-10 sm:space-y-16">
          <p className="font-bold text-gray-400">Sponsors & Partners</p>
          <p className="max-w-xl">
            Our sponsors and partners aid in providing the best opportunities
            that lead to our youths being equipped with skills to empower them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-16">
            {SPONSOR_NAME.map((item) => (
              <div
                className="h-28 sm:h-36 lg:h-44 w-full flex p-4 sm:p-6 relative bg-white/40 rounded-xl"
                key={item}
              >
                <Image
                  src={`/assets/images/logos/${item.toLowerCase().replace(" ", "-")}-logo.png`}
                  className="m-auto p-4 sm:p-6 object-contain"
                  alt={item}
                  fill
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 leading-tight text-center space-y-5">
        <p className="font-bold text-lg sm:text-2xl">
          Help Us Reach More Young People!
        </p>
        <Button>Partner With Us</Button>
      </div>
    </div>
  );
};

export default YEFImpact;
