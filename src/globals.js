const pages = {
  home: {
    label: 'Meet Michael',
    path: '/',
    seo: {
      title: 'The Fractional CTO — Hire a CTO as a Service',
      description:
        'CTO as a Service: Get 100% of the experience from a seasoned technical executive at a fraction of the cost',
    },
  },
  engagement: {
    label: 'CTO as a Service',
    path: '/cto-as-a-service',
    seo: {
      title: 'The Fractional CTO — Engaging with a CTO as a Service',
      description: '',
    },
  },
  expertise: {
    label: 'Expertise',
    path: '/expertise',
    seo: {
      title: 'Product Engineering Expertise &mdash; The Fractional CTO',
      description: '',
    },
  },
  contact: {
    label: 'Contact',
    path: '/contact',
    seo: {
      title: 'Contact — The Fractional CTO',
      description: '',
    },
  },
  consultation: {
    label: 'Free Consultation',
    path: '/free-consultation',
    seo: {
      title: 'Book a Free Consultation with a Fractional CTO',
      description: '',
    },
  },
};

const resources = [
  {
    path: '/how-much-does-a-fractional-cto-cost',
    seo: {
      title: 'How Much Does a Fractional CTO Cost?',
      description: '',
    },
    label: 'How Much Does a Fractional CTO Cost?',
  },
  {
    path: '/what-is-a-fractional-cto',
    seo: {
      title: 'What is a Fractional CTO? Full Time vs Fractional CTO',
      description: '',
    },
    label: 'Benefits of a Fractional CTO vs Full Time CTO',
  },
  {
    path: '/why-startups-should-hire-a-fractional-cto',
    seo: {
      title: 'Fractional CTOs for Startups - Benefits of Hiring a Fractional CTO',
    },
    label: 'Hiring a Fractional CTO for Startups',
  },
  {
    path: '/augmented-staffing-vs-hiring-an-agency',
    seo: {
      title: 'Augmented Staffing vs Hiring an Agency - CTOs opinion',
    },
    label: 'Augmented Staffing vs Hiring an Agency',
  },
];

const globals = {
  nav: [pages.home, pages.engagement, pages.expertise, pages.contact],
  pages,
  socials: {
    linkedIn: 'https://linkedin.com/in/michaelgrissinger',
  },
  resources,
};

module.exports = {
  globals,
};
