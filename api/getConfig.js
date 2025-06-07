export async function get(_, context) {
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      speechKey:    process.env.SPEECH_KEY,
      speechRegion: process.env.SPEECH_REGION,
      openaiKey:    process.env.OPENAI_KEY,
      openaiBase:   process.env.OPENAI_BASE,
      deployment:   process.env.OPENAI_DEPLOYMENT,
      apiVersion:   process.env.API_VERSION,
      blobSasUrl:   process.env.BLOB_SAS_URL
    })
  };
}
