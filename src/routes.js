const { Router } = require('express');
const { globals } = require('./globals');
const contactFormValidation = require('./middleware/contactFormValidation');
const { processForm } = require('./utils');

const router = Router();

// Home Page.
router.get(globals.pages.home.path, (request, response) => {
  return response.render('../src/pages/home.hbs', {
    ...globals,
    seo: { ...globals.pages.home.seo, url: globals.pages.home.path },
    nav: globals.nav.map((navItem) => {
      return {
        ...navItem,
        active: navItem.path === request.path,
      };
    }),
  });
});

// CTO as a Service
router.get(globals.pages.engagement.path, (request, response) => {
  return response.render('../src/pages/engagement.hbs', {
    ...globals,
    seo: { ...globals.pages.engagement.seo, url: globals.pages.engagement.path },
    nav: globals.nav.map((navItem) => {
      return {
        ...navItem,
        active: navItem.path === request.path,
      };
    }),
  });
});

// Expertise
router.get(globals.pages.expertise.path, (request, response) => {
  return response.render('../src/pages/expertise.hbs', {
    ...globals,
    seo: { ...globals.pages.expertise.seo, url: globals.pages.expertise.path },
    nav: globals.nav.map((navItem) => {
      return {
        ...navItem,
        active: navItem.path === request.path,
      };
    }),
    skills: {
      backend: [
        'Javascript',
        'TypeScript',
        'Node.js',
        'Express',
        'NestJS',
        'Python',
        'Django',
        'Ruby (on Rails)',
        'PHP',
        'Laravel',
        'Symfony',
        'ColdFusion',
      ],
      database: [
        'SQL',
        'MySQL',
        'MariaDB',
        'MSSQL',
        'Postgres',
        'NoSQL',
        'mongodb',
        'dynamodb',
        'couchbase',
        'Event Driven Databases',
        'Kafka',
        'FireStore',
      ],
      frontend: [
        'React',
        'Next.js',
        'Vue',
        'Nuxt',
        'Angular',
        'Javascript',
        'TypeScript',
        'jQuery',
      ],
      data: [
        'ETLs &amp; Data Pipelines',
        'Snowflake',
        'Redshift',
        'Data Lakes',
        'Analytics',
        'Dashboards',
      ],
      mobile: ['iOS (swift)', 'android (java)', 'React Native', 'expo', 'Flutter'],
      infrastructure: ['AWS', 'GCP', 'Containerization', 'Docker', 'Kubernetes', 'CI/CD', 'DevOps'],
      specialties: ['Ecommerce', 'Multi Tenant Software as a Service', 'FinTech'],
      monitoring: ['Cloudwatch', 'Sentry', 'DataDog', 'LogRocket'],
    },
  });
});

// Contact
router.get(globals.pages.contact.path, (request, response) => {
  return response.render('../src/pages/contact.hbs', {
    ...globals,
    seo: { ...globals.pages.contact.seo, url: globals.pages.contact.path },
    nav: globals.nav.map((navItem) => {
      return {
        ...navItem,
        active: navItem.path === request.path,
      };
    }),
    showForm: true,
  });
});

router.post(
  globals.pages.contact.path,
  contactFormValidation(),
  processForm,
  (request, response) => {
    return response.render('../src/pages/contact.hbs', {
      ...globals,
      seo: { ...globals.pages.contact.seo, url: globals.pages.contact.path },
      nav: globals.nav.map((navItem) => {
        return {
          ...navItem,
          active: navItem.path === request.path,
        };
      }),
      showForm: !request.submitSuccess,
      showSuccess: request.submitSuccess,
      formErrors: request.formErrors,
      form: request.body,
    });
  },
);

// Consultation
router.get(globals.pages.consultation.path, (request, response) => {
  return response.render('../src/pages/consultation.hbs', {
    ...globals,
    seo: { ...globals.pages.consultation.seo, url: globals.pages.consultation.path },
    nav: globals.nav.map((navItem) => {
      return {
        ...navItem,
        active: navItem.path === request.path,
      };
    }),
  });
});

globals.resources.forEach((resource) => {
  router.get(`/resources${resource.path}`, (request, response) => {
    return response.render(`../src/pages/resources${resource.path}.hbs`, {
      ...globals,
      nav: globals.nav.map((navItem) => {
        return {
          ...navItem,
          active: navItem.path === request.path,
        };
      }),
      seo: {
        ...resource.seo,
        url: `/resources${resource.path}`,
      },
    });
  });
});

module.exports = router;
