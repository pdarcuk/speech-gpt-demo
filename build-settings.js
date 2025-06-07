#!/usr/bin/env node
// Writes settings.js at build time using env vars passed by SWA build
const fs = require('fs');
const env = process.env;
const cfg = `window.APP_SETTINGS = {
  speechKey:       "${env.speech_Key}",
  speechRegion:    "${env.speech_Region}",
  openaiKey:       "${env.openai_Key}",
  openaiBase:      "${env.openai_Base}",
  deployment:      "${env.openai_deployment}",
  apiVersion:      "${env.api_Version}",
  blobSasUrl:      "${env.blob_Sas_Url}"
};`;
fs.writeFileSync('settings.js', cfg);
