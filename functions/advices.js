// const sanityClient = require('@sanity/client');
const fetch = require("node-fetch");

exports.handler = async () => {
  // const client = sanityClient({
  //   projectId: process.env.SANITY_PROJECT_ID,
  //   dataset: 'production',
  //   useCdn: true
    
  // })
  
  return fetch(`https://lln1rnec.api.sanity.io/v1/data/query/production`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    },
    body: JSON.stringify({"query": "*[ _type == 'advices']"})
  })
    .then(response => response.json())
    .then(result => (
      {
        "body": JSON.stringify(result.result), 
        "statusCode": "200"
      })
    )
    .catch(error => new Error(error))
}
