module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://amadaslam.com/`,
    // Your Name
    name: 'Amad',
    surname: 'Aslam',
    // Main Site Title
    title: `Amad Aslam | Production Engineer`,
    // Description that goes under your name in main bio
    description: `Production Engineer`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/amadman`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/amad2/`,
    // Content of the About Me section
    about: `Senior Production Engineer at Meta. 4+ years of experience specialising in infrastructure, automation, and backend development. Learning new technologies and languages is enjoyable, even more so when suitable for the job at hand. Interested in automating as much as possible in the most optimised, scalable, and efficient manner. Skilled at effective collaboration with customers and partner teams, aligning technical efforts, and driving projects to completion.`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Meta',
        description: [
          'Senior Production Engineer',
          'Production Engineer',
          'Graduate Production Engineer',
        ],
        dates: [
          'July 2022 - Present',
          'January 2021 - July 2022',
          'August 2019 - January 2021',
        ],
        link: 'https://meta.com',
      },
      {
        name: 'Arm',
        description: ['Software Infrastructure Engineer (Internship)'],
        dates: ['June 2018 - September 2018'],
        link: 'https://arm.com',
      },
      {
        name: 'Morgan Stanley',
        description: ['Infrastructure Engineer (Industrial Placement)'],
        dates: ['June 2017 - June 2018'],
        link: 'https://morganstanley.com',
      },
      {
        name: 'GCHQ',
        description: ['Cyber Exposure Summer School'],
        dates: ['July 2016 - August 2016'],
        link: 'https://gchq.gov.uk',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'TotalHealthCheck',
        description:
          'A web dashboard for managing and tracking health data by athletes and coaches, built with React',
      },
      {
        name: 'Project Tempest',
        description:
          '2D pixel based ARPG created using Lua and the LÖVE2D framework',
      },
      {
        name: 'VReal Estate',
        description:
          'A VR app that allows users to explore and customise office spaces generated using user-defined requirements, built in Unreal Engine',
      },
      {
        name: 'AvaiLABle',
        description:
          'A web application that allows students to see the availability of individual computers within University computer labs',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Python, Assembly (Arm), C, Lua, PHP, Shell, Javascript, React',
      },
      {
        name: 'Databases',
        description: 'MySQL, MongoDB, PostreSQL',
      },
      {
        name: 'Other',
        description: 'Chef, Docker, CI/CD, Microservices, Git, Mercurial',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            fiel: `https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap`,
          },
        ],
      },
    },
  ],
};
