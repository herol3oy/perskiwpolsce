interface Projects {
  name: string
  description: string
  stacks: Technology[]
  screenshot: string
  url: string
  github?: string
}

type Technology =
  | 'React'
  | 'Next.js'
  | 'Firebase'
  | 'CssBootstrap'
  | 'Scss'
  | 'Sanity'
  | 'ChakraUI'
  | 'TypeScript'
  | 'Tailwindcss'
  | 'Figma'

export const PROJECTS: Projects[] = [
  {
    name: 'Female Rockers',
    description:
      'FemaleRockers is a blog committed to interviewing and showcasing female rock musicians from around the world. Throughout the project, my main objective was to craft an eye-catching layout that captivates visitors and delivers an engaging user experience. To achieve this, I leveraged Sanity, a content delivery platform known for its speed and efficiency, ensuring fast and seamless delivery of content to the users.',
    stacks: ['React', 'Next.js', 'Scss', 'Firebase', 'Sanity'],
    screenshot:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1690219192/metro-code/projects-screenshots/female-rockers-screenshot_yf82fq.png',
    url: 'https://femalerockers.com',
    github: 'https://github.com/herol3oy/femalerockers',
  },
  {
    name: 'Cordly',
    description:
      'Cordly is an online platform specifically designed for musicians to create personalized mini portfolios, showcase their work, and connect with other musicians based on their location, interests, influences, and skills. It serves as a virtual hub where musicians can highlight their talent, share their social links, and discover like-minded artists in their community.',
    stacks: ['React', 'Next.js', 'ChakraUI', 'Scss'],
    screenshot:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1690219190/metro-code/projects-screenshots/cordly-screenshot_t8rfjo.png',
    url: 'https://cordly.vercel.app',
    github: 'https://github.com/herol3oy/cordly',
  },
  {
    name: 'Kartly',
    description:
      'Kartly is an online shopping app built with Next.js, React, and Tailwind CSS. It incorporates an external API to fetch example products, allowing users to search, filter, and view detailed information for each product. The project focuses on creating a clean UI with high accessibility for users, while also implementing data caching to optimize performance.',
    stacks: ['React', 'Next.js', 'TypeScript', 'Tailwindcss'],
    screenshot:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1690219191/metro-code/projects-screenshots/kartly-screenshot_m0nsma.png',
    url: 'https://kartly.vercel.app/',
    github: 'https://github.com/herol3oy/kartly',
  },
  {
    name: 'Mindspark',
    description:
      'Mindspark is an online app that allows users to generate random quotes based on selected categories. Users also have the ability to like and save quotes to their favorites. The app utilizes an external API to fetch quotations, and React Context is implemented to share state between components, ensuring a seamless user experience.',
    stacks: ['React', 'Next.js', 'TypeScript', 'Tailwindcss'],
    screenshot:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1690219189/metro-code/projects-screenshots/mind-spark-screenshot_kbbmpm.png',
    url: 'https://mind-spark-two.vercel.app/',
    github: 'https://github.com/herol3oy/mind-spark',
  },
  {
    name: 'Kiosk 24',
    description:
      "Kiosk 24 is a comprehensive newspaper image archive of a news website. The application captures full screenshots of the provided news websites every hour using Github Actions. These screenshots are then published to Cloudinary, while the corresponding metadata is stored in Firebase. This process ensures a regular and up-to-date collection of images, providing a reliable archive of the news website's content.",
    stacks: ['React', 'Next.js', 'TypeScript', 'Tailwindcss'],
    screenshot:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1690219193/metro-code/projects-screenshots/kiosk-24-screenshot_xcoep8.png',
    url: 'https://kiosk-24.vercel.app/',
    github: 'https://github.com/herol3oy/kiosk-24',
  },
  {
    name: 'Dashboard UI',
    description:
      'A Figma-designed dashboard layout for large screens, featuring a minimalistic palette of four colors. The user-friendly design includes easily clickable buttons for seamless interaction, while strategically incorporating ample space to enhance readability and visual appeal. Additionally, darkening the colors ensures a comfortable user experience in various lighting conditions.',
    stacks: ['Figma'],
    screenshot:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1690219189/metro-code/projects-screenshots/dashboard-ui-screenshot_fsxcuq.png',
    url: 'https://bit.ly/3JGsH2s',
  },
]
