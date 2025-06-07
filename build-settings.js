#!/usr/bin/env node
// Writes settings.js at build time using env vars passed by SWA build
const fs = require('fs');
const env = process.env;
const cfg = `window.APP_SETTINGS = {
  speechKey:       "${env.SPEECH_KEY}",
  speechRegion:    "${env.SPEECH_REGION}",
  openaiKey:       "${env.OPENAI_KEY}",
  openaiBase:      "${env.OPENAI_BASE}",
  deployment:      "${env.OPENAI_DEPLOYMENT}",
  apiVersion:      "${env.API_VERSION}",
  blobSasUrl:      "${env.BLOB_SAS_URL}"
};`;
fs.writeFileSync('settings.js', cfg);
