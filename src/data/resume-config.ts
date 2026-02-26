import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Maxime McGuire',
    photoBackEmoji: '💼',
    title: {
      en: 'Global Digital Commerce Release Lead',
    },
    subtitle: {
      en: '12+ years of international experience',
    },
    location: 'Wexford, Ireland',
  },
  seo: {
    title: 'Global Digital Commerce IT Release Lead',
    description: 'Interactive resume of Maxime McGuire, IT Release & eCommerce Operations Manager with 12+ years of international experience in SAP, Agile and digital commerce.',
  },
  languages: {
    default: 'en',
    available: ['en'],
    labels: { en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'maximemcguire', href: 'https://linkedin.com/in/maximemcguire' },
    { type: 'email', label: 'mpoitel@gmail.com' },
    { type: 'phone', label: '+353 85 169 51 78' },
    { type: 'location', label: 'Wexford, Ireland' },
  ],
  skills: [
    {
      title: { en: 'Languages' },
      type: 'languages',
      items: [
        { name: { en: 'French' }, level: { en: 'Native' } },
        { name: { en: 'English' }, level: { en: 'Fluent' } },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Education' },
      type: 'languages',
      items: [
        { name: { en: 'French' }, level: { en: 'Native' } },
        { name: { en: 'English' }, level: { en: 'Fluent' } },
      ],
    },
    {
      title: { en: 'SAP Business Applications' },
      type: 'badges',
      items: [
        { name: 'SAP S/4HANA' },
        { name: 'SAP Commerce Cloud' },
        { name: 'SAP Service Cloud' },
      ],
    },
    {
      title: { en: 'Project Management' },
      type: 'badges',
      items: [
        { name: 'JIRA' },
        { name: 'Confluence' },
        { name: 'Asana' },
        { name: 'Office 365' },
      ],
    },
    {
      title: { en: 'Front-End' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
      ],
    },
    {
      title: { en: 'Data & Web Analytics' },
      type: 'badges',
      items: [
        { name: 'Google Analytics' },
        { name: 'Kibana', color: '#00BFB3' },
        { name: 'Dynatrace', color: '#1496FF' },
      ],
    },
    {
      title: { en: 'DevOps & CI/CD' },
      type: 'badges',
      items: [
        { name: 'Jenkins' },
        { name: 'Bitbucket' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Design & UI/UX' },
      type: 'badges',
      items: [
        { name: 'Figma' },
        { name: 'Photoshop' },
        { name: 'Balsamiq', color: '#CC0000' },
      ],
    },
    {
      title: { en: 'A/B Testing' },
      type: 'badges',
      items: [
        { name: 'Google Optimize' },
        { name: 'Oracle Maxymiser', color: '#C74634' },
      ],
    },
    {
      title: { en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile, SAFe, Scrum, Kanban, CI/CD, DevOps, Release Management' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'deutsche-boerse',
      company: { en: 'Deutsche Börse' },
      role: { en: 'Corporate IT Central Release Manager' },
      type: { en: 'Full-time' },
      period: { en: '2024 - Present' },
      description: {
        en: 'Leading enterprise-wide release and change management for 400+ transport releases across 8 SAP core platforms tailored for financial data processing.',
      },
      techs: ['SAP S/4HANA', 'SAP Commerce Cloud', 'JIRA', 'Confluence'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Hybrid/Remote position based in Cork, Ireland. Overseeing global IT planning, coordination, and execution across 8 SAP core application development and system operations integrated platforms.',
        },
        tasks: {
          en: [
            'Lead enterprise-wide release and change management initiatives, overseeing the global IT planning, coordination, and execution of 400+ transport releases and major updates',
            'Designed and implemented standardized release governance frameworks and best practices, including detailed deployment guides, rollback strategies, and release notes',
            'Collaborate closely with senior leadership and cross-functional teams to define release roadmaps, prioritize deliverables, and allocate resources effectively',
            'Facilitate cross-functional planning sessions and stakeholder briefings',
            'Mentor and coach teams on release management methodologies, driving continuous improvements and structured reviews',
          ],
        },
        env: {
          en: 'SAP S/4HANA / SAP Commerce Cloud / SAP Service Cloud / JIRA / Confluence',
        },
      },
    },
    {
      id: 'swarovski',
      company: { en: 'Swarovski' },
      role: { en: 'Senior eCommerce Release & Operations Manager' },
      type: { en: 'Full-time' },
      period: { en: '2020 - 2024' },
      description: {
        en: 'Dual role as global Operations & Release Manager for swarovski.com, leading Business & IT Release cycles for SAP Commerce (Hybris) and SAP Commerce Cloud.',
      },
      techs: ['SAP Commerce Cloud', 'SAP S/4HANA', 'Jenkins', 'Bitbucket', 'JIRA'],
      isHighlighted: false,
      details: {
        context: {
          en: 'Hybrid/Remote position based in Zürich, Switzerland. Responsible for running and developing swarovski.com clusters across global markets.',
        },
        tasks: {
          en: [
            'Led and coordinated 135 Releases including Minor/Major/Hotfix/Feature-Driven deployments',
            'In charge of planning and execution of DevOps Release & Deployment activities, including build & deployment handling, Database Dump planning & scheduling, and systems maintenance workflows',
            'Owner of multiple backlogs, managing Business requirements engineering and facilitating main release events: Business/IT alignment, sprint planning, product increment reviews and retrospectives',
            'Facilitation and validation of QA activities including automation testing planning, test case management, estimation and UAT execution',
            'Operational support & system supervision of swarovski.com global campaign roadmaps',
            'Drove enhancement of global eBusiness departments across requirements/requests resolution handling & tracking, change management workflows & processes optimization',
          ],
        },
        env: {
          en: 'SAP Commerce Cloud / SAP Commerce (Hybris) / Jenkins / Bitbucket / JIRA / Confluence',
        },
      },
    },
    {
      id: 'imaios',
      company: { en: 'IMAIOS' },
      role: { en: 'Digital Operations Manager' },
      type: { en: 'Full-time' },
      period: { en: '2018' },
      description: {
        en: 'Responsible for UI/UX design, front-end development of landing pages, and deployment of the company\'s CRM and Help Center platform.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'Zendesk', 'Figma', 'Balsamiq'],
      details: {
        context: {
          en: 'On-site position in Montpellier, France.',
        },
        tasks: {
          en: [
            'Developed wireframes and prototypes to translate concepts into user interface flows and functional responsive web layouts',
            'Responsible for designing, coding & testing end-to-end interfaces for new landing pages in close collaboration with the development team',
            'Produced on-brand digital content including banners, logo development and improvements of existing assets',
            'Designed, developed & deployed the company\'s CRM and Help Center platform (Zendesk)',
          ],
        },
        env: {
          en: 'HTML / CSS / JavaScript / Zendesk / Figma / Balsamiq / Photoshop',
        },
      },
    },
    {
      id: 'nespresso-canada',
      company: { en: 'Nestlé Nespresso Canada' },
      role: { en: 'eCommerce Front-End Specialist' },
      type: { en: 'Full-time' },
      period: { en: '2017 - 2018' },
      description: {
        en: 'Piloted the launch of the new responsive B2C website and managed the full 2018 content roadmap resulting in 36 B2C and B2B landing pages.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'Google Analytics', 'Google Optimize'],
      details: {
        context: {
          en: 'On-site position in Montreal, Canada.',
        },
        tasks: {
          en: [
            'Piloted the launch of the new responsive B2C website to ensure a premium user experience across all devices',
            'Proposed, developed and implemented new fully responsive front-end optimisations: local homepage redesign, product pages enrichment, 14 transactional emails, product carousels, dynamic progress bars and interactive banners',
            'Deployed and monitored 2018 permanent content roadmap resulting in 36 B2C and B2B landing pages',
            'Supported 20 campaigns including product launches, flash sales and promotions to increase AOS',
            'Audited B2C and B2B local websites to identify current gaps based on content and product catalogue reviews',
          ],
        },
        env: {
          en: 'HTML / CSS / JavaScript / Google Analytics / Google Optimize / Oracle Maxymiser',
        },
      },
    },
    {
      id: 'nespresso-hq-coordinator',
      company: { en: 'Nestlé Nespresso HQ' },
      role: { en: 'Global eCommerce Operations Coordinator' },
      type: { en: 'Full-time' },
      period: { en: '2015 - 2017' },
      description: {
        en: 'Europe coordinator in charge of front and back-office eMerchandising activities across 15 B2C and B2B markets, piloting 10 global campaigns across 38 markets.',
      },
      techs: ['HTML', 'Google Analytics', 'Magento', 'WordPress'],
      details: {
        context: {
          en: 'On-site position in Lausanne, Switzerland.',
        },
        tasks: {
          en: [
            'Europe coordinator in charge of front and back-office eMerchandising activities across 15 B2C and B2B markets',
            'Piloted 10 global eCommerce campaigns launched across 38 markets and coordinated 3 major campaign audits',
            'Monitored 55 global incidents, participated in 15 User Acceptance Testing sessions and supported 12 IT releases',
            'Assessed 16 B2C platforms to ensure best-in-class customer experience and optimal market performance',
            'Delivered 3 feature configuration trainings and 5 CMS eMerchandising programs to 27 Operations Specialists',
            'Built and documented 17 technical eMerchandising guidelines and 3 complex HTML integrations',
          ],
        },
        env: {
          en: 'HTML / CSS / Magento / WordPress / Google Analytics / Oracle Maxymiser',
        },
      },
    },
    {
      id: 'nespresso-hq-webmaster',
      company: { en: 'Nestlé Nespresso HQ' },
      role: { en: 'Global eCommerce Deployment Webmaster' },
      type: { en: 'Full-time' },
      period: { en: '2013 - 2015' },
      description: {
        en: 'Dual role in website deployment support and eCommerce operations for 11 B2C and B2B markets, supporting the 2014 accelerated eCommerce deployment roadmap for 26 markets.',
      },
      techs: ['HTML', 'CSS', 'Magento', 'WordPress'],
      details: {
        context: {
          en: 'On-site position in Lausanne, Switzerland.',
        },
        tasks: {
          en: [
            'Dual role in websites deployment support and eCommerce operations coordinator for 11 B2C and B2B markets',
            'Supported and monitored 2014 accelerated eCommerce deployment roadmap for 26 markets',
            'Piloted yearly Content and Product publishing requests resulting in 1160 products launched across 11 markets',
            'Delivered B2C website technical Homepage redesign guidelines across 38 markets',
            'Defined and updated the CMS eMerchandising training documentation to support induction of new back-office users',
          ],
        },
        env: {
          en: 'HTML / CSS / Magento / WordPress / CMS / PIM',
        },
      },
    },
  ],
  education: [
    {
      school: { en: 'Université de Poitiers' },
      degree: { en: 'Master\'s Degree' },
      specialty: { en: 'Web Content Management & Programming' },
      period: '2011 - 2013',
    },
    {
      school: { en: 'Audencia SciencesCom' },
      degree: { en: 'Bachelor\'s Degree' },
      specialty: { en: 'Digital Communication & Content Production' },
      period: '2010 - 2011',
    },
    {
      school: { en: 'Université Paul Sabatier' },
      degree: { en: 'Foundation Degree' },
      specialty: { en: 'Information and Data Management' },
      period: '2008 - 2010',
    },
    {
      school: { en: 'Scrum.org' },
      degree: { en: 'Professional Scrum Product Owner I (PSPO I)' },
      specialty: { en: 'Completion ID 922659 — No Expiration Date' },
      period: '2023',
    },
    {
      school: { en: 'Scrum.org' },
      degree: { en: 'Professional Scrum Master I (PSM I)' },
      specialty: { en: 'Completion ID 727839 — No Expiration Date' },
      period: '2021',
    },
  ],
  theme: { preset: 'warm' },
  labels: {
    sections: {
      contact: { en: 'CONTACT' },
      skills: { en: 'SKILLS' },
      experience: { en: 'WORK EXPERIENCE' },
      education: { en: 'EDUCATION & CERTIFICATIONS' },
      projects: { en: 'PROJECTS' },
      hobbies: { en: 'INTERESTS' },
    },
    experience: {
      mainTasks: { en: 'Main responsibilities:' },
      moreTasks: { en: 'more tasks...' },
      training: { en: 'Training:' },
      techEnv: { en: 'Tech environment:' },
      technologies: { en: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details' },
      switchTheme: { en: 'Switch theme' },
      downloadPdf: { en: 'Download PDF' },
    },
  },
}
