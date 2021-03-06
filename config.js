// Read all .env* files in the root folder and add them to process.env
// See https://github.com/kerimdzhanov/dotenv-flow for more details
require('dotenv-flow').config();

module.exports = {
  HOME_URL: process.env.SEMAPPS_HOME_URL,
  DEFAULT_JSON_CONTEXT: process.env.SEMAPPS_DEFAULT_JSON_CONTEXT,
  // Triple store
  SPARQL_ENDPOINT: process.env.SEMAPPS_SPARQL_ENDPOINT,
  MAIN_DATASET: process.env.SEMAPPS_MAIN_DATASET,
  JENA_USER: process.env.SEMAPPS_JENA_USER,
  JENA_PASSWORD: process.env.SEMAPPS_JENA_PASSWORD,
  // Connector
  CAS_URL: process.env.SEMAPPS_CAS_URL,
  // Cache
  QUEUE_SERVICE_URL: process.env.SEMAPPS_QUEUE_SERVICE_URL,
  REDIS_CACHE_URL: process.env.SEMAPPS_REDIS_CACHE_URL,
  // Email
  FROM_EMAIL: process.env.SEMAPPS_FROM_EMAIL,
  FROM_NAME: process.env.SEMAPPS_FROM_NAME,
  SMTP_HOST: process.env.SEMAPPS_SMTP_HOST,
  SMTP_PORT: parseInt(process.env.SEMAPPS_SMTP_PORT, 10),
  SMTP_SECURE: process.env.SEMAPPS_SMTP_SECURE === 'true',
  SMTP_USER: process.env.SEMAPPS_SMTP_USER,
  SMTP_PASS: process.env.SEMAPPS_SMTP_PASS,
  // Tracking
  SENTRY_DSN: process.env.SEMAPPS_SENTRY_DSN,
  SENTRY_ENVIRONMENT: process.env.SEMAPPS_SENTRY_ENVIRONMENT
};
