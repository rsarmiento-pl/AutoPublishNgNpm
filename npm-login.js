var npmClient = require('npm-cli-login');

const NPM_USERNAME = process.env.NPM_USERNAME || 'rsarmiento-pl';
const NPM_PW = process.env.NPM_PW;
const NPM_EMAIL = process.env.NPM_EMAIL || 'rsarmiento@peerlancers.com'

npmClient(NPM_USERNAME, NPM_PW, NPM_EMAIL);
