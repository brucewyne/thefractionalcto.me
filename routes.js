const { Router } = require('express');

const router = Router();
router.use('/', (request, response) => {
  return response.render('../pages/home.hbs', {
    seo: {
      title: 'Michael Grissinger'
    }
  })
});

module.exports = router;
