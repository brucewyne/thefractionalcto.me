const openBrowser = require('react-dev-utils/openBrowser');
const app = require('./src/app');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up on port ${process.env.PORT || 3000}`);
  if (process.env.NODE_ENV === 'dev') {
    openBrowser(`http://localhost:3000`);
  }
});
