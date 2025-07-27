import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'
import {
  FaReact as React,
  FaHtml5 as Html,
  FaCss3Alt as Css,
  FaNodeJs as Nodejs,
} from 'react-icons/fa'
import {
  SiJavascript as JavaScript,
  SiMongodb as Mongodb,
  SiTypescript as Typescript,
  SiExpress as Expressjs,
} from 'react-icons/si'
import { RiNextjsFill as Nextjs, RiTailwindCssFill as Tailwind } from 'react-icons/ri'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { title, shortDescription, livePreview, githubLink, type, cover, techStack } = data

  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    react: React,
    javascript: JavaScript,
    html: Html,
    css: Css,
    nodejs: Nodejs,
    mongodb: Mongodb,
    typescript: Typescript,
    nextjs: Nextjs,
    express: Expressjs,
    tailwindcss: Tailwind,
  }

  const iconColorMap: { [key: string]: string } = {
    react: 'text-blue-400',
    javascript: 'text-yellow-400',
    html: 'text-orange-500',
    css: 'text-blue-500',
    nodejs: 'text-green-500',
    mongodb: 'text-green-400',
    typescript: 'text-blue-600',
    nextjs: 'text-white',
    express: 'text-gray-400',
    tailwindcss: 'text-cyan-400',
  }

  const iconSizeMap: { [key: string]: string } = {
    nextjs: 'w-8 h-8',
  }

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{title}</h3>
            {type && (
              <span
                className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'} backdrop-blur-[80px]`}>
                {type}
              </span>
            )}
          </div>
          <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {techStack.map((tech, index) => {
              const IconComponent = iconMap[tech.toLowerCase()]
              const colorClass = iconColorMap[tech.toLowerCase()] || 'text-accent'
              const sizeClass = iconSizeMap[tech] || 'w-7 h-7'
              return IconComponent ? (
                <li>
                  <IconComponent key={index} className={`${colorClass} ${sizeClass} h-7 w-7`} />
                </li>
              ) : null
            })}
          </ul>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="bg-primary text-primary-content my-4 h-[100px] overflow-scroll rounded-2xl px-4 py-2">
          <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>
        </div>
        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank">
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
