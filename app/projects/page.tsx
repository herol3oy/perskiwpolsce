'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { PROJECTS } from '@/constance/projects'
import { STACK_BADGE_COLORS } from '@/constance/stack-badge-colors'

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<boolean[]>(
    new Array(PROJECTS.length).fill(false),
  )

  const handleToggleDescription = (index: number): void => {
    setExpandedDescriptions((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded)),
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {PROJECTS.map((project, index) => (
        <div
          key={project.name}
          className="rounded-lg p-5 text-gray-600 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Image
            width={800}
            height={600}
            src={project.screenshot}
            alt={project.name}
            className="mb-4 h-40 w-full rounded-md object-cover"
          />
          <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
          {expandedDescriptions[index] ? (
            <p className="mb-4">{project.description}</p>
          ) : (
            <p className="mb-4 line-clamp-3">{project.description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((stack) => (
              <span
                key={stack}
                className={`text-x rounded-md px-2 py-1 text-white ${STACK_BADGE_COLORS[stack]}`}
              >
                {stack}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleToggleDescription(index)}
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              {expandedDescriptions[index] ? 'Less' : 'More'}
            </button>
          </div>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View on GitHub
            </Link>
          )}
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-block text-blue-500 hover:underline"
          >
            Visit Website
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects
