'use client'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Mete Civelek
            </span>
            <span className="text-accent block font-bold whitespace-pre sm:text-xl lg:text-[1.75rem]">
              {`{
  "_roles": [
    "FULLSTACK DEVELOPER",
    "BACKEND DEVELOPER", 
    "FRONTEND DEVELOPER"
  ]
}`}
            </span>
          </h1>

          <h2 className="text-neutral mt-3">
            <span className="text-primary-content lg:text-nowrap">
              // DON'T SKIP THIS IF YOU ARE SICK OF GENERIC AI GENERATED INTROS!
            </span>
            <br></br>
            Now that I (hopefully) have your attention - this intro does not contain any buzzwords
            like ["aspiring", "passionate", "enthusiastic"], instead I will try to express myself in
            my own words.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#aboutme"
              aria-label="About me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              About Me
            </a>
            <a
              href="https://www.linkedin.com/in/mete-civelek/"
              target="_blank"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="John Doe - Full Stack Developer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
