export default async (request, context) => {
  const body = await request.json()
  const email = JSON.parse(body).payload.email
  console.log(email)
    
  return new Response()
};