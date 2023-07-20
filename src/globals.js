const links = {
  home: '/',
  engagement: '/cto-as-a-service',
  expertise: '/expertise',
  contact: '/contact',
  consultation: '/free-consultation',
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

module.exports = globals;
