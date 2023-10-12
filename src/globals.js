const pages = {
  home: {
    label: 'Meet Michael',
    path: '/',
    seo: {
      title: 'Get the Best Fractional CTO Services - The Fractional CTO',
      description:
        'Get the right Fractional CTO for your organization, whether you need an Interim, Part-Time, or Contract CTO. I provide startups and businesses with a variety of CTO engagement options!',
    },
  },
  engagement: {
    label: 'CTO as a Service',
    path: '/cto-as-a-service',
    seo: {
      title: 'CTO as a Service | Expert Technology Leadership - The Fractional CTO',
      description:
        'Discover CTO as a Service with a Fractional CTO. An experienced CTO to provide strategic technology leadership for your business needs. Explore service options now.',
    },
  },
  expertise: {
    label: 'Expertise',
    path: '/expertise',
    seo: {
      title: 'Fractional CTO Expertise | The Fractional CTO',
      description:
        'Explore if my Fractional CTO expertise matches the services you need. An experienced Fractional CTO offering strategic technology leadership. Hire a technical strategic partner for your business',
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
