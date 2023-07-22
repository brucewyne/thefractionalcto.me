const { Router } = require('express');
const globals = require('./globals');

const router = Router();

// Home Page.
router.get(globals.links.home, (request, response) => {
  return response.render('../src/pages/home.hbs', {
    ...globals,
    seo: {
      title: 'The Fractional CTO - Hire a CTO as a Service',
      url: globals.links.home,
      description: 'CTO as a Service: Get 100% of the experience from a seasoned technical executive at a fraction of the cost',
    },
  });
});

// CTO as a Service
router.get(globals.links.engagement, (request, response) => {
  return response.render('../src/pages/engagement.hbs', {
    ...globals,
    seo: {
      title: 'The Fractional CTO - Hire a CTO as a Service',
      url: globals.links.engagement,
      description: '',
    },
  });
});

// Expertise
router.get(globals.links.expertise, (request, response) => {
  return response.render('../src/pages/expertise.hbs', {
    ...globals,
    seo: {
      title: 'The Fractional CTO - Hire a CTO as a Service',
      url: globals.links.expertise,
      description: '',
    },
    skills: {
      backend: ['Javascript', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'Python', 'Django', 'Ruby (on Rails)', 'PHP', 'Laravel', 'Symfony', 'ColdFusion'],
      database: ['SQL', 'MySQL', 'MariaDB', 'MSSQL', 'Postgres', 'NoSQL', 'mongodb', 'dynamodb', 'couchbase', 'Event Driven Databases', 'Kafka', 'FireStore'],
      frontend: ['React', 'Next.js', 'Vue', 'Nuxt', 'Angular', 'Javascript', 'TypeScript', 'jQuery'],
      data: ['ETLs &amp; Data Pipelines', 'Snowflake', 'Redshift', 'Data Lakes', 'Analytics', 'Dashboards'],
      mobile: ['iOS (swift)', 'android (java)', 'React Native', 'expo', 'Flutter'],
      infrastructure: ['AWS', 'GCP', 'Containerization', 'Docker', 'Kubernetes', 'CI/CD', 'DevOps'],
      specialties: ['Ecommerce', 'Multi Tenant Software as a Service', 'FinTech'],
      monitoring: ['Cloudwatch', 'Sentry', 'DataDog', 'LogRocket'],
    }
  });
});

// Contact
router.get(globals.links.contact, (request, response) => {
  return response.render('../src/pages/contact.hbs', {
    ...globals,
    seo: {
      title: 'The Fractional CTO - Hire a CTO as a Service',
      url: globals.links.contact,
      description: '',
    },
  });
});

// Consultation
router.get(globals.links.consultation, (request, response) => {
  return response.render('../src/pages/consultation.hbs', {
    ...globals,
    seo: {
      title: 'The Fractional CTO - Hire a CTO as a Service',
      url: globals.links.consultation,
      description: '',
    },
  });
});

module.exports = router;
