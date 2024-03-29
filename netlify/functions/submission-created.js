import fetch from 'node-fetch';
import { createClient } from "@1password/sdk";

const { OP_SERVICE_ACCOUNT_TOKEN } = process.env;

export default async (request) => {
  const body = await request.json();
  const email = body.payload.email;
  console.log(`Received a submission: ${email}`);

  const client = await createClient({
    auth: OP_SERVICE_ACCOUNT_TOKEN,
    integrationName: "Netlify and 1Password Demo",
    integrationVersion: "v1.0.0",
  });
  
  const secret = await client.secrets.resolve("op://sdk-beta/api-key/credential");
  console.log(secret)

  const response = await fetch( 'https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${secret}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  let responseText = await response.text();
  console.log('Response:', responseText);
    
  return new Response()
};