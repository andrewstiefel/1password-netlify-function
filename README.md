# 1password-netlify-function
This is a "Hello World" example that uses 1Password as a secrets store for Netlify Functions. It leverages the 1Password Javascript SDK and a 1Password service account to retrieve a secret value within a Netlify Function.

<strong>View this demo site: https://1password-netlify-demo.netlify.app</strong>

## Try it yourself

### Deploy to Netlify
Deploy your own version of this example site by clicking the <strong>Deploy to Netlify</strong> button below. This will automatically:

- Clone a copy of this repo to your own GitHub account
- Create a new project in your Netlify account, linked to your new repo
- Create an automated deployment pipeline to watch for changes on your repo
- Build and deploy your new site

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andrewstiefel/1password-netlify-function)

### Or install and run this example locally
You can clone this example repo to explore its features and implementation and to run it locally.

```
# 1. Clone the repository to your local development environment
git clone git@github.com:andrewstiefel/1password-netlify-function.git

# 2. Move into the project directory
cd 1password-netlify-function

# 3. Install the Netlify CLI to let you locally serve your site using Netlify's features
npm install -g netlify-cli

# 4. Serve your site using Netlify Dev to get local serverless functions
netlify dev
```

## Create an environment variable
You must create and add a 1Password service account token as an [environment variable](https://docs.netlify.com/environment-variables/overview/) for your Netlify site before the serverless function will work.

## Create an item and add the secret reference
You must create a new item in 1Password and copy the secret reference into `netlify/functions/hello.js`. Make sure to use secret reference URIs with the syntax `op://vault/item/field` to securely load secrets from 1Password into your code.

## License
[MIT License](/LICENSE)
