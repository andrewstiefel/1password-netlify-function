import { createClient } from "@1password/sdk";
import fetch from 'node-fetch';

const { OP_SERVICE_ACCOUNT_TOKEN } = process.env;

export default async (event) => {
    const email = JSON.parse(event.body).payload.email
    console.log(`Received a submission: ${email}`)

    const client = await createClient({
        auth: OP_SERVICE_ACCOUNT_TOKEN,
        integrationName: "Netlify and 1Password Demo",
        integrationVersion: "v1.0.0",
      });
      
    const secret = await client.secrets.resolve("op://sdk-beta/buttondown-api/credential");
    console.log(secret)

    const response = await fetch( 'https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    let responseText = await response.text();
    console.log('Response:', responseText);
    
    return {
      statusCode: 200,
      body: JSON.stringify({})
    }
};