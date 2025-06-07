#!/usr/bin/env node
// Writes settings.js at build time using env vars passed by SWA build
const fs = require('fs');
const env = process.env;
const cfg = `window.APP_SETTINGS = {
  speechKey:       "${env.speech_key}",
  speechRegion:    "${env.speech_region}",
  openaiKey:       "${env.openai_key}",
  openaiBase:      "${env.openai_base}",
  deployment:      "${env.openai_deployment}",
  apiVersion:      "${env.api_version}",
  blobSasUrl:      "${env.blob_sas_url}"
};`;
fs.writeFileSync('settings.js', cfg);
