export async function get(_, context) {
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      speechKey:    process.env.speech_key,
      speechRegion: process.env.speech_region,
      openaiKey:    process.env.openai_key,
      openaiBase:   process.env.openai_base,
      deployment:   process.env.openai_deployment,
      apiVersion:   process.env.api_version,
      blobSasUrl:   process.env.blob_sas_url
    })
  };
}
