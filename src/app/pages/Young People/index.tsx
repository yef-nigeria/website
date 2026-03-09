import { Button } from "@/components/ui/button";
import React from "react";

const YoungPeople = () => {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-32 space-y-10 sm:space-y-16">
        <h3 className="text-blue-500 text-3xl sm:text-4xl lg:text-6xl font-semibold max-w-4xl leading-tight">
          We believe in you—and we&apos;re here to help you believe in yourself.
        </h3>
        <div className="bg-gray-300 bg-[url(/assets/images/usaid-girls-cropped.jpg)] bg-blend-multiply bg-cover min-h-[40vh] sm:min-h-[45vh] lg:h-[calc(55vh-2rem)] bg-center rounded-xl sm:rounded-2xl" />
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="space-y-6 sm:space-y-8 lg:col-span-7">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">How do we help?</p>
            <p className="text-sm sm:text-base md:max-w-xl">
              At YEF, we give you opportunities to try lots of different
              activities, get stuck, discover what you are passionate about and
              realize your full potential.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6 lg:col-span-5">
          {["We listen to you", "We plan with you", "We take care of you"].map(
            (value, i) => (
              <div
                key={i}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600"
              >
                {value}
              </div>
            ),
          )}
        </div>
      </section>
      <section className="py-12 sm:py-16 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-cab text-2xl sm:text-3xl lg:text-5xl leading-tight font-semibold text-blue-600">
            Every child without exception has the power to become who they
            aspire to be, not who they are told to be.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
        <div className="space-y-8 md:col-span-3">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">
              Testimonials from some of our beneficiaries
            </p>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8 bg-brown-100 p-5 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-brown-500 font-semibold">
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
        <div className="space-y-6 sm:space-y-8 bg-brown-100 p-5 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-brown-500 font-semibold">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 leading-tight text-center space-y-5">
        <p className="font-bold text-lg sm:text-2xl">
          Come along and be a part of us!
        </p>
        <Button>Join Now</Button>
      </div>
    </div>
  );
};

export default YoungPeople;
