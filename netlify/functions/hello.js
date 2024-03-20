import { createClient } from "@1password/sdk";

const { OP_SERVICE_ACCOUNT_TOKEN } = process.env;

export default async () => {
    const client = await createClient({
        auth: OP_SERVICE_ACCOUNT_TOKEN,
        integrationName: "Netlify and 1Password Demo",
        integrationVersion: "v1.0.0",
      });
      
      // Fetches a secret.
      const secret = await client.secrets.resolve("op://sdk-beta/hello-world/credential");
      console.log(secret)

    return new Response(`Superman's real name is ${secret}.`)
};