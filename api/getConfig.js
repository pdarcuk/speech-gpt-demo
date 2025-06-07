export async function get(_, context) {
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      speechKey:    process.env.speech_Key,
      speechRegion: process.env.speech_Region,
      openaiKey:    process.env.openai_Key,
      openaiBase:   process.env.openai_Base,
      deployment:   process.env.openai_deployment,
      apiVersion:   process.env.api_Version,
      blobSasUrl:   process.env.blob_Sas_Url
    })
  };
}
