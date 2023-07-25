const links = {
  home: '/',
  engagement: '/cto-as-a-service',
  expertise: '/expertise',
  contact: '/contact',
  consultation: '/free-consultation',
  resources: '/resources',
};

const resources = {
  'how-much-does-a-fractional-cto-cost': {
    seo: {
      title: 'How Much Does a Fractional CTO Cost?',
      description: '',
    },
  },
  'what-is-a-fractional-cto': {
    seo: {
      title: 'What is a Fractional CTO? Full Time vs Fractional CTO',
      description: '',
    },
  },
};

const globals = {
  nav: [
    {
      label: 'Meet Michael',
      link: links.home,
    },
    {
      label: 'CTO as a Service',
      link: links.engagement,
    },
    {
      label: 'Expertise',
      link: links.expertise,
    },
    {
      label: 'Contact',
      link: links.contact,
    },
  ],
  links,
  socials: {
    linkedIn: 'https://linkedin.com/in/michaelgrissinger',
  },
};

module.exports = {
  globals,
  resources,
};
