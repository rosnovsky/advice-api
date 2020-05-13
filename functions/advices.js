// const sanityClient = require('@sanity/client');
const fetch = require("node-fetch");

exports.handler = async () => {
  // const client = sanityClient({
  //   projectId: process.env.SANITY_PROJECT_ID,
  //   dataset: 'production',
  //   useCdn: true
    
  // })
  
  fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    },
    body: JSON.stringify({"query": "*[ _type == 'advices']"})
  })
    .then(response => response.json())
    .then(result => {return (
      {
        "body": JSON.stringify(result), 
        "statusCode": "200"
      })
    })
    .catch(error => new Error(error))
}
